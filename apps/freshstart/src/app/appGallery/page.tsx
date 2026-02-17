import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "App Gallery | AppyKit",
  description:
    "Polished, functional apps built with Flutter. Download APKs directly.",
};

interface AppItem {
  name: string;
  description: string;
  slug: string;
  icon: string; // path in /public
  comingSoon?: boolean;
}

const apps: AppItem[] = [
  {
    name: "Paisa Logr",
    description: "Track your money. Understand your habits. Stay in control.",
    slug: "paisa-logr",
    icon: "/paisaLogr/logo.png",
  },
];

export default function AppGalleryPage() {
  return (
    <HomeLayout
      {...baseOptions()}
      links={linkItems}
      className="relative min-h-screen bg-transparent"
    >
      <div className="container mx-auto px-4 py-20 pb-32 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 tracking-tight">
            The AppyKit Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto font-poppins px-2">
            Polished, functional apps built with Flutter. Download APKs directly and view the source code.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

function AppCard({ app }: { app: AppItem }) {
  return (
    <Link
      href={app.comingSoon ? "#" : `/appGallery/${app.slug}`}
      className={`group relative block h-full ${
        app.comingSoon ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      }`}
    >
      {/* Glassmorphic Panel */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-5px_rgba(96,40,214,0.3)] group-hover:border-primary/20" />

      <div className="relative p-8 flex flex-col h-full z-10">
        {/* App Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
          <Image
            src={app.icon}
            alt={app.name}
            width={48}
            height={48}
            className="rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {app.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {app.description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-sm font-medium">
          <span
            className={
              app.comingSoon
                ? "text-muted-foreground"
                : "text-foreground group-hover:text-primary transition-colors"
            }
          >
            {app.comingSoon ? "Coming Soon" : "View App"}
          </span>
          {!app.comingSoon && (
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <LuArrowRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
