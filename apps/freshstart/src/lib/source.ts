import { blogs as blogsSource, learn as learnSource } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';


export const blogs = loader({
  baseUrl: '/blog',
  source: blogsSource.toFumadocsSource(),
});


export const learn = loader({
  baseUrl: '/learn',
  source: learnSource.toFumadocsSource()
  // source: await create.sourceAsync(learn.doc, learn.meta),

});
