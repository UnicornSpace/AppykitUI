"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { RootProvider } from "fumadocs-ui/provider/next";

import MainFooter from "@/components/footer";

const LIGHT_ONLY_PREFIXES = ["/gallery/paisalogr", "/gallery/redefai"] as const;

function normalizePathname(pathname: string | null) {
  if (!pathname) return "/";

  const normalized = pathname.replace(/\/+$/, "");
  return normalized === "" ? "/" : normalized;
}

function getForcedTheme(pathname: string | null) {
  const normalized = normalizePathname(pathname);

  const isLightOnlyRoute = LIGHT_ONLY_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );

  return isLightOnlyRoute ? "light" : "dark";
}

export function AppProviderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const forcedTheme = getForcedTheme(pathname);

  return (
    <RootProvider
      theme={{
        forcedTheme,
        defaultTheme: forcedTheme,
        enableSystem: false,
        disableTransitionOnChange: true,
      }}
    >
      {children}
      <MainFooter />
    </RootProvider>
  );
}
