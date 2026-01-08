import { learn } from "@/lib/source";
import { notFound } from "next/navigation";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/layouts/docs/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";

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

  // Find the page where:
  // 1. slugs[0] matches the course slug
  // 2. slugs[1] matches the lesson (with or without numeric prefix)
  const page = allPages.find((p) => {
    if (p.slugs.length !== 2) return false;
    if (p.slugs[0] !== slug) return false;

    // Match lesson slug directly or after stripping numeric prefix
    const pageLesson = p.slugs[1];
    return pageLesson === lesson || stripNumericPrefix(pageLesson) === lesson;
  });

  if (!page) {
    notFound();
  }

  const MDXContent = (page.data as any).body;

  return (
    <DocsPage>
      <Link
        href={`/learn/${slug}`}
        className="mb-4 justify-end flex"
      >
        <Button variant="outline" size="sm">
          <FaAngleLeft className="mr-2 h-4 w-4" />
          Back to Course
        </Button>
      </Link>
      <div>
        <DocsTitle className="mb-2">{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
      </div>
      <DocsBody>
        <MDXContent />
      </DocsBody>
    </DocsPage>
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
