import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blogs } from "@/lib/source";
import { BsArrowLeft } from "react-icons/bs";
import { DocsPage } from "fumadocs-ui/page";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log(blogs.getPages());
  const page = blogs.getPage([params.slug]);
  console.log(page, "page🙄");

  if (!page) notFound();
  const Mdx = page.data.body;

  // return (<div>hi2</div>)
  // console.log(page.data.toc[0].title.props.children, "toc🙄");
  // console.log(page.data.toc[0].title,"toc")
  console.log(page.data.thumbnail, "data🙄");

  return (
    <DocsPage toc={page.data.toc}>
      <main className="max-w-3xl  px-4 py-8">
        <div className="container rounded-xl ">
          <div className="mb-2 flex items-center gap-1 ">
            <BsArrowLeft size={14} className="text-muted-foreground" />
            <Link href={`/blogs`} className="text-sm text-muted-foreground">
              Back
            </Link>
          </div>
          <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
          <p className="mb-4 text-fd-muted-foreground">
            {page.data.description}
          </p>
             {/* <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </AspectRatio> */}
        </div>
     
        <article className="container flex flex-col px-4 py-8">
          <div className="prose min-w-0">
            {/* <InlineTOC items={page.data.toc} /> */}
            <Mdx components={defaultMdxComponents} />
          </div>
          {/* <div className="flex flex-col gap-4 text-sm">
          <div>
            <p className="mb-1 text-fd-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date).toDateString()}
            </p>
          </div>
        </div> */}
        </article>
      </main>
    </DocsPage>
  );
}

// export function generateStaticParams(): { slug: string }[] {
//   return blocks.getPages().filter((page) => Array.isArray(page.slugs) && typeof page.slugs[0] === "string")
//     .map((page) => ({
//       slug: page.slugs[0] as string,
//     }));
// }

// export async function generateMetadata(props: {
//   params: Promise<{ slug: string }>;
// }) {
//   const params = await props.params;
//   const page = blocks.getPage([params.slug]);
//   if (!page) notFound();
//   return {
//     title: page.data.title,
//     description: page.data.description,
//   };
// }
