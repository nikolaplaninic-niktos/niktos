// IndexNow: tell Bing (and Yandex, Seznam, Naver via api.indexnow.org) which URLs changed.
// Called by deploy.js after the push. Live content arrives ~5 min later (Hostinger cron novi → public_html),
// so by default it waits until the key file and the new deploy are live, then submits.
// Usage: npm run indexnow                    (URLs changed in the last deploy commit, wait for live)
//        npm run indexnow -- --all           (all sitemap URLs)
//        npm run indexnow -- --no-wait /preise/ /blog/
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const site = require('../src/site');

const ROOT = path.join(__dirname, '..');
const WT = path.join(ROOT, '.deploy');
const args = process.argv.slice(2);
const KEY = site.indexNowKey;
const HOST = new URL(site.url).host;
const KEY_URL = `${site.url}/${KEY}.txt`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function sitemapUrls() {
  const xml = fs.readFileSync(path.join(ROOT, 'dist', 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function changedUrls() {
  const all = new Set(sitemapUrls());
  let files;
  try { files = execSync('git diff --name-only HEAD~1 HEAD', { cwd: WT, encoding: 'utf8' }).split('\n'); }
  catch { return [...all]; } // first deploy commit → everything
  const urls = files.filter((f) => /(^|\/)index\.html$/.test(f))
    .map((f) => `${site.url}/${f.replace(/index\.html$/, '')}`);
  // A change in sitemap.xml/robots/llms alone has no page → nothing to submit
  return urls.filter((u) => all.has(u));
}

async function waitLive(sample) {
  const deadline = Date.now() + 12 * 60 * 1000;
  const want = sample ? fs.readFileSync(path.join(ROOT, 'dist', new URL(sample).pathname, 'index.html'), 'utf8').match(/<title>([^<]*)<\/title>/)?.[1] : null;
  while (Date.now() < deadline) {
    try {
      const k = await fetch(KEY_URL, { cache: 'no-store' });
      const keyOk = k.ok && (await k.text()).trim() === KEY;
      let pageOk = true;
      if (keyOk && want) {
        const r = await fetch(sample, { cache: 'no-store' });
        pageOk = r.ok && (await r.text()).includes(`<title>${want}</title>`);
      }
      if (keyOk && pageOk) return true;
    } catch { /* not live yet */ }
    process.stdout.write('·');
    await sleep(30000);
  }
  return false;
}

(async () => {
  if (!KEY) { console.error('✗ site.indexNowKey missing'); process.exit(1); }
  const explicit = args.filter((a) => a.startsWith('/')).map((p) => site.url + p);
  const urls = explicit.length ? explicit : args.includes('--all') ? sitemapUrls() : changedUrls();
  if (!urls.length) { console.log('IndexNow: no changed pages – nothing to submit.'); return; }
  if (!args.includes('--no-wait')) {
    console.log(`IndexNow: waiting until ${HOST} serves the new deploy (max 12 min) …`);
    if (!(await waitLive(urls[0]))) { console.error(`\n✗ Not live after 12 min – run later: npm run indexnow -- --no-wait ${urls.map((u) => new URL(u).pathname).join(' ')}`); process.exit(1); }
  }
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_URL, urlList: urls }),
  });
  // 200 OK / 202 Accepted = fine; 403 key not valid; 422 URLs don't match host; 429 too many requests
  console.log(`\nIndexNow: HTTP ${res.status} for ${urls.length} URL(s)`);
  urls.forEach((u) => console.log('  ' + u));
  if (res.status >= 300) process.exit(1);
})();
