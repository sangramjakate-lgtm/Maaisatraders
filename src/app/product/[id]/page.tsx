import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts, Product } from "@/lib/products";
import { categories, Category } from "@/data/categories";
import dynamic from "next/dynamic";

const ProductDetailClient = dynamic(() => import("@/components/sections/ProductDetailClient").then(mod => mod.ProductDetailClient), {
    ssr: true,
});

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return allProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = allProducts.find((p) => p.id === id);

    if (!product) return {};

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: `${product.title} | Maaisa Traders India`,
            description: product.description,
            images: [{ url: product.image }],
        },
        alternates: {
            canonical: `/product/${id}`,
        },
        other: {
            "product:section": product.category,
            "product:tag": `${product.category}, Authorized Distributor, Pune`,
        }
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = allProducts.find((p) => p.id === id);

    if (!product) notFound();

    const parentCategory = categories.find((c: Category) => c.name === product.category) || null;

    // Breadcrumbs Structured Data
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://maaisatraders.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": product.category,
                "item": parentCategory ? `https://maaisatraders.com/category/${parentCategory.slug}` : "https://maaisatraders.com/product"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": product.title,
                "item": `https://maaisatraders.com/product/${id}`
            }
        ]
    };

    // Product Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.title,
        "image": product.image,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Maaisa Traders"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://maaisatraders.com/product/${id}`,
            "priceCurrency": "INR",
            "price": "0", // Price is "Contact for Quote"
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductDetailClient product={product} parentCategory={parentCategory} />
        </>
    );
}
