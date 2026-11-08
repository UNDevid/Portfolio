import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Stesso schema per le due lingue: italiano in content/projects, inglese in content/projects-en.
const schema = ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      platform: z.enum(['android', 'flutter', 'web']),
      year: z.number(),
      client: z.string().default('Progetto personale'),
      role: z.string().optional(),
      stack: z.array(z.string()),
      accent: z.string().default('#3DDC84'),
      /** 1-3 caratteri mostrati sulla copertina generata quando manca `cover`. */
      monogram: z.string().max(3).optional(),
      cover: image().optional(),
      /** Lato da tenere visibile quando la copertina viene ritagliata. */
      coverPosition: z.enum(['left', 'center', 'right']).default('center'),
      /** Effetto animato sopra la copertina: logo neon di Beat Runner, oppure grandine che cade. */
      coverEffect: z.enum(['beatrunner-neon', 'hail', 'athanor-breath', 'ken-burns', 'soundboard-concert']).optional(),
      /** Stato di pubblicazione, es. "Su Google Play". */
      status: z.string().optional(),
      /** Immagini nella pagina del progetto: screenshot in cornici da telefono, oppure opere d'arte. */
      gallery: z
        .array(z.object({ src: image(), caption: z.string(), label: z.string().optional() }))
        .default([]),
      /** phone: screenshot in cornice · art: opere d'arte · promo: immagini dello store già impaginate */
      galleryStyle: z.enum(['phone', 'art', 'promo']).default('phone'),
      galleryTitle: z.string().optional(),
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      highlights: z.array(z.string()).default([]),
      /**
       * Il racconto per tutti (modalità predefinita): niente gergo, cosa fa e che risultato ha avuto.
       * La parte tecnica (corpo Markdown, stack, highlights) appare solo con "Dettagli tecnici".
       */
      plain: z.object({
        summary: z.string(),
        tags: z.array(z.string()).max(3),
        challenge: z.string(),
        solution: z.string(),
        result: z.string(),
        highlights: z.array(z.string()).default([]),
      }),
    });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects-en' }),
  schema,
});

export const collections = { projects, projectsEn };
