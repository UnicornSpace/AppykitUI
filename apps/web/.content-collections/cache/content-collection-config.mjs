// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
var components = defineCollection({
  name: "components",
  directory: "content/components/",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    thumbnail: z.string().optional(),
    isPublished: z.boolean().optional().default(false)
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
      slug: document.slug.trim().replace(/\.md$/, "")
      // options,
    };
  }
});
var coursesChapter = defineCollection({
  name: "courses",
  directory: "content/courses/",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    published: z.boolean().optional().default(false)
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
      slug: document.slug.trim().replace(/\.md$/, "")
      // options,
    };
  }
});
var content_collections_default = defineConfig({
  mdx: {
    remarkPlugins: [remarkGfm]
    // GitHub Flavored Markdown
  },
  collections: [components, coursesChapter]
});
export {
  content_collections_default as default
};
