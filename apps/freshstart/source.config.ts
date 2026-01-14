import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blogs = defineDocs({
  dir: 'content/blogs',
  docs: {
    schema: frontmatterSchema.extend({
      isPublished: z.boolean().default(false),
      isContentReady: z.boolean().default(false),
      author: z.string().optional(),
      authorLink: z.string().url().optional(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
    }),
  },
});


export const learn = defineDocs({
  dir: 'content/learn',
  docs: {
    schema: frontmatterSchema.extend({
      isPublished: z.boolean().default(false),
      isContentReady: z.boolean().default(false),
      author: z.string().optional(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
    }),
  },
});

export default defineConfig(); 