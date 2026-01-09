import Link from "next/link";
import { learn } from "@/lib/source";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  DocsPage,
  DocsDescription,
  DocsTitle,
  DocsBody,
} from "fumadocs-ui/layouts/docs/page";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { coursesRegistry } from "content/learn/course-registry";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { Metadata } from "next";
import { ItemListJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Learn Flutter development with our comprehensive courses. From basics to advanced topics, master mobile app development.",
  openGraph: {
    title: "Courses | AppykitUI",
    description:
      "Comprehensive Flutter development courses - from basics to advanced topics.",
    url: "https://appykit-ui.com/learn",
  },
  alternates: {
    canonical: "https://appykit-ui.com/learn",
  },
};

export default function Home() {
  const allBlogs = learn.getPages();
  console.log(allBlogs);

  return (
    // <DocsPage>
    <HomeLayout
      className=""
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* <h1 className="text-5xl font-bold text-center my-8">Courses</h1> */}
        <div className="max-w-3xl max-sm:text-center mt-10 ">
          <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
            Courses.
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            A collection of courses crafted for quick learning with examples and
            code.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl   pb-10 md:pb-20">
          {coursesRegistry.map((course) => (
            <Link
              href={course.isPublished ? `/learn/${course.slug}` : "#"}
              key={course.slug}
            >
              <Card
                className={cn(
                  "bg-secondary  pt-0 overflow-hidden h-[420px] flex flex-col justify-between",
                  course.isPublished
                    ? "opacity-100"
                    : "opacity-50 cursor-not-allowed"
                )}
              >
                <CardHeader className="bg-primary dark:text-black text-white h-[50%] p-0">
                  <div className="">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={course.thumbnail}
                        width={450}
                        height={250}
                        alt="Image"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <CardTitle className="text-3xl">{course.title}</CardTitle>
                  {/* <div className="flex items-center gap-1 flex-wrap mb-2 mt-1">
                    {course.tags &&
                      course.tags.map((tag) => (
                        <Badge variant={"outline"} key={tag}>
                          {tag}
                        </Badge>
                      ))}
                  </div> */}
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Course</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}
