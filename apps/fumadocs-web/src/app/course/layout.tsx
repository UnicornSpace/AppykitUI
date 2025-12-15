import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { HomeLayout } from "fumadocs-ui/layouts/home";
// import { courses } from '@/lib/source';
// import { BookIcon } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      <DocsLayout
        tree={{
          name: "docs",
          children: [],
        }}
        githubUrl="https://github.com/mohdfaizan5/unicornspace-ui"
        sidebar={{ enabled: false }}
        {...baseOptions}
        
      >
        {children}
      </DocsLayout>
    </HomeLayout>
  );
}
