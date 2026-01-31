"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { BsTwitterX, BsLinkedin, BsInstagram, BsFacebook, BsSearch, BsArrowRight, BsGithub } from "react-icons/bs";
import { LuBookOpen, LuLayoutGrid } from "react-icons/lu";

interface BlogData {
    url: string;
    data: {
        title: string;
        description: string;
        isPublished?: boolean;
        isContentReady?: boolean;
        date?: string;
        tags?: string[];
        thumbnail: string;
    };
}


interface BlogPageClientProps {
    publishedBlogs: BlogData[];
}

export function BlogPageClient({ publishedBlogs }: BlogPageClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const codeEnv = process.env.NODE_ENV;

    // Filter blogs based on search
    const filteredBlogs = useMemo(() => {
        if (!searchQuery.trim()) return publishedBlogs;
        const query = searchQuery.toLowerCase();
        return publishedBlogs.filter(
            (blog) =>
                blog.data.title?.toLowerCase().includes(query) ||
                blog.data.description?.toLowerCase().includes(query) ||
                blog.data.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
    }, [publishedBlogs, searchQuery]);

    // Get blogs for display (excluding featured when not searching)
    const displayBlogs = searchQuery ? filteredBlogs : filteredBlogs.slice(1);
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold font-bbh mb-4">Blog</h1>
                <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
                    Latest articles on Flutter development, mobile app design, and UI/UX best practices.
                </p>
            </div>

            {/* Follow Us Section */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-fd-muted-foreground text-sm">Follow us on:</span>
                <div className="flex items-center gap-3">
                    <a href="https://twitter.com/appykitui" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                        <BsTwitterX size={18} />
                    </a>
                    {/* <a href="https://linkedin.com/company/appykitui" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                        <BsLinkedin size={18} />
                    </a> */}
                    {/* <a href="https://instagram.com/appykitui" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                        <BsInstagram size={18} />
                    </a> */}
                    <a href="https://github.com/UnicornSpace/AppykitUI" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                        <BsGithub size={18} />
                    </a>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-12">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <BsSearch className="text-fd-muted-foreground" size={16} />
                </div>
                <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-11 pr-4 py-6 rounded-full border-fd-border bg-fd-card/50 backdrop-blur-sm focus:ring-2 focus:ring-fd-primary/20 transition-all"
                />
            </div>

            {filteredBlogs.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-fd-muted-foreground">No articles found matching "{searchQuery}"</p>
                </div>
            ) : (
                <>
                    {/* Featured Blog (first item, only when not searching) */}
                    {!searchQuery && publishedBlogs.length > 0 && (
                        <section className="mb-12">
                            <Link href={publishedBlogs[0].url} className="group block">
                                <div className="relative overflow-hidden rounded-2xl bg-fd-card border border-fd-border hover:border-fd-primary/30 transition-all duration-300">
                                    {codeEnv === "development" && !(publishedBlogs[0].data as any).isContentReady && (
                                        <Badge className="absolute top-4 right-4 z-10 bg-amber-500 text-white">Content pending</Badge>
                                    )}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="aspect-video md:aspect-auto relative overflow-hidden">
                                            <Image
                                                src={publishedBlogs[0].data.thumbnail }
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                alt={publishedBlogs[0].data.title || "Featured blog"}
                                            />
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col justify-center">
                                            <Badge variant="secondary" className="w-fit mb-4">Featured</Badge>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fd-primary transition-colors">
                                                {publishedBlogs[0].data.title}
                                            </h2>
                                            <p className="text-fd-muted-foreground line-clamp-3 mb-6">
                                                {publishedBlogs[0].data.description}
                                            </p>
                                            <span className="text-fd-primary font-medium flex items-center gap-2">
                                                Read more <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    )}

                    {/* First set of Blog Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {displayBlogs.slice(0, 3).map((blog) => (
                            <BlogCard key={blog.url} blog={blog} codeEnv={codeEnv} />
                        ))}
                    </div>

                    {/* Newsletter CTA (only show if we have more than 3 blogs) */}
                    {displayBlogs.length > 3 && (
                        <section className="bg-primary relative overflow-hidden rounded-2xl bg-gradient-to-r text-text  border border-fd-border p-8 md:p-6 md:py-4 mb-4">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-fd-primary/5 rounded-full blur-3xl" />
                            <div className="relative overflow-hidden z-10 grid md:grid-cols-2 gap-8 items-center  ">
                                <div>
                                    {/* <h3 className="text-1xl md:text-xl font-bold text-white mb-0">
                                        Receive the latest AppykitUI Newsletter updates.
                                    </h3> */}
                                    <p className="text-white/80">
                                        {/* Get weekly tips on Flutter development, UI design, and more. */}
                                        Feel free to star us on GitHub and stay updated with our latest releases and features!
                                    </p>

                                    {/* <div className="absolute -left-40 rotate-45 -bottom-10 bg-transparent border-8 border-white z-10  size-60 rounded-full" /> */}
                                </div>
                                <div className="flex justify-end gap-3">
                                    {/* <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 bg-fd-background border-fd-border"
                                    /> */}
                                     
                                    <Button variant={"secondary"} className="px-6">Github <a href="https://github.com/UnicornSpace/AppykitUI" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                        <BsGithub size={18} />
                    </a></Button>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* More Blog Cards */}
                    {displayBlogs.length > 3 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {displayBlogs.slice(3, 6).map((blog) => (
                                <BlogCard key={blog.url} blog={blog} codeEnv={codeEnv} />
                            ))}
                        </div>
                    )}

                    {/* Cross-promotion CTA (only when not searching and have enough blogs) */}
                    {!searchQuery && displayBlogs.length >= 3 && (
                        <section className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Learn Section CTA */}
                            <Link href="/learn" className="group block">
                                <div className="relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-br from-blue-500/10 to-purple-500/10 px-8 pb-8 h-48 hover:border-fd-primary/30 transition-all">
                                    <div className="absolute top-4 right-4">
                                        <LuBookOpen className="text-fd-muted-foreground" size={40} />
                                    </div>
                                    <div className="mt-8">
                                        <Badge variant="secondary" className="mb-4">Learn</Badge>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-fd-primary transition-colors">
                                            Master Flutter & Dart
                                        </h3>
                                        <p className="text-fd-muted-foreground text-sm mb-4">
                                            Free tutorials and courses to level up your mobile development skills.
                                        </p>
                                        <span className="text-fd-primary font-medium flex items-center gap-2 text-sm">
                                            Start learning <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {/* Resources Section CTA */}
                            <Link href="/resources" className="group block">
                                <div className="relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-br from-green-500/10 to-emerald-500/10 px-8 pb-8     h-48 hover:border-fd-primary/30 transition-all">
                                    <div className="absolute top-4 right-4">
                                        <LuLayoutGrid className="text-fd-muted-foreground" size={40} />
                                    </div>
                                    <div className="mt-8">
                                        <Badge variant="secondary" className="mb-4">Resources</Badge>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-fd-primary transition-colors">
                                            UI Components & Tools
                                        </h3>
                                        <p className="text-fd-muted-foreground text-sm mb-4">
                                            Ready-to-use Flutter components, templates, and design resources.
                                        </p>
                                        <span className="text-fd-primary font-medium flex items-center gap-2 text-sm">
                                            Browse resources <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    )}

                    {/* Remaining Blog Cards */}
                    {displayBlogs.length > 6 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {displayBlogs.slice(6).map((blog) => (
                                <BlogCard key={blog.url} blog={blog} codeEnv={codeEnv} />
                            ))}
                        </div>
                    )}

                    {/* Total count */}
                    <p className="text-center text-fd-muted-foreground text-sm">
                        {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} {searchQuery && `matching "${searchQuery}"`}
                    </p>
                </>
            )}
        </main>
    );
}

function BlogCard({ blog, codeEnv }: { blog: BlogData; codeEnv?: string }) {
    
   console.log(
        "BlogCard thumbnail:✅",
        JSON.stringify(blog.data.thumbnail),
        typeof blog.data.thumbnail
    );
    return (
        <Link href={blog.url} className="group block">
            <article className="relative overflow-hidden rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                {codeEnv === "development" && !(blog.data as any).isContentReady && (
                    <Badge className="absolute top-3 right-3 z-10 bg-amber-500 text-white text-xs">Pending</Badge>
                )}
                <div className="aspect-video relative overflow-hidden">
                    <Image
                        src={blog.data.thumbnail }
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={blog.data.title || "Blog thumbnail"}
                    />
                </div>
                <div className="p-5">
                    {blog.data.tags && blog.data.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                            {blog.data.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-fd-muted text-fd-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-fd-primary transition-colors">
                        {blog.data.title}
                    </h3>
                    <p className="text-fd-muted-foreground text-sm line-clamp-2">
                        {blog.data.description}
                    </p>
                </div>
            </article>
        </Link>
    );
}
