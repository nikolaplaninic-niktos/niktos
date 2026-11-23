// Image registry: originals (media/originals/) → SEO file names, German alt texts, schema data.
// scripts/images.js renders every entry and writes src/images.manifest.json; build.js uses it for
// <img>, ImageObject (JSON-LD) and the image sitemap.
//
// What actually helps (Nov 2026): a descriptive file name (small signal), honest alt text that describes the
// image (accessibility + Google Images), the text around the image, ImageObject with creator/credit, and the
// image listed in the sitemap. What does NOT help: EXIF/GPS geotags (sharp strips them, Google ignores them)
// and stuffing place names into every alt text. Use place names only where the image really is about the place.
//
// Portrait: sobald das Profi-Foto da ist → Datei nach media/originals/ legen, hier eintragen
// (key "portrait"), `npm run all` – alle Stellen mit Platzhalter zeigen dann automatisch das Foto.
// Never add komlab-desktop.png or spatzennest-desktop.png as references (Nikola, 23.11.2026).

/** Credit fields shared by every ImageObject (own photos, own graphics, client screenshots with permission). */
const credit = {
  creditText: 'Niktos',
  copyrightNotice: '© Niktos - Nikola Planinic',
};

/** Responsive photos/screenshots (WebP 480/800/1200/1600). `caption` feeds ImageObject.caption. */
const photos = {
  kabicDesktop: {
    src: 'media/originals/kabic-desktop.png',
    name: 'referenz-kabic-hausmeister-gartenpflege-website',
    alt: 'Website von Kabic Hausmeister & Gartenpflege – erstellt von Niktos Webdesign Ludwigsburg',
    caption: 'Referenzprojekt: Website von Kabic Hausmeister & Gartenpflege aus Bietigheim-Bissingen (Desktop-Ansicht), gestaltet von Niktos',
  },
  kabicMobile: {
    src: 'media/originals/kabic-mobile.png',
    name: 'referenz-kabic-hausmeister-mobil',
    alt: 'Mobile Ansicht der Website von Kabic Hausmeister & Gartenpflege',
    caption: 'Referenzprojekt: Kabic Hausmeister & Gartenpflege auf dem Smartphone, gestaltet von Niktos',
  },
  portrait: {
    src: 'media/originals/nikola-planinic.jpg',
    name: 'nikola-planinic-webdesigner-ludwigsburg',
    alt: 'Nikola Planinic, Webdesigner und Inhaber von Niktos aus Ludwigsburg',
    caption: 'Nikola Planinic, Inhaber von Niktos, Webdesign & SEO in Ludwigsburg',
  },
  avatar: {
    src: 'media/originals/nikola-avatar.jpg',
    name: 'nikola-planinic-avatar',
    alt: 'Nikola Planinic',
    caption: 'Nikola Planinic, Webdesigner aus Ludwigsburg',
  },
};

/** Small square icons, one size. Process steps from the old niktos.com, in step order (alt text lives in components.js). */
const icons = {
  ablauf1: { src: 'media/originals/ablauf-1.jpg', name: 'webdesign-ablauf-1-kontakt', size: 200 },
  ablauf2: { src: 'media/originals/ablauf-2.jpg', name: 'webdesign-ablauf-2-kennenlernen', size: 200 },
  ablauf3: { src: 'media/originals/ablauf-3.jpg', name: 'webdesign-ablauf-3-angebot', size: 200 },
  ablauf4: { src: 'media/originals/ablauf-4.jpg', name: 'webdesign-ablauf-4-design-umsetzung', size: 200 },
  ablauf5: { src: 'media/originals/ablauf-5.jpg', name: 'webdesign-ablauf-5-launch', size: 200 },
  ablauf6: { src: 'media/originals/ablauf-6.jpg', name: 'webdesign-ablauf-6-betreuung', size: 200 },
};

module.exports = { credit, photos, icons };
