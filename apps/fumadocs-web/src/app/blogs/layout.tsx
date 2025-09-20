import { DocsLayout, Navbar } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { HomeLayout } from "fumadocs-ui/layouts/home";
// import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} >
      <DocsLayout
        sidebar={{ enabled: false }}
        // nav={{
        //   enabled: false,
        // }}
        // nav={{
        //   ...baseOptions.nav,
        //   component: <Navbar />, // Replace with your custom component
        // }}
        tree={{
          name: "Blogs",
          children: [],
        }}
        {...baseOptions}
      >
        {/* <Navbar  /> */}
        {children}
      </DocsLayout>
    </HomeLayout>
  );
}
