import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Images are plain site-absolute strings (e.g. /media/foo.jpg), NOT Astro's
// image() helper. Sveltia uploads into public/media and writes a public path
// into frontmatter; image() only resolves paths under src/, so using it here
// would break the build on every CMS-uploaded image.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    tagline: z.string().optional(),
    hero: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    location: z.string().optional(),
    status: z.enum(['Exploring', 'Under contract', 'In development', 'Complete']),
    acres: z.number().optional(),
    summary: z.string().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { pages, projects };
