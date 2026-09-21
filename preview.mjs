import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./static-site/', import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.rsc': 'text/x-component', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon', '.txt': 'text/plain' };
const server = createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    const url = new URL(req.url, 'http://localhost');
    const pathname = url.searchParams.has('_rsc') ? (url.pathname.replace(/\/$/, '') || '/index') + '.rsc' : url.pathname;
    const path = resolve(root, '.' + decodeURIComponent(pathname));
    if (path !== resolve(root) && !path.startsWith(resolve(root) + sep)) { res.writeHead(403); res.end(); return; }
    let file = path;
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!url.pathname.endsWith('/')) { res.writeHead(308, { Location: url.pathname + '/' + url.search }); res.end(); return; }
      file = resolve(file, 'index.html');
    }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream', 'Content-Length': data.length });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Not found'); }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(4173, '127.0.0.1', () => console.log('Bridge preview: http://localhost:4173/ (Ctrl+C to stop)'));
