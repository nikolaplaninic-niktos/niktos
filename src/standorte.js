// Standortseiten (local landing pages) – one entry per town, rendered by src/pages/20-standorte.js.
// Rules: real local substance only (no swapped town names), no invented stats/reviews, Kabic is the only reference.
// km/min: car route from Marbacher Str. 98 to the town hall, OpenStreetMap data via OSRM (no traffic), checked 24.11.2026.
// lat/lon = town hall (Rathaus) – used for the schematic route map and the "nearby" links.

const site = require('./site');
const euro = (n) => n.toLocaleString('de-DE') + ' €';

module.exports = [
  {
    slug: 'kornwestheim', name: 'Kornwestheim', zip: '70806', km: 6.9, min: 11, roads: ['L 1124', 'Stuttgarter Straße'],
    lat: 48.8596, lon: 9.1857, dest: 'Rathaus Kornwestheim',
    title: 'Webdesign Kornwestheim – Website & lokales SEO | Niktos',
    description: 'Webdesign für Betriebe in Kornwestheim: schnelle Websites, die in Kornwestheim, Ludwigsburg und dem Stuttgarter Norden gefunden werden. 11 Minuten entfernt.',
    lead: 'Kornwestheim liegt genau zwischen Ludwigsburg und Stuttgart, und so wird hier auch gesucht. Ich baue Websites für Betriebe aus Kornwestheim, die in beiden Richtungen gefunden werden, und bin in rund 11 Minuten bei Ihnen.',
    intro: [
      'Kornwestheim ist eine Stadt mit Industriegeschichte. Der Name Salamander steht bis heute für die Schuhproduktion, die das Stadtbild lange geprägt hat, und der große Rangierbahnhof zeigt, wie stark Güterverkehr und Logistik hier verwurzelt sind. Entlang der Achse Richtung Stuttgart sitzen Werkstätten, Lager, Handwerksbetriebe und Dienstleister, die ihre Kunden oft aus der ganzen Region holen.',
      'Für Ihre Website heißt das: „Kornwestheim“ allein reicht selten. Kunden kommen aus Zuffenhausen, Stammheim, Pattonville, Ludwigsburg und Remseck. Die Seite sollte dieses Einzugsgebiet klar benennen, ohne für jeden Nachbarort eine leere Kopie anzulegen.',
    ],
    branchen: [
      ['Logistik & Transport', 'Geschäftskunden wollen schnell sehen, was Sie fahren oder lagern. Leistungsseiten pro Angebot, ein fester Ansprechpartner und ein Formular, das Menge und Termin gleich mit abfragt.'],
      ['Kfz-Werkstätten', 'Öffnungszeiten, Leistungen mit Richtpreisen, Termin per WhatsApp. Für eine Werkstatt ist der Eintrag in Google Maps oft wichtiger als die Startseite, beides muss zusammenpassen.'],
      ['Praxen & Therapie', 'Ruhige, gut lesbare Seiten mit klaren Infos zu Terminen und Anfahrt, inklusive Hinweis auf die S-Bahn: S4 und S5 halten in Kornwestheim.'],
    ],
    tips: [
      ['Den Stuttgarter Norden mitdenken', 'Wer auch Kunden in Zuffenhausen oder Stammheim sucht, nennt diese Stadtteile im Text und im Einzugsgebiet des Google-Profils. Ein Satz mit echtem Bezug („Wir arbeiten regelmäßig in …“) bringt mehr als eine Liste mit 30 Ortsnamen.'],
      ['Geschäftskunden überzeugen', 'B2B-Kunden prüfen Referenzen, Kapazitäten und Zertifikate. Diese Fakten gehören sichtbar auf die Seite, nicht in ein PDF, das niemand öffnet.'],
      ['Anfahrt ins Gewerbegebiet', 'Viele Betriebe sitzen abseits der Innenstadt. Ein kurzer Anfahrtsblock mit Einfahrt und Parkplätzen spart Ihnen jeden Tag Telefonate.'],
    ],
    faq: [
      ['Brauche ich eine Seite für Kornwestheim und eine für Stuttgart?', 'Nicht automatisch. Eine starke Seite pro Leistung, die Kornwestheim und die Nachbarorte mit echtem Bezug nennt, ist meist besser als viele dünne Ortsseiten. Eigene Ortsseiten lohnen sich erst, wenn Sie dort wirklich arbeiten und etwas Konkretes dazu erzählen können.'],
      ['Wie finden mich Kunden aus Kornwestheim über Google Maps?', 'Mit einem vollständigen Google-Unternehmensprofil (richtige Kategorie, Leistungen, Fotos, Öffnungszeiten), echten Bewertungen und einer Website, deren Name, Adresse und Telefonnummer exakt mit dem Profil übereinstimmen. Das richte ich auf Wunsch mit ein.'],
    ],
  },
  {
    slug: 'bietigheim-bissingen', name: 'Bietigheim-Bissingen', zip: '74321', km: 10.2, min: 16, roads: ['L 1124', 'B 27'],
    lat: 48.9593, lon: 9.1257, dest: 'Rathaus Bietigheim-Bissingen', kabic: true,
    title: 'Webdesign Bietigheim-Bissingen – Website & SEO | Niktos',
    description: 'Webdesign in Bietigheim-Bissingen: individuelle Websites mit lokalem SEO. Echtes Projekt vor Ort: der Relaunch für Kabic Hausmeister & Gartenpflege.',
    lead: 'In Bietigheim-Bissingen steht mein Referenzprojekt: der komplette Relaunch für Kabic Hausmeister & Gartenpflege. Ich kenne also nicht nur den Weg über die B 27, sondern auch, wie Kunden hier nach einem lokalen Betrieb suchen.',
    intro: [
      'Bietigheim-Bissingen ist 1975 aus zwei Städten zusammengewachsen, und das merkt man bis heute bei der Suche. Manche tippen „Bietigheim“, andere „Bissingen“, wieder andere den vollen Namen, dazu kommen Stadtteile wie Metterzimmern und Untermberg. Bekannt ist die Stadt für das Enzviadukt, den Pferdemarkt und die Steelers. Wirtschaftlich reicht das Spektrum von großen Industrieunternehmen bis zu vielen kleinen Handwerks- und Dienstleistungsbetrieben.',
      'Für Kabic hieß das konkret: eine eigene Seite pro Leistung statt einer langen Startseite, Texte mit klarem Bezug zum Landkreis Ludwigsburg und ein Anfrageformular mit automatischer Bestätigungs-Mail. So landet ein Kunde aus Bissingen direkt bei der Leistung, die er sucht.',
    ],
    branchen: [
      ['Hausmeister, Garten & Gebäude', 'Genau das Feld von Kabic: Leistungsseiten pro Angebot, ein klares Einsatzgebiet und Anfragen per Formular oder WhatsApp, auch vom Handy auf der Baustelle.'],
      ['Handwerk & Bau', 'Fotos echter Arbeiten aus der Region, ein Rückruf-Formular und eine klare Angabe, welche Orte Sie anfahren. Das schafft Vertrauen, bevor das Telefon klingelt.'],
      ['Gastronomie & Einzelhandel in der Altstadt', 'Aktuelle Öffnungszeiten, Speisekarte oder Sortiment als echte Textseite (nicht als PDF) und ein Google-Profil mit Fotos.'],
    ],
    tips: [
      ['Alle Schreibweisen abdecken', '„Bietigheim“, „Bissingen“ und „Bietigheim-Bissingen“ werden unterschiedlich gesucht. Der volle Name gehört in Titel und Adresse, die Kurzformen natürlich in den Text.'],
      ['Leistung vor Ort', 'Wer „Gartenpflege Bietigheim“ sucht, will eine Seite über Gartenpflege, nicht eine Startseite mit zehn Themen. Eine Seite pro Leistung ist der wichtigste Hebel.'],
      ['Schnell auf dem Handy', 'Viele Anfragen kommen unterwegs. Die Kabic-Website ist deshalb auf kurze Ladezeit und einen gut erreichbaren Anfrage-Button gebaut.'],
    ],
    faq: [
      ['Kann ich mir ein echtes Projekt aus Bietigheim-Bissingen ansehen?', 'Ja. Die Website von Kabic Hausmeister & Gartenpflege ist online unter kabic-hausmeister-gartenpflege.de. Mehr zum Projekt finden Sie bei den <a href="/referenzen/">Referenzen</a>.'],
      ['Übernehmen Sie auch den Relaunch einer bestehenden Website?', 'Ja, so war es auch bei Kabic. Ich übernehme die wertvollen Inhalte, richte Weiterleitungen von den alten Adressen ein und melde die neue Sitemap bei Google an, damit bestehende Rankings nicht verloren gehen.'],
    ],
  },
  {
    slug: 'asperg', name: 'Asperg', zip: '71679', km: 5.9, min: 11, roads: ['L 1124', 'B 27', 'L 1138'],
    lat: 48.9059, lon: 9.1347, dest: 'Rathaus Asperg',
    title: 'Webdesign Asperg – Websites für Betriebe vor Ort | Niktos',
    description: 'Webdesign für Asperg: schnelle Websites und lokales SEO für Handwerk, Praxen und Läden unter dem Hohenasperg. Rund 6 km von Niktos in Ludwigsburg.',
    lead: 'Asperg ist klein, die Wege sind kurz, und genau darin liegt die Chance: Wer hier eine gute Website und ein gepflegtes Google-Profil hat, fällt bei lokalen Suchen schneller auf als in der Großstadt. Ich sitze knapp 6 km entfernt in Ludwigsburg.',
    intro: [
      'Die meisten kennen Asperg wegen des Hohenaspergs, der alten Festung über der Stadt. Darunter ist Asperg eine kleine Stadt mit kurzen Wegen: Handwerksbetriebe, Praxen, Friseure und Läden rund um den Marktplatz, dazu der S-Bahn-Halt der S5 Richtung Stuttgart und Bietigheim.',
      'Für die Suche bedeutet das: Bei Anfragen wie „Elektriker Asperg“ zeigt Google oft auch Betriebe aus Ludwigsburg oder Tamm, weil es in Asperg selbst nur wenige Anbieter mit guter Website gibt. Ein Betrieb aus Asperg, der seine Leistungen klar beschreibt, hat hier echte Chancen.',
    ],
    branchen: [
      ['Handwerk', 'Leistungen, Einsatzgebiet (Asperg, Tamm, Möglingen, Ludwigsburg-West) und eine einfache Anfrage per Foto über WhatsApp. Das reicht oft schon, um sich von der Konkurrenz abzuheben.'],
      ['Praxen & Gesundheit', 'Sprechzeiten, Leistungen in verständlicher Sprache und ein Hinweis zur Anfahrt mit der S5. Patienten suchen meist am Handy.'],
      ['Friseure & Kosmetik', 'Preisliste als Text, Fotos echter Arbeiten und ein klarer Weg zur Terminbuchung, ob per Telefon, WhatsApp oder Online-Kalender.'],
    ],
    tips: [
      ['Kleine Stadt, kleiner Aufwand', 'In Asperg reichen oft eine saubere Website, ein vollständiges Google-Profil und einige echte Bewertungen, um bei lokalen Suchen weit oben zu stehen. Teure Kampagnen braucht es dafür selten.'],
      ['Nachbarorte ehrlich nennen', 'Wer auch in Tamm, Möglingen oder Markgröningen arbeitet, schreibt das mit einem echten Beispiel auf die Seite. Kopierte Ortsseiten mit ausgetauschtem Namen wertet Google eher ab.'],
      ['Gesicht zeigen', 'In einer kleinen Stadt kennt man sich. Ein echtes Foto von Ihnen und Ihrem Team wirkt hier stärker als jedes Stockfoto.'],
    ],
    faq: [
      ['Lohnt sich eine eigene Website für einen kleinen Betrieb in Asperg?', 'Ja, gerade dann. Viele Kunden prüfen einen Betrieb zuerst online, auch wenn sie über Empfehlung kommen. Für den Start reicht oft das Paket Launch: eine kompakte Website mit bis zu 3 Seiten, Kontaktformular und WhatsApp-Button.'],
      ['Werde ich mit einer Website auch in Ludwigsburg gefunden?', 'Für Ludwigsburg ist die Konkurrenz größer. Realistisch ist: In Asperg und den direkten Nachbarorten gut sichtbar werden, und in Ludwigsburg mit einer starken Leistungsseite und guten Bewertungen nach und nach aufholen. Ein Platz 1 lässt sich nicht garantieren.'],
    ],
  },
  {
    slug: 'remseck-am-neckar', name: 'Remseck am Neckar', short: 'Remseck', zip: '71686', km: 9.4, min: 11, roads: ['L 1124', 'L 1100'],
    lat: 48.8725, lon: 9.2732, dest: 'Rathaus Remseck am Neckar',
    title: 'Webdesign Remseck am Neckar – Website & SEO | Niktos',
    description: 'Webdesign für Remseck am Neckar: Websites, die in Aldingen, Neckarrems, Hochberg, Hochdorf und Neckargröningen gefunden werden. Rund 11 Minuten von Niktos.',
    lead: 'Remseck besteht aus mehreren Orten, und Ihre Kunden suchen oft nach genau diesem Ortsteil. Ich baue Websites für Betriebe aus Remseck am Neckar, die das berücksichtigen, und bin über die L 1100 in rund 11 Minuten bei Ihnen.',
    intro: [
      'Remseck am Neckar ist eine junge Stadt: 1975 aus Aldingen, Hochberg, Hochdorf, Neckargröningen und Neckarrems entstanden, dort, wo die Rems in den Neckar mündet. Dazu gehört ein Teil von Pattonville, das sich Remseck mit Kornwestheim teilt. Mit der Stadtbahn ist man schnell in Stuttgart, viele Betriebe arbeiten deshalb für Kunden auf beiden Seiten der Kreisgrenze.',
      'Für eine Website heißt das: Die Ortsteile gehören in den Text, weil Kunden oft „Aldingen“ oder „Hochberg“ statt „Remseck“ eintippen. Gleichzeitig sollte klar sein, ob Sie auch nach Stuttgart-Mühlhausen, Kornwestheim oder Waiblingen fahren.',
    ],
    branchen: [
      ['Handwerk & Haustechnik', 'Viele Aufträge kommen aus Stuttgart und dem Rems-Murr-Kreis. Ein klares Einsatzgebiet und Fotos echter Projekte helfen, die richtigen Anfragen zu bekommen.'],
      ['Dienstleister & Büros', 'Steuerberater, Versicherungen, Agenturen: Hier zählen ein seriöser Auftritt, ein Foto des Teams und ein einfacher Weg zum Erstgespräch.'],
      ['Sport, Freizeit & Gesundheit', 'Kursplan, Preise und Online-Anmeldung als klare Seiten, damit Interessenten nicht erst anrufen müssen.'],
    ],
    tips: [
      ['Ortsteile ausschreiben', 'Nennen Sie den Ortsteil, in dem Sie sitzen, in Adresse und Text, und erwähnen Sie die anderen mit echtem Bezug. So passen Sie zu Suchen wie „Physiotherapie Aldingen“.'],
      ['Kreisgrenze überspringen', 'Remseck liegt am Rand des Landkreises. Wer auch in Stuttgart oder im Rems-Murr-Kreis arbeitet, schreibt das deutlich und nennt die Orte, die er wirklich anfährt.'],
      ['Ein Google-Profil, eine Adresse', 'Name, Adresse und Telefon müssen auf Website, Google-Profil und in Verzeichnissen exakt gleich sein, inklusive „Remseck am Neckar“ statt mal so, mal so.'],
    ],
    faq: [
      ['Soll ich „Remseck“ oder den Ortsteil auf die Website schreiben?', 'Beides. In die Adresse gehört die offizielle Angabe mit Ortsteil, in den Text der Name, den Ihre Kunden im Alltag benutzen. Google versteht beides, wenn es sauber und einheitlich geschrieben ist.'],
      ['Können Sie auch Texte für meine Website schreiben?', 'Ja. In den Paketen Boost und Dominate schreibe ich die SEO-Texte für Sie, auf Basis eines kurzen Gesprächs über Ihre Leistungen und Kunden. Sie prüfen und geben frei.'],
    ],
  },
  {
    slug: 'freiberg-am-neckar', name: 'Freiberg am Neckar', short: 'Freiberg', zip: '71691', km: 5.3, min: 9, roads: ['L 1124', 'L 1129'],
    lat: 48.9345, lon: 9.1920, dest: 'Rathaus Freiberg am Neckar',
    title: 'Webdesign Freiberg am Neckar – Website & SEO | Niktos',
    description: 'Webdesign in Freiberg am Neckar: Websites mit lokalem SEO für Beihingen, Geisingen und Heutingsheim. Von Niktos in Ludwigsburg nur rund 9 Minuten.',
    lead: 'Freiberg am Neckar ist der nächste Ort auf dieser Liste: gut 5 km und rund 9 Minuten von meinem Standort in der Marbacher Straße. Ich baue hier Websites, die bei Google eindeutig als Freiberg am Neckar erkannt werden.',
    intro: [
      'Freiberg am Neckar ist 1972 aus Beihingen, Geisingen und Heutingsheim entstanden. Die alten Ortsnamen leben in Adressen und im Alltag weiter, das Rathaus steht in Beihingen. Zwischen Neckar, Wohngebieten und Gewerbeflächen arbeiten viele kleine Betriebe, die ihre Kunden vor allem in Freiberg selbst, in Pleidelsheim, Benningen und Ludwigsburg finden.',
      'Ein Punkt, den viele übersehen: „Freiberg“ allein ist bei Google mehrdeutig, die bekannte Universitätsstadt in Sachsen heißt genauso. Wer nur „Freiberg“ auf die Website schreibt, macht es Google unnötig schwer.',
    ],
    branchen: [
      ['Handwerk & Bau', 'Leistungsseiten mit Fotos aus der Region, Einsatzgebiet mit den Nachbarorten am Neckar und eine schnelle Anfrage per WhatsApp.'],
      ['Kleine Dienstleister', 'Für Ein-Personen-Betriebe reicht oft eine kompakte Website mit klarer Leistung, Foto und Kontaktwegen. Wichtig ist, dass sie schnell lädt und gut auf dem Handy aussieht.'],
      ['Vereine & lokale Angebote', 'Termine, Ansprechpartner und Anmeldung übersichtlich auf einer Seite, die sich auch später leicht aktuell halten lässt.'],
      ['Praxen & Therapie', 'Patienten aus Beihingen, Geisingen und Heutingsheim suchen kurze Wege. Sprechzeiten, Leistungen in klarer Sprache und der Ortsteil in der Adresse helfen bei der Orientierung.'],
    ],
    tips: [
      ['Immer „am Neckar“', 'Schreiben Sie in Titel, Adresse und Google-Profil „Freiberg am Neckar“ (oder „Freiberg a. N.“) mit Postleitzahl 71691. So verwechselt Google Sie nicht mit Freiberg in Sachsen.'],
      ['Ortsteile nutzen', 'Beihingen, Geisingen und Heutingsheim werden gesucht. Erwähnen Sie den Ortsteil, in dem Sie sitzen, und die anderen dort, wo es einen echten Bezug gibt.'],
      ['Nah an Ludwigsburg', 'Viele Kunden aus Freiberg suchen auch „Ludwigsburg“. Eine Leistungsseite, die beide Orte ehrlich nennt, deckt das ab.'],
    ],
    faq: [
      ['Warum werde ich bei „Freiberg“ nicht gefunden?', 'Häufig, weil Google den Ort nicht eindeutig zuordnen kann. Mit „Freiberg am Neckar“, der Postleitzahl 71691 und einheitlichen Firmendaten auf Website, Google-Profil und in Verzeichnissen wird die Zuordnung klar. Strukturierte Daten auf der Website helfen zusätzlich.'],
      ['Wie schnell kann meine Website online sein?', 'Eine kompakte Website (Paket Launch) ist in etwa einer Woche fertig, eine größere SEO-Website (Boost) in etwa zwei Wochen, sobald Texte und Bilder abgestimmt sind.'],
    ],
  },
  {
    slug: 'marbach-am-neckar', name: 'Marbach am Neckar', short: 'Marbach', zip: '71672', km: 6.7, min: 9, roads: ['L 1124', 'L 1100'],
    lat: 48.9403, lon: 9.2568, dest: 'Rathaus Marbach am Neckar',
    title: 'Webdesign Marbach am Neckar – Website & SEO | Niktos',
    description: 'Webdesign für Marbach am Neckar: Websites für Gastronomie, Unterkünfte, Altstadt-Läden und Handwerk, die Gäste und Einheimische finden. 9 Minuten entfernt.',
    lead: 'Marbach am Neckar zieht Besucher aus ganz Deutschland an, und viele davon suchen unterwegs am Handy nach Café, Unterkunft oder Laden. Ich baue Websites für Betriebe aus Marbach, die Gäste und Einheimische gleichermaßen erreichen. Von der Marbacher Straße in Ludwigsburg sind es rund 9 Minuten.',
    intro: [
      'Marbach ist Schillers Geburtsstadt. Mit dem Deutschen Literaturarchiv, dem Schiller-Nationalmuseum und der Altstadt kommen das ganze Jahr über Besucher, viele davon zum ersten Mal. Dazu kommt Rielingshausen als Stadtteil, und die S4 endet hier, was Marbach auch für Pendler nach Ludwigsburg und Stuttgart interessant macht.',
      'Für lokale Betriebe gibt es damit zwei Zielgruppen: Einheimische, die einen Handwerker oder eine Praxis suchen, und Gäste, die schnell wissen wollen, wo sie essen, übernachten oder einkaufen können. Eine gute Website bedient beide, ohne zu überladen.',
    ],
    branchen: [
      ['Gastronomie & Cafés', 'Speisekarte als Text, aktuelle Öffnungszeiten, Lage in der Altstadt und Tischreservierung. Besucher entscheiden in Sekunden, meist am Handy.'],
      ['Unterkünfte & Ferienwohnungen', 'Gute Fotos, Ausstattung, Lage zu Museum und Bahnhof und ein direkter Anfrageweg, damit nicht jede Buchung über ein Portal mit Provision läuft.'],
      ['Läden in der Altstadt', 'Sortiment, besondere Angebote und ein Google-Profil mit Fotos. Wer durch Marbach bummelt, sucht oft „in der Nähe“.'],
    ],
    tips: [
      ['Für Gäste schreiben', 'Besucher kennen Marbach nicht. Kurze Wege beschreiben („3 Minuten vom Schillerhaus“), Parkmöglichkeiten nennen und bei Bedarf eine englische Kurzfassung anbieten.'],
      ['„Marbach“ eindeutig machen', 'Marbach gibt es mehrfach im deutschsprachigen Raum. „Marbach am Neckar“ mit Postleitzahl in Titel, Adresse und Google-Profil sorgt für eine klare Zuordnung.'],
      ['Öffnungszeiten pflegen', 'Nichts ärgert Gäste mehr als ein geschlossener Laden trotz „Geöffnet“ bei Google. Abweichende Zeiten an Feiertagen und zu Veranstaltungen gehören ins Profil und auf die Website.'],
    ],
    faq: [
      ['Brauche ich als Gastronom in Marbach eine eigene Website, wenn ich auf Portalen bin?', 'Portale bringen Reichweite, bestimmen aber Darstellung und Gebühren. Eine eigene Website ist der Ort, an dem Speisekarte, Öffnungszeiten und Reservierung so stehen, wie Sie es wollen, und auf den Google, Ihr Profil und KI-Assistenten verweisen können.'],
      ['Können Sie die Website zweisprachig anlegen?', 'Ja. Für Betriebe mit vielen Gästen bietet sich eine englische Kurzfassung der wichtigsten Seiten an. Den Umfang klären wir im Erstgespräch, der Preis steht vorher fest.'],
    ],
  },
  {
    slug: 'tamm', name: 'Tamm', zip: '71732', km: 8.1, min: 13, roads: ['L 1124', 'B 27', 'L 1133'],
    lat: 48.9220, lon: 9.1227, dest: 'Rathaus Tamm',
    title: 'Webdesign Tamm (Kreis Ludwigsburg) – Websites | Niktos',
    description: 'Webdesign für Betriebe in Tamm bei Ludwigsburg: schnelle Websites mit lokalem SEO, damit Kunden aus Tamm, Asperg und Bietigheim Sie finden.',
    lead: 'Tamm liegt zwischen Asperg und Bietigheim-Bissingen, mit eigenem S-Bahn-Halt und vielen kleinen Betrieben. Ich baue Websites für Tammer Unternehmen, die bei Google eindeutig dem Landkreis Ludwigsburg zugeordnet werden. Fahrzeit von mir: rund 13 Minuten.',
    intro: [
      'Tamm ist eine Gemeinde mit kurzen Wegen: Ortskern, Wohngebiete wie die Hohenstange, ein S5-Halt Richtung Stuttgart und Bietigheim. Die Betriebe hier sind meist klein, oft Familienbetriebe im Handwerk, in der Pflege oder im Dienstleistungsbereich, und ihre Kunden kommen aus Tamm, Asperg, Bietigheim-Bissingen und Markgröningen.',
      'Eine Besonderheit für die Suche: „Tamm“ ist kurz und mehrdeutig, es ist auch ein häufiger Nachname. Google braucht deshalb mehr Hinweise als bei einem längeren Ortsnamen, damit Ihre Seite bei „Maler Tamm“ richtig ankommt.',
    ],
    branchen: [
      ['Familienbetriebe im Handwerk', 'Eine Seite pro Leistung, Fotos echter Arbeiten und die Orte, die Sie regelmäßig anfahren. Dazu ein Foto der Familie oder des Teams, das schafft Nähe.'],
      ['Pflege & Betreuung', 'Angehörige suchen oft unter Zeitdruck. Klare Leistungen, Einzugsgebiet, Ansprechpartner mit Telefonnummer und ein kurzes Formular sind hier wichtiger als Design-Effekte.'],
      ['Dienstleister für Privatkunden', 'Reinigung, Umzug, Gartenarbeit: Preise oder Preisrahmen, ein Rückruf-Formular und Anfragen per WhatsApp senken die Hürde.'],
    ],
    tips: [
      ['Ortsnamen eindeutig machen', 'Schreiben Sie „Tamm“ zusammen mit Postleitzahl 71732 und „Landkreis Ludwigsburg“ oder „bei Ludwigsburg“ in Adresse, Titel und Google-Profil. So ist klar, welcher Ort gemeint ist.'],
      ['Strukturierte Daten nutzen', 'Mit schema.org-Daten (Adresse, Einzugsgebiet, Leistungen) bekommt Google die Zuordnung schwarz auf weiß. Das ist in jedem Niktos-Paket enthalten.'],
      ['Bewertungen aus dem Ort', 'Echte Bewertungen von Kunden aus Tamm und Umgebung stärken das Google-Profil. Fragen Sie nach einem erledigten Auftrag einfach direkt mit Link.'],
    ],
    faq: [
      ['Warum zeigt Google bei „Tamm“ manchmal ganz andere Ergebnisse?', 'Weil „Tamm“ auch ein Nachname und anderswo ein Ortsname ist. Mit Postleitzahl, Landkreis und einheitlichen Firmendaten auf Website, Profil und Verzeichnissen ordnet Google Ihren Betrieb sicher dem Ort Tamm bei Ludwigsburg zu.'],
      ['Ich habe noch kein Google-Profil. Hilft mir eine Website trotzdem?', 'Ja, aber beides zusammen wirkt am stärksten. Die Website erklärt Ihre Leistungen ausführlich, das Profil sorgt für die Sichtbarkeit in Google Maps. Die Einrichtung können Sie zu jedem Paket dazubuchen.'],
    ],
  },
  {
    slug: 'moeglingen', name: 'Möglingen', zip: '71696', km: 11.1, min: 14, roads: ['L 1124', 'B 27', 'A 81', 'L 1140'],
    lat: 48.8860, lon: 9.1269, dest: 'Rathaus Möglingen',
    title: 'Webdesign Möglingen – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Möglingen im Strohgäu: Websites, die Kunden aus Möglingen, Asperg, Schwieberdingen und Ludwigsburg finden. Rund 14 Minuten von Niktos.',
    lead: 'Möglingen liegt im Strohgäu, nah an der A 81 und direkt neben Ludwigsburg. Ich baue Websites für Betriebe aus Möglingen, die sowohl im Ort als auch im westlichen Landkreis gefunden werden.',
    intro: [
      'Möglingen ist eine Gemeinde mit Gewerbegebiet und guter Autobahnanbindung. Das zieht Betriebe an, die ihre Kunden in einem größeren Umkreis haben: Handwerk, Haustechnik, Fahrzeugtechnik, Großhandel. Gleichzeitig gibt es im Ortskern Praxen, Läden und Dienstleister für die Menschen vor Ort.',
      'Wer hier eine Website plant, sollte das Strohgäu mitdenken. Kunden sprechen oft von der Region statt vom einzelnen Ort, und Suchanfragen wie „Schreiner Strohgäu“ werden tatsächlich gestellt. Gleichzeitig wollen Sie auch in Ludwigsburg gefunden werden, das direkt angrenzt.',
    ],
    branchen: [
      ['Handwerk & Haustechnik', 'Heizung, Sanitär, Elektro: Notdienst-Hinweis, Leistungsseiten und ein Einsatzgebiet, das Ludwigsburg, Asperg, Markgröningen und Schwieberdingen ehrlich nennt.'],
      ['Gewerbe & Großhandel', 'Geschäftskunden suchen Sortiment, Lieferbedingungen und Ansprechpartner. Eine übersichtliche Struktur ist hier wichtiger als viele Animationen.'],
      ['Praxen & Dienstleister im Ort', 'Sprechzeiten, Leistungen und ein klarer Kontaktweg, mobil schnell erreichbar.'],
    ],
    tips: [
      ['Die Region nennen', 'Das Strohgäu ist für viele Kunden ein fester Begriff. Erwähnen Sie es dort im Text, wo es passt, zusammen mit den Orten, in denen Sie arbeiten.'],
      ['Gewerbegebiet sichtbar machen', 'Anfahrt, Ladezone, Öffnungszeiten für Abholung: Diese Infos sparen Ihren Kunden Zeit und Ihnen Anrufe.'],
      ['Ludwigsburg nicht verschenken', 'Wer an der Stadtgrenze sitzt, kann mit einer starken Leistungsseite auch bei Suchen in Ludwigsburg mitspielen. Voraussetzung ist echter Inhalt, kein reines Ortsnamen-Wiederholen.'],
    ],
    faq: [
      ['Sollte mein Betrieb aus Möglingen mit „Ludwigsburg“ werben?', 'Nur ehrlich. Ihre Adresse bleibt Möglingen. Auf der Website können Sie aber klar schreiben, dass Sie Kunden in Ludwigsburg betreuen, am besten mit einem echten Beispiel. Das hilft bei Suchen in beiden Orten.'],
      ['Was kostet eine Website für einen Handwerksbetrieb in Möglingen?', `Das hängt vom Umfang ab. Eine kompakte Website startet bei Niktos ab ${euro(site.packages[0].price)}, eine SEO-Website mit eigener Seite pro Leistung ab ${euro(site.packages[1].price)}. Alle Pakete finden Sie auf der Seite <a href="/preise/">Preise</a>.`],
    ],
  },
  {
    slug: 'markgroeningen', name: 'Markgröningen', zip: '71706', km: 10.2, min: 17, roads: ['L 1124', 'B 27', 'L 1138'],
    lat: 48.9051, lon: 9.0803, dest: 'Rathaus Markgröningen',
    title: 'Webdesign Markgröningen – Websites & SEO | Niktos',
    description: 'Webdesign in Markgröningen: Websites für Altstadt-Läden, Gastronomie und Handwerk, mit lokalem SEO und gepflegten Öffnungszeiten. 17 Minuten von Niktos.',
    lead: 'Markgröningen hat eine der schönsten Altstädte im Landkreis Ludwigsburg, und Betriebe, die genau dort zu Hause sind. Ich baue Websites, die diese Lage zeigen und bei lokalen Suchen gefunden werden. Von mir aus sind es rund 17 Minuten.',
    intro: [
      'Fachwerkhäuser, das große Fachwerk-Rathaus am Marktplatz und jedes Jahr im August der Schäferlauf, eines der ältesten Heimatfeste im Land: Markgröningen lebt von seiner Altstadt. Dazu gehört Unterriexingen als Stadtteil, an der Glems liegt die Stadt zwischen Asperg, Möglingen und Vaihingen an der Enz.',
      'Für Läden, Cafés und Gaststätten in der Altstadt heißt das: Die Lage ist ein Vorteil, den man auf der Website zeigen sollte. Für Handwerk und Dienstleister zählt dagegen ein klares Einsatzgebiet in den Strohgäu- und Enz-Gemeinden ringsum.',
    ],
    branchen: [
      ['Läden & Cafés in der Altstadt', 'Echte Fotos vom Laden, Öffnungszeiten und Lage am Marktplatz, dazu ein Google-Profil mit aktuellen Bildern. Wer bummelt, sucht „in der Nähe“.'],
      ['Gaststätten', 'Speisekarte als Text, Reservierung und gesonderte Zeiten zu Festen. Am Schäferlauf-Wochenende fragen viele Gäste nach, ob und wann geöffnet ist.'],
      ['Handwerk & Restaurierung', 'Wer in Fachwerk und Altbau arbeitet, zeigt Vorher-nachher-Fotos aus der Region. Das ist der stärkste Vertrauensbeweis.'],
    ],
    tips: [
      ['Feste einplanen', 'Sonderöffnungszeiten, Aktionen oder ein Hinweis zum Schäferlauf gehören rechtzeitig auf Website und Google-Profil. Das bringt Besucher, die sonst nicht kommen würden.'],
      ['Altstadt-Lage als Argument', '„Direkt am Marktplatz“ ist eine Information, nach der Menschen suchen. Schreiben Sie sie in Text, Titel und Anfahrtsbeschreibung.'],
      ['Unterriexingen nicht vergessen', 'Wer dort sitzt, nennt den Stadtteil in der Adresse. Kunden aus der Umgebung suchen oft genau so.'],
    ],
    faq: [
      ['Wie bekomme ich mehr Gäste über Google in Markgröningen?', 'Mit einem gepflegten Google-Profil (Fotos, Öffnungszeiten, Sonderzeiten an Festtagen), echten Bewertungen und einer Website, die Speisekarte oder Sortiment als lesbaren Text zeigt. Diese Grundlagen bringen meist mehr als Werbung.'],
      ['Können Sie meine Website auch laufend aktuell halten?', 'Ja. Mit dem Care-Paket kümmere ich mich um Hosting, Updates und kleine Änderungen, etwa neue Öffnungszeiten oder Aktionen, die Sie mir einfach per WhatsApp schicken.'],
    ],
  },
  {
    slug: 'besigheim', name: 'Besigheim', zip: '74354', km: 15.5, min: 23, roads: ['L 1124', 'B 27', 'L 1113'],
    lat: 48.9994, lon: 9.1413, dest: 'Rathaus Besigheim',
    title: 'Webdesign Besigheim – Websites für Wein & Handwerk | Niktos',
    description: 'Webdesign für Besigheim: Websites für Weingüter, Gastronomie, Ferienwohnungen und Handwerk an Enz und Neckar, mit lokalem SEO. Rund 23 Minuten von Niktos.',
    lead: 'Besigheim ist Weinstadt, Ausflugsziel und Wohnort zugleich. Ich baue Websites für Betriebe aus Besigheim, die Gäste und Kunden aus der Region erreichen, und bin über die B 27 in rund 23 Minuten bei Ihnen.',
    intro: [
      'Besigheim liegt dort, wo die Enz in den Neckar mündet. Die Altstadt mit ihren beiden Stadttürmen sitzt auf einem Bergsporn, ringsum ziehen sich steile Weinberge. Wein, Gastronomie und Tourismus prägen die Stadt, dazu kommen Handwerk und Dienstleister für die Menschen in Besigheim und Ottmarsheim.',
      'Für Betriebe hier gibt es zwei Arten von Suchen: Ausflügler und Weinfreunde, die nach Weinprobe, Besenwirtschaft oder Übernachtung suchen, und Einheimische, die einen Handwerker oder eine Praxis brauchen. Beides braucht eine eigene, klare Ansprache.',
    ],
    branchen: [
      ['Weingüter & Wengerter', 'Weinliste, Verkaufszeiten, Weinproben und Hoffeste: gut lesbar, mit Bildern aus dem eigenen Weinberg und einer Anfrage für Gruppen. Ein Online-Shop ist möglich, aber nicht immer nötig.'],
      ['Gastronomie & Besen', 'Öffnungszeiten ändern sich saisonal. Eine Website, die sich schnell aktualisieren lässt, und ein gepflegtes Google-Profil sind hier entscheidend.'],
      ['Ferienwohnungen', 'Fotos, Ausstattung, Lage zu Altstadt und Radwegen und eine direkte Buchungsanfrage, damit nicht jede Buchung über ein Portal mit Provision läuft.'],
    ],
    tips: [
      ['Saison abbilden', 'Hoffeste, Weinproben, Besenzeiten: Termine gehören auf eine eigene, aktuelle Seite. Veraltete Termine schaden mehr als gar keine.'],
      ['Für Ausflügler schreiben', 'Gäste kommen mit dem Rad, dem Zug oder dem Auto. Anfahrt, Parken und Entfernung zur Altstadt helfen bei der Entscheidung.'],
      ['Bilder aus Besigheim', 'Echte Fotos aus den eigenen Weinbergen und Räumen wirken stärker als Stockfotos. Ich achte darauf, dass sie trotzdem schnell laden.'],
    ],
    faq: [
      ['Lohnt sich ein Online-Shop für ein kleines Weingut in Besigheim?', 'Nicht immer. Oft reicht eine gut gepflegte Weinliste mit Bestellung per E-Mail, Telefon oder WhatsApp. Ein Shop lohnt sich, wenn regelmäßig versendet wird. Das klären wir ehrlich im Erstgespräch.'],
      ['Wie werde ich bei „Weinprobe Besigheim“ gefunden?', 'Mit einer eigenen Seite zur Weinprobe (Ablauf, Preise, Gruppengröße, Termine), einem passenden Google-Profil und Bewertungen von Gästen. Ein einzelner Satz auf der Startseite reicht dafür meist nicht.'],
    ],
  },
  {
    slug: 'korntal-muenchingen', name: 'Korntal-Münchingen', zip: '70825', km: 13.5, min: 19, roads: ['L 1124', 'Stuttgarter Straße', 'B 10'],
    lat: 48.8318, lon: 9.1237, dest: 'Rathaus Korntal',
    title: 'Webdesign Korntal-Münchingen – Website & SEO | Niktos',
    description: 'Webdesign für Korntal-Münchingen: Websites für Betriebe, Praxen und soziale Einrichtungen in Korntal, Münchingen und Kallenberg. Rund 19 Minuten von Niktos.',
    lead: 'Korntal-Münchingen besteht aus zwei sehr unterschiedlichen Orten, und Ihre Kunden suchen meist nach einem davon. Ich baue Websites für Betriebe und Einrichtungen aus Korntal-Münchingen, die genau das berücksichtigen.',
    intro: [
      'Korntal wurde 1819 von der Evangelischen Brüdergemeinde gegründet, die den Ort bis heute mit Schulen und sozialen Einrichtungen prägt. Münchingen ist deutlich älter, ländlicher und hat das größere Gewerbegebiet. Dazu kommt Kallenberg. Von Korntal aus fährt die Strohgäubahn ins Umland, nach Stuttgart-Weilimdorf und Zuffenhausen ist es nicht weit.',
      'Für die Website bedeutet das: Ein Betrieb in Münchingen spricht oft Gewerbekunden und das Strohgäu an, eine Praxis in Korntal eher Familien aus Korntal, Weilimdorf und Stammheim. Der Doppelname gehört in die Adresse, im Text zählt der Ort, den Ihre Kunden wirklich benutzen.',
    ],
    branchen: [
      ['Soziale Einrichtungen & Bildung', 'Viele Menschen, verschiedene Fragen: Angebote, Ansprechpartner, Stellenangebote. Hier zählen klare Struktur und gute Lesbarkeit, auch für ältere Besucher und mit Screenreader.'],
      ['Gewerbe in Münchingen', 'Leistungen, Referenzen und eine Karriere-Seite. Gerade kleinere Betriebe finden Fachkräfte heute häufig über die eigene Website.'],
      ['Praxen & Therapie in Korntal', 'Leistungen in verständlicher Sprache, Sprechzeiten und Anfahrt mit Stadtbahn oder Strohgäubahn.'],
    ],
    tips: [
      ['Den richtigen Ortsteil nennen', 'Gesucht wird „Physiotherapie Korntal“, nicht „Physiotherapie Korntal-Münchingen“. Schreiben Sie den Ortsteil in Text und Titel, den vollen Namen in die Adresse.'],
      ['Barrierearm gestalten', 'Gute Kontraste, lesbare Schrift, Alternativtexte für Bilder und eine logische Seitenstruktur. Das hilft Besuchern und gleichzeitig der Suchmaschine.'],
      ['Stuttgart im Blick', 'Weilimdorf, Stammheim und Zuffenhausen liegen direkt nebenan. Wer dort Kunden hat, sollte das mit echtem Bezug erwähnen.'],
    ],
    faq: [
      ['Können Sie Websites für soziale Einrichtungen in Korntal umsetzen?', 'Ja. Wichtig sind hier eine klare Struktur für viele Angebote, gut lesbare Texte und eine einfache Pflege. Den Umfang und das passende Paket klären wir im Erstgespräch.'],
      ['Ist meine Website auch für Bewerber interessant?', 'Das sollte sie sein. Eine eigene Karriere-Seite mit echten Infos zu Team, Aufgaben und Ablauf der Bewerbung wird bei Google gefunden und spart Kosten für Stellenportale.'],
    ],
  },
  {
    slug: 'ditzingen', name: 'Ditzingen', zip: '71254', km: 19, min: 19, roads: ['L 1124', 'B 27', 'A 81'],
    lat: 48.8262, lon: 9.0668, dest: 'Rathaus Ditzingen',
    title: 'Webdesign Ditzingen – Websites für Betriebe & B2B | Niktos',
    description: 'Webdesign für Ditzingen: Websites für Handwerk, Zulieferer und Dienstleister in Ditzingen, Hirschlanden, Heimerdingen und Schöckingen. Mit lokalem SEO.',
    lead: 'Ditzingen ist ein starker Industriestandort, und kleine Betriebe konkurrieren hier um Aufträge und um Fachkräfte. Ich baue Websites für Unternehmen aus Ditzingen, die beides im Blick haben. Über die A 81 bin ich in rund 19 Minuten bei Ihnen.',
    intro: [
      'Ditzingen kennen viele als Sitz von Trumpf, einem der großen Maschinenbauer der Region. Rund um solche Unternehmen gibt es zahlreiche Zulieferer, technische Dienstleister und Handwerksbetriebe. Zur Stadt gehören Hirschlanden, Heimerdingen und Schöckingen, die S6 verbindet Ditzingen mit Stuttgart und Leonberg.',
      'Für kleinere Betriebe hat das zwei Folgen: Geschäftskunden erwarten einen professionellen, technisch sauberen Auftritt. Und wer Mitarbeiter sucht, konkurriert mit großen Arbeitgebern in direkter Nachbarschaft. Eine gute Website ist deshalb auch ein Werkzeug für die Personalsuche.',
    ],
    branchen: [
      ['Zulieferer & technische Dienstleister', 'Leistungen, Maschinenpark, Zertifikate und Ansprechpartner, auf Wunsch auch auf Englisch. Geschäftskunden wollen Fakten, keine Werbesprüche.'],
      ['Handwerk', 'Leistungsseiten, Fotos echter Projekte und ein Einsatzgebiet von Ditzingen über Gerlingen und Korntal-Münchingen bis Leonberg.'],
      ['Dienstleister & Praxen', 'Ein seriöser Auftritt mit Foto, klaren Leistungen und Online-Kontakt, schnell geladen auch im Mobilfunknetz.'],
      ['Gastronomie & Kantinenersatz', 'Beschäftigte aus den Gewerbegebieten suchen mittags in der Nähe. Mittagstisch, Abholung und Öffnungszeiten aktuell auf Website und Google-Profil bringen Stammgäste.'],
    ],
    tips: [
      ['Karriere-Seite einplanen', 'Eine eigene Seite mit Team, Aufgaben und einfachem Bewerbungsweg wird bei Suchen wie „Jobs Ditzingen“ gefunden und kostet keine Gebühr pro Anzeige.'],
      ['Englisch, wo es zählt', 'Wer internationale Geschäftskunden hat, bekommt eine englische Kurzfassung der wichtigsten Seiten. Das muss nicht die ganze Website sein.'],
      ['Stadtteile nennen', 'Hirschlanden, Heimerdingen und Schöckingen werden einzeln gesucht. Nennen Sie den Ortsteil, in dem Sie sitzen, auch in Adresse und Google-Profil.'],
    ],
    faq: [
      ['Lohnt sich lokales SEO für einen B2B-Betrieb in Ditzingen?', 'Ja, wenn auch nur ein Teil Ihrer Kunden aus der Region kommt. Geschäftskunden suchen ebenfalls über Google, etwa nach „Laserschneiden Lohnfertigung Ditzingen“. Eine Seite pro Leistung mit klaren Fakten macht Sie dort sichtbar.'],
      ['Kann die Website Bewerbungen direkt annehmen?', 'Ja. Ein schlankes Bewerbungsformular mit Bestätigungs-Mail ist möglich. Sensible Daten behandeln wir dabei DSGVO-bewusst; Details stimmen wir vorher ab.'],
    ],
  },

  /* ---------- Welle 2 (24.11.2026) ---------- */
  {
    slug: 'benningen-am-neckar', name: 'Benningen am Neckar', short: 'Benningen', zip: '71726', km: 7.2, min: 10, roads: ['L 1124', 'L 1129', 'K 1672'],
    lat: 48.9443, lon: 9.2443, dest: 'Rathaus Benningen am Neckar',
    title: 'Webdesign Benningen am Neckar – Website & SEO | Niktos',
    description: 'Webdesign für Benningen am Neckar: kompakte, schnelle Websites für Handwerk und kleine Betriebe zwischen Marbach und Freiberg. Rund 10 Minuten von Niktos.',
    lead: 'Benningen ist klein, liegt direkt am Neckar zwischen Marbach und Freiberg, und viele Betriebe hier leben von Empfehlungen. Ich baue Websites, die diese Empfehlungen online bestätigen. Von mir aus sind es rund 10 Minuten.',
    intro: [
      'Benningen hat eine lange Geschichte: Hier stand ein römisches Kastell am Neckar, Funde davon zeigt das Museum im Ort. Heute ist Benningen eine überschaubare Gemeinde mit S4-Halt, Wohngebieten und einigen kleinen Handwerks- und Dienstleistungsbetrieben, die vor allem für Kunden aus Benningen, Marbach, Freiberg und Murr arbeiten.',
      'In einem Ort dieser Größe ruft kaum jemand einen Betrieb an, den er nicht vorher kurz gegoogelt hat, auch wenn der Tipp vom Nachbarn kam. Wer dann nur einen alten Eintrag oder gar nichts findet, ruft oft den nächsten an. Eine kleine, saubere Website schließt genau diese Lücke.',
    ],
    branchen: [
      ['Ein-Personen-Betriebe', 'Eine Seite reicht oft: was Sie machen, wo Sie arbeiten, ein Foto von Ihnen und drei Kontaktwege. Wichtig ist, dass sie am Handy schnell lädt.'],
      ['Handwerk am Neckar', 'Fotos echter Arbeiten aus Benningen und den Nachbarorten, ein klares Einsatzgebiet und Anfragen per WhatsApp mit Foto vom Schaden.'],
      ['Vereine & Gastronomie', 'Termine, Öffnungszeiten und Kontakt auf einer Seite, die sich ohne Aufwand aktuell halten lässt.'],
    ],
    tips: [
      ['„am Neckar“ mitschreiben', 'Benningen allein ist nicht eindeutig. „Benningen am Neckar“ mit Postleitzahl 71726 in Adresse und Google-Profil macht die Zuordnung klar.'],
      ['Empfehlungen sichtbar machen', 'Bitten Sie zufriedene Kunden um eine Google-Bewertung. In kleinen Orten reichen wenige echte Bewertungen, um sich abzuheben.'],
      ['Klein anfangen', 'Ein kompakter Auftritt mit bis zu 3 Seiten ist schnell fertig und lässt sich später um Leistungsseiten erweitern, wenn mehr Anfragen kommen sollen.'],
    ],
    faq: [
      ['Reicht für meinen kleinen Betrieb in Benningen eine One-Page-Website?', 'Für den Start oft ja. Wenn Sie aber mehrere Leistungen haben, die einzeln gesucht werden, bringt eine eigene Seite pro Leistung mehr Anfragen über Google. Das lässt sich auch später ergänzen.'],
      ['Muss ich für die Website Texte selbst schreiben?', 'Nein. Sie erzählen mir in einem kurzen Gespräch, was Sie machen. Daraus schreibe ich die Texte, Sie prüfen und geben frei.'],
    ],
  },
  {
    slug: 'pleidelsheim', name: 'Pleidelsheim', zip: '74385', km: 7.8, min: 14, roads: ['L 1124', 'L 1129', 'K 1700'],
    lat: 48.9603, lon: 9.2073, dest: 'Rathaus Pleidelsheim',
    title: 'Webdesign Pleidelsheim – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Pleidelsheim: Websites mit lokalem SEO für Betriebe zwischen Freiberg, Ingersheim und Mundelsheim. Rund 14 Minuten von Niktos in Ludwigsburg.',
    lead: 'Pleidelsheim liegt am Neckar zwischen Freiberg und Ingersheim, und Kunden kommen hier oft aus beiden Richtungen. Ich baue Websites für Pleidelsheimer Betriebe, die im ganzen Umkreis gefunden werden.',
    intro: [
      'Pleidelsheim gehört zur Verwaltungsgemeinschaft mit Freiberg am Neckar und Ingersheim, eine Gemeinde mit Ortskern, Neubaugebieten und Gewerbeflächen am nördlichen Rand des Landkreises. Viele Familien sind in den letzten Jahren zugezogen, und mit ihnen die Nachfrage nach Handwerkern, Kinderbetreuung, Praxen und Dienstleistern vor Ort.',
      'Wer neu im Ort ist, kennt noch niemanden und sucht deshalb fast alles über Google: „Kinderarzt Pleidelsheim“, „Elektriker in der Nähe“, „Friseur Pleidelsheim“. Für Betriebe ist das eine gute Gelegenheit, früh sichtbar zu sein.',
    ],
    branchen: [
      ['Handwerk für Neubau & Umbau', 'Fotos von Projekten in der Umgebung, Leistungen einzeln beschrieben und ein Formular, in dem Kunden Bilder ihres Vorhabens mitschicken können.'],
      ['Familienangebote', 'Kurse, Betreuung, Nachhilfe: Zeiten, Preise und Anmeldung klar auf einer Seite. Eltern vergleichen am Handy, oft abends.'],
      ['Praxen & Gesundheit', 'Leistungen, Sprechzeiten und ein klarer Hinweis, ob neue Patienten aufgenommen werden. Das spart Ihrem Team viele Anrufe.'],
    ],
    tips: [
      ['Für Neubürger schreiben', 'Erklären Sie kurz, wo Sie sitzen und wie man Sie erreicht. Wer neu ist, kennt den Ort noch nicht.'],
      ['Nachbarorte mitnehmen', 'Freiberg, Ingersheim, Mundelsheim und Murr liegen nah. Nennen Sie die Orte, in denen Sie wirklich arbeiten, mit einem konkreten Bezug.'],
      ['Google-Profil zuerst', 'Bei Suchen wie „in der Nähe“ entscheidet die Karte. Ein vollständiges Profil mit Fotos und Öffnungszeiten ist hier der schnellste Hebel.'],
    ],
    faq: [
      ['Wie werde ich von neu zugezogenen Familien in Pleidelsheim gefunden?', 'Über ein gepflegtes Google-Unternehmensprofil, eine Website mit klaren Leistungen und den Ortsnamen an den richtigen Stellen. Neubürger suchen fast immer zuerst online, oft mit „in der Nähe“.'],
      ['Kann ich auf der Website auch Termine anbieten?', 'Ja. Je nach Bedarf als einfaches Anfrageformular, per WhatsApp oder mit einem Online-Kalender. Was davon sinnvoll ist, klären wir im Erstgespräch.'],
    ],
  },
  {
    slug: 'murr', name: 'Murr', zip: '71711', km: 9.7, min: 13, roads: ['L 1124', 'L 1100'],
    lat: 48.9630, lon: 9.2608, dest: 'Rathaus Murr',
    title: 'Webdesign Murr (Kreis Ludwigsburg) – Websites | Niktos',
    description: 'Webdesign für Betriebe in Murr bei Steinheim: Websites, die Google klar dem Landkreis Ludwigsburg zuordnet, mit lokalem SEO. Rund 13 Minuten von Niktos.',
    lead: 'Murr ist ein Ort, ein Fluss und ein halber Landkreisname. Für die Google-Suche ist das eine echte Hürde. Ich baue Websites für Betriebe aus Murr, die trotzdem eindeutig gefunden werden. Von mir aus sind es rund 13 Minuten.',
    intro: [
      'Die Gemeinde Murr liegt an der Murr, kurz bevor sie in den Neckar fließt, und bildet mit Steinheim einen gemeinsamen Verwaltungsverband. Der Ort ist geprägt von Wohngebieten, Ortskern und kleineren Betrieben, die Kunden in Murr, Steinheim, Marbach und Benningen haben.',
      'Das Problem bei der Suche: „Murr“ steht für den Fluss, für Murrhardt und für den Rems-Murr-Kreis, zu dem die Gemeinde Murr gar nicht gehört. Wer nur „Murr“ schreibt, landet bei Google leicht im falschen Landkreis oder wird gar nicht zugeordnet.',
    ],
    branchen: [
      ['Handwerk & Haustechnik', 'Einsatzgebiet mit Murr, Steinheim, Marbach und Pleidelsheim, Leistungsseiten und ein schneller Anfrageweg, auch per WhatsApp.'],
      ['Dienstleister für Privatkunden', 'Reinigung, Pflege, Gartenarbeit: Preise oder Preisrahmen und ein Rückruf-Formular senken die Hemmschwelle.'],
      ['Kleine Läden & Gastronomie', 'Öffnungszeiten, Angebot als Text und ein Google-Profil mit Fotos, damit Sie bei „in der Nähe“ auftauchen.'],
      ['Vereine & Sport', 'Termine, Trainingszeiten und Ansprechpartner auf einer aktuellen Seite. Neue Mitglieder aus Murr und Steinheim finden so den Weg ohne Umwege.'],
    ],
    tips: [
      ['Landkreis ausdrücklich nennen', 'Schreiben Sie „Murr (Landkreis Ludwigsburg)“ oder „Murr bei Steinheim“ mit PLZ 71711. So verwechselt Google Sie nicht mit dem Rems-Murr-Kreis.'],
      ['Strukturierte Daten setzen', 'Adresse, Postleitzahl und Einzugsgebiet als schema.org-Daten geben Google die Zuordnung schwarz auf weiß. Das ist bei Niktos Standard.'],
      ['Einheitlich bleiben', 'Gleiche Schreibweise von Name, Adresse und Telefon auf Website, Google-Profil und in Verzeichnissen. Abweichungen verwirren bei mehrdeutigen Ortsnamen besonders.'],
    ],
    faq: [
      ['Warum zeigt Google bei „Murr“ Betriebe aus dem Rems-Murr-Kreis?', 'Weil der Name mehrdeutig ist. Mit Postleitzahl, Landkreis und einheitlichen Firmendaten wird klar, dass Ihr Betrieb in der Gemeinde Murr im Landkreis Ludwigsburg sitzt.'],
      ['Gilt meine Website dann auch für Steinheim?', 'Wenn Sie dort arbeiten, ja. Nennen Sie Steinheim mit einem echten Bezug, etwa einem Projekt oder Ihrem Einsatzgebiet. Eine eigene Kopie der Seite für jeden Nachbarort braucht es dafür nicht.'],
    ],
  },
  {
    slug: 'erdmannhausen', name: 'Erdmannhausen', zip: '71729', km: 9.8, min: 14, roads: ['L 1124', 'L 1100', 'L 1127'],
    lat: 48.9405, lon: 9.2958, dest: 'Rathaus Erdmannhausen',
    title: 'Webdesign Erdmannhausen – Websites & SEO | Niktos',
    description: 'Webdesign für Erdmannhausen: Websites für Handwerk und kleine Betriebe zwischen Marbach und Affalterbach, mit lokalem SEO und WhatsApp. 14 Minuten von Niktos.',
    lead: 'Erdmannhausen liegt etwas abseits der großen Straßen, zwischen Marbach und Affalterbach. Kunden finden Betriebe hier deshalb selten zufällig, sondern über Google. Ich sorge dafür, dass Ihre Website dabei überzeugt.',
    intro: [
      'Erdmannhausen gehört zum Gemeindeverwaltungsverband Marbach am Neckar und hat sich vom Bauerndorf zur Wohngemeinde entwickelt. Im Ort arbeiten vor allem kleine Betriebe: Handwerk, Hofläden, Dienstleister, dazu Praxen für die Menschen vor Ort. Ihre Kunden kommen aus Erdmannhausen, Marbach, Affalterbach und Kirchberg an der Murr.',
      'Weil Erdmannhausen kein Durchgangsort ist, hilft Laufkundschaft wenig. Wer neue Kunden will, braucht einen Auftritt, der bei Suchen im ganzen Umkreis auftaucht und am Handy in wenigen Sekunden zeigt, was Sie anbieten.',
    ],
    branchen: [
      ['Handwerk', 'Fotos echter Arbeiten, Leistungen einzeln beschrieben und ein klares Einsatzgebiet bis Marbach, Affalterbach und Backnang, wenn Sie dorthin fahren.'],
      ['Hofläden & Direktvermarkter', 'Was gibt es gerade, wann ist geöffnet, wie findet man hin? Diese drei Fragen müssen sofort beantwortet sein, am besten mit Saisonhinweis.'],
      ['Dienstleister', 'Ein seriöser Auftritt mit Foto und Kontaktwegen. Für viele reicht ein kompaktes Paket zum Start.'],
    ],
    tips: [
      ['Anfahrt beschreiben', 'Abseits der Hauptstraßen ist eine kurze Wegbeschreibung mit Parkhinweis Gold wert, vor allem für Hofläden und Praxen.'],
      ['Saison aktuell halten', 'Wer saisonal verkauft, braucht eine Seite, die sich schnell ändern lässt. Im Care-Paket schicken Sie mir die Änderung einfach per WhatsApp.'],
      ['Umkreis ehrlich angeben', 'Nennen Sie die Orte, die Sie wirklich bedienen. Eine überzogene Liste mit 40 Orten wirkt unseriös und hilft bei Google nicht.'],
    ],
    faq: [
      ['Lohnt sich eine Website für einen Hofladen in Erdmannhausen?', 'Ja, wenn sie Öffnungszeiten, Angebot und Anfahrt aktuell zeigt. Viele Kunden suchen kurz vor dem Losfahren, ob geöffnet ist. Zusammen mit dem Google-Profil ist das oft der wichtigste Kanal.'],
      ['Wie oft muss ich die Website aktualisieren?', 'So oft sich etwas ändert, etwa Öffnungszeiten oder Angebote. Mit dem Care-Paket erledige ich kleine Änderungen für Sie, Sie schicken sie mir einfach per WhatsApp.'],
    ],
  },
  {
    slug: 'ingersheim', name: 'Ingersheim', zip: '74379', km: 10, min: 15, roads: ['L 1124', 'B 27', 'L 1138', 'L 1113'],
    lat: 48.9595, lon: 9.1849, dest: 'Rathaus Ingersheim',
    title: 'Webdesign Ingersheim – Websites für Wein & Handwerk | Niktos',
    description: 'Webdesign für Ingersheim: Websites für Weinbau, Handwerk und Dienstleister in Groß- und Kleiningersheim, mit lokalem SEO. Rund 15 Minuten von Niktos.',
    lead: 'Ingersheim liegt am Neckar zwischen Bietigheim-Bissingen und Besigheim, mit Weinbergen auf beiden Seiten. Ich baue Websites für Ingersheimer Betriebe, die Kunden aus dem Ort und Gäste aus der Region erreichen.',
    intro: [
      'Ingersheim besteht aus Großingersheim und Kleiningersheim, die auf beiden Seiten des Neckars liegen. Weinbau gehört hier dazu, ebenso Handwerk, kleine Gewerbebetriebe und Dienstleister. Viele Kunden kommen aus Bietigheim-Bissingen, Freiberg, Pleidelsheim und Besigheim.',
      'Für die Suche heißt das: Ihre Kunden kennen oft eher Bietigheim-Bissingen als Ingersheim. Eine Website, die klar sagt, wo Sie sitzen und welche Nachbarorte Sie bedienen, holt diese Suchen ab.',
    ],
    branchen: [
      ['Weinbau & Direktvertrieb', 'Weinliste, Verkaufszeiten, Hoffeste und Weinproben auf eigenen Seiten, mit Fotos aus den eigenen Lagen.'],
      ['Handwerk', 'Leistungsseiten, Fotos aus der Region und ein Einsatzgebiet, das Bietigheim-Bissingen und Besigheim ehrlich einschließt.'],
      ['Dienstleister & Praxen', 'Ein klarer, schneller Auftritt mit Foto, Leistungen und Kontakt. Mehr braucht es zum Start oft nicht.'],
      ['Ferienwohnungen & Gästezimmer', 'Radfahrer auf dem Neckartal-Radweg und Weinfreunde suchen kurzfristig. Fotos, Ausstattung, Lage am Fluss und eine direkte Anfrage ohne Portalprovision.'],
    ],
    tips: [
      ['Ortsteil nennen', 'Groß- und Kleiningersheim werden im Alltag unterschieden. Nennen Sie Ihren Ortsteil in der Adresse, im Text reicht meist „Ingersheim“.'],
      ['Bietigheim mitdenken', 'Wer auch Kunden in Bietigheim-Bissingen hat, schreibt das mit einem echten Beispiel auf die Seite. So passen Sie zu Suchen in beiden Orten.'],
      ['Termine pflegen', 'Hoffeste und Verkaufszeiten ändern sich. Veraltete Termine auf der Website schaden mehr als gar keine.'],
    ],
    faq: [
      ['Brauche ich als Weinbaubetrieb in Ingersheim einen Online-Shop?', 'Nicht unbedingt. Oft reicht eine aktuelle Weinliste mit Bestellung per Telefon, E-Mail oder WhatsApp. Ein Shop lohnt sich, wenn Sie regelmäßig versenden.'],
      ['Werde ich auch bei Suchen in Bietigheim-Bissingen gefunden?', 'Mit einer starken Leistungsseite, die Bietigheim-Bissingen ehrlich als Einsatzgebiet nennt, steigen die Chancen. Dort ist die Konkurrenz größer, garantieren lässt sich eine Platzierung nicht.'],
    ],
  },
  {
    slug: 'steinheim-an-der-murr', name: 'Steinheim an der Murr', short: 'Steinheim', zip: '71711', km: 11.3, min: 14, roads: ['L 1124', 'L 1100', 'L 1126'],
    lat: 48.9651, lon: 9.2792, dest: 'Rathaus Steinheim an der Murr',
    title: 'Webdesign Steinheim an der Murr – Website & SEO | Niktos',
    description: 'Webdesign für Steinheim an der Murr, Kleinbottwar und Höpfigheim: Websites, die Google eindeutig zuordnet, mit lokalem SEO. Rund 14 Minuten von Niktos.',
    lead: 'Steinheim gibt es in Deutschland mehrfach, Steinheim an der Murr nur einmal. Ich baue Websites für Betriebe aus Steinheim, Kleinbottwar und Höpfigheim, die genau so gefunden werden. Fahrzeit von mir: rund 14 Minuten.',
    intro: [
      'Steinheim an der Murr ist bekannt für den Schädel des „Steinheimer Urmenschen“, der hier 1933 gefunden wurde und im Urmensch-Museum zu sehen ist. Zur Stadt gehören Kleinbottwar und Höpfigheim, das Bottwartal mit seinen Weinbergen beginnt direkt nebenan. Wirtschaftlich prägen Handwerk, Gewerbe und Dienstleister die Stadt, viele davon familiengeführt.',
      'Bei Google konkurriert der Ortsname mit Steinheim in Westfalen, Steinheim am Albuch und weiteren Orten. Betriebe, die nur „Steinheim“ schreiben, werden leicht falsch zugeordnet. Mit dem vollen Namen und klaren Daten ist das Problem lösbar.',
    ],
    branchen: [
      ['Familienbetriebe im Handwerk', 'Leistungsseiten, Fotos echter Arbeiten und ein Einsatzgebiet, das Murr, Marbach, Großbottwar und Benningen ehrlich nennt.'],
      ['Weinbau im Bottwartal', 'Weinliste, Verkaufszeiten und Veranstaltungen mit Fotos aus den eigenen Weinbergen.'],
      ['Freizeit & Kultur', 'Angebote, Öffnungszeiten und Anfahrt so beschreiben, dass Besucher von außerhalb sofort Bescheid wissen.'],
      ['Museum, Kultur & Führungen', 'Besucher des Urmensch-Museums planen ihren Ausflug online. Wer Führungen, Kurse oder Gastronomie in der Nähe anbietet, gehört mit Zeiten und Anfahrt sichtbar ins Netz.'],
    ],
    tips: [
      ['Immer „an der Murr“', 'Schreiben Sie „Steinheim an der Murr“ mit PLZ 71711 in Titel, Adresse und Google-Profil. Die Kurzform „Steinheim“ gehört nur in den Fließtext.'],
      ['Ortsteile ausschreiben', 'Wer in Kleinbottwar oder Höpfigheim sitzt, nennt das in der Adresse. Auch danach wird gesucht.'],
      ['Bottwartal als Region', 'Für Wein und Ausflüge ist „Bottwartal“ ein gesuchter Begriff. Wo es passt, gehört er in den Text.'],
    ],
    faq: [
      ['Warum werde ich bei „Steinheim“ nicht gefunden?', 'Weil Google mehrere Orte mit diesem Namen kennt. Mit „Steinheim an der Murr“, Postleitzahl und einheitlichen Firmendaten auf Website, Profil und in Verzeichnissen wird die Zuordnung eindeutig.'],
      ['Können Sie auch eine bestehende Website verbessern statt neu bauen?', `Ja. Am Anfang steht der <a href="/website-check/">Website-Check</a> für ${site.checkPrice} € mit klarer Liste, was fehlt. Danach entscheiden Sie, ob verbessert oder neu gebaut wird.`],
    ],
  },
  {
    slug: 'affalterbach', name: 'Affalterbach', zip: '71563', km: 12.1, min: 16, roads: ['L 1124', 'L 1100', 'L 1127'],
    lat: 48.9225, lon: 9.3222, dest: 'Rathaus Affalterbach',
    title: 'Webdesign Affalterbach – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Affalterbach: Websites für Zulieferer, Handwerk und Dienstleister am Ostrand des Landkreises Ludwigsburg, mit lokalem SEO. 16 Minuten von Niktos.',
    lead: 'Affalterbach ist klein, aber weltbekannt, weil ein großer Sportwagenhersteller hier sitzt. Für die Betriebe im Ort heißt das: hohe Ansprüche der Kunden und viel Konkurrenz um Fachkräfte. Ich baue Websites, die beidem gerecht werden.',
    intro: [
      'In Affalterbach hat Mercedes-AMG seinen Sitz. Rund um so einen Standort arbeiten Zulieferer, technische Dienstleister, Werkstätten und Handwerk. Gleichzeitig ist Affalterbach eine Gemeinde mit dörflichem Kern, Wohngebieten und Betrieben für den Alltag der Menschen vor Ort, am Ostrand des Landkreises zum Rems-Murr-Kreis hin.',
      'Für kleinere Firmen bedeutet das: Geschäftskunden erwarten einen präzisen, technisch sauberen Auftritt. Und Bewerber vergleichen Ihren Betrieb mit großen Arbeitgebern in direkter Nähe. Eine gute Website ist hier Vertriebs- und Recruiting-Werkzeug zugleich.',
    ],
    branchen: [
      ['Zulieferer & Technik', 'Leistungen, Fertigungsmöglichkeiten, Qualitätsnachweise und Ansprechpartner. Klare Fakten statt Werbesprüche, auf Wunsch mit englischer Kurzfassung.'],
      ['Werkstätten & Fahrzeugtechnik', 'Leistungen mit Beispielen, Fotos aus der eigenen Werkstatt und eine einfache Terminanfrage.'],
      ['Handwerk & Dienstleister', 'Ein Einsatzgebiet von Affalterbach bis Marbach, Erdmannhausen und Winnenden, Leistungsseiten und WhatsApp-Kontakt.'],
    ],
    tips: [
      ['Karriere-Seite einplanen', 'Wer Fachkräfte sucht, braucht eine echte Seite mit Team, Aufgaben und einfachem Bewerbungsweg. Sie wird bei Google gefunden und kostet keine Anzeigengebühr.'],
      ['Über die Kreisgrenze denken', 'Winnenden und Backnang im Rems-Murr-Kreis liegen nah. Wer dort Kunden hat, nennt das ausdrücklich.'],
      ['Qualität zeigen', 'Bei technisch anspruchsvollen Kunden wirken saubere Fotos, präzise Texte und eine schnelle Website stärker als jede Behauptung.'],
    ],
    faq: [
      ['Lohnt sich SEO für einen Zulieferer in Affalterbach?', 'Ja, wenn Geschäftskunden Sie über Google finden sollen, etwa bei Suchen nach einer bestimmten Fertigung in der Region. Eine Seite pro Leistung mit klaren Fakten ist dafür die Grundlage.'],
      ['Kann die Website auf Deutsch und Englisch sein?', 'Ja. Oft reicht eine englische Kurzfassung der wichtigsten Seiten. Den Umfang klären wir vorher, der Preis steht fest.'],
    ],
  },
  {
    slug: 'sachsenheim', name: 'Sachsenheim', zip: '74343', km: 14.8, min: 21, roads: ['L 1124', 'B 27', 'L 1125'],
    lat: 48.9597, lon: 9.0655, dest: 'Rathaus Sachsenheim',
    title: 'Webdesign Sachsenheim – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Sachsenheim: Websites für Betriebe in Groß- und Kleinsachsenheim, Hohenhaslach, Ochsenbach, Spielberg und Häfnerhaslach. Mit lokalem SEO.',
    lead: 'Sachsenheim besteht aus sechs Stadtteilen, vom Wasserschloss in Großsachsenheim bis zu den Weinorten am Stromberg. Ich baue Websites für Sachsenheimer Betriebe, die in allen Teilen gefunden werden. Von mir aus sind es rund 21 Minuten.',
    intro: [
      'Zu Sachsenheim gehören Großsachsenheim mit dem Wasserschloss, Kleinsachsenheim, Hohenhaslach, Ochsenbach, Spielberg und Häfnerhaslach. Im Süden ist die Stadt eher gewerblich und gut an die B 27 angebunden, im Norden ländlich mit Weinbau am Rand des Strombergs. Entsprechend breit ist das Spektrum: Handwerk, Gewerbe, Weingüter, Gastronomie und Dienstleister.',
      'Viele Kunden suchen nach dem Stadtteil, nicht nach Sachsenheim. Wer in Hohenhaslach sitzt, wird bei „Weingut Hohenhaslach“ eher gefunden als bei „Weingut Sachsenheim“. Die Website sollte beides sauber abdecken.',
    ],
    branchen: [
      ['Weingüter am Stromberg', 'Weinliste, Verkaufszeiten, Weinproben und Feste, mit Fotos aus den eigenen Lagen und Anfahrt für Ausflügler.'],
      ['Gewerbe & Handwerk', 'Leistungsseiten, Referenzfotos und ein Einsatzgebiet von Sachsenheim bis Bietigheim-Bissingen und Vaihingen an der Enz.'],
      ['Gastronomie & Ausflugsziele', 'Speisekarte als Text, Öffnungszeiten und Lage, dazu ein Google-Profil mit aktuellen Fotos.'],
      ['Hofläden & Direktvermarkter', 'In den ländlichen Stadtteilen verkaufen Betriebe direkt ab Hof. Aktuelles Angebot, Öffnungszeiten und Anfahrt über Feldwege müssen auf einen Blick klar sein.'],
    ],
    tips: [
      ['Stadtteil in die Adresse', 'Nennen Sie Ihren Stadtteil in Adresse, Google-Profil und Text. Danach wird im Alltag gesucht.'],
      ['Stromberg als Region', 'Für Wein, Wandern und Ausflüge ist „Stromberg“ ein gesuchter Begriff. Wo er passt, gehört er auf die Seite.'],
      ['Zwei Zielgruppen trennen', 'Gäste und Geschäftskunden brauchen verschiedene Infos. Eigene Seiten pro Zielgruppe machen die Website übersichtlicher.'],
    ],
    faq: [
      ['Soll ich „Sachsenheim“ oder meinen Stadtteil auf die Website schreiben?', 'Beides: den Stadtteil in Adresse und Text, „Sachsenheim“ ebenfalls, weil Google und Ortsfremde den Stadtnamen kennen. Einheitlich auf Website, Profil und in Verzeichnissen.'],
      ['Kommen Sie für Fotos auch nach Sachsenheim?', 'Für ein Erstgespräch gern. Für die Fotos selbst sind gute eigene Bilder oder ein Fotograf aus der Region am besten. Ich sage Ihnen vorher genau, welche Motive die Website braucht.'],
    ],
  },
  {
    slug: 'schwieberdingen', name: 'Schwieberdingen', zip: '71701', km: 15.2, min: 18, roads: ['L 1124', 'B 27', 'A 81', 'L 1140'],
    lat: 48.8759, lon: 9.0731, dest: 'Rathaus Schwieberdingen',
    title: 'Webdesign Schwieberdingen – Websites & SEO | Niktos',
    description: 'Webdesign für Schwieberdingen im Strohgäu: Websites für Handwerk, Technik-Dienstleister und Praxen, mit lokalem SEO. Rund 18 Minuten von Niktos in Ludwigsburg.',
    lead: 'Schwieberdingen liegt im Strohgäu an der Glems, mit einem großen Industriestandort direkt am Ort. Ich baue Websites für Schwieberdinger Betriebe, die bei Privat- und Geschäftskunden überzeugen.',
    intro: [
      'Schwieberdingen bildet mit Hemmingen einen Gemeindeverwaltungsverband und ist Teil des Strohgäus. Bosch betreibt hier einen großen Standort, rund herum arbeiten technische Dienstleister, Handwerk und Gewerbe. Im Ortskern rund um das Schloss sitzen Läden, Praxen und Gastronomie für die Menschen vor Ort.',
      'Dadurch gibt es zwei Arten von Kunden: Privatleute aus Schwieberdingen, Hemmingen und Markgröningen, die einen Handwerker oder eine Praxis suchen, und Geschäftskunden, die einen verlässlichen Partner in der Nähe brauchen. Beide wollen auf der Website schnell das Richtige finden.',
    ],
    branchen: [
      ['Technische Dienstleister', 'Leistungen, Kapazitäten, Ansprechpartner und eine englische Kurzfassung, wenn internationale Kunden dabei sind.'],
      ['Handwerk', 'Leistungsseiten mit Fotos aus dem Strohgäu und ein Einsatzgebiet, das Hemmingen, Möglingen und Markgröningen nennt.'],
      ['Praxen & Läden im Ortskern', 'Öffnungszeiten, Leistungen und Anfahrt, mobil in wenigen Sekunden erfassbar.'],
      ['Gastronomie rund ums Schloss', 'Mittagstisch für Beschäftigte aus dem Industriegebiet, abends Gäste aus dem Ort: zwei Speisekarten, zwei Zielgruppen, beide brauchen aktuelle Zeiten.'],
    ],
    tips: [
      ['Strohgäu nutzen', 'Viele suchen nach der Region statt nach dem Ort. Erwähnen Sie das Strohgäu dort, wo es inhaltlich passt.'],
      ['Hemmingen mitnehmen', 'Die Nachbargemeinde ist eng verbunden. Wer dort Kunden hat, nennt das mit einem echten Bezug.'],
      ['Bewerber ansprechen', 'Wer neben großen Arbeitgebern Personal sucht, braucht eine ehrliche Karriere-Seite mit Team und einfachem Bewerbungsweg.'],
    ],
    faq: [
      ['Brauche ich eine eigene Seite für Hemmingen?', 'Nur, wenn Sie dort wirklich etwas Eigenes anbieten oder viele Kunden haben und das konkret beschreiben können. Sonst reicht es, Hemmingen auf Ihren Leistungsseiten ehrlich als Einsatzgebiet zu nennen.'],
      ['Wie lange dauert eine neue Website?', 'Eine kompakte Website ist in etwa einer Woche fertig, eine größere SEO-Website in etwa zwei Wochen, sobald Texte und Bilder abgestimmt sind.'],
    ],
  },
  {
    slug: 'gerlingen', name: 'Gerlingen', zip: '70839', km: 21.6, min: 22, roads: ['L 1124', 'B 27', 'A 81', 'L 1141'],
    lat: 48.7984, lon: 9.0619, dest: 'Rathaus Gerlingen',
    title: 'Webdesign Gerlingen – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Gerlingen am Stuttgarter Stadtrand: Websites für Praxen, Dienstleister und Handwerk mit lokalem SEO. Rund 22 Minuten von Niktos über die A 81.',
    lead: 'Gerlingen grenzt direkt an Stuttgart und ist Sitz eines der größten Konzerne der Region. Für kleine Betriebe hier heißt das: anspruchsvolle Kunden und eine starke Konkurrenz aus der Großstadt. Ich baue Websites, die sich dagegen behaupten.',
    intro: [
      'Auf der Schillerhöhe in Gerlingen hat Bosch seine Konzernzentrale. Gleichzeitig ist Gerlingen eine Wohnstadt am Rand von Stuttgart, mit Altstadt, Wald und Blick über das Strohgäu. Viele Einwohner arbeiten in Stuttgart oder bei den großen Arbeitgebern der Umgebung und erwarten einen professionellen Auftritt, auch vom Handwerker oder der Praxis um die Ecke.',
      'Bei der Suche konkurrieren Gerlinger Betriebe oft mit Anbietern aus Stuttgart-Weilimdorf, Feuerbach und Leonberg. Wer seine Leistungen klar beschreibt und Gerlingen ehrlich in den Mittelpunkt stellt, hat bei lokalen Suchen trotzdem gute Chancen.',
    ],
    branchen: [
      ['Praxen & Therapie', 'Ruhige, gut lesbare Seiten mit Leistungen, Sprechzeiten und Online-Kontakt. Patienten vergleichen hier genau.'],
      ['Beratung & Dienstleistung', 'Steuerberater, Coaches, Versicherungen: Foto, Werdegang, klare Leistungen und ein einfacher Weg zum Erstgespräch.'],
      ['Handwerk', 'Hochwertige Fotos echter Projekte, Leistungsseiten und ein Einsatzgebiet bis Stuttgart-West und Leonberg.'],
    ],
    tips: [
      ['Gegen Stuttgart bestehen', 'Bei Suchen mit „Gerlingen“ sind Sie im Vorteil, wenn Ort und Leistung klar auf Ihrer Seite stehen. Allgemeine Startseiten verlieren gegen gezielte Leistungsseiten.'],
      ['Professionell wirken', 'Ein anspruchsvolles Publikum merkt sofort, ob eine Website gepflegt ist. Aktuelle Fotos, saubere Texte und schnelle Ladezeit sind hier Pflicht.'],
      ['Bewertungen sammeln', 'Echte Google-Bewertungen entscheiden mit, wer in der Karte oben steht. Fragen Sie nach jedem guten Auftrag direkt mit Link.'],
    ],
    faq: [
      ['Kann ich als Betrieb in Gerlingen auch in Stuttgart gefunden werden?', 'Für Suchen in angrenzenden Stadtteilen wie Weilimdorf ist das realistisch, wenn Sie dort arbeiten und das konkret beschreiben. Für „Stuttgart“ allgemein ist die Konkurrenz sehr groß, da sind Leistungsseiten und Bewertungen entscheidend.'],
      ['Ist der Weg von Ludwigsburg nach Gerlingen ein Problem?', 'Nein. Über die A 81 sind es rund 22 Minuten ohne Stau. Viele Abstimmungen laufen ohnehin per Video-Call oder WhatsApp.'],
    ],
  },
  {
    slug: 'vaihingen-an-der-enz', name: 'Vaihingen an der Enz', short: 'Vaihingen/Enz', zip: '71665', km: 28.1, min: 30, roads: ['L 1124', 'B 27', 'A 81', 'B 10'],
    lat: 48.9322, lon: 8.9562, dest: 'Rathaus Vaihingen an der Enz',
    title: 'Webdesign Vaihingen an der Enz – Website & SEO | Niktos',
    description: 'Webdesign für Vaihingen an der Enz und seine Stadtteile: Websites, die Google nicht mit Stuttgart-Vaihingen verwechselt. Mit lokalem SEO, 30 Minuten von Niktos.',
    lead: 'Vaihingen an der Enz hat ein besonderes Problem bei Google: Stuttgart-Vaihingen ist größer und taucht oft zuerst auf. Ich baue Websites für Betriebe aus Vaihingen an der Enz, die eindeutig dem richtigen Ort zugeordnet werden.',
    intro: [
      'Vaihingen an der Enz ist flächenmäßig eine der größten Städte im Landkreis Ludwigsburg, mit Altstadt an der Enz, Schloss Kaltenstein über der Stadt und vielen Stadtteilen wie Enzweihingen, Ensingen, Horrheim, Kleinglattbach, Roßwag, Gündelbach, Riet und Aurich. Weinbau, Handwerk, Gewerbe und Handel sind gleichermaßen vertreten.',
      'Wer „Elektriker Vaihingen“ sucht, bekommt häufig Ergebnisse aus Stuttgart-Vaihingen. Betriebe aus Vaihingen an der Enz müssen deshalb sehr genau sein: voller Ortsname, Postleitzahl und Stadtteil, überall gleich geschrieben.',
    ],
    branchen: [
      ['Handwerk in den Stadtteilen', 'Leistungsseiten, Fotos aus der Region und ein Einsatzgebiet mit den Stadtteilen und Nachbarorten wie Sachsenheim, Oberriexingen und Illingen.'],
      ['Weinbau an der Enz', 'Weinliste, Verkaufszeiten und Veranstaltungen, mit Bildern aus den Steillagen und Anfahrt für Gäste.'],
      ['Handel & Dienstleister in der Altstadt', 'Öffnungszeiten, Angebot und Lage, dazu ein Google-Profil, das mit der Website übereinstimmt.'],
      ['Ausflugsziele an der Enz', 'Roßwag mit seinen Weinbergterrassen und die Altstadt unter Schloss Kaltenstein ziehen Wanderer und Radfahrer an. Gastgeber brauchen Anfahrt, Zeiten und Fotos, die Lust machen.'],
    ],
    tips: [
      ['Nie nur „Vaihingen“', 'Schreiben Sie in Titel, Adresse und Google-Profil immer „Vaihingen an der Enz“ (oder „Vaihingen/Enz“) mit PLZ. Sonst landen Ihre Suchen leicht in Stuttgart.'],
      ['Stadtteile nennen', 'Viele suchen nach Horrheim, Enzweihingen oder Kleinglattbach. Ihr Stadtteil gehört in die Adresse, die anderen dorthin, wo es echten Bezug gibt.'],
      ['Strukturierte Daten', 'Mit Postleitzahl und Koordinaten im schema.org-Code bekommt Google die Lage eindeutig. Bei Niktos ist das Standard.'],
    ],
    faq: [
      ['Warum zeigt Google bei meinem Betrieb Stuttgart-Vaihingen an?', 'Weil „Vaihingen“ allein mehrdeutig ist und Stuttgart-Vaihingen mehr Suchanfragen hat. Mit vollem Ortsnamen, Postleitzahl und einheitlichen Firmendaten auf Website, Profil und in Verzeichnissen wird die Zuordnung klar.'],
      ['Ist Vaihingen an der Enz nicht zu weit weg von Ludwigsburg?', 'Nein. Es sind rund 30 Minuten ohne Stau. Für das Erstgespräch komme ich gern vorbei, danach läuft vieles per Video-Call und WhatsApp.'],
    ],
  },
  {
    slug: 'stuttgart-zuffenhausen', name: 'Stuttgart-Zuffenhausen', short: 'Zuffenhausen', zip: '70435', km: 9.8, min: 14, roads: ['L 1124', 'Stuttgarter Straße', 'Ludwigsburger Straße'],
    lat: 48.8312, lon: 9.1750, dest: 'Bezirksrathaus Zuffenhausen',
    title: 'Webdesign Stuttgart-Zuffenhausen – Website & SEO | Niktos',
    description: 'Webdesign für Zuffenhausen, Rot und Neuwirtshaus: Websites, die im Stuttgarter Norden gefunden werden, mit lokalem SEO. Rund 14 Minuten von Niktos.',
    lead: 'Zuffenhausen ist der Stuttgarter Stadtbezirk, der am nächsten an Ludwigsburg liegt. Ich baue Websites für Betriebe aus Zuffenhausen, die im Stuttgarter Norden gefunden werden, statt in der ganzen Großstadt unterzugehen.',
    intro: [
      'Zuffenhausen ist Industriestadtteil und Wohnbezirk zugleich. Porsche hat hier seinen Stammsitz, um den Porscheplatz und entlang der Ludwigsburger Straße arbeiten Werkstätten, Handwerk und Gewerbe. Zum Bezirk gehören auch Rot und Neuwirtshaus, und mit S-Bahn und Stadtbahn ist man schnell in der Innenstadt oder in Kornwestheim.',
      'Für die Suche ist die Lage Vorteil und Nachteil: Wer „Stuttgart“ eintippt, bekommt hunderte Anbieter. Wer „Zuffenhausen“ eintippt, nur eine Handvoll. Betriebe, die ihren Stadtbezirk klar nennen, haben bei diesen genaueren Suchen deutlich bessere Chancen.',
    ],
    branchen: [
      ['Kfz & Werkstätten', 'Leistungen, Preise oder Preisrahmen, Öffnungszeiten und Terminanfrage. Dazu ein Google-Profil, das zur Website passt.'],
      ['Handwerk', 'Einsatzgebiet mit Zuffenhausen, Stammheim, Feuerbach und Kornwestheim, Fotos echter Projekte und Anfragen per WhatsApp.'],
      ['Läden, Gastronomie & Praxen', 'Öffnungszeiten, Angebot und Anfahrt mit S-Bahn oder Stadtbahn, mobil schnell erfassbar.'],
      ['Gastronomie & Mittagstisch', 'Tausende Beschäftigte der großen Arbeitgeber im Bezirk suchen mittags schnell etwas in der Nähe. Mittagskarte, Zeiten und Abholung gehören tagesaktuell ins Netz.'],
    ],
    tips: [
      ['Stadtbezirk statt Großstadt', 'Nennen Sie „Stuttgart-Zuffenhausen“ in Titel und Adresse. Für „Stuttgart“ allein ist die Konkurrenz riesig, für den Bezirk gut machbar.'],
      ['Rot und Neuwirtshaus', 'Wer dort sitzt, schreibt den Stadtteil in die Adresse. Auch danach wird gesucht.'],
      ['Landkreis mitnehmen', 'Kornwestheim und Ludwigsburg liegen nah. Wer dort Kunden hat, nennt das ehrlich und bekommt so auch Suchen über die Stadtgrenze.'],
    ],
    faq: [
      ['Lohnt sich lokales SEO in einem Stuttgarter Stadtbezirk?', 'Ja. Viele suchen gezielt nach ihrem Bezirk, etwa „Friseur Zuffenhausen“. Dort ist die Konkurrenz viel kleiner als bei „Friseur Stuttgart“. Eine klare Website und ein gepflegtes Google-Profil sind die Grundlage.'],
      ['Betreuen Sie auch Kunden in Stuttgart, obwohl Sie in Ludwigsburg sitzen?', 'Ja. Zuffenhausen liegt näher an meinem Standort als manche Orte im Landkreis, rund 14 Minuten ohne Stau.'],
    ],
  },
  {
    slug: 'stuttgart-stammheim', name: 'Stuttgart-Stammheim', short: 'Stammheim', zip: '70439', km: 10.3, min: 14, roads: ['L 1124', 'Stuttgarter Straße', 'B 27'],
    lat: 48.8490, lon: 9.1568, dest: 'Bezirksrathaus Stammheim',
    title: 'Webdesign Stuttgart-Stammheim – Website & SEO | Niktos',
    description: 'Webdesign für Stuttgart-Stammheim: Websites für Handwerk, Praxen und kleine Betriebe an der Grenze zu Kornwestheim, mit lokalem SEO. 14 Minuten von Niktos.',
    lead: 'Stammheim ist der nördlichste Stadtbezirk Stuttgarts und grenzt direkt an Kornwestheim. Ich baue Websites für Stammheimer Betriebe, die auf beiden Seiten der Stadtgrenze gefunden werden.',
    intro: [
      'Stammheim ist ein ruhiger Stadtbezirk mit altem Ortskern, Wohngebieten und Feldern Richtung Kornwestheim. Die Stadtbahn U15 endet hier und verbindet Stammheim mit Zuffenhausen und der Innenstadt. Die Betriebe sind meist klein: Handwerk, Praxen, Läden, Dienstleister, die ihre Kunden in Stammheim, Zuffenhausen und Kornwestheim haben.',
      'Gesucht wird oft mit dem Bezirk („Physiotherapie Stammheim“) oder mit dem Nachbarort. Weil es auch andere Orte namens Stammheim gibt, sollte auf der Website immer „Stuttgart-Stammheim“ stehen.',
    ],
    branchen: [
      ['Handwerk', 'Leistungen, Fotos und ein Einsatzgebiet, das Stammheim, Zuffenhausen, Kornwestheim und Ludwigsburg ehrlich nennt.'],
      ['Praxen & Therapie', 'Sprechzeiten, Leistungen in klarer Sprache und Anfahrt mit der U15.'],
      ['Läden & Dienstleister', 'Öffnungszeiten und Angebot als Text, dazu ein Google-Profil mit Fotos.'],
      ['Vereine & Kinderangebote', 'Sportverein, Musikschule, Nachhilfe: Eltern in Stammheim suchen kurze Wege. Zeiten, Kosten und Anmeldung gehören übersichtlich auf eine Seite.'],
    ],
    tips: [
      ['„Stuttgart-Stammheim“ schreiben', 'Stammheim gibt es mehrfach. Der volle Name mit PLZ in Titel, Adresse und Google-Profil sorgt für die richtige Zuordnung.'],
      ['Kornwestheim mitdenken', 'Viele Kunden wohnen auf der anderen Seite der Stadtgrenze. Wer dort arbeitet, nennt Kornwestheim mit einem echten Bezug.'],
      ['Kurz und klar', 'Für kleine Betriebe reicht oft ein kompakter Auftritt mit wenigen Seiten. Wichtig ist, dass alles stimmt und schnell lädt.'],
    ],
    faq: [
      ['Werde ich als Betrieb in Stammheim auch in Kornwestheim gefunden?', 'Wenn Sie dort arbeiten und das auf der Website konkret beschreiben, steigen die Chancen deutlich. Eine Platzierung garantieren kann niemand, aber die Nähe spielt bei lokalen Suchen eine große Rolle.'],
      ['Was kostet eine kleine Website für meinen Betrieb in Stammheim?', `Eine kompakte Website mit bis zu 3 Seiten startet bei ${euro(site.packages[0].price)} (Paket Launch). Alle Pakete stehen auf der Seite <a href="/preise/">Preise</a>.`],
    ],
  },
  {
    slug: 'stuttgart-feuerbach', name: 'Stuttgart-Feuerbach', short: 'Feuerbach', zip: '70469', km: 13.1, min: 18, roads: ['L 1124', 'Stuttgarter Straße', 'Borsigstraße'],
    lat: 48.8121, lon: 9.1592, dest: 'Bezirksrathaus Feuerbach',
    title: 'Webdesign Stuttgart-Feuerbach – Website & SEO | Niktos',
    description: 'Webdesign für Stuttgart-Feuerbach: Websites für Handwerk, Gewerbe, Praxen und Gastronomie im Stuttgarter Norden, mit lokalem SEO. Rund 18 Minuten von Niktos.',
    lead: 'Feuerbach ist Industrie- und Wohnbezirk zugleich, mit eigenem Zentrum rund um den Wilhelm-Geiger-Platz. Ich baue Websites für Feuerbacher Betriebe, die im Bezirk und im Stuttgarter Norden gefunden werden.',
    intro: [
      'Feuerbach war lange eine eigene Industriestadt, bevor es zu Stuttgart kam. Bosch hat hier einen seiner traditionsreichsten Standorte, dazu kommen viele Gewerbebetriebe, Handwerk und Dienstleister. Rund um den Wilhelm-Geiger-Platz und die Stuttgarter Straße gibt es Läden, Gastronomie und Praxen, S-Bahn und Stadtbahn halten im Bezirk.',
      'Feuerbach hat damit ein eigenes Zentrum, und so wird auch gesucht: „Café Feuerbach“, „Zahnarzt Feuerbach“, „Schreinerei Feuerbach“. Betriebe, die den Bezirk klar nennen, stehen dort nicht gegen ganz Stuttgart, sondern gegen eine überschaubare Zahl von Mitbewerbern.',
    ],
    branchen: [
      ['Gewerbe & Technik', 'Leistungen, Referenzen und Ansprechpartner für Geschäftskunden, schnell erfassbar und technisch sauber.'],
      ['Gastronomie & Cafés', 'Speisekarte als Text, Öffnungszeiten, Reservierung und ein Google-Profil mit aktuellen Fotos.'],
      ['Praxen & Handwerk', 'Klare Leistungen, Anfahrt mit S-Bahn oder Stadtbahn und ein einfacher Kontaktweg, auch per WhatsApp.'],
    ],
    tips: [
      ['Bezirk in den Titel', '„Stuttgart-Feuerbach“ gehört in Titel, Adresse und Google-Profil. Feuerbach allein ist auch ein Flussname.'],
      ['Nachbarbezirke nennen', 'Weilimdorf, Zuffenhausen und der Killesberg liegen nah. Wer dort Kunden hat, nennt das mit echtem Bezug.'],
      ['Mittagsgeschäft abbilden', 'Wer von Beschäftigten der Betriebe im Bezirk lebt, zeigt Mittagstisch und Öffnungszeiten tagesaktuell.'],
    ],
    faq: [
      ['Wie stehe ich gegen Anbieter aus ganz Stuttgart?', 'Bei Suchen mit „Feuerbach“ deutlich besser als bei „Stuttgart“. Wer seinen Bezirk klar nennt, Leistungen einzeln beschreibt und echte Bewertungen sammelt, hat dort gute Chancen.'],
      ['Können Sie auch Mittagskarte oder Aktionen laufend aktualisieren?', 'Ja. Mit dem Care-Paket schicken Sie mir Änderungen per WhatsApp und ich setze sie um. Für tägliche Wechsel legen wir einen festen Ablauf fest, zum Beispiel ein Foto der Mittagskarte per WhatsApp.'],
    ],
  },
  {
    slug: 'stuttgart-weilimdorf', name: 'Stuttgart-Weilimdorf', short: 'Weilimdorf', zip: '70499', km: 15.4, min: 21, roads: ['L 1124', 'Stuttgarter Straße', 'B 10'],
    lat: 48.8139, lon: 9.1137, dest: 'Bezirksrathaus Weilimdorf',
    title: 'Webdesign Stuttgart-Weilimdorf – Website & SEO | Niktos',
    description: 'Webdesign für Weilimdorf, Bergheim, Giebel, Hausen und Wolfbusch: Websites mit lokalem SEO für den Stuttgarter Nordwesten. Rund 21 Minuten von Niktos.',
    lead: 'Weilimdorf ist ein großer Stadtbezirk mit mehreren Stadtteilen und eigenem Zentrum am Löwen-Markt. Ich baue Websites für Betriebe aus Weilimdorf, die im Bezirk und in den Nachbarorten Korntal, Ditzingen und Gerlingen gefunden werden.',
    intro: [
      'Zu Weilimdorf gehören Bergheim, Giebel, Hausen und Wolfbusch. Im Zentrum rund um den Löwen-Markt sitzen Läden, Praxen und Gastronomie, im Gewerbegebiet Handwerk und Dienstleister. Der Bezirk grenzt an Korntal-Münchingen, Ditzingen und Gerlingen, viele Kunden pendeln täglich über die Stadtgrenze.',
      'Für die Suche heißt das: Kunden suchen nach dem Stadtteil, nach Weilimdorf oder nach dem Nachbarort im Landkreis Ludwigsburg. Eine Website, die diese Orte ehrlich und konkret nennt, holt alle drei Arten von Suchen ab.',
    ],
    branchen: [
      ['Läden & Praxen am Löwen-Markt', 'Öffnungszeiten, Leistungen und Lage, mit Google-Profil und Website, die exakt übereinstimmen.'],
      ['Handwerk & Gewerbe', 'Leistungsseiten mit Fotos, Einsatzgebiet bis Korntal, Ditzingen und Gerlingen und Anfragen per WhatsApp.'],
      ['Familien- & Freizeitangebote', 'Kurse, Zeiten und Anmeldung übersichtlich, damit Eltern sich am Handy schnell entscheiden können.'],
      ['Pflege & Senioren', 'In einem großen Wohnbezirk suchen Angehörige oft dringend Hilfe. Leistungen, Einzugsgebiet nach Stadtteilen und ein direkter Rückruf sind hier wichtiger als Effekte.'],
    ],
    tips: [
      ['Stadtteile in die Adresse', 'Bergheim, Giebel, Hausen und Wolfbusch werden einzeln gesucht. Nennen Sie Ihren Stadtteil sichtbar.'],
      ['Über die Stadtgrenze', 'Korntal-Münchingen und Ditzingen liegen direkt nebenan. Wer dort arbeitet, schreibt es mit einem konkreten Beispiel.'],
      ['Ein Name, überall gleich', 'Website, Google-Profil und Verzeichnisse brauchen exakt dieselbe Schreibweise von Name, Adresse und Telefon.'],
    ],
    faq: [
      ['Gehört Weilimdorf für Google zu Stuttgart oder zum Strohgäu?', 'Verwaltungsmäßig zu Stuttgart. Viele Kunden denken aber in Nachbarschaften. Auf der Website können Sie beides abdecken, wenn Sie Stuttgart-Weilimdorf als Adresse und die Nachbarorte als echtes Einsatzgebiet nennen.'],
      ['Kann ich meine Website später erweitern?', 'Ja. Viele starten kompakt und ergänzen später Leistungsseiten oder einen Blog. Das wird beim Aufbau gleich so angelegt.'],
    ],
  },
  {
    slug: 'waiblingen', name: 'Waiblingen', zip: '71332', km: 16.5, min: 22, roads: ['L 1124', 'L 1100', 'L 1142'],
    lat: 48.8320, lon: 9.3171, dest: 'Rathaus Waiblingen',
    title: 'Webdesign Waiblingen – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Waiblingen im Remstal: Websites für Handwerk, Handel, Praxen und Zulieferer, mit lokalem SEO im Rems-Murr-Kreis. Rund 22 Minuten von Niktos.',
    lead: 'Waiblingen ist Kreisstadt des Rems-Murr-Kreises und liegt nur über den Neckar von Ludwigsburg entfernt. Ich baue Websites für Waiblinger Betriebe, die in der Stadt und im Remstal gefunden werden. Über Remseck sind es rund 22 Minuten.',
    intro: [
      'Waiblingen verbindet Fachwerk-Altstadt an der Rems mit einem starken Wirtschaftsstandort. Stihl hat hier seinen Hauptsitz, dazu kommen viele mittelständische Betriebe, Handel und Handwerk. Zur Stadt gehören unter anderem Neustadt, Hohenacker, Bittenfeld, Hegnach und Beinstein.',
      'Als Kreisstadt ist Waiblingen auch ein Ziel für Kunden aus dem ganzen Remstal. Betriebe hier konkurrieren deshalb nicht nur mit Anbietern aus der Stadt, sondern aus Fellbach, Winnenden und Schorndorf. Eine klare Positionierung mit Leistung und Ort macht den Unterschied.',
    ],
    branchen: [
      ['Mittelstand & Zulieferer', 'Leistungen, Referenzen, Karriere-Seite und Ansprechpartner. Geschäftskunden und Bewerber vergleichen genau.'],
      ['Handel & Gastronomie in der Altstadt', 'Öffnungszeiten, Angebot und Lage an der Rems, dazu ein Google-Profil mit aktuellen Fotos.'],
      ['Handwerk', 'Leistungsseiten mit Fotos aus dem Remstal und ein Einsatzgebiet, das die Stadtteile und Nachbarorte ehrlich nennt.'],
      ['Ärzte & Therapeuten', 'Als Kreisstadt hat Waiblingen viele Fachpraxen mit Patienten aus dem ganzen Kreis. Anfahrt, Parken, Barrierefreiheit und klare Sprechzeiten entscheiden mit.'],
    ],
    tips: [
      ['Remstal als Region', 'Viele suchen nach dem Remstal statt nach einzelnen Orten. Wo es passt, gehört der Begriff in den Text.'],
      ['Stadtteile nennen', 'Wer in Hegnach, Bittenfeld oder Hohenacker sitzt, schreibt den Stadtteil in die Adresse. Auch danach wird gesucht.'],
      ['Karriere mitdenken', 'Neben großen Arbeitgebern finden kleinere Betriebe Personal oft über eine gute eigene Karriere-Seite.'],
    ],
    faq: [
      ['Arbeiten Sie auch im Rems-Murr-Kreis, obwohl Sie in Ludwigsburg sitzen?', 'Ja. Waiblingen ist über Remseck in rund 22 Minuten erreichbar. Erstgespräche führe ich gern vor Ort, danach läuft vieles per Video-Call und WhatsApp.'],
      ['Wie hebe ich mich in Waiblingen von der Konkurrenz ab?', 'Mit einer eigenen Seite pro Leistung, echten Fotos statt Stockbildern, echten Bewertungen und einer Website, die schnell lädt. Diese Grundlagen fehlen erstaunlich vielen Mitbewerbern.'],
    ],
  },
  {
    slug: 'fellbach', name: 'Fellbach', zip: '70734', km: 19.6, min: 24, roads: ['L 1124', 'L 1100', 'L 1197'],
    lat: 48.8083, lon: 9.2759, dest: 'Rathaus Fellbach',
    title: 'Webdesign Fellbach – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Fellbach, Schmiden und Oeffingen: Websites für Weingüter, Gastronomie, Handel und Handwerk, mit lokalem SEO. Rund 24 Minuten von Niktos.',
    lead: 'Fellbach liegt am Kappelberg direkt an der Stuttgarter Stadtgrenze, zwischen Weinbergen und Gewerbegebieten. Ich baue Websites für Fellbacher Betriebe, die Kunden aus Fellbach, Stuttgart und dem Remstal erreichen.',
    intro: [
      'Fellbach ist Weinstadt und Wirtschaftsstandort. Am Kappelberg wachsen die Reben, im Herbst zieht der Fellbacher Herbst Besucher aus der ganzen Region an, die Schwabenlandhalle ist ein bekannter Veranstaltungsort. Dazu gehören die Stadtteile Schmiden und Oeffingen mit eigenem Gewerbe, Handel und Handwerk.',
      'Fellbacher Betriebe stehen bei der Suche oft neben Anbietern aus Stuttgart-Bad Cannstatt und Waiblingen. Wer Fellbach, den Stadtteil und die eigene Leistung klar nennt, wird bei den genaueren Suchen bevorzugt.',
    ],
    branchen: [
      ['Weingüter & Besen', 'Weinliste, Verkaufszeiten, Besenzeiten und Weinproben, mit Fotos vom Kappelberg und klarer Anfahrt.'],
      ['Handel & Gastronomie', 'Öffnungszeiten, Angebot, Reservierung und Sonderzeiten zu Festen, abgestimmt mit dem Google-Profil.'],
      ['Handwerk in Schmiden & Oeffingen', 'Leistungsseiten, Fotos echter Projekte und ein Einsatzgebiet bis Bad Cannstatt, Waiblingen und Remseck.'],
      ['Veranstaltungen & Catering', 'Rund um Schwabenlandhalle und Feste gibt es Bedarf an Catering, Technik und Dekoration. Referenzfotos, Kapazitäten und ein Anfrageformular mit Datum und Gästezahl helfen.'],
    ],
    tips: [
      ['Feste nutzen', 'Zum Fellbacher Herbst und anderen Veranstaltungen gehören Sonderöffnungszeiten und Aktionen rechtzeitig auf Website und Profil.'],
      ['Stadtteil sichtbar machen', 'Schmiden und Oeffingen werden eigenständig gesucht. Wer dort sitzt, nennt das in Adresse und Text.'],
      ['Gegen Stuttgart bestehen', 'Für „Stuttgart“ allgemein ist die Konkurrenz riesig. Mit „Fellbach“ plus Leistung sind Sie deutlich besser aufgestellt.'],
    ],
    faq: [
      ['Wie werde ich bei „Besen Fellbach“ oder „Weinprobe Fellbach“ gefunden?', 'Mit eigenen Seiten zu Besen und Weinprobe (Zeiten, Preise, Anfahrt), einem gepflegten Google-Profil und echten Bewertungen. Ein Satz auf der Startseite reicht dafür selten.'],
      ['Ist Fellbach nicht schon zu weit für persönliche Termine?', 'Nein. Über Remseck sind es rund 24 Minuten ohne Stau. Für das Erstgespräch komme ich gern zu Ihnen.'],
    ],
  },
  {
    slug: 'leonberg', name: 'Leonberg', zip: '71229', km: 24.3, min: 26, roads: ['L 1124', 'B 27', 'A 81'],
    lat: 48.7984, lon: 9.0135, dest: 'Rathaus Leonberg',
    title: 'Webdesign Leonberg – Websites & lokales SEO | Niktos',
    description: 'Webdesign für Leonberg, Eltingen, Höfingen, Gebersheim und Warmbronn: Websites mit lokalem SEO für Betriebe am Autobahndreieck. Rund 26 Minuten von Niktos.',
    lead: 'Leonberg liegt am Autobahndreieck von A 8 und A 81 und damit für Kunden aus vielen Richtungen günstig. Ich baue Websites für Leonberger Betriebe, die diese Lage nutzen. Von Ludwigsburg sind es rund 26 Minuten.',
    intro: [
      'Leonberg gehört zum Landkreis Böblingen und ist bekannt für seine Altstadt, den Pomeranzengarten, den traditionellen Pferdemarkt und die Hunderasse, die nach der Stadt benannt ist. Zur Stadt gehören Eltingen, Höfingen, Gebersheim und Warmbronn. Durch die Autobahnlage sind Gewerbe, Handel und Dienstleister stark vertreten.',
      'Viele Leonberger Betriebe haben Kunden in Ditzingen, Gerlingen, Renningen und Rutesheim, also über Kreisgrenzen hinweg. Die Website sollte deshalb klar sagen, wo Sie sitzen und welche Orte Sie wirklich bedienen.',
    ],
    branchen: [
      ['Gewerbe & Dienstleister', 'Leistungen, Referenzen, Ansprechpartner und Anfahrt von der Autobahn, für Geschäftskunden in wenigen Sekunden erfassbar.'],
      ['Handwerk', 'Leistungsseiten mit Fotos, Einsatzgebiet in den Stadtteilen und Nachbarorten und eine schnelle Anfrage per WhatsApp.'],
      ['Handel & Gastronomie in der Altstadt', 'Öffnungszeiten, Angebot, Sonderzeiten zum Pferdemarkt und ein passendes Google-Profil.'],
      ['Logistik & Kurierdienste', 'Die Lage am Autobahndreieck zieht Lager und Kurierdienste an. Geschäftskunden wollen Einsatzradius, Fahrzeugtypen und Reaktionszeiten schnell sehen.'],
    ],
    tips: [
      ['Stadtteile in die Adresse', 'Eltingen, Höfingen, Gebersheim und Warmbronn werden einzeln gesucht. Ihr Stadtteil gehört sichtbar auf die Seite.'],
      ['Über Kreisgrenzen denken', 'Ditzingen und Gerlingen liegen im Landkreis Ludwigsburg, Renningen im Kreis Böblingen. Nennen Sie alle Orte, in denen Sie arbeiten, mit echtem Bezug.'],
      ['Anfahrt erklären', 'Für Kunden von außerhalb ist eine Wegbeschreibung ab Autobahn mit Parkhinweis besonders hilfreich.'],
    ],
    faq: [
      ['Betreuen Sie Leonberg, obwohl es im Kreis Böblingen liegt?', 'Ja. Über die A 81 sind es rund 26 Minuten ohne Stau. Das Erstgespräch kann bei Ihnen vor Ort stattfinden, danach läuft vieles per Video-Call und WhatsApp.'],
      ['Soll ich für jeden Leonberger Stadtteil eine eigene Seite anlegen?', 'In der Regel nicht. Besser ist eine starke Seite pro Leistung, die die Stadtteile mit echtem Bezug nennt. Eigene Stadtteilseiten lohnen sich nur mit eigenem, konkretem Inhalt.'],
    ],
  },
];
