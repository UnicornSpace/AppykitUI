// @ts-nocheck
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SidebarTree = {
  children: SidebarNodeType[];
};

type SidebarPage = {
  $id?: string;
  type: "page";
  name: ReactNode;
  url: string;
};

type SidebarSeparator = {
  $id?: string;
  type: "separator";
  name?: ReactNode;
};

type SidebarFolder = {
  $id?: string;
  type: "folder";
  name: ReactNode;
  index?: SidebarPage;
  children: SidebarNodeType[];
};

type SidebarNodeType = SidebarPage | SidebarSeparator | SidebarFolder;

export function DocsSidebar({ tree }: { tree: SidebarTree }) {
  const pathname = usePathname();
  const mobileItems = flattenTree(tree.children);
  console.log("🔄️🔄️", mobileItems);


  return (
    <>
      <div className="border-b border-border/60 bg-background/95 hidden">
        <div className="overflow-x-auto px-4 py-3">
          <div className="flex min-w-max gap-2">
            {mobileItems.map((item) => (
              <SidebarLink
                key={item.url}
                href={item.url}
                active={pathname === item.url}
                className="rounded-full border border-border/60 px-3 py-1.5 text-xs"
              >
                {item.name}
              </SidebarLink>
            ))}
          </div>
        </div>
      </div>

      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-72 shrink-0 overflow-y-auto border-r border-border/60 bg-muted/20 lg:block">
        <div className="flex flex-col gap-6 px-4 py-6">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              AppyKit UI
            </p>
            <h2 className="text-sm font-semibold text-foreground">Components</h2>
          </div>

          <nav className="flex flex-col gap-5">
            {tree.children.map((node, index) => (
              <SidebarNode
                key={node.$id ?? `${node.type}-${index}`}
                node={node}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

function SidebarNode({
  node,
  pathname,
  depth = 0,
}: {
  node: SidebarNodeType;
  pathname: string;
  depth?: number;
}) {
  if (node.type === "separator") {
    if (!node.name) return <div className="h-px bg-border/60" />;

    return (
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {node.name}
      </p>
    );
  }

  if (node.type === "page") {
    return (
      <SidebarLink
        href={node.url}
        active={pathname === node.url}
        className={cn(depth > 0 && "ml-4")}
      >
        {node.name}
      </SidebarLink>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="px-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {node.name}
      </div>
      {node.index ? (
        <SidebarLink
          href={node.index.url}
          active={pathname === node.index.url}
          className="ml-2"
        >
          {node.index.name}
        </SidebarLink>
      ) : null}
      <div className="flex flex-col gap-1">
        {node.children.map((child, index) => (
          <SidebarNode
            key={child.$id ?? `${child.type}-${index}`}
            node={child}
            pathname={pathname}
            depth={depth + 1}
          />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  active,
  children,
  className,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex min-h-9 items-center rounded-lg px-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        active && "bg-accent text-foreground shadow-xs",
        className
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  );
}

function flattenTree(nodes: SidebarNodeType[]): Array<{ name: ReactNode; url: string }> {
  const items: Array<{ name: ReactNode; url: string }> = [];

  for (const node of nodes) {
    if (node.type === "page") {
      items.push({ name: node.name, url: node.url });
      continue;
    }

    if (node.type === "folder") {
      if (node.index) {
        items.push({ name: node.index.name, url: node.index.url });
      }

      items.push(...flattenTree(node.children));
    }
  }

  return items;
}
