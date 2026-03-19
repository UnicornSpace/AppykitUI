import Link from "next/link";
import type { ReactNode } from "react";

import { DocsSidebar } from "@/components/docs-sidebar";
import { Badge } from "@/components/ui/badge";
import { components } from "@/lib/source";
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { source } from "fumadocs-core/source";

export default function ComponentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pages = components.getPages();
  const componentLinks = linkItems.filter((item) => item.type !== "custom");
  // console.log("pages", components.getPageTree());
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      // tree={components.getPageTree()}
      // {...baseOptions()}
      // searchToggle={
      //   {
      //     enabled: false
      //   }
      // }
      {...baseOptions()}
      links={componentLinks}
      searchToggle={{}}

      themeSwitch={{ enabled: false }}
      {...base}
      // nav={{ ...nav, mode: 'top' }}
    
      nav={{ ...nav, mode: 'top' }}
      tree={components.getPageTree()}
      tabMode="sidebar"

    >
      {/* <header className="sticky top-0 z-30 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-4 px-4 lg:px-6">
          <Link href="/components" className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-muted text-sm font-semibold">
              A
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">
                Components
              </span>
              <Badge variant="secondary" className="rounded-full">
                {pages.length} docs
              </Badge>
            </div>
          </Link>

          <div className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="/learn" className="transition-colors hover:text-foreground">
              Learn
            </Link>
            <Link href="/resources" className="transition-colors hover:text-foreground">
              Resources
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">
              Blog
            </Link>
          </div>
        </div>
      </header> */}

      {children}
      {/* <div className="mx-auto flex w-full max-w-[1600px]">
        hi
        <DocsSidebar tree={components.getPageTree()} />
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-5xl px-4 py-8 lg:px-10 lg:py-10">
          </div>
        </main>
      </div> */}
    </DocsLayout>
  );
}
