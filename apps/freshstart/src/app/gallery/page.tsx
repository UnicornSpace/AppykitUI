import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import { Metadata } from "next";
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
  screenshot: string;
  githubUrl: string;
  downloadUrl?: string;
  downloadLabel?: string;
  downloadDisabled?: boolean;
  outerCircleColorClassName?: string;
  innerCircleColorClassName?: string;
}

const apps: AppItem[] = [
  {
    name: "Paisa Logr",
    description: "Track your money. Understand your habits. Stay in control.",
    slug: "paisalogr",
    screenshot: "/paisaLogr/HomeScreen.jpeg",
    githubUrl: "https://github.com/likithanagaraj/PaisaLogr",
    downloadLabel: "Comming soon",
    downloadDisabled: true,
    outerCircleColorClassName: "bg-blue-500/80",
    innerCircleColorClassName: "bg-blue-500",
  },
  {
    name: "RedefAI",
    description: "Redefine you with AI. Your personal AI companion for a smarter, more efficient you.",
    slug: "redefai",
    screenshot: "/redef/HomeScreen.png",
    githubUrl: "https://github.com/UnicornSpace/AppykitUI",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.redefai.app&pcampaignid=web_share",
    downloadLabel: "Download  fro playstore ",
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
              href={`/gallery/${app.slug}`}
              title={app.name}
              description={app.description}
              imageSrc={app.screenshot}
              imageAlt={`${app.name} screenshot`}
              githubUrl={app.githubUrl}
              downloadUrl={app.downloadUrl}
              downloadLabel={app.downloadLabel}
              downloadDisabled={app.downloadDisabled}
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
