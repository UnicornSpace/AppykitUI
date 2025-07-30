import Link from "next/link";
import HeroSection from "../../components/hero-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <HeroSection />
      <Image 
        src="/components_demo.png"
        alt="Hero Image"
        width={800}
        height={400}
        className="mx-auto mt-10"
      />
    </main>
  );
}
