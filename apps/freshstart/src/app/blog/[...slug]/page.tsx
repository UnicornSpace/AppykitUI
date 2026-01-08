// @ts-nocheck
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/lib/source";
import { BsArrowLeft } from "react-icons/bs";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { getMDXComponents } from "@/components/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { Metadata } from "next";
import { ArticleJsonLd } from "@/components/json-ld";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = blogs.getPage(slug);

  if (!page) {
    return {
      title: "Post Not Found",
    };
  }

  const title = page.data.title || "Blog Post";
  const description = page.data.description || "Read this article on AppykitUI";
  const url = `https://appykit-ui.com${page.url}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: page.data.date ? new Date(page.data.date).toISOString() : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const page = blogs.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;

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
          <DocsBody>
            <div className="prose min-w-0">
              {/* <InlineTOC items={page.data.toc} /> */}
              <MDXContent
                components={getMDXComponents({
                  // this allows you to link to other pages with relative file paths
                  // a: createRelativeLink(components, page),
                })}
              />
            </div>
          </DocsBody>
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
