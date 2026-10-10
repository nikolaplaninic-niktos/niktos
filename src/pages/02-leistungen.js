const site = require('../site');
const C = require('../components');
const { icon } = C;

const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Leistungen', url: '/leistungen/' }];

const FAQ = C.faq([
  ['Bieten Sie alles aus einer Hand an?', 'Ja. Konzept, Design, Texte, Programmierung, SEO, Google-Unternehmensprofil, Hosting und Wartung – alles bei mir. Sie haben einen Ansprechpartner statt fünf Dienstleister.'],
  ['Kann ich meine Website später selbst bearbeiten?', 'Ja, wenn Sie das möchten. Ich wähle die Technik passend zu Ihrem Ziel: maximal schnell und sicher oder mit einem einfachen Redaktionssystem, in dem Sie Texte und Bilder selbst ändern. Viele Kunden lassen Änderungen aber einfach von mir erledigen, per WhatsApp.'],
  ['Können Sie meine bestehende Website überarbeiten?', 'Ja – ein Relaunch ist eine meiner häufigsten Aufgaben. Dabei übernehme ich wertvolle Inhalte und Google-Rankings (per 301-Weiterleitungen), damit Sie nichts verlieren, sondern dazugewinnen.'],
  ['Machen Sie auch Onlineshops?', 'Kleinere Shops und Buchungs- oder Anfrage-Systeme setze ich gerne um. Für große Shops mit tausenden Produkten empfehle ich Ihnen im Erstgespräch den passenden Weg.'],
]);

module.exports = {
  path: '/leistungen/',
  nav: 'leistungen',
  priority: 0.9,
  crumbs,
  title: 'Leistungen: Webdesign, SEO & Wartung | Niktos Ludwigsburg',
  description: 'Webdesign, Website-Relaunch, SEO, KI-Sichtbarkeit, Google-Unternehmensprofil, Hosting & Wartung – alles aus einer Hand von Niktos in Ludwigsburg.',
  schema: [FAQ.schema, {
    '@type': 'ItemList', name: 'Leistungen von Niktos',
    itemListElement: site.services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: site.url + s.href, name: s.title })),
  }],
  body: `
${C.pageHero({
  crumbs,
  eyebrow: 'Leistungen',
  h1: 'Alles, was Ihre Website <span class="grad">zum Verkaufen</span> braucht.',
  lead: 'Design, Technik, Texte, Sichtbarkeit und Betreuung – alles aus einer Hand, zum Festpreis und mit einem festen Ansprechpartner. Damit Sie sich um Ihr Geschäft kümmern können, während Ihre Website neue Kunden bringt.',
})}

<section class="section">
  <div class="container">
    ${C.serviceCards()}
  </div>
</section>

${C.allInOne({ panel: true })}

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Inklusive bei jedem Projekt', title: 'Standard bei Niktos. Extra bei anderen.', center: true })}
    ${C.features([
      ['smartphone', 'Mobile first', 'Die meisten Ihrer Besucher kommen heute vom Smartphone. Deshalb gestalte ich zuerst für das Handy – und dann für den großen Bildschirm.'],
      ['bolt', 'Blitzschnelle Ladezeit', 'Schlanker Code, optimierte Bilder, lokale Schriften. Schnelle Websites ranken besser und verkaufen mehr.'],
      ['search', 'SEO-Fundament', 'Saubere Überschriften, Meta-Daten, strukturierte Daten, Sitemap und eine Seitenstruktur, die Google liebt.'],
      ['wa', 'WhatsApp & Anruf mit einem Klick', 'Ihre Kunden erreichen Sie dort, wo sie ohnehin sind – ohne Umwege, ohne lange Formulare.'],
      ['lock', 'Sicherheit & SSL', 'HTTPS, sichere Formulare mit Spam-Schutz und moderne Sicherheits-Header – ohne Cookie-Banner-Chaos.'],
      ['handshake', 'Persönliche Betreuung', 'Ich bin Ihr fester Ansprechpartner – vor, während und nach dem Launch. Per Telefon, E-Mail oder WhatsApp.'],
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.head({ eyebrow: 'Für wen?', title: 'Für Unternehmer, die wachsen wollen.', lead: 'Meine Kunden sind Selbstständige, Handwerksbetriebe, Dienstleister, Praxen, Gastronomen und soziale Träger – vor allem aus Ludwigsburg und der Region Stuttgart.' })}
    <div class="grid grid--3">
      <div class="card reveal"><span class="card__ico">${icon('rocket')}</span><h3>Gründer & Start-ups</h3><p class="mb-0">Vom ersten Tag an professionell auftreten – mit einer Website, die mit Ihnen wächst.</p></div>
      <div class="card reveal reveal-d1"><span class="card__ico">${icon('layers')}</span><h3>Handwerk & lokale Dienstleister</h3><p class="mb-0">Mehr Anfragen aus Ihrer Umgebung – über Google, Google Maps und KI-Suche.</p></div>
      <div class="card reveal reveal-d2"><span class="card__ico">${icon('refresh')}</span><h3>Unternehmen mit alter Website</h3><p class="mb-0">Relaunch ohne Ranking-Verlust: moderner, schneller, verkaufsstärker.</p></div>
    </div>
  </div>
</section>

<section class="section section--panel">
  <div class="container">
    ${C.head({ eyebrow: 'Ablauf', title: 'So arbeiten wir zusammen.', center: true })}
    ${C.processSteps()}
  </div>
</section>

${FAQ.html}
${C.ctaBand()}
`,
};
