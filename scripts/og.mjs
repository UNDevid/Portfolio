// Genera le immagini di anteprima (Open Graph) in public/og/<lingua>/<pagina>.jpg.
// Uso: con `npm run dev` avviato, `npm run og`. Fotografa le pagine modello di src/pages/og/.
import { mkdirSync, readdirSync } from 'node:fs';
import sharp from 'sharp';
import { withPage } from './browser.mjs';

const cards = ['home', ...readdirSync('src/content/projects').map((f) => f.replace(/\.md$/, ''))];

await withPage(async ({ send, open }) => {
  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  for (const lang of ['it', 'en']) {
    mkdirSync(`public/og/${lang}`, { recursive: true });
    for (const card of cards) {
      await open(`/og/${lang}/${card}/`);
      const { data } = await send('Page.captureScreenshot', { format: 'png' });
      const out = `public/og/${lang}/${card}.jpg`;
      await sharp(Buffer.from(data, 'base64')).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
      console.log('✓', out);
    }
  }
});
