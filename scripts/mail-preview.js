// Renders the e-mail templates in src/static/_lib/mail/ with sample data → mail-preview/
// Mirrors the logic of src/static/_lib/mail.php (PHP can't run locally) – keep both in sync.
// Usage: node scripts/mail-preview.js   → open mail-preview/index.html
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TPL = path.join(ROOT, 'src/static/_lib/mail');
const OUT = path.join(ROOT, 'mail-preview');
const SITE = 'https://niktos.com';
fs.mkdirSync(OUT, { recursive: true });

const FIELDS = { anliegen: 'Anliegen', paket: 'Paket', hat_website: 'Website vorhanden', website_url: 'Aktuelle Website', branche: 'Branche', budget: 'Budget', zeitrahmen: 'Zeitrahmen', name: 'Name', firma: 'Unternehmen', email: 'E-Mail', telefon: 'Telefon / WhatsApp', kontaktweg: 'Bevorzugter Kontakt', nachricht: 'Nachricht' };
const tpl = (file, vars) => Object.entries(vars).reduce((s, [k, v]) => s.split(`{{${k}}}`).join(String(v)), fs.readFileSync(path.join(TPL, file), 'utf8'));
const h = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const nl2br = (s) => s.replace(/\r?\n/g, '<br />\n');
const pad = (s) => s.padEnd(22);
const ucfirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const phoneIntl = (p) => {
  const plus = p.trim().startsWith('+');
  let d = p.replace(/\D+/g, '');
  if (!plus) { if (d.startsWith('00')) d = d.slice(2); else if (d.startsWith('0')) d = '49' + d.slice(1); }
  return d.length >= 8 ? d : '';
};
const rows = (pairs) => pairs.map(([label, value]) => tpl('row.html', { label: h(label), value })).join('');
const button = (href, label, color, text = '#ffffff') => tpl('button.html', { href: h(href), label: h(label), color, text });
const topic = (d) => (d.anliegen || 'Allgemeine Anfrage') + (d.paket ? ' · Paket ' + ucfirst(d.paket) : '');

function buildAnfrage(d, logo) {
  const intl = phoneIntl(d.telefon);
  const tel = intl ? '+' + intl : d.telefon.replace(/[^\d+]/g, '');
  const t = topic(d);
  const link = 'color:#0a6cff; text-decoration:none; font-weight:bold;';
  const pairs = []; let textRows = '';
  for (const [key, label] of Object.entries(FIELDS)) {
    let v = d[key] || '';
    if (!v) continue;
    if (key === 'paket') v = ucfirst(v);
    textRows += pad(label + ':') + (key === 'nachricht' ? '\n' : '') + v + '\n';
    let html;
    if (key === 'email') html = `<a href="mailto:${h(v)}" style="${link}">${h(v)}</a>`;
    else if (key === 'telefon') html = `<a href="tel:${h(tel)}" style="${link}">${h(v)}</a>`;
    else if (key === 'website_url') html = `<a href="${h(/^https?:\/\//i.test(v) ? v : 'https://' + v)}" style="${link}">${h(v)}</a>`;
    else if (key === 'nachricht') html = nl2br(h(v));
    else if (['anliegen', 'budget', 'paket'].includes(key)) html = `<strong>${h(v)}</strong>`;
    else html = h(v);
    pairs.push([label, html]);
  }
  pairs.push(['Formular', d.form === 'projekt' ? 'Projekt-Anfrage (Step-by-Step)' : 'Kontaktformular']);
  pairs.push(['Eingegangen', h(d.datum)]);
  const mailto = `mailto:${d.email}?subject=${encodeURIComponent('Ihre Anfrage bei Niktos')}&body=${encodeURIComponent(`Hallo ${d.name},\n\nvielen Dank für Ihre Anfrage`)}`;
  const wa = intl ? `https://wa.me/${intl}?text=${encodeURIComponent(`Hallo ${d.name}, hier ist Nikola von Niktos. Vielen Dank für Ihre Anfrage!`)}` : '';
  let b = '';
  if (wa) b += button(wa, 'WhatsApp schreiben', '#25d366', '#03220f');
  if (intl) b += button('tel:' + tel, 'Anrufen · ' + d.telefon, '#0a6cff');
  b += button(mailto, 'Per E-Mail antworten', '#141827');
  return {
    subject: `Neue Anfrage: ${t} – ${d.name}`,
    html: tpl('anfrage.html', { preheader: h(`${t} – ${d.name}${d.budget ? ', Budget ' + d.budget : ''}`), logo_url: logo, topic: h(t), datum: h(d.datum), rows: rows(pairs), buttons: b, site_url: SITE, reply_hint: h(`Tipp: „Antworten“ geht direkt an ${d.email}.`) }),
    text: tpl('anfrage.txt', { topic: t, rows: textRows.trimEnd(), datum: d.datum, tel_link: tel ? 'tel:' + tel : '–', wa_link: wa || '–', email: d.email, site_url: SITE }),
  };
}

