import { blockConfig, blogConfig, ComponentConfig, CourseConfig, docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});


export const blocks = loader({
  baseUrl: "/blocks",
  source: createMDXSource(blockConfig)
})
export const blogs = loader({
  baseUrl: "/blogs",
  source: createMDXSource(blogConfig)
})
export const courses = loader({
  baseUrl: "/course",
  source: createMDXSource(CourseConfig)
})

export const components = loader({
  baseUrl: "/components",
  source: createMDXSource(ComponentConfig)
})
export const flutterBlocks = loader({
  baseUrl: "/flutter",
  source: createMDXSource(ComponentConfig)
})

