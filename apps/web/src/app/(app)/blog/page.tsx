import Link from "next/link";
// import { allGuides, Guide } from "contentlayer/generated";
// import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import "@/styles/mdx.css";
// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { getBlogsFromPayload } from "@/actions";

export const metadata: Metadata = {
  title: {
    absolute:
      "Guides - Indept Guides on technology & Startups | UnicornSpaceUI",
  },
  description:
    "Clear, step-by-step follow-along guides for every level. (Complex tools & concepts made easy.)",
};

export default async function Home() {
  const blogs = await getBlogsFromPayload();
  // console.log(guides);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold font-passion ">Blogs</h1>
      <p className="max-w-2xl text-lg  text-muted-foreground mb-8">
        Clear, step-by-step follow-along guides for every level. (Complex
        concepts made easy.)
      </p>
      <main className="grid max-w-4xl mx-auto auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {blogs.docs.map((blog, i) => {
          if (blog.isPublished)
            return (
              <Card
                key={i}
                className="relative max-w-xl dark:border border-gray-800 overflow-hidden"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <CardHeader className="relative h-32 p-0 overflow-hidden flex items-end px-5">
                    {/* Gradient background */}
                    <div
                      className="absolute inset-0 z-0 bg-neutral-950
                             bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                    />

                    {/* Title on top of gradient */}
                    <Badge
                      className="absolute top-2 right-2"
                      variant={"secondary"}
                    >
                      Guide
                    </Badge>
                    <div className="absolute z-10 left-4 bottom-3">
                      <CardTitle className=" text-white text-xl font-semibold leading-snug">
                        {blog.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="mt-4 pb-4 px-5">
                    <CardDescription>{blog.description}</CardDescription>
                  </CardContent>

                  <CardFooter className="py-2 pb-4 flex gap-1 flex-wrap px-5">
                    {blog.tags?.split(",").map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="font-normal text-xs"
                        variant="secondary"
                      >
                        {tag.trim()}
                      </Badge>
                    ))}
                  </CardFooter>
                </Link>
              </Card>
            );
        })}
      </main>{" "}
    </div>
  );
}
