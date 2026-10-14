const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const b = await puppeteer.launch();
  const out = path.join(__dirname, 'src');
  const shots = [
    ['home-d', '/', 1440, 900, 1, false],
    ['home-m', '/', 390, 844, 2, true],
    ['preise-d', '/preise/', 1440, 900, 1, false],
  ];
  for (const [n, p, w, h, dsf, mob] of shots) {
    const pg = await b.newPage();
    await pg.setViewport({ width: w, height: h, deviceScaleFactor: dsf, isMobile: mob, hasTouch: mob });
    await pg.goto('https://niktos.com' + p, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 800));
    await pg.evaluate(() => {
      const btn = [...document.querySelectorAll('button')].find(x => /Nur notwendige/.test(x.textContent));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 1500));
    // hide floating widgets on desktop (WhatsApp bubble, "Projekt starten" chip), keep the sidebar
    await pg.evaluate((mob) => {
      if (mob) return;
      document.querySelectorAll('body *').forEach(el => {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' && el.getBoundingClientRect().left > 300) el.style.display = 'none';
      });
    }, mob);
    await new Promise(r => setTimeout(r, 5000));
    await pg.screenshot({ path: path.join(out, n + '.png') });
    await pg.close();
  }
  await b.close();
})();
