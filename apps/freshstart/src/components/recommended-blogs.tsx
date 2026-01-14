// @ts-nocheck
import Link from "next/link";
import { blogs } from "@/lib/source";

interface RecommendedBlogsProps {
    currentSlug: string;
}

export function RecommendedBlogs({ currentSlug }: RecommendedBlogsProps) {
    // Get all published blogs except current one
    const allBlogs = blogs.getPages().filter((post) => {
        const isPublished = post.data.isPublished;
        const isNotCurrent = post.slugs.join('/') !== currentSlug;
        return isPublished && isNotCurrent;
    });

    // Get 2 random recommended blogs
    const recommendedBlogs = allBlogs
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    if (recommendedBlogs.length === 0) {
        return null;
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Recommended for you</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedBlogs.map((post) => (
                    <Link
                        key={post.url}
                        href={post.url}
                        className="group block p-4 rounded-lg border border-fd-border bg-fd-card hover:border-fd-primary/50 hover:bg-fd-accent/30 transition-all duration-200"
                    >
                        <p className="text-xs text-fd-muted-foreground mb-2">
                            {post.data.date
                                ? new Date(post.data.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })
                                : ""}
                        </p>
                        <h4 className="font-medium text-sm group-hover:text-fd-primary transition-colors line-clamp-2 mb-2">
                            {post.data.title}
                        </h4>
                        <p className="text-xs text-fd-muted-foreground line-clamp-2">
                            {post.data.description}
                        </p>
                        {post.data.tags && post.data.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-3">
                                {post.data.tags.slice(0, 2).map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] px-2 py-0.5 rounded-full bg-fd-muted text-fd-muted-foreground"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}
