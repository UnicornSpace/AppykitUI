import { Metadata } from "next";
import ResourceGallery from "./resource-gallery";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { resourcesData } from "@/data/resources";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "A free collection of Flutter development resources, tools, and utilities to boost your development process. Simple to use and open-source.",
  openGraph: {
    title: "Free Resources | AppykitUI",
    description:
      "Curated Flutter development resources, tools, and utilities for mobile developers.",
    url: "https://appykit-ui.com/resources",
  },
  alternates: {
    canonical: "https://appykit-ui.com/resources",
  },
};

const page = () => {
  return (
    <HomeLayout
      className=""
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-4xl font-bold">Flutter Resource Gallery</h1>
        <ResourceGallery data={resourcesData} />
      </div>
    </HomeLayout>
  );
};

export default page;
