import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();

  return (
    <DocsLayout
      sidebar={{ enabled: false }}
      tree={{
        name: "CaseStudy",
        children: [],
      }}
      {...base}
    >
      {children}
    </DocsLayout>
  );
}
