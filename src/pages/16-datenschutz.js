const site = require('../site');
const C = require('../components');

const crumbs = [{ name: 'Startseite', url: '/' }, { name: 'Datenschutzerklärung', url: '/datenschutzerklaerung/' }];

module.exports = {
  path: '/datenschutzerklaerung/',
  priority: 0.2,
  crumbs,
  title: 'Datenschutzerklärung | Niktos – Webdesign & SEO Ludwigsburg',
  description: `Datenschutzerklärung von ${site.legalName}: Informationen zur Verarbeitung personenbezogener Daten auf niktos.com gemäß DSGVO.`,
  body: `
${C.pageHero({ crumbs, h1: 'Datenschutzerklärung', actions: false })}
<section class="section" style="padding-top:clamp(40px,5vw,70px)">
  <div class="container">
    <div class="prose prose--card">
      <h2 class="mt-0">1. Verantwortlicher</h2>
      <p>${site.legalName}<br>Inhaber: ${site.owner}<br>${site.address.street ? site.address.street + ', ' : ''}${site.address.zip} ${site.address.city}<br>Telefon: ${site.phone} · E-Mail: <a href="mailto:${site.email}">${site.email}</a></p>

      <h2>2. Allgemeines</h2>
      <p>Der Schutz Ihrer Daten ist mir wichtig. Diese Website ist bewusst datensparsam aufgebaut: Es werden <strong>keine Cookies zu Tracking- oder Werbezwecken</strong> gesetzt, nur eine cookielose, datensparsame Reichweitenmessung genutzt (siehe Abschnitt 10) und <strong>keine Schriftarten von Drittanbietern</strong> geladen – alle Schriften werden lokal von meinem Server ausgeliefert. Personenbezogene Daten verarbeite ich nur, soweit dies zur Bereitstellung der Website und zur Bearbeitung Ihrer Anfragen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b und f DSGVO.</p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>Diese Website wird bei der Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaka, Zypern, gehostet. Beim Aufruf der Website werden durch den Hosting-Anbieter automatisch Informationen in Server-Logfiles gespeichert, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Referrer-URL, Browsertyp und -version sowie Betriebssystem. Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs und der Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO) und werden nach kurzer Zeit gelöscht. Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO).</p>
      <!-- TODO: Hosting-Adresse und AV-Vertrag im Hostinger-Konto prüfen. -->

      <h2>4. Cookies</h2>
      <p>Diese Website setzt keine Cookies, die eine Einwilligung erfordern. Technisch notwendige Speichervorgänge im Browser finden nur statt, soweit sie für die Funktion der Seite unbedingt erforderlich sind (§ 25 Abs. 2 TDDDG).</p>

      <h2>5. Kontaktformular, Projekt-Anfrage, E-Mail, Telefon</h2>
      <p>Wenn Sie mich über das Kontaktformular, die Projekt-Anfrage (Schritt-für-Schritt-Formular), per E-Mail oder telefonisch kontaktieren, verarbeite ich die von Ihnen angegebenen Daten (z. B. Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Angaben zu Ihrem Projekt wie Anliegen, bestehende Website, Branche, Budget, Zeitrahmen und Ihre Nachricht) zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Der Versand der Formulardaten erfolgt verschlüsselt über den E-Mail-Server meines Hosting-Anbieters. Sie erhalten automatisch eine Eingangsbestätigung mit einer Kopie Ihrer Angaben an die angegebene E-Mail-Adresse. Zum Schutz vor Missbrauch speichere ich kurzzeitig (max. 10 Minuten) einen anonymisierten Hash-Wert Ihrer IP-Adresse (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

      <h2>6. WhatsApp</h2>
      <p>Auf dieser Website verlinke ich auf WhatsApp (WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland). Erst wenn Sie auf einen WhatsApp-Link klicken, wird die WhatsApp-Anwendung bzw. -Website geöffnet; dabei gelten die Datenschutzbestimmungen von WhatsApp/Meta. Wenn Sie mich über WhatsApp kontaktieren, verarbeite ich Ihre Telefonnummer und Nachrichteninhalte zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Eine Übermittlung von Daten in die USA kann dabei nicht ausgeschlossen werden. Alternativ können Sie mich jederzeit per Telefon, E-Mail oder Formular erreichen.</p>

      <h2>7. Google Maps (nur nach Klick)</h2>
      <p>Zur Darstellung meines Standorts biete ich eine Karte von Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) an. Die Karte wird <strong>erst geladen, wenn Sie auf „Karte laden“ klicken</strong>. Erst dann wird eine Verbindung zu Servern von Google hergestellt, wobei u. a. Ihre IP-Adresse an Google übertragen und ggf. Cookies gesetzt werden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von Google</a>.</p>

      <h2>8. Links zu Instagram, Google und Referenz-Websites</h2>
      <p>Ich verlinke auf mein Instagram-Profil (Meta Platforms Ireland Limited), auf Google Maps sowie auf Websites meiner Kunden. Es handelt sich um einfache Links – es werden keine Daten an diese Anbieter übertragen, solange Sie die Links nicht anklicken.</p>

      <h2>9. Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, z. B. beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg.</p>

      <h2>10. Reichweitenmessung mit Umami</h2>
      <p>Ich nutze Umami Analytics (Umami Software, Inc.), ein datenschutzfreundliches Webanalyse-Werkzeug, um die Nutzung dieser Website statistisch auszuwerten (z. B. aufgerufene Seiten, Klicks auf Telefon-, E-Mail- und WhatsApp-Links, Schritte im Anfrage-Formular – ohne dessen Inhalte). Umami <strong>setzt keine Cookies</strong>, speichert <strong>keine IP-Adressen</strong> und erstellt keine Nutzerprofile; eine Identifizierung einzelner Besucher ist nicht möglich. Wenn Ihr Browser „Do Not Track“ sendet, findet keine Erfassung statt. Rechtsgrundlage ist mein berechtigtes Interesse an der Verbesserung meines Angebots (Art. 6 Abs. 1 lit. f DSGVO).</p>
      <!-- TODO: Serverstandort von Umami Cloud (EU-Region) im Umami-Konto prüfen und hier ergänzen. -->

      <h2>11. SSL-/TLS-Verschlüsselung</h2>
      <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.</p>

      <p class="muted" style="margin-top:32px">Stand: ${new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>
    </div>
  </div>
</section>
`,
};
