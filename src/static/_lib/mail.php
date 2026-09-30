<?php
// E-mail rendering for kontakt.php. Templates live in _lib/mail/*.html|txt with {{placeholders}}.
// The local Node preview script (`npm run mail`, see CLAUDE.md) renders the same templates – keep the logic in both in sync.
declare(strict_types=1);

const NK_SITE_URL  = 'https://niktos.com';
const NK_PHONE     = '0162 2403682';
const NK_PHONE_TEL = '+491622403682';
const NK_WHATSAPP  = 'https://wa.me/491622403682';
const NK_EMAIL     = 'info@niktos.com';

/** Whitelisted form fields → labels (order = order in the e-mail). */
const NK_FIELDS = [
    'anliegen'    => 'Anliegen',
    'paket'       => 'Paket',
    'hat_website' => 'Website vorhanden',
    'website_url' => 'Aktuelle Website',
    'branche'     => 'Branche',
    'budget'      => 'Budget',
    'zeitrahmen'  => 'Zeitrahmen',
    'name'        => 'Name',
    'firma'       => 'Unternehmen',
    'email'       => 'E-Mail',
    'telefon'     => 'Telefon / WhatsApp',
    'kontaktweg'  => 'Bevorzugter Kontakt',
    'nachricht'   => 'Nachricht',
];

function mail_tpl(string $file, array $vars): string {
    $tpl = (string)file_get_contents(__DIR__ . '/mail/' . $file);
    $map = [];
    foreach ($vars as $k => $v) $map['{{' . $k . '}}'] = (string)$v;
    return strtr($tpl, $map);
}

function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8'); }

/** German phone number → international digits for wa.me / tel: ("0171 234" → "49171234"). */
function phone_intl(string $phone): string {
    $plus = strpos(trim($phone), '+') === 0;
    $d = preg_replace('/\D+/', '', $phone) ?? '';
    if (!$plus) {
        if (strpos($d, '00') === 0) $d = substr($d, 2);
        elseif (strpos($d, '0') === 0) $d = '49' . substr($d, 1);
    }
    return strlen($d) >= 8 ? $d : '';
}

function mail_rows(array $pairs): string {
    $out = '';
    foreach ($pairs as [$label, $valueHtml]) $out .= mail_tpl('row.html', ['label' => h($label), 'value' => $valueHtml]);
    return $out;
}

function mail_button(string $href, string $label, string $color, string $text = '#ffffff'): string {
    return mail_tpl('button.html', ['href' => h($href), 'label' => h($label), 'color' => $color, 'text' => $text]);
}

/** Short headline for subject/preheader: "Neue Website · Boost" etc. */
function nk_topic(array $d): string {
    $t = $d['anliegen'] !== '' ? $d['anliegen'] : 'Allgemeine Anfrage';
    if ($d['paket'] !== '') $t .= ' · Paket ' . ucfirst($d['paket']);
    return $t;
}

/**
 * Notification to Nikola (info@).
 * @return array{subject:string, html:string, text:string}
 */
