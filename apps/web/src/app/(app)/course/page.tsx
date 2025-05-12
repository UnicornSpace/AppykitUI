import { allCourses } from 'content-collections'
import Link from 'next/link'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const page = () => {
  console.log(allCourses)
  // const courses = allCourses.filter((course) => course.published)
  // const coursesNames = [...new Set(allCourses.map(item => item._meta.directory))]
  // console.log(unique)

  const courses = [
    {
      title: 'React Native',
      description: 'Learn React Native from scratch',
      slug: 'react-native',
      isPublished: true,
      tags: ['react', 'native']
    },
    {
      title: 'UI UX',
      description: 'Learn Next.js from scratch',
      slug: 'ui-ux',
      isPublished: true,
      tags: ['ui', 'ux']
    },
    {
      title: 'Android',
      description: 'Learn Tailwind CSS from scratch',
      slug: 'tailwindcss',
      isPublished: false,
      tags: ['android']
    },
    {
      title: 'Native UI',
      description: 'Learn Tailwind CSS from scratch',
      slug: 'native-wind',
      isPublished: true,
      tags: ['android']
    }
  ]
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-8">Courses</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 pb-10 md:pb-20">
        {courses.map((course) => (
          <Link href={course.isPublished ? `/course/${course.slug}` : "#"} key={course.slug} >
            <Card className={cn('bg-secondary  pt-0 overflow-hidden h-96 flex flex-col justify-between', course.isPublished ? 'opacity-100' : 'opacity-50 cursor-not-allowed')}>
              <CardHeader className='bg-primary text-white py-8 h-[50%]' >
                <CardTitle className='text-3xl'>{course.title}</CardTitle>
                <div className='flex items-center gap-1 flex-wrap'>
                  {course.tags && course.tags.map((tag) => (
                    <Badge variant={"secondary"} key={tag} >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>{course.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>View Course</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page