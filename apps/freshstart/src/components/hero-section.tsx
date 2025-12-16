// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import {
  LuArrowRight,
  LuClock,
  LuDollarSign,
  LuShieldCheck,
} from "react-icons/lu";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import { BsMagic } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section className="w-full  py-24 overflow-x-hidden max-w-screen ">
      <div className="max-w-[90dvh] overflow-hidden">
        <div className="absolute top-0  z-[-2] h-full overflow-x-hidden w-full  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>
      <div className="text-center space-y-6 mb-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant={"secondary"}>
            Built for the community
            {/* <ArrowRight className="w-4 h-4 ml-1" /> */}
          </Badge>
        </div>
        <h1 className="text-5xl font-bbh  md:text-9xl  tracking-tight leading-24">
          Rethinking App dev  <br />
          and design<span className="text-primary">*</span>
        </h1>
        <h2 className="text-xl text-muted-foreground max-w-xl mx-auto font-poppins">
          A growing library of beautifully crafted components
          {/* <br /> */}
          to help developers ship faster and design better.
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 justify-center pt-8">
          {/* <Button size="lg" className=" rounded-full h-12">
            Get started now
          </Button>
          */}
          {/* TODO: hey add for flutter stuff and other resources */}
          <Link href={"/blog"} className="w-full sm:w-auto">
            <Button variant="secondary" className=" rounded-full" size={"xl"}>
              Resources <LuArrowRight size={16} />
            </Button>
          </Link>
          <Link href={"/course/flutter"} className="w-full sm:w-auto">
            <Button variant="default" className=" rounded-full" size={"xl"}>
              Flutter course <FaFlutter />
            </Button>
          </Link>
          {/* <button className="rounded-full h-10 flex items-center gap-2 border  px-4 dark:bg-white dark:text-black bg-black text-white">
              Discover Components <ArrowRight size={16} />
            </button> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          {
            icon: IoPhonePortraitOutline,
            text: "App developement",
          },
          {
            icon: MdDesignServices             ,
            text: "Design",
          },
          {
            icon: BsMagic,
            text: "User Engagement",
          },
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-0 justify-center">
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
