// Post-deploy verification against a live URL (staging or production).
// Usage: npm run verify -- https://novi.niktos.com
//        npm run verify -- https://niktos.com
// Checks: page statuses, 404, legacy 301 redirects (+ loop detection), http→https, www→non-www,
// sitemap.xml, robots.txt, canonical, X-Robots-Tag (noindex only on staging), security headers,
// and that config/log/private files are NOT reachable. Exit code 1 on any failure.
const fs = require('fs');
const path = require('path');
const site = require('../src/site');

const arg = process.argv[2];
if (!arg) { console.error('Usage: npm run verify -- <https://host>'); process.exit(2); }
const BASE = arg.replace(/\/+$/, '');
const HOST = new URL(BASE).host;
const STAGING = /^novi\./i.test(HOST);
const CANON = site.url; // canonical always points to the main domain

let fails = 0, passes = 0;
const ok = (m) => { passes++; console.log('  ✓ ' + m); };
const bad = (m) => { fails++; console.log('  ✗ ' + m); };
const section = (t) => console.log('\n' + t);

async function get(url, { method = 'GET' } = {}) {
  const res = await fetch(url, { method, redirect: 'manual', headers: { 'User-Agent': 'niktos-verify/1.0', 'Cache-Control': 'no-cache' } });
  return res;
}
/** Follow redirects manually; returns { chain:[{url,status}], final:Response } and detects loops. */
async function follow(url, max = 6) {
  const chain = [];
  let cur = url;
  for (let i = 0; i <= max; i++) {
    const r = await get(cur);
    chain.push({ url: cur, status: r.status });
    const loc = r.headers.get('location');
    if (r.status >= 300 && r.status < 400 && loc) {
      const next = new URL(loc, cur).toString();
      if (chain.some((c) => c.url === next)) return { chain, loop: true, final: r };
      cur = next;
      continue;
    }
    return { chain, loop: false, final: r };
  }
  return { chain, loop: true, final: null };
}
const pathOf = (u) => { const x = new URL(u); return x.pathname + x.search + x.hash; };

// Indexable pages from the source
const pages = fs.readdirSync(path.join(__dirname, '..', 'src/pages')).filter((f) => f.endsWith('.js'))
  .map((f) => require(path.join(__dirname, '..', 'src/pages', f))).filter((p) => p.path !== '/404');

