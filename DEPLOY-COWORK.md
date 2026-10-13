# Niktos – Deploy auf Hostinger (Übergabe an Co-work)

Repo: `https://github.com/nikolaplaninic-niktos/niktos` (privat). Der Branch **`deploy`** enthält fertig gebautes HTML (Inhalt von `dist/`), `main` ist der Quellcode.
Neue Version veröffentlichen (macht Claude lokal): `npm run deploy` → pusht `deploy`.
**Niemals** die Kabic-Seite oder andere Domains anfassen. **Keine Passwörter in den Chat schreiben** – Nikola trägt sie selbst ein.

## Phase 1 – Staging `novi.niktos.com` (live-Seite bleibt unberührt)

1. hPanel → Websites → niktos.com → **Domains → Subdomains**: `novi.niktos.com` anlegen, Document Root = `public_html/novi`. SSL (Let's Encrypt) aktivieren.
2. hPanel → **Erweitert → Git**: Repository `git@github.com:nikolaplaninic-niktos/niktos.git` (SSH, da privat), Branch `deploy`, Installationspfad `public_html/novi`.
   - Hostinger zeigt einen SSH-Public-Key → bei GitHub: Repo → Settings → Deploy keys → Add (nur lesen). Das macht Nikola selbst im Browser.
   - Danach „Bereitstellen/Deploy". Optional: Webhook-URL von Hostinger bei GitHub → Settings → Webhooks eintragen (Event: push), dann deployt jeder Push automatisch.
3. **E-Mail-Postfächer** (hPanel → E-Mails): `info@niktos.com` muss existieren (Empfänger der Anfragen). Neues Postfach **`website@niktos.com`** anlegen (nur zum Senden).
4. **Server-Config** (Dateimanager), Datei `niktos-config.php` **oberhalb von `public_html`**, z. B. `/home/<konto>/domains/niktos.com/niktos-config.php`, nach Vorlage `config.example.php` im Repo:
   `smtp_user` = `website@niktos.com`, `smtp_pass` = Passwort dieses Postfachs (Nikola trägt es selbst ein), `salt` = beliebiger Zufallstext. Rechte 600.
5. Prüfen:
   - `https://novi.niktos.com` lädt, alle Unterseiten gehen, HTTPS ok.
   - Antwort-Header enthält `X-Robots-Tag: noindex` (nur Staging!).
   - Projekt-Anfrage absenden (Test): Mail kommt bei `info@niktos.com` an **und** Bestätigungsmail beim Absender. Falls nicht: `niktos-mail.log` neben `niktos-config.php` lesen (SMTP_LOGIN_FAILED = Passwort/Benutzer prüfen).
   - Lokal macht Claude: `npm run verify -- https://novi.niktos.com`.

## Phase 2 – Go-live auf niktos.com (Nikola hat am 13.10.2026 freigegeben)

Ausgangslage: niktos.com = altes WordPress in  (Root). Dort liegen auch  (eigenes Projekt),  (Staging) und  – **diese bleiben unberührt**. Der Git-Slot von niktos.com gehört dem Projekt Deutsch-richtig (nicht trennen).

Vorgehen (kein Git für den Root nötig):
1. hPanel → Backups: manuelles Backup (Dateien + Datenbank) und warten, bis es fertig ist.
2. Neuen Ordner  anlegen. Alle WordPress-Dateien aus dem Root **dorthin verschieben (nicht löschen)** – alles außer , , , . Das alte  und  gehören ebenfalls ins Archiv. In  nur . Liste der verschobenen Einträge notieren. Datenbank nicht anfassen.
3. Den **kompletten Inhalt** von  (inkl. versteckter , ohne ) in  kopieren. Die Unterordner  und  nicht überschreiben.
4. Prüfen: ,  → non-www, , , , alte WP-URLs → 301, **kein**  auf niktos.com (auf novi.* bleibt er),  lädt weiterhin, Testanfrage über das Formular, .
5. Danach: Google Search Console → Sitemap  neu einreichen.

**Config-Suche:**  sucht  ab dem eigenen Ordner bis zu 4 Ebenen nach oben. Aus  wird sie also bereits in  gefunden – keine Änderung nötig.

**Updates danach:**  aktualisiert Staging (novi) automatisch. Live wird mit Schritt 3 nachgezogen (novi → Root kopieren; , , ,  nicht anfassen).

## Rollback
-Root: die neu kopierten Dateien entfernen (nur die aus Schritt 3), Inhalt von  zurück in den Root verschieben. Notfalls hPanel-Backup einspielen. Die WordPress-Datenbank wurde nie verändert.
