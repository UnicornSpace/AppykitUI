"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { BsSearch, BsTwitterX, BsGithub } from "react-icons/bs";

export type CaseStudyCard = {
  url: string;
  data: {
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    company: string;
    industry: string;
  };
};

export default function CaseStudyList({ items }: { items: CaseStudyCard[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.data.title.toLowerCase().includes(query) ||
          item.data.description.toLowerCase().includes(query) ||
          item.data.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }),
    [items, searchQuery]
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-bbh mb-4">CaseStudy</h1>
        <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of product highlights, design system work, and implementation stories.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="text-fd-muted-foreground text-sm">Follow us on:</span>
        <div className="flex items-center gap-3">
          <a
            href="https://twitter.com/appykitui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            <BsTwitterX size={18} />
          </a>
          <a
            href="https://github.com/UnicornSpace/AppykitUI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            <BsGithub size={18} />
          </a>
        </div>
      </div>

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

      {filteredItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-fd-muted-foreground">No published case studies yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link key={item.url} href={item.url} className="group block">
              <article className="relative overflow-hidden rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={item.data.thumbnail}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.data.title || "Case study thumbnail"}
                  />
                </div>
                <div className="p-5">
                  {item.data.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.data.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-fd-muted text-fd-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-fd-primary transition-colors">
                      {item.data.title}
                    </h3>
                  </div>
                  <p className="text-fd-muted-foreground text-sm line-clamp-2 mb-3">
                    {item.data.description}
                  </p>
                  {(item.data.company || item.data.industry) && (
                    <p className="text-xs uppercase tracking-wide text-fd-muted-foreground">
                      {item.data.company}
                      {item.data.company && item.data.industry ? " • " : ""}
                      {item.data.industry}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
