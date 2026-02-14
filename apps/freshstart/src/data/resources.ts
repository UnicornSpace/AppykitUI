import { Resource } from "@/lib/types";

export const resourcesData: Resource[] = [
    // {
    //     category: "UI",
    //     description:
    //         "Responsive Flutter UI Kit for iOS and Android - 200+ pre-designed screens",
    //     link: "https://appykit-ui.vercel.app/",
    //     title: "AppyKit UI",
    //     isFavorite: true,
    // },
    {
        category: "assets",
        description: "The internet's source for visuals.",
        link: "https://unsplash.com/",
        title: "Unsplash",
        isFavorite: true,
    },
    {
        category: "icons",
        description: "Illustrations for  projects",
        link: "https://icons8.com/illustrations",
        title: "Icons 8 Illustrations",
        isFavorite: true,
    },
    {
        category: "assets",
        description:
            "Free vector icons in SVG, PNG, CSH and AI format for web and mobile projects",
        link: "https://www.vecteezy.com/?utm_source=google&utm_medium=cpc&utm_campaign=brand-search-global&utm_term=vecteezy&utm_content=global&gad_source=1&gad_campaignid=19998070923&gbraid=0AAAAADlH8EWowLWEkk0D1V7FjqeTHwAy0&gclid=Cj0KCQiA9OnJBhD-ARIsAPV51xO3fHFEjSRJlL3yX7DlhZHmFYeP73Bf17hx3F7rDROsrPS5kBid5UsaAr5PEALw_wcB",
        title: "Vecteezy",
        isFavorite: true,
    },
    {
        category: "Flutter",
        description: "To Generate App Icons for Flutter projects",
        link: "https://www.appicon.co/",
        title: "App Icon Generator",
        isFavorite: true,
    },
    {
        category: "icons",
        description: "A collection of icons for Flutter apps.",
        link: "https://hugeicons.com/",
        title: "HugeIcons",
        isFavorite: true,
    },
    {
        category: "assets",
        description: "Open-source illustrations for any idea you can imagine and create.",
        link: "https://undraw.co/search",
        title: "Undraw",
        isFavorite: true,
    },
    {
        category: "assets",
        description: "Free illustrations for any idea you can imagine and create.",
        link: "https://popsy.co/illustrations",
        title: "Popsy",
        isFavorite: true,
    },
    {
        category: "icons",
        description: "Open-source handcrafted gestures & symbols to re-imagine your work",
        link: "https://handcrafts.undraw.co/app",
        title: "Handcrafts by unDraw",
        isFavorite: true,
    },
    {
        category: "Flutter",
        description: "An online Dart editor with support for console and Flutter apps.",
        link: "https://dartpad.dev/",
        title: "DartPad",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "RCollection of the best designed mobile app screens.",
        link: "https://mobbin.com/discover/apps/ios/latest",
        title: "Mobbin",
        isFavorite: true,
    },
    {
        category: "ui-design",
        description: "Helps to Create Flowcharts, Wireframes, Mind Maps, and more.",
        link: "https://whimsical.com/",
        title: "Whimsical",
        isFavorite: false,
    },
    {
        category: "inspiration",
        description: "Discover the best design inspiration, illustrations, and graphic resources.",
        link: "https://dribbble.com/",
        title: "Dribbble",
        isFavorite: false,
    },
    {
        category: "ui-design",
        description: "No-code prototyping tool for digital products.",
        link: "https://dribbble.com/",
        title: "ProtoPie",
        isFavorite: false,
    },
    {
        category: "ui-design",
        description: "A huge collection of free SVG icons for you to use in your digital products.",
        link: "https://iconoir.com/",
        title: "Iconoir",
        isFavorite: false,
    },
    {
        category: "ui-design",
        description: "Generate placeholder logos for your projects.",
        link: "https://logoipsum.com/",
        title: "Logoipsm",
        isFavorite: false,
    },
    {
        category: "icons",
        description: "Beautifully Crafted Free & Premium 3D Icons",
        link: "https://3dicons.co/",
        title: "3D Icons",
        isFavorite: true,
    },
    {
        category: "assets",
        description: "Generate beautiful, customizable gradients crafted for designers and developers.",
        link: "https://www.noisygradients.com/",
        title: "Nosiy Gradients",
        isFavorite: false,
    },
    {
        category: "assets",
        description: "Open source illustrations kit",
        link: "https://illlustrations.co/",
        title: "illlustrations",
        isFavorite: false,
    },
    {
        category: "assets",
        description: "100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.",
        link: "https://coolshap.es/",
        title: "CoolShapes",
        isFavorite: false,
    },
      {
        category: "Flutter",
        description: "Dark theme Design Inspiraion for projects",
        link: "https://www.darkmodedesign.com/",
        title: "Dark Mode Design",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Explore real-world designs from the best products",
        link: "https://refero.design/apps",
        title: "Refero",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Find Design Examples for your apps and websites",
        link: "https://lookup.design/",
        title: "Look Up",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Unlock UI/UX Inspiration with the Best User Flow Examples",
        link: "https://pageflows.com/",
        title: "Page FLow",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Unlock UI/UX Inspiration with the Best User Flow Examples",
        link: "https://pageflows.com/",
        title: "Page FLow",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Collections of apps to get inspiration",
        link: "https://www.appshot.gallery/",
        title: "AppShot Gallery",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Your Local Apps Research Companion",
        link: "https://chamjo.design/",
        title: "Chamjo ",
        isFavorite: false,
    },
    {
        category: "Flutter",
        description: "Design Research Made Quick & Easy",
        link: "https://appshots.design/",
        title: "App Shots",
        isFavorite: false,
    },
];

// Helper to get all unique categories
export const getAllCategories = (): string[] => {
    return Array.from(new Set(resourcesData.map((r) => r.category)));
};

// Helper to get category slug (lowercase)
export const getCategorySlug = (category: string): string => {
    return category.toLowerCase();
};

// Helper to find original category name from slug
export const getCategoryFromSlug = (slug: string): string | undefined => {
    return getAllCategories().find((cat) => cat.toLowerCase() === slug.toLowerCase());
};

// Get resources by category
export const getResourcesByCategory = (category: string): Resource[] => {
    return resourcesData.filter((r) => r.category === category);
};
