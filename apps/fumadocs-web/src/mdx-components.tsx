import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import HeroSection from "@/components/hero-section";
import BlocksHeroSection from "@/components/blocks-hero-section";
import ThemeButton from "@/components/theme-button";
import ComponentThumbnailCard from "./components/component-thumbnail-card";
import ReactNativeThumbnailCard from "./components/react-native-card-cover";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
     img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <ImageZoom {...props} />,
    Steps,
    Step,
    HeroSection,
    BlocksHeroSection,
    ComponentThumbnailCard,
    ReactNativeThumbnailCard,
    InlineTOC ,
    ThemeButton

  };
}
