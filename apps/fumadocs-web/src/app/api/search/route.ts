import { source, blocks, blogs, components, course } from '@/lib/source'; 
import { createFromSource } from 'fumadocs-core/search/server'; 

// Create search APIs for each source
const docsSearch = createFromSource(source);
const blocksSearch = createFromSource(blocks);
const blogsSearch = createFromSource(blogs);
const componentsSearch = createFromSource(components);
const courseSearch = createFromSource(course);

// Combine all search results
export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  
  if (!query) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Get results from all sources
  const [docsResults, blocksResults, blogsResults, componentsResults, courseResults] = await Promise.all([
    docsSearch.GET(request).then(res => res.json()).catch(() => []),
    blocksSearch.GET(request).then(res => res.json()).catch(() => []),
    blogsSearch.GET(request).then(res => res.json()).catch(() => []),
    componentsSearch.GET(request).then(res => res.json()).catch(() => []),
    courseSearch.GET(request).then(res => res.json()).catch(() => []),
  ]);

  // Combine and return all results
  const allResults = [
    ...docsResults,
    ...blocksResults,
    ...blogsResults,
    ...componentsResults,
    ...courseResults,
  ];

  return new Response(JSON.stringify(allResults), {
    headers: { 'Content-Type': 'application/json' },
  });
}