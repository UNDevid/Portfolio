// Genera il CV in PDF (A4) in public/cv/, in italiano e in inglese, dalle pagine src/pages/cv/.
// Uso: con `npm run dev` avviato, `npm run cv`.
import { mkdirSync, writeFileSync } from 'node:fs';
import { withPage } from './browser.mjs';

mkdirSync('public/cv', { recursive: true });

await withPage(async ({ send, open }) => {
  for (const lang of ['it', 'en']) {
    await open(`/cv/${lang}/`);
    const { data } = await send('Page.printToPDF', {
      printBackground: true,
      preferCSSPageSize: true,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    });
    const out = `public/cv/Davide-Valentino-CV-${lang.toUpperCase()}.pdf`;
    writeFileSync(out, Buffer.from(data, 'base64'));
    console.log('✓', out);
  }
});
