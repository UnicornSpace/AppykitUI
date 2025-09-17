import { blockConfig, blogConfig, ComponentConfig, CourseConfig, docs,reactNativeCourseConfig } from '@/.source';
import { loader } from 'fumadocs-core/source';
// import { blogConfig } from 'source.config';
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
export const reactNativeCourse = loader({
  baseUrl: "/reactnative",
  source: createMDXSource(reactNativeCourseConfig)
})
export const blogs = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogConfig)
})
export const course = loader({
  baseUrl: "/course",
  source: createMDXSource(CourseConfig)
})

export const components = loader({
  baseUrl: "/components",
  source: createMDXSource(ComponentConfig)
})



// export const tools = loader({
//   baseUrl: "/tools",
//   source: createMDXSource(toolConfig),
// })
