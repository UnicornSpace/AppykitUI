import { LuAlbum, LuHeart, LuLayoutTemplate } from "react-icons/lu";
import Image from "next/image";
import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import Logo from "@/components/logo";
// import { FumadocsIcon } from '@/app/layout.client';
// import Logo from '@/public/logo.png';

export const linkItems: LinkItemType[] = [
  // {
  //   type: "custom",
  //   children: (
  //     <Link
  //       href={"/"}
  //       className=" text-xl font-light  font-bbh flex items-center"
  //     >
  //       {/* <span className="bg-[#007AFF] px-2  rounded-sm">A</span> */}

  //       <Image
  //         src={"/appykitUI temp logo.png"}
  //         height={30}
  //         width={30}
  //         className="rounded-t-sm"
  //         alt=""
  //       />
  //       <span className="-ml-1">ppykitUI</span>
  //     </Link>
  //   ),
  //   on: "all",
  // },

  {
    type: "custom",
    on: "nav",
    children: (
      <NavbarMenu>
        <NavbarMenuTrigger>
          <Link href="/learn">Learn</Link>
        </NavbarMenuTrigger>
        <NavbarMenuContent>
          <NavbarMenuLink href="/learn" className="md:row-span-2">
            <div className="-mx-3 -mt-3">
              <Image
                src={Preview}
                alt="Perview"
                className="rounded-t-lg object-cover"
                style={{
                  maskImage: "linear-gradient(to bottom,white 60%,transparent)",
                }}
              />
            </div>
            <p className="font-medium">Getting Started</p>
            <p className="text-fd-muted-foreground text-sm">
              Learn to use Fumadocs on your docs site.
            </p>
          </NavbarMenuLink>

          <NavbarMenuLink
            href="/learn/flutter-development"
            className="lg:col-start-2"
          >
            <IconBrandFlutter className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
            <p className="font-medium">Learn Flutter</p>
            <p className="text-fd-muted-foreground text-sm">
              Add interactive experience to your docs.
            </p>
          </NavbarMenuLink>

          <NavbarMenuLink
            href="/learn/dart-programming"
            className="lg:col-start-2"
          >
            <FaDartLang className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
            <p className="font-medium">Learn Dart</p>
            <p className="text-fd-muted-foreground text-sm">
              Generate interactive playgrounds and docs for your OpenAPI schema.
            </p>
          </NavbarMenuLink>

          {/* <NavbarMenuLink
              href="/docs/ui/markdown"
              className="lg:col-start-3 lg:row-start-1"
            >
              <IconPencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
              <p className="font-medium">Markdown</p>
              <p className="text-fd-muted-foreground text-sm">
                Learn the writing format/syntax of Fumadocs.
              </p>
            </NavbarMenuLink>

            <NavbarMenuLink
              href="/docs/ui/manual-installation"
              className="lg:col-start-3 lg:row-start-2"
            >
              <IconPlus className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
              <p className="font-medium">Manual Installation</p>
              <p className="text-fd-muted-foreground text-sm">
                Setup Fumadocs for your existing Next.js app.
              </p>
            </NavbarMenuLink> */}
        </NavbarMenuContent>
      </NavbarMenu>
    ),
  },

  {
    // icon: <BookIcon />,
    text: "Blog",
    url: "/blog",
    // secondary items will be displayed differently on navbar
    secondary: false,
  },
  {
    // icon: <BookIcon />,
    text: "resources",
    url: "/resources",
    // secondary items will be displayed differently on navbar
    secondary: false,
  },
  // {
  //   type: "menu",
  //   text: "Flutter",
  //   items: [
  //     {
  //       text: "Flutter Resources",
  //       description: "Learn to use Fumadocs",
  //       url: "/docs",
  //     },
  //   ],
  // },
];

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo full link={false} height={200} width={200} />,
    },
  };
}

import { BiBook } from "react-icons/bi";
import Link from "next/link";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import {
  IconBook,
  IconBrandFlutter,
  IconComponents,
  IconPencil,
  IconPlus,
  IconServer,
} from "@tabler/icons-react";
import Preview from "./../../public/learn-thumbnail.png";
import { FaDartLang } from "react-icons/fa6";
// export function baseOptions(): BaseLayoutProps {
//   return {
//     nav: {
//       title: (
//         <>
//           <Link
//             href={"/"}
//             className=" text-xl font-light  font-bbh flex items-center"
//           >
//             {/* <span className="bg-[#007AFF] px-2  rounded-sm">A</span> */}

//             <Image
//               src={"/appykitUI temp logo.png"}
//               height={30}
//               width={30}
//               className="rounded-t-sm"
//               alt=""
//             />
//             <span className="-ml-1">ppykitUI</span>
//           </Link>
//           <span className="font-medium in-[.uwu]:hidden">Fumadocs</span>
//         </>
//       ),
//     },
//     // links:
//   };
// }
