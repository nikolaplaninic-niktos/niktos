// Functional smoke test: mobile nav, funnel dialog (step by step), contact form, JSON-LD validity, SEO basics.
// Usage: npm run serve (in another terminal), then npm run test   ·   BASE=http://localhost:8090 npm run test
const puppeteer = require('puppeteer');
const path = require('path');
const BASE = process.env.BASE || 'http://localhost:8080';
const QA = path.join(__dirname, '..', 'qa');
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0;
const check = (name, ok, info = '') => { if (!ok) fails++; console.log(`${ok ? '✓' : '✗'} ${name}${info ? ' – ' + info : ''}`); };

(async () => {
  const b = await puppeteer.launch();
  const pg = await b.newPage();
  const errors = [];
  pg.on('pageerror', (e) => errors.push(e.message));
  pg.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

  // --- Mobile navigation
  await pg.emulate({ viewport: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 1 }, userAgent: 'Mozilla/5.0 (iPhone) Mobile' });
  await pg.goto(BASE + '/leistungen/', { waitUntil: 'networkidle0' });
  await pg.click('.burger'); await wait(600);
  check('mobile drawer opens', await pg.evaluate(() => getComputedStyle(document.querySelector('.side')).visibility === 'visible'));
  await pg.keyboard.press('Escape'); await wait(500);
  check('mobile drawer closes on Escape', await pg.evaluate(() => !document.body.classList.contains('nav-open')));

  // --- Funnel dialog from a package card (desktop)
  await pg.emulate({ viewport: { width: 1440, height: 900, deviceScaleFactor: 1 }, userAgent: 'Mozilla/5.0 Chrome' });
  await pg.goto(BASE + '/preise/', { waitUntil: 'networkidle0' });
  await pg.evaluate(() => { window.__ev = []; window.umami = { track: (n) => window.__ev.push(n) }; });
  await pg.evaluate(() => document.querySelector('#paket-boost [data-open-funnel]').click()); await wait(400);
  check('dialog opens', await pg.evaluate(() => document.getElementById('funnel').open));
  check('paket preset', await pg.evaluate(() => document.querySelector('#funnel input[name=paket]').value === 'boost'));
  const step = () => pg.evaluate(() => [...document.querySelectorAll('#funnel .fstep')].findIndex((s) => s.classList.contains('is-active')) + 1);
  const pick = async (name, value) => { await pg.evaluate((n, v) => document.querySelector(`#funnel input[name="${n}"][value="${v}"]`).click(), name, value); await wait(450); };
  check('starts at step 1', (await step()) === 1);
  await pick('anliegen', 'Website-Relaunch');
  check('auto-advance to step 2', (await step()) === 2);
  await pick('hat_website', 'Ja');
  check('URL field shown for "Ja"', await pg.evaluate(() => !document.querySelector('#funnel [data-if]').hidden) && (await step()) === 2);
  await pg.type('#d-url', 'www.beispiel-firma.de');
  await pg.evaluate(() => document.querySelector('#funnel [data-next]').click()); await wait(450);
  check('step 3 after "Weiter"', (await step()) === 3);
  await pick('branche', 'Handwerk & Bau');
  // budget was preselected by the package → skipped
  check('budget preset skips step 4', (await step()) === 5, 'active=' + (await step()));
  await pick('zeitrahmen', 'In 1–3 Monaten');
  check('contact step 6', (await step()) === 6);
  check('line/summary on done steps', await pg.evaluate(() => document.querySelectorAll('#funnel .fstep.is-done').length === 5 && document.querySelector('#funnel .fstep.is-done [data-sum]').textContent.length > 0));
  // edit step 1 and jump back
  await pg.evaluate(() => document.querySelector('#funnel .fstep[data-step="1"] [data-edit]').click()); await wait(300);
  check('"ändern" goes back to step 1', (await step()) === 1);
  await pick('anliegen', 'Neue Website');
  check('re-answer jumps to first open step (6)', (await step()) === 6, 'active=' + (await step()));
  await pg.screenshot({ path: path.join(QA, 'funnel-dialog.png') });
  // validation: submit empty
  await pg.evaluate(() => document.querySelector('#funnel [type=submit]').click()); await wait(200);
  check('empty submit blocked', await pg.evaluate(() => document.getElementById('funnel').open && location.pathname === '/preise/'));
  await pg.type('#d-name', 'Test Kunde'); await pg.type('#d-mail', 'test@test.local'); await pg.type('#d-tel', '0170 1111111');
  await pg.evaluate(() => { document.querySelector('#funnel input[name=kontaktweg][value=WhatsApp]').click(); document.querySelector('#funnel input[name=datenschutz]').click(); });
  const sent = await pg.evaluate(() => { const f = document.querySelector('#funnel form'); const d = new FormData(f); return Object.fromEntries([...d.entries()].filter(([k]) => k !== 't')); });
  check('payload complete', sent.anliegen === 'Neue Website' && sent.budget === '500 – 1.500 €' && sent.website_url === 'www.beispiel-firma.de' && sent.paket === 'boost', JSON.stringify(sent));
  await Promise.all([pg.waitForNavigation({ timeout: 5000 }).catch(() => null), pg.evaluate(() => document.querySelector('#funnel [type=submit]').click())]);
  check('funnel submit → /danke/', new URL(pg.url()).pathname === '/danke/');

  // --- Classic contact form
  await pg.goto(BASE + '/kontakt/?anliegen=Website-Check', { waitUntil: 'networkidle0' });
  check('anliegen preselected', await pg.evaluate(() => document.querySelector('#c-anliegen').value === 'Website-Check'));
  await pg.type('#c-name', 'Test'); await pg.type('#c-mail', 'a@b.local'); await pg.type('#c-msg', 'Hallo');
  await pg.click('#formular input[name=datenschutz]');
  await Promise.all([pg.waitForNavigation({ timeout: 5000 }).catch(() => null), pg.click('#formular [type=submit]')]);
  check('contact submit → /danke/', new URL(pg.url()).pathname === '/danke/');

  // --- Map consent
  await pg.goto(BASE + '/kontakt/', { waitUntil: 'networkidle0' });
  check('no Google request before consent', await pg.evaluate(() => !document.querySelector('iframe')));

  // --- SEO basics on every page
  for (const u of ['/', '/leistungen/', '/webdesign-ludwigsburg/', '/seo-ludwigsburg/', '/wartung-hosting/', '/website-check/', '/preise/', '/referenzen/', '/ueber-mich/', '/blog/', '/blog/warum-eine-professionelle-website-wichtig-ist/', '/kontakt/', '/projekt-anfrage/', '/impressum/', '/datenschutzerklaerung/']) {
    await pg.goto(BASE + u);
    const r = await pg.evaluate(() => {
      let ld;
      try { ld = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'].map((x) => [].concat(x['@type'])[0]).join(','); } catch (e) { ld = 'ERR ' + e.message; }
      const ids = [...document.querySelectorAll('[id]')].map((e) => e.id); const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
      return { h1: document.querySelectorAll('h1').length, ld, dup, noAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length };
    });
    check(`page ${u}`, r.h1 === 1 && !r.ld.startsWith('ERR') && !r.dup.length && !r.noAlt, `ld=${r.ld}${r.dup.length ? ' dupIds=' + r.dup.join(',') : ''}`);
  }
  check('no JS errors', !errors.length, errors.slice(0, 3).join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} check(s) failed` : '\n✓ all checks passed');
  process.exit(fails ? 1 : 0);
})();
