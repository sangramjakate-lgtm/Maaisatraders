import dynamic from "next/dynamic";
import { Metadata } from "next";
import { allProducts } from "@/lib/products";

const ProductListClient = dynamic(() => import("@/components/sections/ProductListClient").then(mod => mod.ProductListClient), {
    ssr: true,
});

export const metadata: Metadata = {
    title: "Product Catalog",
    description: "Explore our extensive range of premium electrical products, from ceiling fans and air conditioners to wires, cables, and smart switchgear.",
    openGraph: {
        title: "Product Catalog | Maaisa Traders India",
        description: "Browse the full collection of authorized electrical products from industry-leading brands.",
    },
    alternates: {
        canonical: "/product",
    },
};

export default function ProductPage() {
    return <ProductListClient allProducts={allProducts} />;
}
