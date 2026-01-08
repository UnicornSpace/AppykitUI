import { Resource } from "@/lib/types";

export const resourcesData: Resource[] = [
    {
        category: "UI",
        description:
            "Responsive Flutter UI Kit for iOS and Android - 200+ pre-designed screens",
        link: "https://appykit-ui.vercel.app/",
        title: "AppyKit UI",
        isFavorite: true,
    },
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
