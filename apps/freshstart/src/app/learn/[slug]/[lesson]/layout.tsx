import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={linkItems}
      searchToggle={{}}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </HomeLayout>
  );
}

