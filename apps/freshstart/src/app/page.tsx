import HeroSection from "@/components/hero-section";
import React from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import FeatureBentoGrid from "@/components/features-bento-grid";

const page = () => {
  const base = baseOptions();

  return (
    <HomeLayout links={base.links} searchToggle={{}} themeSwitch={{enabled: false}} {...baseOptions}>
      <HeroSection />
      <FeatureBentoGrid />
    </HomeLayout>
  );
};

export default page;
