import Link from "next/link";
import { blogs } from "@/lib/source";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  DocsPage,
  DocsDescription,
  DocsTitle,
  DocsBody,
} from "fumadocs-ui/layouts/docs/page";

export default function Home() {
  const allBlogs = blogs.getPages();
  const codeEnv = process.env.NODE_ENV;

  // Filter to only show published blogs
  const publishedBlogs = allBlogs.filter(
    (blog) => (blog.data as any).isPublished === true
  );

  console.log(publishedBlogs);

  if (publishedBlogs.length === 0) {
    return (
      <DocsPage>
        <main className="">
          <h1 className="text-5xl text-center mb-8 font-bbh">Blog</h1>
          <p className="text-center text-gray-500">No published blogs yet.</p>
        </main>
      </DocsPage>
    );
  }

  return (
    <DocsPage>
      <main className=" ">
        <h1 className="text-5xl text-center mb-8 font-bbh">Blog</h1>
        <section className="bg-[#18181B]/60 rounded-sm mb-8 relative">
          {codeEnv === "development" && (publishedBlogs[0].data as any).isContentReady === false && (
            <div className="absolute top-2 right-2 z-10">
              <Badge className="bg-amber-500 text-white text-xs">Content pending</Badge>
            </div>
          )}
          <Link href={publishedBlogs[0].url}>
            <Image
              src={"/Flutter-appykit-blog-thumbnail.png"}
              height={1920}
              width={1080}
              className="rounded-t-sm"
              alt=""
            />
          </Link>
          <div className="py-2 px-4">
            {/* <p className="text-sm text-gray-500 mb-2">23412</p> */}
            <div className="flex items-center gap-4">
              {/* <Badge>Latest</Badge> */}
              <h3 className="text-2xl font-bold   text-balance">
                {publishedBlogs[0].data.title}
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {publishedBlogs[0].data.description}
            </p>
          </div>
        </section>
        {/* <pre>{JSON.stringify(allBlogs, null, 2)}</pre> */}
        <div className=" flex flex-col gap-4 ">
          {publishedBlogs.slice(1).map((blog) => (
            <Link key={blog.url} href={blog.url} className="">
              <article
                key={blog.url}
                className="flex   rounded-xl overflow-hidden  p-1 hover:bg-secondary transition-bg duration-200 relative"
              >
                {codeEnv === "development" && (blog.data as any).isContentReady === false && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-amber-500 text-white text-xs">Content pending</Badge>
                  </div>
                )}
                <Image
                  src={"/Flutter-appykit-blog-thumbnail.png"}
                  height={300}
                  width={300}
                  className="rounded-sm"
                  alt=""
                />

                <div className="w-[60%] p-6">
                  {/* <p className="text-sm text-gray-500 mb-2">23412</p> */}
                  <h3 className="text-2xl font-bold  mb-3 text-balance capitalize">
                    {blog.data.title?.split("-").join(" ")}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.data.description}
                  </p>
                </div>
              </article>
              {/* <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
            <p className="mb-4 opacity-45 text-sm">{post.data.description}</p> */}
            </Link>
          ))}
        </div>
      </main>
    </DocsPage>
  );
}
