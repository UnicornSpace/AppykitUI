import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
  defineCollections
} from 'fumadocs-mdx/config';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});


export const blockConfig = defineCollections({
  type: "doc",
  dir: "content/blocks",
})

export const blogConfig = defineCollections({
  type: "doc",
  dir: "content/blog",
})

export const CourseConfig = defineCollections({
  type: "doc",
  dir: "content/course",
})

export const ComponentConfig = defineCollections({
  type: "doc",
  dir: "content/components",
})


// export const toolConfig = defineCollections({
//   type: "doc",
//   dir: "content/tools",
// })


export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
