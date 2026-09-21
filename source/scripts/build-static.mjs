import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mkdir, copyFile } from 'node:fs/promises';
const root = fileURLToPath(new URL('../', import.meta.url));
const result = spawnSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], {
  cwd: root, env: { ...process.env, BRIDGE_STATIC_EXPORT: '1' }, stdio: 'inherit',
});
if (result.error) console.error(result.error.message);
if (result.status !== 0) process.exit(result.status ?? 1);
for (const route of ['about', 'business', 'company', 'contact', 'privacy']) {
  await mkdir(new URL(`../dist/client/${route}/`, import.meta.url), { recursive: true });
  await copyFile(new URL(`../dist/client/${route}.html`, import.meta.url), new URL(`../dist/client/${route}/index.html`, import.meta.url));
}
