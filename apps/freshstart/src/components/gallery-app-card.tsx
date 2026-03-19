"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { BsGithub } from "react-icons/bs"
import Link from "next/link"

type GalleryAppCardProps = {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  githubUrl: string
  downloadUrl: string
  githubLabel?: string
  downloadLabel?: string
  className?: string
  outerCircleColorClassName?: string
  innerCircleColorClassName?: string
}

export default function GalleryAppCard({
  title = "PaisaLogr",
  description = "Mindful Finance tracker",
  imageSrc = "/paisaLogr/HomeScreen.jpeg",
  imageAlt = "App Screenshot",
  githubUrl,
  downloadUrl,
  githubLabel = "View on GitHub",
  downloadLabel = "Download APK",
  className,
  outerCircleColorClassName = "bg-blue-500/80",
  innerCircleColorClassName = "bg-blue-500",
}: GalleryAppCardProps) {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Link href={`/gallery/${title.toLowerCase().replace(/\s+/g, "")}`}>
      <Card className={cn("flex flex-row w-full h-64 !max-h-64 overflow-hidden", className)}>
        <CardHeader className="w-[60%] pr-0 md:pr-4 justify-between">
          <div>

            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="opacity-50 font-normal  text-lg sm:text-xl">{description}</CardDescription>
          </div>
          <div className="md:flex items-end hidden">
            <Button className={"px-10 rounded-4xl"} onClick={() => openInNewTab(githubUrl)}>
              <BsGithub className="ml-2" />
              {githubLabel}
            </Button>
            <Button variant="outline" className="ml-2 px-4 rounded-4xl" onClick={() => openInNewTab(downloadUrl)}>
              {downloadLabel}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="relative flex items-center justify-center p-8">
          <span className={cn("rounded-full size-60 md:size-80 absolute z-0 top-5/6 left-1/2 -translate-x-1/2 -translate-y-1/2", outerCircleColorClassName)} />
          <span className={cn("rounded-full size-44 md:size-64 absolute z-0 top-5/6 left-1/2 -translate-x-1/2 -translate-y-1/2", innerCircleColorClassName)} />
          <Image src={imageSrc}
            alt={imageAlt}
            width={200}
            height={300}
            className="rounded-md object-cover relative z-10 mt-40"
          />
        </CardContent>
      </Card>
    </Link>
  )
}