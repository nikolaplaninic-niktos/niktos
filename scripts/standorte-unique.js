// Measures how unique each Standortseite is (doorway-page guard). Run after `npm run build`.
// Text = visible <main> content (header, sidebar, footer excluded; town names replaced by "ORT" so
// swapping a name does not count as unique). Metric: share of 5-word shingles that appear on no other town page,
// plus the highest overlap with any single other town page. Target: unique ≥ 50 %.
// Usage: node scripts/standorte-unique.js
const fs = require('fs');
const path = require('path');
const TOWNS = require('../src/standorte');

const DIST = path.join(__dirname, '..', 'dist');
const N = 5;
const names = TOWNS.flatMap((t) => [t.name, t.short, t.slug, t.dest, t.zip].filter(Boolean)).sort((a, b) => b.length - a.length);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function words(slug) {
  const html = fs.readFileSync(path.join(DIST, `webdesign-${slug}`, 'index.html'), 'utf8');
  let main = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
  main = main.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ');
  for (const n of names) main = main.replace(new RegExp(esc(n), 'g'), ' ORT ');
  return main.toLowerCase().replace(/\d+([.,]\d+)?/g, ' 0 ').split(/[^a-zäöüß0-9]+/).filter(Boolean);
}
const shingles = (w) => { const s = new Set(); for (let i = 0; i + N <= w.length; i++) s.add(w.slice(i, i + N).join(' ')); return s; };

const data = TOWNS.map((t) => { const w = words(t.slug); return { t, words: w.length, sh: shingles(w) }; });
const rows = data.map((d) => {
  const others = data.filter((o) => o !== d);
  let uniq = 0; for (const s of d.sh) if (!others.some((o) => o.sh.has(s))) uniq++;
  let maxPair = 0, maxWith = '';
  for (const o of others) { let c = 0; for (const s of d.sh) if (o.sh.has(s)) c++; const r = c / d.sh.size; if (r > maxPair) { maxPair = r; maxWith = o.t.name; } }
  return { name: d.t.name, words: d.words, unique: uniq / d.sh.size, maxPair, maxWith };
});
console.log('Ort'.padEnd(24), 'Wörter', ' einzigartig', ' max. Überschneidung');
for (const r of rows) console.log(r.name.padEnd(24), String(r.words).padStart(6), `${(r.unique * 100).toFixed(0)} %`.padStart(12), `  ${(r.maxPair * 100).toFixed(0)} % (${r.maxWith})`);
const avg = rows.reduce((a, r) => a + r.unique, 0) / rows.length;
console.log(`\nØ einzigartig: ${(avg * 100).toFixed(0)} %   min: ${(Math.min(...rows.map((r) => r.unique)) * 100).toFixed(0)} %`);
if (rows.some((r) => r.unique < 0.5)) { console.log('✗ unter 50 %'); process.exitCode = 1; } else console.log('✓ alle ≥ 50 %');
