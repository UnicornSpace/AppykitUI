import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://appykit-ui.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/test/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
