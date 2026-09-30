const site = require('../site');
const C = require('../components');
const { icon } = C;

module.exports = {
  path: '/danke/',
  noindex: true,
  title: 'Vielen Dank für Ihre Anfrage | Niktos',
  description: 'Vielen Dank! Ihre Anfrage ist bei Niktos angekommen – ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen.',
  body: `
<section class="section notfound">
  <div class="bg-grid"></div><div class="glow glow--a"></div>
  <div class="container container--narrow">
    <div class="map__pin" style="background:var(--ok);box-shadow:0 0 0 14px rgba(61,220,151,.15),0 0 0 30px rgba(61,220,151,.06)">${icon('check')}</div>
    <p class="eyebrow" style="justify-content:center;display:flex">Anfrage erhalten</p>
    <h1 style="font-size:clamp(2.6rem,6vw,5rem)">Danke! <span class="grad">Der erste Schritt ist gemacht.</span></h1>
    <p class="lead" style="margin:0 auto 30px">Ich schaue mir Ihre Angaben persönlich an und melde mich innerhalb von 24 Stunden (werktags). Eine Bestätigung mit Ihren Angaben ist bereits in Ihrem Postfach – schauen Sie ggf. auch im Spam-Ordner nach.</p>
    <div class="actions" style="justify-content:center">
      ${C.waBtn('Es eilt? WhatsApp', { cls: 'btn--lg', text: 'Hallo Nikola, ich habe gerade eine Anfrage über deine Website gesendet.' })}
      <a class="btn btn--ghost btn--lg" href="${site.instagram}" target="_blank" rel="noopener">${icon('insta')} Folgen Sie mir auf Instagram</a>
    </div>
    <p style="margin-top:34px"><a class="link-arrow" href="/referenzen/">In der Zwischenzeit: Referenzen ansehen ${icon('arrow')}</a></p>
  </div>
</section>
`,
};
