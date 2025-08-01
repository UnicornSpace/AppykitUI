import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center ">
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
