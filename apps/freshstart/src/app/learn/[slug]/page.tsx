import React from "react";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { learn } from "@/lib/source";
import { FaAngleLeft } from "react-icons/fa";
import { LuBookText, LuMoveRight, LuStar } from "react-icons/lu";
import { TbGraphFilled } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { coursesRegistry } from "content/learn/course-registry";
import { getMDXComponents } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { CourseJsonLd } from "@/components/json-ld";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug: courseSlug } = await params;
  const course = coursesRegistry.find(
    (c) => c.slug.toLowerCase() === courseSlug.toLowerCase()
  );

  if (!course) {
    return { title: "Course Not Found" };
  }

  const url = `https://appykit-ui.com/learn/${course.slug}`;

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: `${course.title} | AppykitUI`,
      description: course.description,
      url,
      type: "website",
      images: course.thumbnail ? [{ url: course.thumbnail }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

const page = async (props: { params: Params }) => {
  const { slug: courseSlug } = await props.params;
  console.log(courseSlug, "✔️course slug"); // "flutter"

  // TODO: check whether the course slug coming from param does it exist kya, if only exist, do continue, else show "course not found"
  const courseRegistryItem = coursesRegistry.find(
    (c) => c.slug.toLowerCase() == courseSlug.toLowerCase()
  );

  if (!courseRegistryItem) {
    return notFound();
  }

  const allCoursePages = learn.getPages();
  // console.log(allCoursePages);
  const currentCoursePages = allCoursePages.filter((c) => {
    // Only show pages that belong to this course AND are published
    if (c.slugs[0] === courseSlug && (c.data as any).isPublished === true) return c;
  });
  // console.log("😂😂", currentCoursePages.length, currentCoursePages);
  const codeEnv = process.env.NODE_ENV;
  const re = new RegExp("^\\d+\\..+");

  return (
    <HomeLayout
      className=""
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      <div className="mx-auto  max-w-5xl  w-full">
        <div className="max-w-5xl  mx-auto  bg-red-4002  py-4 mb-6 max-sm:text-center mt-10 ">
          <div className="space-x-4 flex items-baseline">
            <h1 className="capitalize font-heading text-foreground mb-6 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
              {courseRegistryItem?.title}
            </h1>
            {/* {courseRegItem?.icon && <courseRegItem.icon className="size-9" />} */}
          </div>
          <Image
            src={"/flutter-dart-banner.png"}
            width={1080}
            height={250}
            alt="Image"
            className="rounded-md object-cover mb-4"
          />

          <section className="flex flex-row-reverse2 items-center justify-between mb-4">
            <section className="flex items-center gap-2">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
              <p className="flex items-center">
                <LuStar className="fill-amber-200 text-amber-200" />
                <LuStar className="fill-amber-200 text-amber-200" />
                <LuStar className="fill-amber-200 text-amber-200" />
                <LuStar className="fill-amber-200 text-amber-200" />
                <LuStar className="fill-amber-200 text-amber-200" />
                Top rated
              </p>
            </section>
            <section className="flex items-center">
              <div className="flex items-center gap-1 px-4 py-1 border w-32 rounded-l-2xl">
                <LuBookText />
                <div>
                  <p className="font-light -mb-1 text-xs">LESSONS</p>
                  <p className="font-medium ">{currentCoursePages.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 px-4 py-1 border w-32 rounded-r-2xl">
                <TbGraphFilled />
                <div>
                  <p className="font-light -mb-1 text-xs">DIFFICULTY</p>
                  <p className="font-medium ">Easy</p>
                </div>
              </div>
            </section>
          </section>
          <p className="text-muted-foreground  mb-8 text-lg">
            {coursesRegistry.find(
              (c) => c.slug.toLowerCase() == courseSlug[0].toLowerCase()
            )?.description || ""}
          </p>
          {/* <Button className="rounded-full">
            Enroll now <MoveRight />
          </Button> */}
        </div>
        <section className="mx-auto max-w-5xl bg-amber-2002  pb-10 md:pb-20 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentCoursePages.map((chapter, i) => (
            <Link
              key={i}
              href={`/learn/${chapter.slugs[0]}/${re.test(chapter.slugs[1]) ? chapter.slugs[1].split(".")[1] : chapter.slugs[1]}`}
              className="group"
            >
              <Card
                className="gap-2 bg-secondary/90  group h-full rounded-[12px] shadow-sm transition-all hover:shadow-lg relative"
                key={i}
              >
                <CardHeader className="flex flex-row items-center gap-2">
                  {codeEnv === "development" && (chapter.data as any).isContentReady === false && (
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-amber-500 text-white text-xs">Content pending</Badge>
                    </div>
                  )}
                  <div className="mr-2 flex h-8 w-8 flex-none flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-blue-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                    <p className="group-hover:hidden">{i}</p>
                    <svg
                      className="hidden h-5 group-hover:block"
                      data-testid="geist-icon"
                      height="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                      style={{ color: "currentcolor" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <CardTitle className="text-xl">
                    {chapter.data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-gray-900 dark:text-muted-foreground">
                    {" "}
                    {chapter.data.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </div>
    </HomeLayout>
  );
};

export default page;
