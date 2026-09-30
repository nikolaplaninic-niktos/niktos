// Syntax check for our own PHP files (no PHP binary needed). Usage: node scripts/lint-php.js
const fs = require('fs');
const path = require('path');
const { Engine } = require('php-parser');

const files = ['src/static/kontakt.php', 'src/static/_lib/mail.php', 'config.example.php'];
const parser = new Engine({ parser: { php8: true, suppressErrors: false, extractDoc: false }, ast: { withPositions: false } });
let bad = 0;
for (const f of files) {
  try { parser.parseCode(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), f); console.log('✓', f); }
  catch (e) { bad++; console.log('✗', f, '→', e.message); }
}
process.exit(bad ? 1 : 0);
