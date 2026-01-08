import { MetadataRoute } from "next";
import { blogs, learn } from "@/lib/source";
import { resourcesData, getAllCategories, getCategorySlug } from "@/data/resources";
import { coursesRegistry } from "content/learn/course-registry";

const baseUrl = "https://appykit-ui.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/learn`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/resources`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Dynamic blog routes
    const blogPages = blogs.getPages();
    const publishedBlogs = blogPages.filter(
        (blog) => (blog.data as any).isPublished === true
    );
    const blogRoutes: MetadataRoute.Sitemap = publishedBlogs.map((blog) => ({
        url: `${baseUrl}${blog.url}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Dynamic learn/course routes
    const courseRoutes: MetadataRoute.Sitemap = coursesRegistry
        .filter((course) => course.isPublished)
        .map((course) => ({
            url: `${baseUrl}/learn/${course.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

    // Individual lesson routes
    const learnPages = learn.getPages();
    const publishedLessons = learnPages.filter(
        (lesson) => (lesson.data as any).isPublished === true
    );
    const lessonRoutes: MetadataRoute.Sitemap = publishedLessons.map((lesson) => ({
        url: `${baseUrl}${lesson.url}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Resource category routes
    const categories = getAllCategories();
    const resourceRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
        url: `${baseUrl}/resources/${getCategorySlug(category)}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [
        ...staticRoutes,
        ...blogRoutes,
        ...courseRoutes,
        ...lessonRoutes,
        ...resourceRoutes,
    ];
}
