"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";

import { Product } from "@/lib/products";
import { BrandGrid } from "@/components/sections/BrandGrid";
import { ProductListCategories } from "@/components/sections/ProductListCategories";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = ["All", "Fans", "Cables & Wires", "Switches & Switchgear", "Air Conditioners", "Lighting"];

interface Props {
    allProducts: Product[];
}

export function ProductListClient({ allProducts }: Props) {
    const containerRef = useRef<HTMLElement>(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? allProducts
        : allProducts.filter(p => p.category === activeCategory);

    useGSAP(() => {
        gsap.fromTo(".product-card",
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: ".products-grid",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, { scope: containerRef, dependencies: [activeCategory] });

    return (
        <section ref={containerRef} className="bg-background min-h-screen">
            <div className="border-b border-border/50">
                <BrandGrid />
            </div>

            <ProductListCategories />

            <div className="container-custom py-16">
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    {CATEGORIES.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveCategory(cat)}
                            className={`filter-btn px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-none transition-colors duration-300 shadow-sm ${activeCategory === cat
                                ? "bg-primary text-primary-foreground border-2 border-primary"
                                : "bg-white text-foreground border-2 border-border hover:border-primary hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-10 pb-4 border-b border-border/40">
                    <p className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
                        Showing <span className="text-foreground">{filteredProducts.length}</span> Products
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                        <Filter size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Sort & Filter</span>
                    </div>
                </div>

                <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                    {filteredProducts.map((product, i) => (
                        <Link
                            key={`${i}-${product.id}`}
                            href={`/product/${product.id}`}
                            className="product-card group flex flex-col cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] mb-5 bg-white border border-border/60 p-6 overflow-hidden transition-all duration-500 hover:border-primary">
                                <Image
                                    src={product.image}
                                    alt={`${product.title} - ${product.category} Authorized Distributor Pune`}
                                    fill
                                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Product <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 px-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                    {product.category}
                                </p>
                                <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                    {product.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground font-medium">No products found for this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
