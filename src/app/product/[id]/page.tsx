"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    CheckCircle2,
    ExternalLink,
    ShieldCheck,
    Zap,
    Settings,
    Package
} from "lucide-react";

import { allProducts, Product } from "@/lib/products";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ProductDetail() {
    const { id } = useParams();
    const router = useRouter();
    const containerRef = useRef<HTMLElement>(null);
    const [product, setProduct] = useState<Product | null>(null);

    // Map some random icons to the stats dynamically for aesthetic purposes
    const getStatIcon = (index: number) => {
        const icons = [
            <Settings key="1" size={18} className="text-primary" />,
            <Zap key="2" size={18} className="text-primary" />,
            <ShieldCheck key="3" size={18} className="text-primary" />,
            <Package key="4" size={18} className="text-primary" />
        ];
        return icons[index % icons.length];
    };

    useEffect(() => {
        if (id) {
            const foundProduct = allProducts.find(p => p.id === id);
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                router.push("/product");
            }
        }
    }, [id, router]);

    useGSAP(() => {
        if (!product) return;

        const tl = gsap.timeline();

        // 1. Back button
        tl.from(".back-btn", {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
            // 2. Image container (smooth, slow scale)
            .from(".product-image-container", {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.4")
            // 3. Product Info side (Jiggly / elastic text)
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
            // 4. Stagger the stats
            .from(".stat-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)"
            }, "-=0.4")
            // 5. External Link Button
            .from(".buy-btn", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(2)"
            }, "-=0.4");

    }, { scope: containerRef, dependencies: [product] });

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <section ref={containerRef} className="bg-background min-h-screen pt-24 pb-20">
            <div className="container-custom max-w-7xl">

                <Link
                    href="/product"
                    className="back-btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-10"
                >
                    <ArrowLeft size={16} />
                    Back to Catalog
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* ═══════════════════════════════════════════════
                        LEFT: MASSIVE PRODUCT IMAGE
                    ═══════════════════════════════════════════════ */}
                    <div className="product-image-container relative bg-white border border-border/60 p-10 lg:p-20 shadow-sm overflow-hidden group">
                        {/* Decorative background blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 transition-transform duration-700 group-hover:scale-150" />

                        <div className="relative aspect-square w-full">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* ═══════════════════════════════════════════════
                        RIGHT: PRODUCT DETAILS & STATS
                    ═══════════════════════════════════════════════ */}
                    <div className="flex flex-col">

                        <div className="product-meta inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 self-start">
                            <CheckCircle2 size={12} className="text-primary" />
                            {product.category}
                        </div>

                        <h1 className="product-title text-foreground tracking-tighter leading-none mb-6">
                            {product.title}
                        </h1>

                        <p className="product-desc text-lg text-muted-foreground leading-relaxed font-medium mb-10 border-l-2 border-primary/30 pl-6 py-1">
                            {product.description}
                        </p>

                        <div className="product-price mb-12">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                                Distributor Pricing
                            </p>
                            <p className="text-3xl font-heading font-bold text-foreground">
                                {product.price}
                            </p>
                        </div>

                        {/* Dummy Stats Grid */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-14">
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

                        {/* External Link Action */}
                        <div className="buy-btn border-t border-border pt-10">
                            <a
                                href={product.link !== "#" ? product.link : undefined}
                                target={product.link !== "#" ? "_blank" : undefined}
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background rounded-none text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 w-full sm:w-auto group"
                            >
                                View on IndiaMART
                                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            {product.link === "#" && (
                                <p className="text-xs text-muted-foreground mt-4 font-medium italic">
                                    * This product is currently available only via direct distributor inquiry.
                                </p>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
