// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var blogs = defineDocs({
  dir: "content/blogs",
  docs: {
    schema: frontmatterSchema.extend({
      isPublished: z.boolean().default(false),
      isContentReady: z.boolean().default(false),
      author: z.string().optional(),
      authorLink: z.string().url().optional(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      thumbnail: z.string().default("/Flutter-appykit-blog-thumbnail.png")
    })
  }
});
var learn = defineDocs({
  dir: "content/learn",
  docs: {
    schema: frontmatterSchema.extend({
      isPublished: z.boolean().default(false),
      isContentReady: z.boolean().default(false),
      author: z.string().optional(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([])
    })
  }
});
var components = defineDocs({
  dir: "content/components",
  docs: {
    schema: frontmatterSchema.extend({
      category: z.string().optional()
    })
  }
});
var source_config_default = defineConfig();
export {
  blogs,
  components,
  source_config_default as default,
  learn
};
