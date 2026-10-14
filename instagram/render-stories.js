// Story versions (1080x1920): reuses the post styles, swaps the slide bodies.
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
(async () => {
  let html = fs.readFileSync(path.join(__dirname, 'posts.html'), 'utf8');
  const body = fs.readFileSync(path.join(__dirname, 'stories-body.html'), 'utf8');
  html = html.replace(/<body>[\s\S]*<\/body>/, '<body>' + body + '</body>').replace('height:1350px', 'height:1920px');
  fs.writeFileSync(path.join(__dirname, 'stories.html'), html);
  const b = await puppeteer.launch({ args: ['--allow-file-access-from-files'] });
  const pg = await b.newPage();
  await pg.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await pg.goto('file:///' + path.join(__dirname, 'stories.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await pg.evaluate(() => document.fonts.ready);
  for (let i = 1; i <= 4; i++) {
    const el = await pg.$('#s' + i);
    await el.screenshot({ path: path.join(__dirname, 'out', `niktos-story-${i}.png`) });
  }
  await b.close();
})();
