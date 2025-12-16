import { blogs as blogsSource } from 'fumadocs-mdx:collections/server';
import { loader} from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';


export const blogs = loader({
  baseUrl: '/blog',
  source: blogsSource.toFumadocsSource(),
});



