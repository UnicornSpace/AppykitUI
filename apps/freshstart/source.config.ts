import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';
import { th } from 'zod/v4/locales';

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
      thumbnail: z.string().default('/Flutter-appykit-blog-thumbnail.png'),
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