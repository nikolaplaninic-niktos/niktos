const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
(async () => {
  fs.mkdirSync(path.join(__dirname, 'out'), { recursive: true });
  const b = await puppeteer.launch({ args: ['--allow-file-access-from-files'] });
  const pg = await b.newPage();
  await pg.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  await pg.goto('file:///' + path.join(__dirname, 'posts.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await pg.evaluate(() => document.fonts.ready);
  for (let i = 1; i <= 4; i++) {
    const el = await pg.$('#s' + i);
    await el.screenshot({ path: path.join(__dirname, 'out', `niktos-post-${i}.png`) });
  }
  await b.close();
})();
