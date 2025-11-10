import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { components } from "@/lib/source";



export default function Layout({ children }: { children: ReactNode }) {
  const filteredTree = components.pageTree.children.filter((e) => {
    // console.log((e as {url?:string}).url === "/components");
    if((e as {url:string}).url !== "/components"){
      return e;
    }
  });
  // console.log(filteredTree);
  return (
    <DocsLayout
      tree={{
        name: components.pageTree.name,
        $id: components.pageTree.$id,
        children: filteredTree
      }}
      themeSwitch={{
        enabled: false,
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
