import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SlScreenDesktop } from "react-icons/sl";
import { AiOutlineFontSize } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FaIcons } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import ResourceCard from "@/components/resource-card";
import { Resource } from "@/lib/types";
import { getCategorySlug } from "@/data/resources";

type ResourceGalleryProps = {
  data: Resource[];
  allData?: Resource[];
  activeCategory?: string | null;
};

export default function ResourceGallery({
  data,
  allData,
  activeCategory = null,
}: ResourceGalleryProps) {
  // Use allData for category list if provided, otherwise use data
  const sourceData = allData || data;

  const categories = useMemo(() => {
    return Array.from(new Set(sourceData.map((resource) => resource.category)));
  }, [sourceData]);

  return (
    <div className="container mx-auto ">
      <div className="mb-6">
        <p className="text-gray-500">{data.length}+ resources found. </p>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-1 mb-6">
        <Link href="/resources">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            size={"sm"}
          >
            All
          </Button>
        </Link>
        {categories.map((category) => (
          <Link key={category} href={`/resources/${getCategorySlug(category)}`}>
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              size={"sm"}
            >
              <span className="mr-1">
                {category == "UI" ? (
                  <SlScreenDesktop />
                ) : category == "Typography" ? (
                  <AiOutlineFontSize />
                ) : category == "assets" ? (
                  <AiOutlineFontSize />
                ) : category == "icons" ? (
                  <FaIcons />
                ) : category == "tools" ? (
                  <BsTools />
                ) : category == "inspiration" ? (
                  <FcIdea />
                ) : category == "colors" ? (
                  <GrResources />
                ) : category == "other" ? (
                  <GrResources />
                ) : category == "ui-design" ? (
                  <SlScreenDesktop />
                ) : (
                  ""
                )}
              </span>
              {category}
              <Badge
                variant={activeCategory === category ? "default" : "outline"}
                className="px-1.5 ml-1"
              >
                {sourceData.filter((r) => r.category === category).length}
              </Badge>
            </Button>
          </Link>
        ))}
      </div>
      <main className="grid grid-cols-1 gap-2 max-w-[61rem]  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-4 ">
        {data.map((resource, i) => (
          <ResourceCard
            key={i}
            category={resource.category}
            description={resource.description}
            title={resource.title}
            link={resource.link}
            isFavorite={resource.isFavorite}
          />
        ))}
      </main>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {resource.title}
                {resource.isFavorite && <Star className="text-yellow-400" />}
              </CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </div>
  );
}
