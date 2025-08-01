import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { components } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={components.pageTree}
      sidebar={{
        
      }}
      themeSwitch={{
        enabled: false
      }}
      {...baseOptions}
      links={[
        {
          // icon: <BookIcon />,
          text: "Introduction",
          url: "/docs",
          // secondary items will be displayed differently on navbar
          secondary: true,
        },
        {
          // icon: <BookIcon />,
          text: "Installation",
          url: "/docs/installation",
          // secondary items will be displayed differently on navbar
          secondary: true,
        },
        {
          // icon: <BookIcon />,
          text: "Blocks",
          url: "/blocks",
          // secondary items will be displayed differently on navbar
          secondary: false,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
