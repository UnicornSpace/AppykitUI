import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
// import { blogConfig } from 'source.config';
import { createMDXSource } from 'fumadocs-mdx';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/components',
  source: docs.toFumadocsSource(),
});


// export const blog = loader({
//   baseUrl: "/blog",
//   source: createMDXSource(blogConfig, [])
// })
