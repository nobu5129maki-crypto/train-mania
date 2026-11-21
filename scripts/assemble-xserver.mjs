import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const names = [".htaccess", "auth.php", "gate.php", "index.php", "sw.js"];

for (const name of names) {
  copyFileSync(join(root, "xserver", name), join(root, "dist", name));
}
