// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages:
// - repo "UNDevid.github.io"  -> SITE=https://undevid.github.io, BASE=/
// - any other repo, e.g. "portfolio" -> BASE=/portfolio
// The deploy workflow sets these automatically.
export default defineConfig({
  site: process.env.SITE ?? 'https://undevid.github.io',
  base: process.env.BASE ?? '/',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
