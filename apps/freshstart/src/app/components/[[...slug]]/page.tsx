// @ts-nocheck
import { components } from "@/lib/source";
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/layouts/docs/page';

import { createRelativeLink } from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";

import { getMDXComponents } from "@/app/mdx-components";

export default async function ComponentsPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = components.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage
      className="mx-auto px-4 pb-6 xl:layout:[--fd-toc-width:268px] max-w-none !gap-0"
      style={{ paddingTop: 0 }}
    >
      <div className="space-y-1 border-b border-border/60 pb-2">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
          AppyKit UI
        </p>
        <div className="space-y-2">
          <DocsTitle className="text-3xl tracking-tight lg:text-5xl">
            {page.data.title}
          </DocsTitle>
          <DocsDescription className="max-w-2xl text-base mb-2 text-muted-foreground lg:text-lg">
            {page.data.description}
          </DocsDescription>
        </div>
      </div>
      <DocsBody className="">
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(components, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return components.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = components.getPage(params.slug);

  if (!page) notFound();

  return {
    title:
      page.data.title === "Components"
        ? "Components | AppyKit UI"
        : `${page.data.title} | AppyKit UI Components`,
    description: page.data.description,
  };
}
