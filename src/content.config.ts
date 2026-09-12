import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    slug: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string(),
    cover: z.string().optional(),
    heroImage: z.string().optional(),
    excerpt: z.string(),
    homeMeta: z.string().optional(),
    scope: z.array(z.string()),
    keyInfo: z
      .object({
        name: z.string().optional(),
        type: z.string().optional(),
        location: z.string().optional(),
        detailedLocation: z.string().optional(),
        status: z.string().optional(),
        year: z.string().optional(),
        period: z.string().optional(),
        levels: z.string().optional(),
        floorDimensions: z.string().optional(),
        typicalFloorArea: z.string().optional(),
        area: z.string().optional(),
        residentialLayout: z.string().optional(),
        elevators: z.string().optional(),
        software: z.string().optional(),
        structural: z.string().optional(),
        foundation: z.string().optional(),
      })
      .partial()
      .default({}),
    overview: z.array(z.string()).default([]),
    scopeItems: z.array(z.string()).default([]),
    challenge: z.array(z.string()).default([]),
    civeraScope: z.array(z.string()).default([]),
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
          caption: z.string().optional(),
          feature: z.boolean().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };
