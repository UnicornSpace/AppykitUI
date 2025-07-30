import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ComponentThumbnailCard = ({ image, title, href }:{
  image: string;
  title: string;
  href?: string;
}) => {
  console.log("ComponentThumbnailCard rendered with title:", image);
  return (
    <Link href={href || "#"} className="no-underline">
    <Card className="w-80 h-60 m-0 overflow-hidden">
      <CardHeader className="m-0 flex items-center justify-center">
        <Image
          src={image}
          className="aspect-video w-full m-0
"         style={{margin: 0, padding: 0}}
          alt={title}
          width={250}
          height={180}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ComponentThumbnailCard;
