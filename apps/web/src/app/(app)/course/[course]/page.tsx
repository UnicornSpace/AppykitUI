import { allCourses } from 'content-collections'
import React from 'react'
type Params = Promise<{ course: string }>
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const page = async (props: { params: Params }) => {
    const { course: courseSlug } = await props.params

    const course = allCourses.filter((item) => {
        console.log(item._meta.directory, "--", courseSlug)
        if (item._meta.directory === courseSlug) {
            console.log("found")
            return item

        }
    })
    if (course.length === 0) {
        return <div>Course not found</div>
    }
    console.log(course.map(item => item.slug))
    return (
        <div >
            <h1 className="text-4xl capitalize font-bold text-center py-8">{course[0]._meta.directory}</h1>
            <section className='mx-auto max-w-6xl px-4 pb-10 md:pb-20 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {course.map((chapter, i) =>
                    <Link key={i} href={`/course/${course[0]._meta.directory}/${chapter.slug}`} className='group'>

                        <Card className='gap-2 bg-secondary group h-full rounded-[12px] shadow-sm transition-all hover:shadow-lg dark:hover:bg-gray-100' key={i}>
                            <CardHeader className='flex items-center gap-2'>
                                <div className='flex items-center justify-center border h-8 w-8 rounded-full bg-primary text-white dark:bg-gray-200  dark:text-gray-900 font-bold text-lg shadow-sm group-hover:shadow-md transition-all'>
                                    {i}
                                </div>
                                <CardTitle className='text-2xl'>{chapter.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p> {chapter.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                )}
            </section >
        </div>
    )
}

export default page