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
];
