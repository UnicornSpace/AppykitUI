import { learn } from "@/lib/source";
import { coursesRegistry } from "content/learn/course-registry";
import { notFound } from "next/navigation";
import {
  DocsPage,
  DocsDescription,
  DocsTitle,
  DocsBody,
} from "fumadocs-ui/layouts/docs/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";

type Params = Promise<{ lesson: string; slug: string }>;

const page = async (props: {
  params: Promise<{ slug?: string[]; lesson?: string[] }>;
}) => {
  const { lesson: singleLessonSlug, slug } = await props.params;
  const params = await props.params;

  console.log(learn.getPages());

  const f = [slug, singleLessonSlug];
  //   console.log(f)
  // @ts-ignore
  const page = learn.getPage(f);
  //   const page = learn.getPage([
  //     "flutter-development",
  //     "working_with_images_in_flutter",
  //   ]);
  console.log(f, "---");
  console.log(singleLessonSlug, "👍👍👍course slug", slug); // "flutter"
  console.log("🔄️", page, "🔄️");

  //   console.log(page, "page🙄");

  //   // return <div>hi</div>

  //   if (!page) notFound();
  //   const MDXContent = page.data.body;

  //   // TODO: check whether the course slug coming from param does it exist kya, if only exist, do continue, else show "course not found"
  //   const courseRegistryItem = coursesRegistry.find(
  //     (c) => c.slug.toLowerCase() == singleLessonSlug.toLowerCase()
  //   );

  return (
    <DocsPage
    // toc={page.data.toc} full={page.data.full}
    >
      <Link
        href={"/learn"}
        //   href={`/course/${page.slugs[0]}`}
        className="mb-4 justify-end flex"
      >
        <Button>
          <FaAngleLeft />
          lessons
        </Button>
      </Link>
      <div>
        {/* <DocsTitle className="mb-2">{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription> */}
      </div>
      <DocsBody>
        {/* <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(components, page),
          })}
        /> */}
      </DocsBody>
    </DocsPage>
  );
};

export default page;
