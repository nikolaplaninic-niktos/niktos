// Generates the round icons for the e-mail signature (PNG, 2x for retina).
const path = require('path');
const sharp = require(path.join(__dirname, '..', 'node_modules', 'sharp'));

const BLUE = '#0a66ff';
const wrap = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
<circle cx="48" cy="48" r="48" fill="${BLUE}"/>${inner}</svg>`;

const phonePath = 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z';
const globePath = 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z';

const icons = {
  'sig-whatsapp': wrap(`
    <path d="M48 22c-14.4 0-26 11.4-26 25.5 0 4.6 1.3 9 3.5 12.7L22 74l14.3-3.4c3.4 1.8 7.2 2.8 11.2 2.8h.5c14.4 0 26-11.4 26-25.5S62.400 22 48 22z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/>
    <g transform="translate(31.500 31) scale(1.360)" fill="#fff"><path d="${phonePath}"/></g>`),
  'sig-instagram': wrap(`
    <rect x="23" y="23" width="50" height="50" rx="14" fill="none" stroke="#fff" stroke-width="5"/>
    <circle cx="48" cy="48" r="12" fill="none" stroke="#fff" stroke-width="5"/>
    <circle cx="62" cy="34" r="3.500" fill="#fff"/>`),
  'sig-web': wrap(`<g transform="translate(22 22) scale(2.170)" fill="#fff"><path d="${globePath}"/></g>`),
  'sig-phone': wrap(`<g transform="translate(24 24) scale(2)" fill="#fff"><path d="${phonePath}"/></g>`),
};

(async () => {
  for (const [name, svg] of Object.entries(icons)) {
    await sharp(Buffer.from(svg)).png().toFile(path.join(__dirname, name + '.png'));
  }
  console.log('icons done');
})();
