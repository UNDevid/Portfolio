import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
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
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      highlights: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
