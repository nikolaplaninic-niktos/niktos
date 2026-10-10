const site = require('../site');
const C = require('../components');
const { icon } = C;

const path = '/projekt-anfrage/';
const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Projekt-Anfrage', url: path }];

module.exports = {
  path,
  nav: '',
  noindex: true,
  crumbs,
  title: 'Projekt-Anfrage in 60 Sekunden | Niktos Webdesign',
  description: 'Starten Sie Ihr Website-Projekt: 6 kurze Fragen, kostenloses Festpreis-Angebot innerhalb von 24 Stunden. Niktos – Webdesign & SEO aus Ludwigsburg.',
  body: `
<section class="section" style="padding-top:clamp(40px,6vw,80px)">
  <div class="dots"></div>
  <div class="container split split--top split--form">
    <div class="reveal">
      ${C.breadcrumb(crumbs)}
      <p class="eyebrow">Projekt starten</p>
      <h1 style="font-size:clamp(2.4rem,5vw,4.4rem)">In 60 Sekunden zu Ihrem <span class="grad">Festpreis-Angebot.</span></h1>
      <p class="lead">Beantworten Sie 6 kurze Fragen. Ich melde mich innerhalb von 24 Stunden persönlich mit einer ehrlichen Einschätzung – kostenlos und unverbindlich.</p>
      ${C.ticks(['Keine Verpflichtung, kein Spam', 'Persönliche Antwort von ' + site.owner, 'Festpreis – keine versteckten Kosten', 'Auf Wunsch Rückmeldung per WhatsApp'])}
      <p class="muted" style="margin-top:24px">Lieber direkt? <a href="${site.whatsapp}" target="_blank" rel="noopener">WhatsApp</a> · <a href="tel:${site.phoneIntl}">${site.phone}</a> · <a href="/kontakt/">Kontaktformular</a></p>
    </div>
    <div class="form reveal reveal-d1">${C.funnel('p')}</div>
  </div>
</section>
`,
};
