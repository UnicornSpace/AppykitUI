// Todo: Think
import { Resource, SearchParams } from "@/types";
import ResourceGallery from "./resource-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Webdev Resources - UnicornSpaceUI",
  description:
    "A free collection of web development resources, tools, and utilities to boost your development process. Simple to use and open-source.",
};

const page = (props: { searchParams: SearchParams }) => {
  /*
  TODO: add search functionality with searchParams, 
  eg: if /resources?category=ui, 
  then filter resourcesData by category
  - NOTE: YOu can use nuqs package here
  */
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <ResourceGallery data={resourcesData} />
    </div>
  );
};

export default page;

const resourcesData: Resource[] = [
  {
    category: "UI",
    description: "Making your React Native apps look and feel native",
    link: "https://reactnativepaper.com/",
    title: "reactnativepaper",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "React & React Native Components Library & Patterns",
    link: "https://gluestack.io/",
    title: "gluestack",
    isFavorite: true,
  },

];
