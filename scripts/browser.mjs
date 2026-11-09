// Apre un browser headless (Edge o Chrome) e lo guida via DevTools Protocol.
// Usato da og.mjs (immagini di anteprima) e cv.mjs (CV in PDF). Serve `npm run dev` avviato.
import { spawn } from 'node:child_process';
import { rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export const BASE = process.env.DEV_URL ?? 'http://localhost:4321';
const BROWSER = process.env.BROWSER ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PORT = 9341;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function withPage(fn) {
  const profile = join(tmpdir(), 'portfolio-headless-browser');
  const browser = spawn(
    BROWSER,
    ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', `--user-data-dir=${profile}`, `--remote-debugging-port=${PORT}`, 'about:blank'],
    { stdio: 'ignore' },
  );
  try {
    let wsUrl;
    for (let i = 0; i < 40 && !wsUrl; i++) {
      try {
        const pages = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
        wsUrl = pages.find((p) => p.type === 'page')?.webSocketDebuggerUrl;
      } catch {}
      if (!wsUrl) await wait(250);
    }
    if (!wsUrl) throw new Error('Il browser non risponde');

    const ws = new WebSocket(wsUrl);
    await new Promise((r) => ws.addEventListener('open', r, { once: true }));
    let id = 0;
    const pending = new Map();
    const listeners = [];
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data);
      if (m.id && pending.has(m.id)) (pending.get(m.id)(m.result), pending.delete(m.id));
      if (m.method) listeners.filter((l) => l.ev === m.method).forEach((l) => l.fn());
    });
    const send = (method, params = {}) =>
      new Promise((r) => {
        const i = ++id;
        pending.set(i, r);
        ws.send(JSON.stringify({ id: i, method, params }));
      });
    const once = (ev) => new Promise((fn) => listeners.push({ ev, fn }));

    await send('Page.enable');
    const open = async (path) => {
      const loaded = once('Page.loadEventFired');
      await send('Page.navigate', { url: `${BASE}${path}` });
      await loaded;
      await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
      await wait(400);
    };
    await fn({ send, open });
    ws.close();
  } finally {
    browser.kill();
    await wait(300);
    try {
      rmSync(profile, { recursive: true, force: true });
    } catch {}
  }
}
