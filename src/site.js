// Single source of truth: business data (NAP), packages, services, projects, service area.
// Everything here feeds the pages, footer, JSON-LD, llms.txt and the e-mails.
const phoneIntl = '+491622403682';

module.exports = {
  url: 'https://niktos.com',
  name: 'Niktos',
  legalName: 'Niktos Nikola Planinić',
  owner: 'Nikola Planinić',
  ownerFirst: 'Nikola',
  slogan: 'Websites, die Kunden bringen. Alles aus einer Hand.',
  phone: '0162 2403682',
  phoneIntl,
  phoneSchema: '+49-162-2403682',
  email: 'info@niktos.com',
  waNumber: phoneIntl.replace('+', ''),
  whatsapp: 'https://wa.me/491622403682?text=' + encodeURIComponent('Hallo Nikola, ich interessiere mich für eine neue Website.'),
  wa: (text) => 'https://wa.me/491622403682?text=' + encodeURIComponent(text),
  instagram: 'https://www.instagram.com/niktos.webdesign/',
  instagramHandle: '@niktos.webdesign',
  // Google-Unternehmensprofil: sobald vorhanden die Place-ID eintragen → Bewertungs-Links + Maps-Link werden präzise.
  googlePlaceId: '',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Niktos Webdesign & SEO, 71642 Ludwigsburg'),
  mapEmbed: 'https://www.google.com/maps?q=' + encodeURIComponent('Niktos Webdesign & SEO, 71642 Ludwigsburg') + '&z=13&output=embed',
  googleRouteUrl: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Niktos Webdesign & SEO, 71642 Ludwigsburg'),
  // TODO Nikola: Straße + Hausnummer ist im Impressum Pflicht (§ 5 DDG). Leer = wird nicht angezeigt.
  address: { street: '', zip: '71642', city: 'Ludwigsburg', region: 'Baden-Württemberg', country: 'DE' },
  replyPromise: 'Antwort innerhalb von 24 Stunden (werktags)',
  kleinunternehmer: true, // § 19 UStG → Preise sind Endpreise
  // Umami Analytics – websiteId aus cloud.umami.is eintragen (Settings → Websites)
  umami: { src: 'https://cloud.umami.is/script.js', websiteId: 'REPLACE-WITH-UMAMI-WEBSITE-ID' },

  services: [
    { id: 'webdesign', title: 'Webdesign & Website-Erstellung', short: 'Individuelle Websites, die schnell laden, Vertrauen aufbauen und Besucher zu Anfragen machen.', href: '/webdesign-ludwigsburg/', icon: 'layout',
      bullets: ['Individuelles Design statt Baukasten', 'Mobil zuerst, blitzschnell', 'Texte, die verkaufen'] },
    { id: 'seo', title: 'SEO & KI-Sichtbarkeit', short: 'Gefunden werden – bei Google, in Google Maps und in KI-Assistenten wie ChatGPT & Gemini.', href: '/seo-ludwigsburg/', icon: 'search',
      bullets: ['Lokales SEO & Google Maps', 'Technik, die Google & KI verstehen', 'Inhalte, die KI zitiert'] },
    { id: 'wartung', title: 'Wartung, Hosting & Support', short: 'Updates, Backups, Sicherheit und Änderungen – Ihre Website bleibt schnell und aktuell.', href: '/wartung-hosting/', icon: 'shield',
      bullets: ['Hosting & SSL inklusive', 'Änderungen per WhatsApp', 'Monitoring & Backups'] },
    { id: 'check', title: 'Website-Check', short: 'Der ehrliche Profi-Check Ihrer aktuellen Website – mit PDF-Report und klarem Maßnahmenplan.', href: '/website-check/', icon: 'gauge',
      bullets: ['Technik, SEO & Speed', 'Konkrete To-do-Liste', 'Bei Auftrag verrechnet'] },
  ],

  // Pakete – Preise frei anpassbar. "from": true → "ab"-Preis.
  packages: [
    {
      id: 'launch', name: 'Launch', price: 990, from: true, tag: 'Für Gründer & Kleinbetriebe',
      claim: 'Endlich professionell online – schnell, sauber, bezahlbar.',
      time: 'ca. 2 Wochen',
      features: [
        'Individuelles Design – keine Vorlage',
        'One-Pager oder bis zu 3 Seiten',
        'Perfekt auf Smartphone & Tablet',
        'Kontaktformular + WhatsApp-Button',
        'Google-Maps-Einbindung (DSGVO-konform)',
        'SEO-Grundoptimierung & strukturierte Daten',
        'Impressum- & Datenschutz-Seite (Struktur)',
        'SSL, schnelle Ladezeit, Top-PageSpeed',
        '1 Korrekturschleife',
      ],
    },
    {
      id: 'boost', name: 'Boost', price: 1990, from: true, tag: 'Beliebteste Wahl', featured: true,
      claim: 'Die Website, die bei Google gefunden wird und Anfragen bringt.',
      time: 'ca. 3–4 Wochen',
      features: [
        '<strong>Alles aus Launch</strong>, plus:',
        'Bis zu 8 Unterseiten – eigene Seite je Leistung',
        'SEO-Texte, für Sie geschrieben',
        'Lokales SEO + Google-Unternehmensprofil',
        'KI-Sichtbarkeit: llms.txt, Schema, FAQ',
        'Blog / News-Bereich',
        'Anfrage-Formular mit automatischer Bestätigungs-Mail',
        'Cookielose Besucherstatistik',
        '2 Korrekturschleifen · 3 Monate Support',
      ],
    },
    {
      id: 'dominate', name: 'Dominate', price: 3490, from: true, tag: 'Für Marktführer von morgen',
      claim: 'Maximale Sichtbarkeit in Ihrer Region. Die Nr. 1 werden.',
      time: 'ca. 5–6 Wochen',
      features: [
        '<strong>Alles aus Boost</strong>, plus:',
        'Bis zu 15 Seiten inkl. Regionen-Landingpages',
        'Keyword- & Wettbewerbsanalyse',
        'Step-by-Step-Anfrage-Funnel (wie auf dieser Seite)',
        '2 SEO-Blogartikel zum Start',
        'Premium-Animationen & Interaktionen',
        'Search Console, Bing & Monitoring-Setup',
        'Conversion-Optimierung nach dem Launch',
        '3 Korrekturschleifen · 6 Monate Priority-Support',
      ],
    },
  ],
  care: { name: 'Care', price: 39, unit: '/ Monat', features: ['Hosting, Domain & SSL', 'Updates, Backups & Monitoring', 'Kleine Änderungen per WhatsApp', 'Monatlicher Kurz-Report'] },
  checkPrice: 49,

  // Referenzen (Bilder: src/images.config.js)
  projects: [
    { id: 'kabic', name: 'Kabic Hausmeister & Gartenpflege', url: 'https://kabic-hausmeister-gartenpflege.de', domain: 'kabic-hausmeister-gartenpflege.de', img: 'kabicDesktop', mobile: 'kabicMobile',
      place: 'Bietigheim-Bissingen', branch: 'Hausmeisterservice & Gartenpflege',
      text: 'Kompletter Relaunch aus einer Hand: neues Design, extrem schnelle Ladezeit, 7 Leistungsseiten, lokales SEO für den Landkreis Ludwigsburg, Anfrageformular mit Bestätigungs-Mail und WhatsApp-Anbindung.',
      tags: ['Relaunch', 'Lokales SEO', 'KI-Sichtbarkeit', 'Formular + E-Mails'] },
    { id: 'spatzennest', name: 'Kinderbetreuung Spatzennest UG', url: 'https://kinderbetreuung-spatzennest.de', domain: 'kinderbetreuung-spatzennest.de', img: 'spatzennestDesktop',
      place: 'Region Stuttgart', branch: 'Kinderbetreuung & Integration',
      text: 'Warmer, vertrauensvoller Auftritt für einen sozialen Träger: klare Struktur für Eltern und Partner, Bereiche für GBZ und KomLab, aktuelle Beiträge und einfache Kontaktwege.',
      tags: ['Webdesign', 'Mehrere Bereiche', 'News'] },
    { id: 'komlab', name: 'Projekt KomLab', url: 'https://projekt-komlab.de', domain: 'projekt-komlab.de', img: 'komlabDesktop',
      place: 'Region Stuttgart', branch: 'Familienhilfe & Soziales',
      text: 'Emotionale Projekt-Website „Wir helfen Familien“: starke Bildsprache, klare Botschaft und ein einfacher Weg zur Kontaktaufnahme.',
      tags: ['Webdesign', 'Branding', 'Kontakt'] },
  ],

  towns: ['Ludwigsburg', 'Stuttgart', 'Bietigheim-Bissingen', 'Kornwestheim', 'Remseck am Neckar', 'Asperg', 'Tamm', 'Möglingen',
    'Markgröningen', 'Freiberg am Neckar', 'Marbach am Neckar', 'Benningen am Neckar', 'Besigheim', 'Sachsenheim', 'Vaihingen an der Enz',
    'Waiblingen', 'Leonberg', 'Korntal-Münchingen', 'Ditzingen', 'Backnang'],
};
