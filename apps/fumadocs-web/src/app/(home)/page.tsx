
import HeroSection from "@/components/hero-section";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AppykitUI - UI and Flutter",
  description:
    "A growing library of beautifully crafted components to help developers ship faster and design better.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center ">
      <HeroSection />
      <Image
        src="/blocks_bento_grid.png"
        alt="Hero Image"
        width={800}
        height={400}
        className="mx-auto mt-10"
      />
    </main>
  );
}
