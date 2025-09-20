import Link from "next/link";
import { blogs } from "@/lib/source";
import { BlogHeader } from "@/components/blog-header";
import { FeaturedPost } from "@/components/featured-post";
import { BlogGrid } from "@/components/blog-grid";

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
    <main className="grow container mx-auto px-4 py-8 max-w-6xl ">
       {/* <Link href={`/components`} className="text-sm text-muted-foreground">
              Back
            </Link> */}
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map((post) => (
          <Link key={post.url} href={post.url} className="">
            <article
              key={post.url}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br from-blue-400 to-cyan-400                   
                   relative overflow-hidden`}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full" />
                <div className="absolute bottom-6 left-4 w-3 h-3 bg-white/20 rounded-full" />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* {post.icon} */}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">23412</p>
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
