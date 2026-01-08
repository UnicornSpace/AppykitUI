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
      date: z.coerce.date().optional()
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
      date: z.coerce.date().optional()
    })
  }
});
var source_config_default = defineConfig();
export {
  blogs,
  source_config_default as default,
  learn
};
