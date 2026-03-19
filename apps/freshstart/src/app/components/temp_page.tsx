// @ts-nocheck
import { components } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";

import { getMDXComponents } from "@/app/mdx-components";

export default function ComponentsIndexPage() {
  const page =
    components.getPage([]) ??
    components.getPage(["index"]) ??
    components.getPages().find((entry) => entry.url === "/components");

  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <article className="mx-auto max-w-none">
      <div className="space-y-3 border-b border-border/60 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
          AppyKit UI
        </p>
        <div className="space-y-2">
          <DocsTitle className="text-3xl tracking-tight lg:text-5xl">
            {page.data.title}
          </DocsTitle>
          <DocsDescription className="max-w-2xl text-base text-muted-foreground lg:text-lg">
            {page.data.description}
          </DocsDescription>
        </div>
      </div>
      <DocsBody className="pt-8">
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(components, page),
          })}
        />
      </DocsBody>
    </article>
  );
}