function build_anfrage(array $d, string $logoSrc): array {
    $intl = phone_intl($d['telefon']);
    $tel = $intl ? '+' . $intl : preg_replace('/[^\d+]/', '', $d['telefon']);
    $topic = nk_topic($d);
    $link = 'color:#0a6cff; text-decoration:none; font-weight:bold;';
    $pairs = []; $textRows = '';
    foreach (NK_FIELDS as $key => $label) {
        $v = (string)($d[$key] ?? '');
        if ($v === '') continue;
        if ($key === 'paket') $v = ucfirst($v);
        $textRows .= str_pad($label . ':', 22) . ($key === 'nachricht' ? "\n" : '') . $v . "\n";
        if ($key === 'email') $html = '<a href="mailto:' . h($v) . '" style="' . $link . '">' . h($v) . '</a>';
        elseif ($key === 'telefon') $html = '<a href="tel:' . h($tel) . '" style="' . $link . '">' . h($v) . '</a>';
        elseif ($key === 'website_url') { $u = preg_match('~^https?://~i', $v) ? $v : 'https://' . $v; $html = '<a href="' . h($u) . '" style="' . $link . '">' . h($v) . '</a>'; }
        elseif ($key === 'nachricht') $html = nl2br(h($v));
        elseif (in_array($key, ['anliegen', 'budget', 'paket'], true)) $html = '<strong>' . h($v) . '</strong>';
        else $html = h($v);
        $pairs[] = [$label, $html];
    }
    $pairs[] = ['Formular', $d['form'] === 'projekt' ? 'Projekt-Anfrage (Step-by-Step)' : 'Kontaktformular'];
    $pairs[] = ['Eingegangen', h($d['datum'])];

    $greeting = 'Hallo ' . $d['name'] . ",\n\nvielen Dank für Ihre Anfrage";
    $mailto = 'mailto:' . $d['email'] . '?subject=' . rawurlencode('Ihre Anfrage bei Niktos') . '&body=' . rawurlencode($greeting);
    $wa = $intl ? 'https://wa.me/' . $intl . '?text=' . rawurlencode('Hallo ' . $d['name'] . ', hier ist Nikola von Niktos. Vielen Dank für Ihre Anfrage!') : '';

    $buttons = '';
    if ($wa) $buttons .= mail_button($wa, 'WhatsApp schreiben', '#25d366', '#03220f');
    if ($intl) $buttons .= mail_button('tel:' . $tel, 'Anrufen · ' . $d['telefon'], '#0a6cff');
    $buttons .= mail_button($mailto, 'Per E-Mail antworten', '#141827');

    $html = mail_tpl('anfrage.html', [
        'preheader' => h($topic . ' – ' . $d['name'] . ($d['budget'] !== '' ? ', Budget ' . $d['budget'] : '')),
        'logo_url' => $logoSrc,
        'topic' => h($topic),
        'datum' => h($d['datum']),
        'rows' => mail_rows($pairs),
        'buttons' => $buttons,
        'site_url' => NK_SITE_URL,
        'reply_hint' => h('Tipp: „Antworten“ geht direkt an ' . $d['email'] . '.'),
    ]);
    $text = mail_tpl('anfrage.txt', [
        'topic' => $topic, 'rows' => rtrim($textRows), 'datum' => $d['datum'],
        'tel_link' => $tel ? 'tel:' . $tel : '–', 'wa_link' => $wa ?: '–', 'email' => $d['email'], 'site_url' => NK_SITE_URL,
    ]);
    return ['subject' => 'Neue Anfrage: ' . $topic . ' – ' . $d['name'], 'html' => $html, 'text' => $text];
}

/** Automatic confirmation to the customer (German). */
function build_bestaetigung(array $d, string $logoSrc): array {
    $pairs = []; $textRows = '';
    foreach (['anliegen', 'paket', 'website_url', 'branche', 'budget', 'zeitrahmen', 'kontaktweg', 'nachricht'] as $key) {
        $v = (string)($d[$key] ?? '');
        if ($v === '') continue;
        if ($key === 'paket') $v = ucfirst($v);
        $pairs[] = [NK_FIELDS[$key], $key === 'nachricht' ? nl2br(h($v)) : h($v)];
        $textRows .= str_pad(NK_FIELDS[$key] . ':', 22) . ($key === 'nachricht' ? "\n" : '') . $v . "\n";
    }
    $buttons = mail_button(NK_WHATSAPP, 'WhatsApp schreiben', '#25d366', '#03220f')
             . mail_button('tel:' . NK_PHONE_TEL, 'Anrufen · ' . NK_PHONE, '#0a6cff');
    $html = mail_tpl('bestaetigung.html', [
        'logo_url' => $logoSrc, 'name' => h($d['name']), 'rows' => mail_rows($pairs), 'buttons' => $buttons, 'site_url' => NK_SITE_URL,
    ]);
    $text = mail_tpl('bestaetigung.txt', ['name' => $d['name'], 'rows' => rtrim($textRows), 'site_url' => NK_SITE_URL]);
    return ['subject' => 'Ihre Anfrage bei Niktos – ich melde mich in Kürze', 'html' => $html, 'text' => $text];
}
