import { blogs } from "@/lib/source";
import { Metadata } from "next";
import { BlogPageClient } from "./blog-page-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles about Flutter development, mobile app design, and UI/UX best practices from the AppykitUI team.",
  openGraph: {
    title: "Blog | AppykitUI",
    description:
      "Latest articles on Flutter development and mobile app design.",
    url: "https://appykit-ui.com/blog",
  },
  alternates: {
    canonical: "https://appykit-ui.com/blog",
  },
};

export default function BlogPage() {
  const allBlogs = blogs.getPages();

  // Filter to only show published blogs
  const publishedBlogs = allBlogs
    .filter((blog) => (blog.data as any).isPublished === true)
    .map((blog) => ({
      url: blog.url,
      data: {
        title: blog.data.title || "",
        description: blog.data.description || "",
        isPublished: (blog.data as any).isPublished,
        isContentReady: (blog.data as any).isContentReady,
        date: (blog.data as any).date?.toISOString(),
        tags: (blog.data as any).tags || [],
        thumbnail: (blog.data as any).thumbnail ,
      },
    }));

  if (publishedBlogs.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl text-center mb-8 font-bbh">Blog</h1>
        <p className="text-center text-fd-muted-foreground">No published blogs yet.</p>
      </main>
    );
  }

  return <BlogPageClient publishedBlogs={publishedBlogs} />;
}
