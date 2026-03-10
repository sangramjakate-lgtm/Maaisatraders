import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts } from "@/lib/products";
import { categories } from "@/data/categories";
import { ProductDetailClient } from "@/components/sections/ProductDetailClient";

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
        }
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = allProducts.find((p) => p.id === id);

    if (!product) notFound();

    const parentCategory = categories.find(c => c.name === product.category) || null;

    // Structured Data (JSON-LD)
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductDetailClient product={product} parentCategory={parentCategory} />
        </>
    );
}
