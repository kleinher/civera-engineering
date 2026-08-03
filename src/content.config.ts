import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    slug: z.string(),
    title: z.string(),
    category: z.string(),
    cover: z.string().optional(),
    heroImage: z.string().optional(),
    excerpt: z.string(),
    scope: z.array(z.string()),
    keyInfo: z
      .object({
        type: z.string().optional(),
        location: z.string().optional(),
        status: z.string().optional(),
        levels: z.string().optional(),
        area: z.string().optional(),
        structural: z.string().optional(),
        foundation: z.string().optional(),
        scope: z.string().optional(),
        software: z.string().optional(),
        year: z.string().optional(),
      })
      .partial()
      .default({}),
    gallery: z
      .array(
        z.object({
          category: z.enum([
            'completed',
            'construction',
            'reinforcement',
            'model',
            'render',
            'drawings',
            'foundation',
            'details',
          ]),
          src: z.string().optional(),
          alt: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };
