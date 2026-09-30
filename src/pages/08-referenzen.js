const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/referenzen/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Referenzen', url: path }];

module.exports = {
  path,
  nav: 'referenzen',
  priority: 0.8,
  crumbs,
  pageType: 'CollectionPage',
  title: 'Referenzen & Projekte – Webdesign aus Ludwigsburg | Niktos',
  description: 'Ausgewählte Website-Projekte von Niktos: Kabic Hausmeister & Gartenpflege, Kinderbetreuung Spatzennest, Projekt KomLab. Webdesign & SEO aus Ludwigsburg.',
  schema: [{
    '@type': 'ItemList', name: 'Referenzprojekte von Niktos',
    itemListElement: site.projects.map((p, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'CreativeWork', name: `Website ${p.name}`, url: p.url, description: p.text, creator: { '@id': site.url + '/#business' }, about: p.branch },
    })),
  }],
  body: `
${C.pageHero({
  crumbs,
  eyebrow: 'Referenzen',
  h1: 'Ergebnisse, die man <span class="grad">sehen kann.</span>',
  lead: 'Jedes Projekt ist anders – das Ziel ist immer gleich: ein Auftritt, der überzeugt und Anfragen bringt. Hier ein Auszug aus meiner Arbeit.',
})}

<section class="section">
  <div class="container">
    ${C.projects(site.projects, { h: 'h2' })}
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Was alle Projekte gemeinsam haben', title: 'Der Niktos-Standard.', center: true })}
    ${C.features([
      ['bolt', 'Schnell', 'Schlanker Code und optimierte Bilder – für kurze Ladezeiten auf jedem Gerät.'],
      ['search', 'Auffindbar', 'Saubere SEO-Struktur, strukturierte Daten und lokale Keywords von Anfang an.'],
      ['chat', 'Kontaktstark', 'WhatsApp, Telefon und Formular sind immer nur einen Klick entfernt.'],
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="card reveal" style="text-align:center;padding:clamp(40px,6vw,80px)">
      <p class="eyebrow">Ihr Projekt?</p>
      <h2>Ihre Website könnte <span class="grad">die nächste Referenz</span> sein.</h2>
      <p class="lead" style="margin:0 auto 30px">Erzählen Sie mir von Ihrem Vorhaben – ich zeige Ihnen, wie Ihre neue Website aussehen und was sie leisten könnte.</p>
      <div class="actions" style="justify-content:center">${C.startBtn('Projekt starten', { cls: 'btn--lg' })}${C.waBtn('WhatsApp', { cls: 'btn--lg' })}</div>
    </div>
  </div>
</section>
`,
};
