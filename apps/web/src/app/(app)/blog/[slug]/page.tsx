import { getBlogFromSlug } from '@/actions'
import React from 'react'
import { PayloadMDXRender } from '@/components/payload-mdx-render'

type Params = Promise<{
  slug: string
}>
const page = async (props: { params: Params }) => {
  const { slug } = await props.params
  const blog = await getBlogFromSlug(slug)
  console.log("🚀🚀🚀🚀🚀🚀", blog);
  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      {slug}
      <h1 className='text-3xl font-bold'>{blog?.title}</h1>
      <div className='mt-4'>
        {blog?.content && <PayloadMDXRender data={blog.content} />}      </div>
      {/* <pre>{JSON.stringify(blog, null, 2)}</pre> */}
    </div>
  )
}

export default page