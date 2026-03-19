import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import GalleryAppCard  from "@/components/gallery-app-card";

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
  screenshot: string;
  githubUrl: string;
  downloadUrl: string;
  outerCircleColorClassName?: string;
  innerCircleColorClassName?: string;
  comingSoon?: boolean;
}

const apps: AppItem[] = [
  {
    name: "Paisa Logr",
    description: "Track your money. Understand your habits. Stay in control.",
    slug: "paisa-logr",
    icon: "/paisaLogr/logo.png",
    screenshot: "/paisaLogr/HomeScreen.jpeg",
    githubUrl: "https://github.com/UnicornSpace/PaisaLogr",
    downloadUrl: "https://appykit.dev/paisaLogr.apk",
    outerCircleColorClassName: "bg-blue-500/80",
    innerCircleColorClassName: "bg-blue-500",
  },
  {
    name: "RedefAI  ",
    description: "Redefine you with AI. Your personal AI companion for a smarter, more efficient you.",
    slug: "redefai",
    icon: "/paisaLogr/logo.png",
    screenshot: "/redefai-homescreen.png",
    githubUrl: "https://github.com/UnicornSpace/PaisaLogr",
    downloadUrl: "https://appykit.dev/paisaLogr.apk",
    outerCircleColorClassName: "bg-red-500/80",
    innerCircleColorClassName: "bg-red-500",
  },
];

export default function AppGalleryPage() {
  return (
    <HomeLayout
      {...baseOptions()}
      links={linkItems}
      className="relative  min-h-screen bg-transparent"
    >
      <div className="container mx-auto px-4 py-12 pb-32 max-w-4xl">
        {/* Hero Section */}
        <div className="text- mb-8 space-y-2">
          <h1 className="text-5xl  font-bbh">

            Gallery
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Polished, functional apps built with Flutter. Download APKs directly and view the source code.
          </p>
        </div>

        {/* The Grid */}
        <div className="flex flex-col gap-4">
          {apps.map((app) => (
            <GalleryAppCard
              key={app.slug}
              title={app.name}
              description={app.description}
              imageSrc={app.screenshot}
              imageAlt={`${app.name} screenshot`}
              githubUrl={app.githubUrl}
              downloadUrl={app.downloadUrl}
              outerCircleColorClassName={app.outerCircleColorClassName}
              innerCircleColorClassName={app.innerCircleColorClassName}
            />
            // <AppCard key={app.slug} app={app} />
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
      className={`group relative block h-full ${app.comingSoon ? "cursor-not-allowed opacity-80" : "cursor-pointer"
        }`}
    >
      {/* Glassmorphic Panel */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-5px_rgba(96,40,214,0.3)] group-hover:border-primary/20" />

      <div className="relative p-8 flex flex-col h-full z-10">
        {/* App Icon */}
        <div className="w-16 h-16 rounded-2xl  flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
          <Image
            src={app.icon}
            alt={app.name}
            width={64}
            height={64}
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
