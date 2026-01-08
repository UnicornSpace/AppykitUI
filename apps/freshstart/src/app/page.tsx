import HeroSection from "@/components/hero-section";
import React from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import FeatureBentoGrid from "@/components/features-bento-grid";
import { Metadata } from "next";
import { WebSiteJsonLd, OrganizationJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Home",
  description:
    "AppykitUI offers Flutter UI components, comprehensive courses, and curated development resources. Build beautiful mobile apps faster.",
  openGraph: {
    title: "AppykitUI - Flutter UI Kit & Development Resources",
    description:
      "Flutter UI components, courses, and curated resources for mobile developers.",
    url: "https://appykit-ui.com",
  },
  alternates: {
    canonical: "https://appykit-ui.com",
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
      <WebSiteJsonLd
        name="AppykitUI"
        url="https://appykit-ui.com"
        description="Flutter UI components, courses, and curated resources for mobile developers."
      />
      <OrganizationJsonLd
        name="AppykitUI"
        url="https://appykit-ui.com"
        description="Flutter UI Kit and Development Resources"
      />
      <HeroSection />
      <FeatureBentoGrid />
    </HomeLayout>
  );
};

export default page;
