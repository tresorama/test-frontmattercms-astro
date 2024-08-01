import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = {
  "post": blogCollection
};
