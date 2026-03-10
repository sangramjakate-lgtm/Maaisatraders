import { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { allProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://maaisatraders.com";

    // Core pages
    const routes = ["", "/about", "/product"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Category pages
    const categoryRoutes = categories.map((cat) => ({
        url: `${baseUrl}/category/${cat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // Product pages
    const productRoutes = allProducts.map((prod) => ({
        url: `${baseUrl}/product/${prod.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...categoryRoutes, ...productRoutes];
}
