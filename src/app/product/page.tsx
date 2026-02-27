"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Search } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const allProducts = [
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577534893/WX/TD/FW/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-2-500x500.jpeg", title: "Havells Opus 8 Blade Ceiling Fan", link: "https://www.indiamart.com/proddetail/havells-opus-8-blade-ceiling-fan-2858611809533.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577536669/OQ/GL/CN/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-1-500x500.jpeg", title: "White Remote Control Ceiling Fan", link: "https://www.indiamart.com/proddetail/white-remote-control-ceiling-fan-2858611856491.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577525356/SS/ZR/NR/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-1-jpeg-500x500.jpeg", title: "Led Lights Luxury Ceiling Fan", link: "https://www.indiamart.com/proddetail/led-lights-luxury-ceiling-fan-2858611401188.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577539635/ZY/NV/WS/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-1-500x500.jpeg", title: "Led Light Ceiling Fan", link: "https://www.indiamart.com/proddetail/led-light-ceiling-fan-2858611921773.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577541187/EN/LT/TU/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-2-500x500.jpeg", title: "Usha Hunter Luxury Ceiling Fan", link: "https://www.indiamart.com/proddetail/usha-hunter-luxury-ceiling-fan-2858611951055.html" },
    { category: "Water Heaters", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577527120/IE/US/NB/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-3-jpeg-500x500.jpeg", title: "Havells Water Geyser", link: "https://www.indiamart.com/proddetail/havells-water-geyser-2858611493812.html" },
    { category: "Water Heaters", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577533832/FQ/QV/SL/247573501/electric-storage-water-heater-500x500.jpeg", title: "Havells Electric Storage Water Heater", link: "https://www.indiamart.com/proddetail/havells-electric-storage-water-heater-2858611721873.html" },
    { category: "Water Heaters", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577451828/PW/XG/LT/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-3-jpeg-500x500.jpeg", title: "Standard Water Geyser", link: "#" },
    { category: "Water Purifiers", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577528732/UO/ZT/VY/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg", title: "Premium Ro Water Purifier", link: "https://www.indiamart.com/proddetail/premium-ro-water-purifier-2858611546255.html" },
    { category: "Water Purifiers", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577529649/HT/OD/FA/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg", title: "Havells Water Purifier", link: "https://www.indiamart.com/proddetail/havells-water-purifier-2858611586948.html" },
    { category: "Water Purifiers", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577451934/XF/KR/FI/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg", title: "UV Water Purifier", link: "#" },
    { category: "Accessories", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577538710/TU/SN/HS/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-500x500.jpeg", title: "Ceiling Fan Blade Set", link: "https://www.indiamart.com/proddetail/ceiling-fan-blade-set-2858611894597.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514994/RW/TH/GO/247573501/1000055176-500x500.jpg", title: "Havells Bldc Ceiling Fans (Model A)", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577542711/XA/XJ/FN/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-500x500.jpeg", title: "Havells Bldc Ceiling Fans (Model B)", link: "https://www.indiamart.com/proddetail/havells-bldc-ceiling-fans-2858611975830.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577543809/VN/CW/DG/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-500x500.jpeg", title: "Havells Underlight Ceiling Fan", link: "https://www.indiamart.com/proddetail/havells-underlight-ceiling-fan-2858611994662.html" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514905/FS/EC/AW/247573501/1000055173-500x500.jpg", title: "Havells Bldc Ceiling Fans (Model C)", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517088/YI/PO/YX/247573501/1000055184-500x500.jpg", title: "Royal Luxury Ceiling fan", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514939/DL/HC/LS/247573501/1000055174-500x500.jpg", title: "Havells Bldc Fan", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584516059/KZ/HH/IZ/247573501/1000055179-500x500.jpg", title: "Havells Opus Ceiling Fan", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517154/OO/NF/WN/247573501/1000055182-500x500.jpg", title: "Luxury Ceiling Fans", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514964/ES/OP/KN/247573501/1000055175-500x500.jpg", title: "Havells Ceiling Fan Bldc", link: "#" },
    { category: "Fans", image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517263/JW/ZX/MJ/247573501/1000055180-500x500.jpg", title: "Led Lights Luxury Ceiling Fan (Variant)", link: "#" },
];

const categories = ["All", "Fans", "Water Heaters", "Water Purifiers", "Accessories"];

export default function Product() {
    const containerRef = useRef<HTMLElement>(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? allProducts
        : allProducts.filter(p => p.category === activeCategory);

    useGSAP(() => {
        // Hero section animation
        const tl = gsap.timeline();
        tl.from(".page-badge", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.5)"
        })
            .from(".page-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.8)"
            }, "-=0.6")
            .from(".page-desc", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.8")
            .from(".filter-btn", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(2)"
            }, "-=0.6");

        // We run animateGrid every time the category changes to trigger the stagger entering again
        animateGrid();

    }, { scope: containerRef, dependencies: [activeCategory] });

    const animateGrid = () => {
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
    };

    return (
        <section ref={containerRef} className="bg-background min-h-screen">

            {/* ═══════════════════════════════════════════════
               HERO & FILTER HEADER
            ═══════════════════════════════════════════════ */}
            <div className="pt-24 pb-12 bg-muted/20 border-b border-border/50">
                <div className="container-custom max-w-5xl text-center">
                    <div className="page-badge inline-flex items-center gap-2 px-3 py-1 rounded-none border-b border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                        Product Catalog
                    </div>

                    <h1 className="page-title text-foreground tracking-tighter mb-6">
                        Explore Our Range.
                    </h1>

                    <p className="page-desc text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        A curated selection of premium distributed electrical appliances, sourced strictly from industry-leading manufacturers.
                    </p>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`filter-btn px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 ${activeCategory === cat
                                        ? "bg-foreground text-background border-2 border-foreground"
                                        : "bg-transparent text-foreground border-2 border-border/60 hover:border-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════
               MASONRY / GRID GALLERY
            ═══════════════════════════════════════════════ */}
            <div className="container-custom py-16">

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
                        <a
                            key={`${i}-${product.title}`}
                            href={product.link !== "#" ? product.link : undefined}
                            target={product.link !== "#" ? "_blank" : undefined}
                            rel="noreferrer"
                            className="product-card group flex flex-col cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] mb-5 bg-white border border-border/60 p-6 overflow-hidden transition-all duration-500 hover:border-primary">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                    unoptimized
                                />

                                {/* Overlay "View Details" */}
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
                        </a>
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