function buildBestaetigung(d, logo) {
  const pairs = []; let textRows = '';
  for (const key of ['anliegen', 'paket', 'website_url', 'branche', 'budget', 'zeitrahmen', 'kontaktweg', 'nachricht']) {
    let v = d[key] || '';
    if (!v) continue;
    if (key === 'paket') v = ucfirst(v);
    pairs.push([FIELDS[key], key === 'nachricht' ? nl2br(h(v)) : h(v)]);
    textRows += pad(FIELDS[key] + ':') + (key === 'nachricht' ? '\n' : '') + v + '\n';
  }
  const b = button('https://wa.me/491622403682', 'WhatsApp schreiben', '#25d366', '#03220f') + button('tel:+491622403682', 'Anrufen · 0162 2403682', '#0a6cff');
  return {
    subject: 'Ihre Anfrage bei Niktos – ich melde mich in Kürze',
    html: tpl('bestaetigung.html', { logo_url: logo, name: h(d.name), rows: rows(pairs), buttons: b, site_url: SITE }),
    text: tpl('bestaetigung.txt', { name: d.name, rows: textRows.trimEnd(), site_url: SITE }),
  };
}

const sample = {
  form: 'projekt', anliegen: 'Website-Relaunch', paket: 'boost', hat_website: 'Ja', website_url: 'www.muster-baeckerei.de', branche: 'Gastronomie & Hotel',
  budget: '500 – 1.500 €', zeitrahmen: 'In 1–3 Monaten', name: 'Sabine Müller', firma: 'Muster Bäckerei', email: 'sabine.mueller@example.de', telefon: '0171 2345678',
  kontaktweg: 'WhatsApp', nachricht: 'Hallo Nikola,\nunsere Website ist über 8 Jahre alt und auf dem Handy kaum lesbar.\nWir hätten gern auch eine Seite für unseren Catering-Service.\n\nViele Grüße\nSabine Müller',
  datum: '30.09.2026, 14:32 Uhr',
};
const logoLocal = fs.existsSync(path.join(ROOT, 'dist/assets/img/email-logo.png')) ? '../dist/assets/img/email-logo.png' : `${SITE}/assets/img/email-logo.png`;

const a = buildAnfrage(sample, logoLocal);
const c = buildBestaetigung(sample, logoLocal);
fs.writeFileSync(path.join(OUT, 'anfrage.html'), a.html);
fs.writeFileSync(path.join(OUT, 'anfrage.txt'), `Betreff: ${a.subject}\n\n${a.text}`);
fs.writeFileSync(path.join(OUT, 'bestaetigung.html'), c.html);
fs.writeFileSync(path.join(OUT, 'bestaetigung.txt'), `Betreff: ${c.subject}\n\n${c.text}`);

const frame = (file, w, hgt) => `<iframe src="${file}" style="width:${w}px;height:${hgt}px;border:1px solid #d6dbe6;border-radius:12px;background:#fff"></iframe>`;
const block = (title, subject, file, txt) => `
<section><h2>${title}</h2><p class="subj"><b>Betreff:</b> ${h(subject)}</p>
<div class="row"><div><p class="lbl">Desktop / Gmail</p>${frame(file, 660, 1300)}</div><div><p class="lbl">Handy (375 px)</p>${frame(file, 377, 1300)}</div>
<div><p class="lbl">Nur-Text-Version</p><pre>${h(fs.readFileSync(path.join(OUT, txt), 'utf8'))}</pre></div></div></section>`;
fs.writeFileSync(path.join(OUT, 'index.html'), `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>E-Mail-Vorschau – Niktos</title>
<style>body{font-family:Arial,sans-serif;background:#e9ebf2;margin:0;padding:24px;color:#10131c}h1{margin:0 0 4px}h2{margin:36px 0 4px}.subj{margin:0 0 12px;color:#555}.row{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap}.lbl{font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6b7285;margin:0 0 6px}pre{background:#fff;border:1px solid #d6dbe6;border-radius:12px;padding:16px;width:420px;white-space:pre-wrap;font-size:13px;margin:0}</style></head><body>
<h1>E-Mail-Vorschau</h1><p>Beispieldaten · generiert mit <code>node scripts/mail-preview.js</code> aus denselben Vorlagen wie <code>kontakt.php</code>.</p>
${block('1 · Benachrichtigung an info@', a.subject, 'anfrage.html', 'anfrage.txt')}
${block('2 · Automatische Bestätigung an den Kunden', c.subject, 'bestaetigung.html', 'bestaetigung.txt')}
</body></html>`);
console.log('✓ mail-preview/index.html');