(async () => {
  console.log(`Verifying ${BASE}  (${STAGING ? 'STAGING – noindex expected' : 'PRODUCTION – must be indexable'})`);

  section('Pages');
  for (const p of pages) {
    const r = await get(BASE + p.path);
    const html = r.status === 200 ? await r.text() : '';
    if (r.status !== 200) { bad(`${p.path} → ${r.status}`); continue; }
    const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    if (p.noindex) {
      canonical ? bad(`${p.path} noindex page has canonical`) : ok(`${p.path} 200 (noindex page)`);
    } else if (canonical !== CANON + p.path) bad(`${p.path} canonical ${canonical} ≠ ${CANON + p.path}`);
    else ok(`${p.path} 200, canonical ok`);
    const xr = r.headers.get('x-robots-tag') || '';
    if (STAGING && !/noindex/i.test(xr)) bad(`${p.path} missing X-Robots-Tag noindex on staging`);
    if (!STAGING && /noindex/i.test(xr)) bad(`${p.path} has X-Robots-Tag "${xr}" on PRODUCTION`);
    if (!STAGING && /<meta name="robots" content="noindex/.test(html) && !p.noindex) bad(`${p.path} meta noindex on production`);
  }
  {
    const r = await get(BASE + '/diese-seite-gibt-es-nicht-' + Date.now() + '/');
    r.status === 404 ? ok('unknown URL → 404') : bad(`unknown URL → ${r.status} (expected 404)`);
  }

  section('Redirects (301, no loops)');
  const redirects = [
    ['/cookie-richtlinie-eu/', '/datenschutzerklaerung/'],
    ['/sitemap_index.xml', '/sitemap.xml'],
    ['/page-sitemap.xml', '/sitemap.xml'],
    ['/wp-admin/', '/'],
    ['/wp-content/uploads/2025/05/test.jpg', '/'],
    ['/wp-login.php', '/'],
    ['/feed/', '/'],
    ['/?p=1', '/'],
    ['/?page_id=2', '/'],
    ['/ueber-mich', '/ueber-mich/'],
    ['/portfolio/', '/referenzen/'],
    ['/webdesign/', '/webdesign-ludwigsburg/'],
    ['/metform-form-sitemap.xml', '/sitemap.xml'],
  ];
  for (const [from, to] of redirects) {
    const { chain, loop, final } = await follow(BASE + from);
    if (loop) { bad(`${from} redirect LOOP: ${chain.map((c) => c.status).join('→')}`); continue; }
    const first = chain[0];
    const target = chain.length > 1 ? pathOf(chain[chain.length - 1].url) : '';
    if (first.status !== 301) bad(`${from} → ${first.status} (expected 301)`);
    else if (target !== to && !(to.includes('#') && target === to.split('#')[0])) bad(`${from} → ${target} (expected ${to})`);
    else if (final.status !== 200) bad(`${from} → ${to} ends with ${final.status}`);
    else ok(`${from} → ${to}`);
  }
  // http → https on the same host
  {
    const { chain, loop } = await follow(BASE.replace(/^https:/, 'http:') + '/leistungen/');
    const last = chain[chain.length - 1].url;
    if (loop) bad('http → https LOOP');
    else if (chain[0].status !== 301 || !last.startsWith('https://' + HOST)) bad(`http → ${chain.map((c) => `${c.status} ${c.url}`).join(' → ')}`);
    else ok('http:// → https:// (same host, 301)');
  }
  if (!STAGING) {
    const { chain, loop } = await follow(`https://www.${HOST}/kontakt/`).catch(() => ({ chain: [{ status: 'ERR', url: '' }], loop: false }));
    const last = chain[chain.length - 1].url;
    if (loop) bad('www → non-www LOOP');
    else if (chain[0].status !== 301 || !last.startsWith(`https://${HOST}/kontakt/`)) bad(`www → ${chain.map((c) => `${c.status} ${c.url}`).join(' → ')}`);
    else ok('www → non-www (301)');
  }

  section('sitemap.xml & robots.txt');
  {
    const r = await get(BASE + '/sitemap.xml');
    const xml = r.status === 200 ? await r.text() : '';
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    r.status === 200 && locs.length ? ok(`sitemap.xml 200, ${locs.length} URLs`) : bad(`sitemap.xml ${r.status}`);
    for (const l of locs) {
      if (!l.startsWith(CANON + '/')) bad(`sitemap URL not on main domain: ${l}`);
      const rr = await get(BASE + new URL(l).pathname);
      if (rr.status !== 200) bad(`sitemap URL ${new URL(l).pathname} → ${rr.status}`);
    }
    const rb = await get(BASE + '/robots.txt');
    const txt = rb.status === 200 ? await rb.text() : '';
    rb.status === 200 && txt.includes(`Sitemap: ${CANON}/sitemap.xml`) ? ok('robots.txt 200 with Sitemap line') : bad(`robots.txt ${rb.status} / Sitemap line missing`);
    const ll = await get(BASE + '/llms.txt');
    ll.status === 200 ? ok('llms.txt 200') : bad(`llms.txt ${ll.status}`);
  }

  section('Security headers');
  {
    const r = await get(BASE + '/');
    const h = (n) => r.headers.get(n) || '';
    /max-age=\d+/.test(h('strict-transport-security')) ? ok('HSTS') : bad('HSTS missing');
    h('x-content-type-options') === 'nosniff' ? ok('X-Content-Type-Options: nosniff') : bad('X-Content-Type-Options missing');
    h('referrer-policy') ? ok('Referrer-Policy: ' + h('referrer-policy')) : bad('Referrer-Policy missing');
    const a = await get(BASE + '/assets/js/main.js');
    /max-age=31536000/.test(a.headers.get('cache-control') || '') ? ok('/assets/ cached 1 year') : bad(`/assets/ Cache-Control: ${a.headers.get('cache-control')}`);
    const k = await get(BASE + '/kontakt.php');
    k.status === 303 ? ok('GET /kontakt.php → 303 to form (PHP runs)') : bad(`GET /kontakt.php → ${k.status} (PHP not executed?)`);
  }

  section('Private files must NOT be reachable');
  for (const p of ['/niktos-config.php', '/config.php', '/config.example.php', '/niktos-mail.log', '/../niktos-config.php',
    '/_lib/mail.php', '/_lib/PHPMailer/PHPMailer.php', '/_lib/mail/anfrage.html', '/_lib/mail/anfrage.txt',
    '/.htaccess', '/.git/config', '/mail-preview/', '/mail-preview/index.html', '/niktos-data/', '/README.md', '/CLAUDE.md', '/package.json']) {
    const r = await get(BASE + p);
    const body = r.status === 200 ? await r.text() : '';
    if (r.status === 200 && !/Seite nicht gefunden/.test(body)) bad(`${p} → 200 PUBLIC!`);
    else ok(`${p} → ${r.status}`);
  }

  console.log(`\n${fails ? '✗' : '✓'} ${passes} passed, ${fails} failed`);
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('verify crashed:', e.message); process.exit(1); });
