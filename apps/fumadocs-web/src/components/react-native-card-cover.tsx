import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href?: string;
}

const ReactNativeThumbnailCard = ({ title, description, href }: Props) => {
  return (
    <Link className="no-underline" href={href || "#"}>
    <Card className="w-80 h-40 flex flex-col justify-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 bg-white">
      <CardContent className="p-0 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ReactNativeThumbnailCard;
