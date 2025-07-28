import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import HeroSection from "@/components/hero-section";
import BlocksHeroSection from "@/components/blocks-hero-section";
import ComponentThumbnailCard from "./components/component-thumbnail-card";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    HeroSection,
    BlocksHeroSection,
    ComponentThumbnailCard
  };
}
