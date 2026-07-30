// @ts-nocheck
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/source";
import { BsArrowLeft, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";
import { CopyUrlButton } from "@/components/copy-url-button";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { getMDXComponents } from "@/components/mdx-components";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = caseStudies.getPage(slug);

  if (!page) {
    return { title: "Case Study Not Found" };
  }

  const title = page.data.title || "Case Study";
  const description = page.data.description || "Read this case study on AppykitUI";
  const url = `https://appykit-ui.com${page.url}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
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
  const page = caseStudies.getPage(params.slug);

  if (!page) notFound();
  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <main className="max-w-3xl px-4">
        <div className="container rounded-xl">
          <h1 className="mb-2 text-5xl font-bbh tracking-wide">{page.data.title}</h1>
          <p className="mb-4 text-fd-muted-foreground">{page.data.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-b border-fd-border mb-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-fd-muted-foreground">Presented by</span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
                {(page.data.author || "A").charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{page.data.author || "AppykitUI"}</span>
                <span className="text-xs text-fd-muted-foreground">{page.data.company || "Case Study"}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CopyUrlButton />
            <div className="flex items-center gap-3">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://appykit-ui.com${page.url}`)}`} target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                <BsLinkedin size={18} />
              </a>
              <a href={`https://bsky.app/intent/compose?text=${encodeURIComponent(page.data.title + ' https://appykit-ui.com' + page.url)}`} target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                <SiBluesky size={18} />
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(page.data.title)}&url=${encodeURIComponent(`https://appykit-ui.com${page.url}`)}`} target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                <BsTwitterX size={18} />
              </a>
            </div>
          </div>
        </div>

        <article className="container flex flex-col px-4 py-8">
          <DocsBody>
            <div className="prose min-w-0">
              <MDXContent components={getMDXComponents({})} />
            </div>
          </DocsBody>
        </article>

        <div className="mb-2 flex items-center gap-1">
          <BsArrowLeft size={14} className="text-muted-foreground" />
          <Link href="/casestudy" className="text-sm text-muted-foreground">
            Back
          </Link>
        </div>
      </main>
    </DocsPage>
  );
}
