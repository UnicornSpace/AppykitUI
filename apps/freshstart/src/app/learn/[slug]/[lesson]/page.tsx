// @ts-nocheck
import { learn } from "@/lib/source";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";
import { CopyUrlButton } from "@/components/copy-url-button";
import { getMDXComponents } from "@/components/mdx-components";

interface PageParams {
  slug: string;
  lesson: string;
}

// Regex to match numeric prefix like "1." or "2." at the start
const numericPrefixRegex = /^\d+\./;

// Helper to strip numeric prefix from a slug
function stripNumericPrefix(slug: string): string {
  return slug.replace(numericPrefixRegex, "");
}

const Page = async (props: {
  params: Promise<PageParams>;
}) => {
  const { slug, lesson } = await props.params;

  // Get all pages and find the one matching our course slug and lesson
  const allPages = learn.getPages();

  // Get all pages for this course, sorted by filename
  const coursePages = allPages
    .filter((p) => p.slugs.length === 2 && p.slugs[0] === slug)
    .sort((a, b) => a.slugs[1].localeCompare(b.slugs[1]));

  // Find the page where:
  // 1. slugs[0] matches the course slug
  // 2. slugs[1] matches the lesson (with or without numeric prefix)
  const currentIndex = coursePages.findIndex((p) => {
    const pageLesson = p.slugs[1];
    return pageLesson === lesson || stripNumericPrefix(pageLesson) === lesson;
  });

  const page = coursePages[currentIndex];

  if (!page) {
    notFound();
  }

  // Get previous and next lessons
  const prevLesson = currentIndex > 0 ? coursePages[currentIndex - 1] : null;
  const nextLesson = currentIndex < coursePages.length - 1 ? coursePages[currentIndex + 1] : null;

  const MDXContent = page.data.body;
  const pageUrl = `https://appykit-ui.com/learn/${slug}/${stripNumericPrefix(page.slugs[1])}`;

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Link
        href={`/learn/${slug}`}
        className="mb-6 inline-flex"
      >
        <Button variant="outline" size="sm">
          <FaAngleLeft className="mr-2 h-4 w-4" />
          Back to Course
        </Button>
      </Link>

      <div className="mb-6">
        <h1 className="text-4xl font-bold font-heading tracking-tight mb-3">{page.data.title}</h1>
        <p className="text-fd-muted-foreground text-lg">{page.data.description}</p>
      </div>

      {/* Tags Section */}
      {page.data.tags && page.data.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {page.data.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-fd-muted text-fd-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* MDX Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <MDXContent components={getMDXComponents({})} />
      </article>

      {/* Share Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-fd-primary/10 via-fd-background to-fd-accent/10 border border-fd-border p-6 mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-fd-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-fd-accent/5 rounded-full blur-2xl" />
        <div className="relative z-10 text-center">
          <h3 className="text-lg font-semibold mb-2">Found this helpful?</h3>
          <p className="text-fd-muted-foreground text-sm mb-4">Share this lesson with others learning Dart!</p>
          <div className="flex items-center justify-center gap-4">
            <CopyUrlButton />
            <div className="flex items-center gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-200"
                title="Share on LinkedIn"
              >
                <BsLinkedin size={16} />
              </a>
              <a
                href={`https://bsky.app/intent/compose?text=${encodeURIComponent(page.data.title + ' ' + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-200"
                title="Share on Bluesky"
              >
                <SiBluesky size={16} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(page.data.title)}&url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-fd-muted flex items-center justify-center text-fd-muted-foreground hover:bg-fd-primary hover:text-fd-primary-foreground transition-all duration-200"
                title="Share on X"
              >
                <BsTwitterX size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Previous / Next Lesson Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {prevLesson ? (
          <Link
            href={`/learn/${slug}/${stripNumericPrefix(prevLesson.slugs[1])}`}
            className="group flex items-center gap-3 p-4 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/50 hover:bg-fd-accent/30 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-fd-muted flex items-center justify-center group-hover:bg-fd-primary group-hover:text-fd-primary-foreground transition-colors">
              <FaAngleLeft size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-fd-muted-foreground mb-1">Previous</p>
              <p className="font-medium text-sm truncate group-hover:text-fd-primary transition-colors">
                {prevLesson.data.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/learn/${slug}/${stripNumericPrefix(nextLesson.slugs[1])}`}
            className="group flex items-center gap-3 p-4 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/50 hover:bg-fd-accent/30 transition-all duration-200 text-right"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-fd-muted-foreground mb-1">Next</p>
              <p className="font-medium text-sm truncate group-hover:text-fd-primary transition-colors">
                {nextLesson.data.title}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-fd-muted flex items-center justify-center group-hover:bg-fd-primary group-hover:text-fd-primary-foreground transition-colors">
              <FaAngleRight size={16} />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Page;

export function generateStaticParams() {
  return learn
    .getPages()
    .filter((page) => page.slugs.length === 2 && page.slugs[0] && page.slugs[1])
    .map((page) => ({
      slug: page.slugs[0],
      // Strip numeric prefix for the URL
      lesson: stripNumericPrefix(page.slugs[1]),
    }));
}
