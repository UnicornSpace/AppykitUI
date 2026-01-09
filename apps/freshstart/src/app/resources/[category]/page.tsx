import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import ResourceGallery from "../resource-gallery";
import {
    resourcesData,
    getAllCategories,
    getCategoryFromSlug,
    getCategorySlug,
    getResourcesByCategory,
} from "@/data/resources";

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        category: getCategorySlug(category),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: slug } = await params;
    const category = getCategoryFromSlug(slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    const url = `https://appykit-ui.com/resources/${getCategorySlug(category)}`;

    return {
        title: `${category} Resources`,
        description: `Browse our curated collection of ${category} resources for Flutter and mobile development. Free tools, libraries, and utilities.`,
        openGraph: {
            title: `${category} Resources | AppykitUI`,
            description: `Curated ${category} resources for Flutter and mobile development.`,
            url,
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category: slug } = await params;
    const category = getCategoryFromSlug(slug);

    if (!category) {
        notFound();
    }

    const filteredResources = getResourcesByCategory(category);

    return (
        <HomeLayout
            className=""
            {...baseOptions()}
            links={linkItems}
            searchToggle={{}}
            themeSwitch={{ enabled: false }}
        >
            <div className="max-w-5xl mx-auto mt-10">
                <h1 className="text-4xl font-bold">{category} Resources</h1>
                <ResourceGallery
                    data={filteredResources}
                    allData={resourcesData}
                    activeCategory={category}
                />
            </div>
        </HomeLayout>
    );
}
