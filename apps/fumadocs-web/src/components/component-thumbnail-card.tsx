import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const ComponentThumbnailCard = ({
  image,
  title,
  href,
  label,
}: {
  image: string;
  title: string;
  href?: string;
  label?: string;
}) => {
  console.log("ComponentThumbnailCard rendered with title:", image);
  return (
    <Link href={href || "#"} className="no-underline">
      <Card className="w-80 h-56 m-0 overflow-hidden p-0 gap-0 relative">
        <CardHeader className="m-0 flex items-center justify-center px-0">
          <Image
            src={image}
            className="aspect-video w-full m-0
"
            style={{ margin: 0, padding: 0 }}
            alt={title}
            width={250}
            height={180}
          />
        </CardHeader>
        <CardContent  className="h-full flex items-center">
          <CardTitle>{title}</CardTitle>
          {label && <Badge className="absolute top-2 right-2 -rotate-3">{label}</Badge>}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ComponentThumbnailCard;
