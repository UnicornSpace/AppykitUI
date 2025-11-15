import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={{
      name: "Docs",
      children: []
    }} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
