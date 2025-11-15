import { Button } from "@/components/ui/button";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
// Top nav bar
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        AppyKit UI
        {/* <Badge>Beta</Badge> */}
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links

  githubUrl: "https://github.com/UnicornSpace/AppykitUI",

  links: [
    // {
    //   // icon: <BookIcon />,
    //   text: "Introduction",
    //   url: "/docs",
    // },
    // {
    //   // icon: <BookIcon />,
    //   text: "Installation",
    //   url: "/docs/installation",
    // },

    // {
    //   // icon: <BookIcon />,
    //   text: "Components",
    //   url: "/components",
    // },
    {
      // icon: <BookIcon />,
      text: "Blogs",
      url: "/blog",
    },
    // {
    //   // icon: <BookIcon />,
    //   text: "Flutter blocks",
    //   url: "/flutter/blocks",
    // },
    {
      // icon: <BookIcon />,
      text: "Flutter course",
      url: "/course/flutter",
      label: "choclate",
    },
    {
      type: "custom",
      children: <Button>Login</Button>,
      secondary: true,
    },
    {
      type: "menu",
      text: "Others",
      items: [
        // {
        //   text: "Getting Started",
        //   description: "Learn to use Fumadocs",
        //   url: "/docs",
        // },
        // {
        //   // icon: <BookIcon />,
        //   text: "CLI",
        //   url: "/docs/cli",
        // },
        {
          // icon: <BookIcon />,
          text: "Changelog",
          url: "/docs/changelog",
        },
        {
          // icon: <BookIcon />,
          text: "ReactNative",
          url: "/reactnative",
        },

        // {
        //   // icon: <BookIcon />,
        //   text: "Resource",
        //   url: "/reactnative-resources",
        // },
      ],
    },
  ],
};
