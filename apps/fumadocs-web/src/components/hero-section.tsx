// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, DollarSign, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 ">
      <div className="text-center space-y-6 mb-16">
        <div className="flex items-center justify-center gap-2 mb-8">
          {/* <Badge variant="outline" className="rounded-full">
            New
          </Badge> */}
          <span className="text-sm inline-flex items-center">
            Built for the community
            {/* <ArrowRight className="w-4 h-4 ml-1" /> */}
          </span>
        </div>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
          Rethinking UI
          <br />
          for react native.
        </h2>
        <p className="text-xl text-muted-foreground">
          A growing library of beautifully crafted components
          <br />
          to help developers ship faster and design better.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          {/* <Button size="lg" className=" rounded-full h-12">
            Get started now
          </Button>
          */}
          <Link href={"/components"} className="w-full sm:w-auto">
            <button className="rounded-full h-12 flex items-center gap-2 border  px-4 dark:bg-white dark:text-black bg-black text-white">
              Book an intro call <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {[
          {
            icon: Clock,
            text: " Regular updates & active community",
          },
          {
            icon: DollarSign,
            text: "Free and open-source",
          },
          {
            icon: ShieldCheck,
            text: " Developer-friendly docs ",
          },
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-3 justify-center">
            <div className="p-2 rounded-full  shadow-sm">
              <feature.icon className="w-5 h-5" />
            </div>
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
