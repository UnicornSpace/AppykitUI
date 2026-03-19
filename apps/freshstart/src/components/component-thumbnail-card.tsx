import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ComponentThumbnailCard({
  title,
  href,
  label,
  description,
}: {
  title: string;
  href: string;
  label?: string;
  description?: string;
}) {
  return (
    <Link href={href} className="block">
      <Card className="h-full min-h-56 w-[260px] border-border/70 transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <CardHeader className="gap-3">
          <div className="flex items-center justify-between gap-3">
            <CardTitle>{title}</CardTitle>
            {label ? (
              <Badge variant="secondary" className="rounded-full">
                {label}
              </Badge>
            ) : null}
          </div>
          <CardDescription>
            {description ?? "Reusable building block with docs, preview, and install steps."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1">
          <div className="relative flex w-full flex-1 items-end overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-muted p-4">
            <div className="flex w-full flex-col gap-2">
              <div className="h-3 w-24 rounded-full bg-foreground/10" />
              <div className="h-10 rounded-xl bg-background/90 shadow-sm ring-1 ring-border/60" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded-lg bg-foreground/6" />
                <div className="h-8 rounded-lg bg-foreground/6" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
