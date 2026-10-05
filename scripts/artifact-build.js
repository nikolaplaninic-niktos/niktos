// Builds a preview copy of dist/ for a private Claude Artifact (viewable in the Claude app on any phone).
// Rewrites root-absolute paths to relative ones, drops what the Artifact sandbox blocks
// (Umami, PHP, Maps iframe) and fakes form submits → danke page. Output: artifact/ (gitignored).
// Usage: npm run build && node scripts/artifact-build.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'artifact');
const SERVABLE = /\.(html|js|webp|jpe?g|png|svg|woff2)$/i;

fs.rmSync(OUT, { recursive: true, force: true });
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== '_lib') walk(p); }
    else if (SERVABLE.test(e.name)) files.push(path.relative(DIST, p).replace(/\\/g, '/'));
  }
})(DIST);

// "/preise/#paket-boost" seen from a page at depth d → "../preise/index.html#paket-boost"
function rel(abs, depth) {
  const prefix = depth ? '../'.repeat(depth) : '';
  const m = abs.match(/^\/([^?#]*)([?#].*)?$/);
  if (!m) return abs;
  let p = m[1];
  const tail = m[2] || '';
  if (p === '' || p.endsWith('/')) p += 'index.html';
  return prefix + p + tail;
}

for (const f of files) {
  const src = path.join(DIST, f);
  const dst = path.join(OUT, f);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  if (!f.endsWith('.html')) {
    if (f === 'assets/js/main.js') {
      let js = fs.readFileSync(src, 'utf8');
      const base = "const NK_BASE = (d.querySelector('script[src*=\"assets/js/main.js\"]') || {}).src.replace(/assets\\/js\\/main\\.js.*$/, '');\n";
      js = js.replace("const d = document;\n", "const d = document;\n  " + base);
      // Preview: no PHP in the Artifact → simulate a successful submit
      js = js.replace("const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });\n      const json = await res.json().catch(() => ({}));",
        "const res = { ok: true }; const json = { ok: true, redirect: NK_BASE + 'danke/index.html' };");
      js = js.replace("location.href = json.redirect || '/danke/';", "location.href = json.redirect;");
      if (!js.includes('NK_BASE + \'danke')) throw new Error('main.js patch failed');
      fs.writeFileSync(dst, js);
    } else fs.copyFileSync(src, dst);
    continue;
  }
  const depth = f.split('/').length - 1;
  let h = fs.readFileSync(src, 'utf8');
  h = h.replace(/<script defer src="https:\/\/cloud\.umami\.is[^>]*><\/script>/g, '');
  h = h.replace(/<button class="btn btn--sm btn--ghost map__load"[\s\S]*?<\/button>/g, '');
  h = h.replace(/<link rel="(manifest|alternate)"[^>]*>/g, '');
  h = h.replace(/\b(href|src|action)="(\/[^"\/][^"]*|\/)"/g, (_, a, p) => `${a}="${rel(p, depth)}"`);
  h = h.replace(/srcset="([^"]+)"/g, (_, s) => `srcset="${s.split(',').map((x) => { const [u, w] = x.trim().split(/\s+/); return rel(u, depth) + (w ? ' ' + w : ''); }).join(', ')}"`);
  h = h.replace(/url\((\/assets\/[^)]+)\)/g, (_, u) => `url(${rel(u, depth)})`);
  if (f === 'index.html') {
    // The Artifact wraps the main page in its own skeleton → keep only head + body content
    h = h.replace(/<!doctype html>\s*/i, '').replace(/<html[^>]*>/i, '').replace(/<\/html>/i, '')
      .replace(/<\/?head>/gi, '').replace(/<body>/i, '').replace(/<\/body>/i, '')
      .replace(/<meta charset="utf-8">\s*/i, '').replace(/<meta name="viewport"[^>]*>\s*/i, '')
      .replace(/<title>[^<]*<\/title>/, '<title>Niktos Webdesign</title>')
      .replace("document.documentElement.classList.replace('no-js','js')", "document.documentElement.classList.add('js')");
  }
  fs.writeFileSync(dst, h);
}

const total = files.reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0);
fs.writeFileSync(path.join(OUT, 'files.json'), JSON.stringify(Object.fromEntries(files.filter((f) => f !== 'index.html').map((f) => [f, f])), null, 1));
console.log(`✓ artifact/: ${files.length} files, ${(total / 1048576).toFixed(1)} MB`);
