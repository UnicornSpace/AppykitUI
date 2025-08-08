import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import HeroSection from "@/components/hero-section";
import BlocksHeroSection from "@/components/blocks-hero-section";
import ComponentThumbnailCard from "./components/component-thumbnail-card";
import { Step, Steps } from "fumadocs-ui/components/steps";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    Steps,
    Step,
    HeroSection,
    BlocksHeroSection,
    ComponentThumbnailCard,

  };
}
