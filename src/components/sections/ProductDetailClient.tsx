"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    CheckCircle2,
    Settings,
    Zap,
    ShieldCheck,
    Package
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Product } from "@/lib/products";
import { Category } from "@/data/categories";
import { CategoryProductGrid } from "@/components/sections/CategoryProductGrid";
import { ProductPageCategories } from "@/components/sections/ProductPageCategories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface Props {
    product: Product;
    parentCategory: Category | null;
}

export function ProductDetailClient({ product, parentCategory }: Props) {
    const containerRef = useRef<HTMLElement>(null);

    const getStatIcon = (index: number) => {
        const icons = [
            <Settings key="1" size={18} className="text-primary" />,
            <Zap key="2" size={18} className="text-primary" />,
            <ShieldCheck key="3" size={18} className="text-primary" />,
            <Package key="4" size={18} className="text-primary" />
        ];
        return icons[index % icons.length];
    };

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".back-btn", {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
            .from(".product-image-container", {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.4")
            .from(".product-meta", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(2)"
            }, "-=0.8")
            .from(".product-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.75)"
            }, "-=0.6")
            .from(".product-desc", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.7")
            .from(".product-price", {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.5)"
            }, "-=0.6")
            .from(".stat-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)"
            }, "-=0.4")
            .from(".buy-btn", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(2)"
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-background min-h-screen pt-24 pb-20">
            <div className="container-custom max-w-7xl">
                <Breadcrumbs
                    items={[
                        { label: "Catalog", href: "/product" },
                        { label: product.category, href: `/category/${parentCategory?.slug || ""}` },
                        { label: product.title, href: "#", active: true }
                    ]}
                />

                <Link
                    href="/product"
                    className="back-btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-10"
                >
                    <ArrowLeft size={16} />
                    Back to Catalog
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="product-image-container relative bg-white border border-border/60 p-10 lg:p-20 shadow-sm overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 transition-transform duration-700 group-hover:scale-150" />
                        <div className="relative aspect-square w-full">
                            <Image
                                src={product.image}
                                alt={`${product.title} - Authorized Distributor ${product.category}`}
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="product-meta inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 self-start">
                            <CheckCircle2 size={12} className="text-primary" />
                            Premium {product.category} Supplier & Distributor
                        </div>

                        <h1 className="product-title text-foreground tracking-tighter leading-[1.1] mb-6 text-[clamp(2rem,6vw,4.5rem)]">
                            {product.title}
                        </h1>

                        <p className="product-desc text-lg text-muted-foreground leading-relaxed font-medium mb-10 border-l-2 border-primary/30 pl-6 py-1">
                            {product.description} As a leading <strong className="text-foreground">authorized distributor</strong> of electrical systems, we ensure this {product.title} meets all industrial standards for safety and performance across Maharashtra.
                        </p>

                        <div className="product-price mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                                    Distributor Pricing
                                </p>
                                <p className="text-3xl font-heading font-bold text-foreground">
                                    {product.price}
                                </p>
                            </div>

                            {/* Social Sharing Enabler */}
                            <div className="flex flex-col gap-3">
                                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Share Product</p>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(`Check out ${product.title} at Maaisa Traders: https://maaisatraders.com/product/${product.id}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                                        aria-label="Share on WhatsApp"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7.7.7 0 0 1 .7.7 2.1 2.1 0 0 0 2.1 2.1.7.7 0 0 1 .7.7c0 .24.03.48.1.7" /><circle cx="12" cy="12" r="3" /><path d="M16 8a5 5 0 0 1 5 5" /><path d="M17 10a3 3 0 0 1 3 3" /></svg>
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://maaisatraders.com/product/${product.id}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                                        aria-label="Share on Facebook"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://maaisatraders.com/product/${product.id}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-14">
                            {product.stats.map((stat, i) => (
                                <div key={i} className="stat-card flex gap-4">
                                    <div className="w-10 h-10 rounded-none bg-primary/[0.05] border border-primary/10 flex items-center justify-center shrink-0">
                                        {getStatIcon(i)}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                                            {stat.label}
                                        </p>
                                        <p className="text-sm font-semibold text-foreground leading-tight">
                                            {stat.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {parentCategory && (
                <div className="mt-32">
                    <CategoryProductGrid cat={parentCategory} />
                </div>
            )}
            <ProductPageCategories />
        </section>
    );
}
