const site = require('../site');
const C = require('../components');

const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Impressum', url: '/impressum/' }];
const addr = `${site.address.street ? site.address.street + '<br>' : '<!-- TODO: Straße + Hausnummer ergänzen (src/site.js) --><br>'}${site.address.zip} ${site.address.city}`;

module.exports = {
  path: '/impressum/',
  priority: 0.2,
  crumbs,
  title: 'Impressum | Niktos – Webdesign & SEO Ludwigsburg',
  description: `Impressum von ${site.legalName}, Inhaber ${site.owner}, ${site.address.zip} ${site.address.city}. Webdesign, Webentwicklung & SEO.`,
  body: `
${C.pageHero({ crumbs, h1: 'Impressum', actions: false })}
<section class="section" style="padding-top:clamp(40px,5vw,70px)">
  <div class="container">
    <div class="prose prose--card">
      <h2 class="mt-0">Angaben gemäß § 5 DDG</h2>
      <p><strong>${site.legalName}</strong><br>Inhaber: ${site.owner}<br>${addr}<br>Deutschland</p>
      <h2>Kontakt</h2>
      <p>Telefon: <a href="tel:${site.phoneIntl}">${site.phone}</a><br>E-Mail: <a href="mailto:${site.email}">${site.email}</a><br>WhatsApp: <a href="${site.whatsapp}" target="_blank" rel="noopener">${site.phone}</a></p>
      <h2>Umsatzsteuer</h2>
      <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>
      <h2>Berufsbezeichnung und Tätigkeit</h2>
      <p>Dienstleistungen im Bereich Webdesign, Webentwicklung und Suchmaschinenoptimierung (SEO).</p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>${site.owner}<br>${addr}</p>
      <h2>Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle</h2>
      <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <h2>Haftung für Inhalte</h2>
      <p>Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
      <h2>Haftung für Links</h2>
      <p>Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
      <h2>Urheberrecht</h2>
      <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Screenshots von Referenzprojekten werden mit Zustimmung der jeweiligen Kunden gezeigt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Erstellers.</p>
    </div>
  </div>
</section>
`,
};
