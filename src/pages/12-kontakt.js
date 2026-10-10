const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/kontakt/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Kontakt', url: path }];

module.exports = {
  path,
  nav: 'kontakt',
  priority: 0.8,
  crumbs,
  pageType: 'ContactPage',
  title: 'Kontakt – Webdesign Ludwigsburg | Niktos · WhatsApp & Telefon',
  description: `Kontakt zu Niktos in Ludwigsburg: WhatsApp, ☎ ${site.phone}, E-Mail oder Formular. Kostenloses Erstgespräch & Festpreis-Angebot innerhalb von 24 Stunden.`,
  body: `
${C.pageHero({
  crumbs,
  aside: C.illuChat(),
  eyebrow: 'Kontakt',
  h1: 'Lassen Sie uns <span class="grad">sprechen.</span>',
  lead: 'Ob erste Idee oder konkretes Projekt: Schreiben Sie mir so, wie es Ihnen am liebsten ist. Ich antworte persönlich – innerhalb von 24 Stunden, meistens deutlich schneller.',
  actions: false,
})}

<section class="section" id="anfrage">
  <div class="container contact-grid">
    <div class="reveal">
      <p class="eyebrow">Direkter Draht</p>
      <h2>So erreichen Sie mich</h2>
      <p class="lead">Am schnellsten geht es per WhatsApp – gerne auch mit Screenshots oder Beispielen, die Ihnen gefallen.</p>
      ${C.contactCards()}
      <div class="card" style="margin-top:22px">
        <h3 style="font-size:1.3rem">Lieber Schritt für Schritt?</h3>
        <p>Beantworten Sie 6 kurze Fragen – ich schicke Ihnen eine Einschätzung und ein passendes Festpreis-Angebot.</p>
        ${C.startBtn('Projekt-Anfrage starten', { cls: 'btn--sm' })}
      </div>
    </div>
    ${C.contactForm()}
  </div>
</section>

${C.area({ panel: true, title: 'Persönlich in Ludwigsburg. Online überall.' })}
${C.ctaBand()}
`,
};
