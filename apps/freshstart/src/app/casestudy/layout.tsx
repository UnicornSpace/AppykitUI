import type { ReactNode } from "react";
import type { Metadata } from "next";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";

export const metadata: Metadata = {
  title: "CaseStudy",
  description:
    "Explore product case studies, success stories, and design system work from the AppykitUI team.",
  openGraph: {
    title: "CaseStudy | AppykitUI",
    description: "Case studies and project highlights from AppykitUI.",
    url: "https://appykit-ui.com/casestudy",
  },
  alternates: {
    canonical: "https://appykit-ui.com/casestudy",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      className=""
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </HomeLayout>
  );
}
