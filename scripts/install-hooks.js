const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const HOOKS_SRC = path.join(ROOT_DIR, "hooks");
const HOOKS_DEST = path.join(ROOT_DIR, ".git", "hooks");

if (!fs.existsSync(HOOKS_DEST)) {
  console.error("No .git/hooks directory found. Are you in the repo root?");
  process.exit(1);
}

const hooks = fs.readdirSync(HOOKS_SRC);
for (const hook of hooks) {
  const src = path.join(HOOKS_SRC, hook);
  const dest = path.join(HOOKS_DEST, hook);
  fs.copyFileSync(src, dest);
  fs.chmodSync(dest, 0o755);
  console.log(`Installed: .git/hooks/${hook}`);
}

console.log(`\n${hooks.length} hook(s) installed.`);
