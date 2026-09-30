// Build → audit → publish dist/ as the `deploy` branch (Hostinger pulls that branch into public_html).
// Usage: npm run deploy            (build, check, commit to `deploy`, push)
//        npm run deploy -- --no-push   (everything except the push)
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WT = path.join(ROOT, '.deploy');           // git worktree for the deploy branch (gitignored)
const BRANCH = 'deploy';
const push = !process.argv.includes('--no-push');
const sh = (cmd, opts = {}) => execSync(cmd, { cwd: ROOT, stdio: 'inherit', ...opts });
const out = (cmd, cwd = ROOT) => execSync(cmd, { cwd, encoding: 'utf8' }).trim();

// 0. Safety: main must be committed so the deploy commit can reference it
if (out('git status --porcelain')) { console.error('✗ Uncommitted changes on main – commit first.'); process.exit(1); }
const sha = out('git rev-parse --short HEAD');

// 1. Build + audit (fails the deploy on any SEO/link/secret error)
sh('node scripts/lint-php.js');
sh('node scripts/images.js');
sh('node scripts/build.js');
sh('node scripts/check-seo.js');

// 2. Worktree for the deploy branch (orphan on first run)
const hasBranch = (() => { try { out(`git rev-parse --verify ${BRANCH}`); return true; } catch { return false; } })();
const hasRemote = (() => { try { out(`git rev-parse --verify origin/${BRANCH}`); return true; } catch { return false; } })();
if (!fs.existsSync(WT)) {
  if (hasBranch) sh(`git worktree add .deploy ${BRANCH}`);
  else if (hasRemote) sh(`git worktree add -b ${BRANCH} .deploy origin/${BRANCH}`);
  else { sh(`git worktree add --detach .deploy`); sh(`git checkout --orphan ${BRANCH}`, { cwd: WT }); sh('git rm -rf --quiet .', { cwd: WT }); }
}

// 3. Mirror dist/ into the worktree (keep .git)
for (const e of fs.readdirSync(WT)) if (e !== '.git') fs.rmSync(path.join(WT, e), { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'dist'), WT, { recursive: true });

// 4. Commit + push
sh('git add -A', { cwd: WT });
if (!out('git status --porcelain', WT)) { console.log('✓ Nothing changed – deploy branch already up to date.'); process.exit(0); }
sh(`git commit --quiet -m "Deploy ${new Date().toISOString().slice(0, 16).replace('T', ' ')} (main ${sha})"`, { cwd: WT });
if (push) sh(`git push origin ${BRANCH}`, { cwd: WT });
console.log(push ? `✓ Pushed ${BRANCH}. Hostinger pulls it via webhook (or hPanel → Git → Deploy).` : `✓ Committed to ${BRANCH} (not pushed).`);
