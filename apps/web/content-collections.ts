import { defineCollection, defineConfig } from "@content-collections/core";

const components = defineCollection({
  name: "components",
  directory: "content/components",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string()
  }),
});

export default defineConfig({
  collections: [components],
});