import Link from "next/link";
import { blogs } from "@/lib/source";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const posts = blogs.getPages();

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-blue-50">
  //     {/* Background decorative elements */}
  //     <div className="fixed inset-0 overflow-hidden pointer-events-none">
  //       <div className="absolute top-20 right-20 w-32 h-32 bg-white/30 rounded-full blur-xl" />
  //       <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200/40 rounded-full blur-lg" />
  //       <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-200/30 rounded-full blur-md" />
  //     </div>

  //     <div className="relative z-10">
  //       {/* <BlogHeader /> */}

  //       <main className="max-w-6xl mx-auto px-6 py-12">
  //         <div className="text-center mb-16">
  //           <h1 className="text-6xl font-bold text-gray-900 mb-4 text-balance">
  //             The Blog
  //           </h1>
  //         </div>

  //         <FeaturedPost />
  //         <BlogGrid />
  //       </main>
  //     </div>
  //   </div>
  // );

  return (
    <main className="grow container mx-auto px-4 py-8 max-w-3xl ">
      {/* <Link href={`/components`} className="text-sm text-muted-foreground">
              Back
            </Link> */}
      <h1 className="text-5xl font-semibold mb-8">Blog</h1>

      <section className="bg-secondary rounded-sm mb-8">
        <Link href={"/"}>
          <Image
            src={"/Flutter-appykit-blog-thumbnail.png"}
            height={1920}
            width={1080}
            className="rounded-sm"
            alt=""
          />
        </Link>
        <div className="py-2 px-4 space-y-2">
          {/* <p className="text-sm text-gray-500 mb-2">23412</p> */}
          <div className="flex items-center gap-4">
            <Badge>Latest</Badge>
            <h3 className="text-xl font-bold text-gray-900  text-balance">
              {posts[0].data.title}
            </h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            {posts[0].data.description}
          </p>
        </div>
      </section>
      <div className=" flex flex-col gap-4 ">
        {posts.slice(1).map((post) => (
          <Link key={post.url} href={post.url} className="">
            <article
              key={post.url}
              className="flex   rounded-xl overflow-hidden  p-1 hover:bg-secondary transition-bg duration-200"
            >
              <Image
                src={"/Flutter-appykit-blog-thumbnail.png"}
                height={300}
                width={300}
                className="rounded-sm"
                alt=""
              />

              <div className="w-[60%] p-6">
                {/* <p className="text-sm text-gray-500 mb-2">23412</p> */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">
                  {post.data.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.data.description}
                </p>
              </div>
            </article>
            {/* <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
            <p className="mb-4 opacity-45 text-sm">{post.data.description}</p> */}
          </Link>
        ))}
      </div>
    </main>
  );
}
