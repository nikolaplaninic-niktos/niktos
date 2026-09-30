// Static SEO audit of dist/: canonical, OG, JSON-LD, titles, headings, internal links, sitemap/robots.
// Exits with code 1 on errors so it can gate a deploy. Usage: node scripts/check-seo.js
const fs = require('fs');
const path = require('path');
const site = require('../src/site');

const DIST = path.join(__dirname, '..', 'dist');
const errors = [];
const warns = [];
const err = (f, m) => errors.push(`✗ ${f}: ${m}`);
const warn = (f, m) => warns.push(`! ${f}: ${m}`);

const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== '_lib') walk(p); } // _lib = private PHP + e-mail templates, not pages
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const exists = (urlPath) => {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  const f = path.join(DIST, clean);
  return fs.existsSync(f) && (fs.statSync(f).isFile() || fs.existsSync(path.join(f, 'index.html')));
};
const attr = (html, re) => { const v = (html.match(re) || [])[1]; return v && v.replace(/&amp;/g, '&').replace(/&quot;/g, '"'); };
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');

for (const file of htmlFiles) {
  const rel = '/' + path.relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const expected = site.url + rel;

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!title) err(rel, 'missing <title>'); else if (title.length > 65) warn(rel, `title ${title.length} chars`);
  if (!desc) err(rel, 'missing description'); else if (desc.length > 165) warn(rel, `description ${desc.length} chars`);

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) err(rel, `${h1} <h1> elements`);

  if (!noindex) {
    const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
    if (canonical !== expected) err(rel, `canonical ${canonical} ≠ ${expected}`);
    const ogUrl = attr(html, /<meta property="og:url" content="([^"]+)"/);
    if (ogUrl !== expected) err(rel, `og:url ${ogUrl} ≠ ${expected}`);
    for (const p of ['og:title', 'og:description', 'og:image', 'og:type', 'og:locale']) {
      if (!new RegExp(`property="${p}"`).test(html)) err(rel, `missing ${p}`);
    }
    const ogImg = attr(html, /<meta property="og:image" content="([^"]+)"/) || '';
    if (!/\.(jpe?g|png)$/i.test(ogImg)) warn(rel, 'og:image should be JPG/PNG for WhatsApp/Facebook');
    if (!exists(ogImg.replace(site.url, ''))) err(rel, `og:image file missing: ${ogImg}`);
    if (!sitemap.includes(`<loc>${expected}</loc>`)) err(rel, 'not in sitemap.xml');
  } else if (sitemap.includes(`<loc>${expected}</loc>`)) err(rel, 'noindex page listed in sitemap');

  // JSON-LD
  const ld = attr(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try {
    const g = JSON.parse(ld)['@graph'];
    const types = g.flatMap((x) => [].concat(x['@type']));
    if (!types.includes('LocalBusiness')) err(rel, 'JSON-LD without LocalBusiness');
    if (!noindex && rel !== '/' && !types.includes('BreadcrumbList')) warn(rel, 'no BreadcrumbList');
    const biz = g.find((x) => [].concat(x['@type']).includes('LocalBusiness'));
    if (biz.telephone !== site.phoneSchema || biz.address.postalCode !== site.address.zip || (biz.address.streetAddress || '') !== site.address.street) err(rel, 'NAP mismatch in schema');
  } catch (e) { err(rel, 'invalid JSON-LD: ' + e.message); }

  // internal links & assets
  const refs = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  const srcsets = [...html.matchAll(/srcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(' ')[0]));
  for (const r of new Set([...refs, ...srcsets])) if (r.startsWith('/') && !r.startsWith('//') && !exists(r)) err(rel, `broken link ${r}`);

  if (!/cloud\.umami\.is\/script\.js/.test(html)) err(rel, 'Umami snippet missing');
  if (/<img(?![^>]*\balt=)[^>]*>/.test(html)) err(rel, 'img without alt');
}

const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${site.url}/sitemap.xml`)) err('robots.txt', 'Sitemap line missing');
for (const f of ['.htaccess', 'assets/.htaccess', '_lib/.htaccess', 'kontakt.php', '404.html', 'llms.txt']) if (!fs.existsSync(path.join(DIST, f))) err(f, 'missing in dist');
for (const f of ['config.php', 'niktos-config.php', 'niktos-mail.log', 'mail-preview', 'config.example.php', '.env']) if (fs.existsSync(path.join(DIST, f))) err(f, 'must not be in dist/ (secret, log or preview)');
// Sample/test data from scripts/mail-preview.js must never ship
(function scan(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { scan(p); continue; }
    if (!/\.(html|php|txt|js|xml|json)$/.test(e.name)) continue;
    const s = fs.readFileSync(p, 'utf8');
    for (const needle of ['Sabine Müller', 'sabine.mueller', 'example.de', '0171 2345678', 'mail-preview', 'Muster Bäckerei']) {
      if (s.includes(needle)) err(path.relative(DIST, p), `contains sample data "${needle}"`);
    }
  }
})(DIST);

console.log(`Checked ${htmlFiles.length} HTML files`);
warns.forEach((w) => console.log(w));
errors.forEach((e) => console.log(e));
console.log(errors.length ? `\n${errors.length} error(s)` : '\n✓ SEO check passed');
process.exit(errors.length ? 1 : 0);
