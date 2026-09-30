// Image pipeline: responsive WebP variants, e-mail logo, Open Graph images, favicons.
// Writes dist/assets/img/* and src/images.manifest.json (used by build.js).
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

sharp.cache(false);
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist', 'assets', 'img');
fs.mkdirSync(OUT, { recursive: true });

const cfg = require('../src/images.config.js');
const WIDTHS = [480, 800, 1200, 1600];
const manifest = { photos: {}, og: {} };
const load = (p) => sharp(path.join(ROOT, p), { limitInputPixels: false }).rotate();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

async function photos() {
  for (const [key, c] of Object.entries(cfg)) {
    const meta = await load(c.src).metadata();
    let w = meta.width, h = meta.height;
    if (meta.orientation >= 5) [w, h] = [h, w];
    const widths = WIDTHS.filter((x) => x < w).concat(w <= 1600 ? [w] : []).slice(0, 4);
    for (const tw of widths) {
      await load(c.src).resize({ width: tw }).webp({ quality: 72, effort: 5 }).toFile(path.join(OUT, `${c.name}-${tw}.webp`));
    }
    manifest.photos[key] = { name: c.name, alt: c.alt, widths, ratio: +(h / w).toFixed(4) };
    process.stdout.write('.');
  }
}

// Dark brand canvas with blue glow + grid, used for all OG images (1200×630, JPG for WhatsApp/Facebook).
const ogBase = (w = 1200, h = 630) => Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="a" cx="85%" cy="10%" r="75%"><stop offset="0" stop-color="#1f5bff" stop-opacity=".75"/><stop offset="1" stop-color="#1f5bff" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="10%" cy="110%" r="60%"><stop offset="0" stop-color="#4b33d6" stop-opacity=".55"/><stop offset="1" stop-color="#4b33d6" stop-opacity="0"/></radialGradient>
    <pattern id="p" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0v60" fill="none" stroke="#ffffff" stroke-opacity=".05"/></pattern>
    <linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="#0a6cff"/><stop offset="1" stop-color="#3a2fc8"/></linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#06070b"/><rect width="${w}" height="${h}" fill="url(#p)"/>
  <rect width="${w}" height="${h}" fill="url(#a)"/><rect width="${w}" height="${h}" fill="url(#b)"/>
  <rect y="${h - 10}" width="${w}" height="10" fill="url(#l)"/>
</svg>`);

function wrap(text, max) {
  const words = text.split(' '); const lines = []; let cur = '';
  for (const wd of words) { if ((cur + ' ' + wd).trim().length > max) { lines.push(cur.trim()); cur = wd; } else cur += ' ' + wd; }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

async function og(file, { eyebrow, title, sub }) {
  const icon = await load('media/originals/logo-icon.png').trim({ threshold: 10 }).resize({ height: 84 }).png().toBuffer();
  const word = await load('media/originals/logo-text-white.png').trim({ threshold: 10 }).resize({ height: 38 }).png().toBuffer();
  const wm = await sharp(word).metadata();
  const lines = wrap(title, 26).slice(0, 3);
  const fs0 = lines.length > 2 ? 62 : 72;
  const txt = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <text x="80" y="${250 - (lines.length - 2) * 20}" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="5" fill="#7fa2ff">${esc(eyebrow.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="78" y="${(330 - (lines.length - 2) * 20) + i * (fs0 + 8)}" font-family="Arial, Helvetica, sans-serif" font-size="${fs0}" font-weight="700" fill="#ffffff">${esc(l)}</text>`).join('')}
    <text x="80" y="560" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#aab4c8">${esc(sub)}</text>
  </svg>`);
  await sharp(ogBase()).composite([
    { input: icon, left: 80, top: 70 },
    { input: word, left: 184, top: 70 + Math.round((84 - wm.height) / 2) },
    { input: txt, left: 0, top: 0 },
  ]).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(OUT, file));
  manifest.og[file] = true;
}

async function logos() {
  // E-mail logo: PNG on solid white (Outlook has no WebP / dark mode can't hide it). Shown at 180×… px.
  await load('media/originals/logo-full.png').trim({ threshold: 10 }).resize({ height: 96 })
    .extend({ top: 12, bottom: 12, left: 12, right: 12, background: '#ffffff' })
    .flatten({ background: '#ffffff' }).png({ compressionLevel: 9 }).toFile(path.join(OUT, 'email-logo.png'));
  const em = await sharp(path.join(OUT, 'email-logo.png')).metadata();
  manifest.emailLogo = { width: em.width, height: em.height };
  // Logo for schema.org / Google (square, 512)
  await sharp(fs.readFileSync(path.join(ROOT, 'src/static/favicon.svg'))).resize(512, 512).png().toFile(path.join(OUT, 'niktos-logo.png'));

  const favSvg = fs.readFileSync(path.join(ROOT, 'src', 'static', 'favicon.svg'));
  await sharp(favSvg).resize(180, 180).flatten({ background: '#0a6cff' }).png().toFile(path.join(ROOT, 'dist', 'apple-touch-icon.png'));
  await sharp(favSvg).resize(192, 192).png().toFile(path.join(ROOT, 'dist', 'icon-192.png'));
  await sharp(favSvg).resize(512, 512).png().toFile(path.join(ROOT, 'dist', 'icon-512.png'));
  await sharp(favSvg).resize(48, 48).png().toFile(path.join(ROOT, 'dist', 'favicon.png'));
}

(async () => {
  await logos();
  await og('og-niktos-webdesign-ludwigsburg.jpg', { eyebrow: 'Webdesign & SEO · Ludwigsburg', title: 'Websites, die Kunden bringen.', sub: 'Individuelles Webdesign · SEO · KI-Sichtbarkeit — niktos.com' });
  await og('og-preise-webdesign.jpg', { eyebrow: 'Pakete & Preise', title: 'Launch · Boost · Dominate', sub: 'Festpreise ab 990 € — transparent & ohne versteckte Kosten' });
  await og('og-blog-professionelle-website.jpg', { eyebrow: 'Niktos Blog', title: 'Warum eine professionelle Website 2026 unverzichtbar ist', sub: 'Von Nikola Planinić · Webdesign & SEO Ludwigsburg' });
  await og('og-seo-ki-sichtbarkeit.jpg', { eyebrow: 'SEO & KI-Sichtbarkeit', title: 'Gefunden werden. Bei Google & KI.', sub: 'Lokales SEO · Google Maps · ChatGPT, Gemini & Co.' });
  await photos();
  fs.writeFileSync(path.join(ROOT, 'src', 'images.manifest.json'), JSON.stringify(manifest, null, 1));
  console.log('\nimages done');
})().catch((e) => { console.error(e); process.exit(1); });
