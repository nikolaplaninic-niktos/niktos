// QA: full-page screenshots (desktop + mobile), split into viewport-height tiles,
// plus console errors and broken image checks. Usage: node scripts/shots.js [/path ...] [--mobile-only]
const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'qa');
fs.mkdirSync(OUT, { recursive: true });
const args = process.argv.slice(2);
const paths = args.filter((a) => a.startsWith('/'));
const list = paths.length ? paths : ['/', '/leistungen/', '/webdesign-ludwigsburg/', '/seo-ludwigsburg/', '/wartung-hosting/', '/website-check/', '/preise/', '/referenzen/', '/ueber-mich/', '/blog/', '/blog/warum-eine-professionelle-website-wichtig-ist/', '/kontakt/', '/projekt-anfrage/', '/danke/', '/impressum/'];
const modes = args.includes('--mobile-only') ? ['m'] : args.includes('--desktop-only') ? ['d'] : ['d', 'm'];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  for (const p of list) for (const mode of modes) {
    const page = await browser.newPage();
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    if (mode === 'm') await page.emulate({ viewport: { width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148' });
    else await page.setViewport({ width: 1366, height: 860 });
    await page.goto((process.env.BASE || 'http://localhost:8080') + p, { waitUntil: 'networkidle0' });
    // reveal everything + load lazy images
    await page.evaluate(async () => {
      document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-in'));
      document.querySelectorAll('img[loading=lazy]').forEach((i) => { i.loading = 'eager'; });
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 1200));
    const info = await page.evaluate(() => ({
      broken: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
      overflow: document.documentElement.scrollWidth > window.innerWidth ? document.documentElement.scrollWidth : 0,
      h1: [...document.querySelectorAll('h1')].length,
    }));
    const name = (p === '/' ? 'home' : p.replace(/\//g, '')) + '-' + mode;
    // Tile by tile: a single full-page capture repeats content beyond Chrome's 16384px texture limit.
    const meta = await page.evaluate(() => ({ width: document.documentElement.clientWidth, height: document.documentElement.scrollHeight }));
    const tileH = mode === 'm' ? 1700 : 1400;
    let n = 0;
    for (let y = 0; y < meta.height; y += tileH, n++) {
      const h = Math.min(tileH, meta.height - y);
      const buf = await page.screenshot({ clip: { x: 0, y, width: meta.width, height: h }, captureBeyondViewport: true });
      await sharp(buf).resize({ width: mode === 'm' ? 390 : 1000 }).jpeg({ quality: 70 }).toFile(path.join(OUT, `${name}-${n}.jpg`));
    }
    console.log(`${name}: ${meta.height}px, ${n} tiles, h1=${info.h1}, overflow=${info.overflow}, broken=${info.broken.length}, errors=${errors.length}`, errors.slice(0, 3), info.broken.slice(0, 3));
    await page.close();
  }
  await browser.close();
})();
