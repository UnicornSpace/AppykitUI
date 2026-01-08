import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { blogs } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();
  return (
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
  );
}
