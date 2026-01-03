import { defineDocs, defineConfig, defineCollections } from 'fumadocs-mdx/config';

export const blogs = defineDocs({
  dir: 'content/blogs',
});


export const learn = defineDocs({
  dir: 'content/learn',
});

export default defineConfig(); 