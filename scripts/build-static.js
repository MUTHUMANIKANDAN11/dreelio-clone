const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const apiDir = path.join(__dirname, "..", "app", "api");
const tmpDir = path.join(__dirname, "..", "app", "_api_tmp");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function rmDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

// Backup API routes, remove them, build, then restore
if (fs.existsSync(apiDir)) {
  copyDir(apiDir, tmpDir);
  rmDir(apiDir);
}

try {
  execSync("npx next build", { stdio: "inherit" });
} finally {
  if (fs.existsSync(tmpDir)) {
    copyDir(tmpDir, apiDir);
    rmDir(tmpDir);
  }
}
