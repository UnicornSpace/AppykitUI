import { blockConfig, blogConfig, CourseConfig, docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
// import { blogConfig } from 'source.config';
import { createMDXSource } from 'fumadocs-mdx';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/components',
  source: docs.toFumadocsSource(),
});


export const blocks = loader({
  baseUrl: "/blocks",
  source: createMDXSource(blockConfig)
})
export const blogs = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogConfig)
})
export const course = loader({
  baseUrl: "/course",
  source: createMDXSource(CourseConfig)
})
