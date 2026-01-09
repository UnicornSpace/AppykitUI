import React from "react";

type JsonLdProps = {
    data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Organization Schema
export function OrganizationJsonLd({
    name,
    url,
    logo,
    description,
}: {
    name: string;
    url: string;
    logo?: string;
    description?: string;
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url,
        ...(logo && { logo }),
        ...(description && { description }),
    };

    return <JsonLd data={data} />;
}

// Article Schema for Blog Posts
export function ArticleJsonLd({
    title,
    description,
    url,
    datePublished,
    dateModified,
    authorName,
    images,
}: {
    title: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
    authorName?: string;
    images?: string[];
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        ...(authorName && {
            author: {
                "@type": "Person",
                name: authorName,
            },
        }),
        ...(images && { image: images }),
        publisher: {
            "@type": "Organization",
            name: "AppykitUI",
            url: "https://appykit-ui.com",
        },
    };

    return <JsonLd data={data} />;
}

// Course Schema
export function CourseJsonLd({
    name,
    description,
    url,
    provider,
    thumbnailUrl,
}: {
    name: string;
    description: string;
    url: string;
    provider?: string;
    thumbnailUrl?: string;
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Course",
        name,
        description,
        url,
        provider: {
            "@type": "Organization",
            name: provider || "AppykitUI",
            url: "https://appykit-ui.com",
        },
        ...(thumbnailUrl && { thumbnailUrl }),
    };

    return <JsonLd data={data} />;
}

// ItemList Schema for listing pages
export function ItemListJsonLd({
    name,
    description,
    items,
}: {
    name: string;
    description?: string;
    items: { name: string; url: string; position: number }[];
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        ...(description && { description }),
        itemListElement: items.map((item) => ({
            "@type": "ListItem",
            position: item.position,
            name: item.name,
            url: item.url,
        })),
    };

    return <JsonLd data={data} />;
}

// WebSite Schema for homepage
export function WebSiteJsonLd({
    name,
    url,
    description,
}: {
    name: string;
    url: string;
    description?: string;
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
        ...(description && { description }),
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    return <JsonLd data={data} />;
}
