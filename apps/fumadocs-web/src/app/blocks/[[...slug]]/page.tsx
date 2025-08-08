import { source, blocks } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blocks.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    // <div className="">
      <DocsPage   full={page.data.full}>
        {/* <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription> */}
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(blocks, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    // </div>
  );
}

export async function generateStaticParams() {
  return blocks.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blocks.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} | AppykitUI`,
    description: page.data.description,
  };
}
