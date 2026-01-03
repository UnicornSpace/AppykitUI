import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { blogs } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();
  return (
    <HomeLayout
      className=""
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      <DocsLayout
        sidebar={{ enabled: false }}
        tree={{
          name: "Blogs",
          children: [],
        }}
        {...baseOptions}
      >
        {children}
      </DocsLayout>
    </HomeLayout>
  );
}
