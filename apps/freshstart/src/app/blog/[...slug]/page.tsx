// @ts-nocheck
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/lib/source";
import { BsArrowLeft, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";
import { CopyUrlButton } from "@/components/copy-url-button";
import { RecommendedBlogs } from "@/components/recommended-blogs";
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
  const publishedDate = new Date(page.data.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });


  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <main className="max-w-3xl  px-4">
        <div className="container rounded-xl ">
          {publishedDate}

          <h1 className="mb-2 text-5xl font-bbh tracking-wide">{page.data.title}</h1>
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
          <div>

          </div>
        </div>

        {/* Posted by & Share Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-b border-fd-border mb-6">
          {/* Posted by */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-fd-muted-foreground">Posted by</span>
            <div className="flex items-center gap-3">
              {page.data.authorLink ? (
                <a
                  href={page.data.authorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
                    {page.data.author?.charAt(0) || "A"}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm group-hover:text-fd-primary transition-colors">{page.data.author || "Anonymous"}</span>
                    <span className="text-xs text-fd-muted-foreground group-hover:text-fd-primary/70 transition-colors">@{page.data.author?.toLowerCase().replace(/\s+/g, '') || "author"}</span>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
                    {page.data.author?.charAt(0) || "A"}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{page.data.author || "Anonymous"}</span>
                    <span className="text-xs text-fd-muted-foreground">@{page.data.author?.toLowerCase().replace(/\s+/g, '') || "author"}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Copy URL & Social Share */}
          <div className="flex items-center gap-4">
            <CopyUrlButton />
            <div className="flex items-center gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://appykit-ui.com${page.url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
              >
                <BsLinkedin size={18} />
              </a>
              <a
                href={`https://bsky.app/intent/compose?text=${encodeURIComponent(page.data.title + ' https://appykit-ui.com' + page.url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
              >
                <SiBluesky size={18} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(page.data.title)}&url=${encodeURIComponent(`https://appykit-ui.com${page.url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
              >
                <BsTwitterX size={18} />
              </a>
            </div>
          </div>
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

        {/* Tags Section */}
        {page.data.tags && page.data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {page.data.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-fd-muted text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share CTA Section */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-fd-primary/10 via-fd-background to-fd-accent/10 border border-fd-border p-8 mb-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-fd-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-fd-accent/5 rounded-full blur-2xl" />
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-semibold mb-2">Enjoyed this article?</h3>
            <p className="text-fd-muted-foreground mb-6">Share it with your friends and help others learn too!</p>
            <div className="flex items-center justify-center gap-4">
              <CopyUrlButton />
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://appykit-ui.com${page.url}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-200"
                  title="Share on LinkedIn"
                >
                  <BsLinkedin size={18} />
                </a>
                <a
                  href={`https://bsky.app/intent/compose?text=${encodeURIComponent(page.data.title + ' https://appykit-ui.com' + page.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-200"
                  title="Share on Bluesky"
                >
                  <SiBluesky size={18} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(page.data.title)}&url=${encodeURIComponent(`https://appykit-ui.com${page.url}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-200"
                  title="Share on X"
                >
                  <BsTwitterX size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Blogs */}
        <RecommendedBlogs currentSlug={page.slugs.join('/')} />

        <div className="mb-2 flex items-center gap-1 ">
          <BsArrowLeft size={14} className="text-muted-foreground" />
          <Link href={`/blogs`} className="text-sm text-muted-foreground">
            Back
          </Link>
        </div>
      </main>
    </DocsPage>
  );
}
