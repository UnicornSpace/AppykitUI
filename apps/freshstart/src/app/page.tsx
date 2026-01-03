import HeroSection from "@/components/hero-section";
import React from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import FeatureBentoGrid from "@/components/features-bento-grid";

const page = () => {
  const base = baseOptions();

  return (
    <HomeLayout
      className=""
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      <HeroSection />
      <FeatureBentoGrid />
    </HomeLayout>
  );
};

export default page;
