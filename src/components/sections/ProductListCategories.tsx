"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export function ProductListCategories() {
    // We track whichever category index is currently hovered.
    // Default to the first one (0) if none are hovered so it doesn't look empty.
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className="bg-background pt-24 pb-16 border-b border-border/40">
            <div className="container-custom max-w-[1400px]">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-4 mb-4">
                            <span className="w-1.5 h-1.5 rounded-none bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                                What We Offer
                            </span>
                            <span className="w-1.5 h-1.5 rounded-none bg-primary" />
                        </div>

                        <h2 className="text-foreground tracking-tight text-3xl md:text-5xl font-black mb-4 leading-none">
                            Products We <span className="text-muted-foreground/50">Provide</span>
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                            Explore our curated selection of premium distributed electrical appliances, sourced strictly from industry-leading manufacturers.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Hover to Expand
                        <ArrowUpRight size={14} className="opacity-50" />
                    </div>
                </motion.div>

                {/* ── ACCORDION GALLERY ── */}
                <div
                    className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] lg:h-[600px] gap-2 md:gap-4 select-none mb-10"
                    onMouseLeave={() => setActiveIndex(0)} // Reset to first on mouse leave
                >
                    {categories.map((cat, i) => {
                        const isActive = activeIndex === i;

                        return (
                            <div
                                key={cat.slug}
                                onMouseEnter={() => setActiveIndex(i)}
                                onClick={() => setActiveIndex(i)}
                                className={`
                                    relative flex-1 rounded-sm overflow-hidden border border-border/50 bg-white cursor-pointer
                                    transition-[flex,background-color] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                    ${isActive ? 'md:flex-[4] lg:flex-[5] flex-[3] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-transparent' : 'md:flex-1 h-[80px] md:h-full opacity-70 hover:opacity-100'}
                                `}
                            >
                                {/* Background Image Image (Always visible icon on mobile inactive) */}
                                {!isActive && (
                                    <div className="md:hidden absolute inset-0 flex items-center justify-between p-6">
                                        <span className="text-xs font-bold text-muted-foreground uppercase">{cat.name}</span>
                                        <img src={cat.categoryImage} className="w-12 h-12 object-contain opacity-40" />
                                    </div>
                                )}

                                {/* Active Ambient Glow */}
                                <div
                                    className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isActive ? 'opacity-10' : 'opacity-0'}`}
                                    style={{
                                        background: `radial-gradient(circle at 50% 100%, hsl(${cat.accentHsl}), transparent 70%)`
                                    }}
                                />

                                {/* Progress Top Bar */}
                                <div
                                    className={`absolute top-0 left-0 h-[3px] bg-primary transition-all duration-700 ease-out z-20 ${isActive ? 'w-full' : 'w-0'}`}
                                    style={{ backgroundColor: `hsl(${cat.accentHsl})` }}
                                />

                                {/* ── CONTENT CONTAINER ── */}
                                <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
                                    {/* VERTICAL HEADER (Always visible on desktop, hidden on mobile) */}
                                    <div className={`
                                        hidden md:flex w-full md:w-[80px] h-[80px] md:h-full border-b md:border-b-0 md:border-r border-border/30 
                                        flex-row md:flex-col items-center justify-between p-6 z-20 bg-white/50 backdrop-blur-sm
                                        transition-colors duration-500
                                    `}>
                                        <span className="text-[10px] font-black text-muted-foreground tracking-[0.2em] transform md:-rotate-90 origin-center whitespace-nowrap">
                                            0{i + 1}
                                        </span>
                                        <h3 className="text-sm font-bold tracking-widest uppercase text-foreground transform md:-rotate-90 origin-center whitespace-nowrap hidden md:block">
                                            {cat.name}
                                        </h3>
                                        <div
                                            className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'scale-150' : 'scale-100 opacity-20'}`}
                                            style={{ backgroundColor: `hsl(${cat.accentHsl})` }}
                                        />
                                    </div>

                                    {/* EXPANDED CONTENT AREA */}
                                    <div className={`
                                        relative flex-1 h-full flex flex-col items-start justify-end p-8 md:p-12 overflow-hidden
                                        transition-opacity duration-700 delay-100
                                        ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                                    `}>
                                        <div className={`
                                            absolute inset-0 z-0 flex items-center justify-center p-12 md:p-24
                                            transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]
                                            ${isActive ? 'scale-100 translate-x-0 opacity-100' : 'scale-90 translate-x-20 opacity-0'}
                                        `}>
                                            <div className="relative w-full h-full max-w-[80%] max-h-[80%] flex items-center justify-center">
                                                <img
                                                    src={cat.categoryImage}
                                                    alt={cat.name}
                                                    className="w-full h-full object-contain filter drop-shadow-2xl"
                                                />
                                            </div>
                                        </div>

                                        <div className={`
                                            relative z-10 w-full max-w-sm mt-auto bg-white/95 backdrop-blur-md p-6 border border-border/50 shadow-xl
                                            transition-all duration-700 delay-200
                                            ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                                        `}>
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-2xl font-black tracking-tight leading-none" style={{ color: `hsl(${cat.accentHsl})` }}>
                                                    {cat.name}
                                                </h3>
                                                <Link
                                                    href={`/category/${cat.slug}`}
                                                    className="w-10 h-10 border border-border flex items-center justify-center rounded-none bg-background hover:bg-zinc-100 transition-colors"
                                                >
                                                    <ArrowUpRight size={16} />
                                                </Link>
                                            </div>
                                            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
                                                {cat.description || cat.tagline}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Indicators (Dots) */}
                <div className="flex md:hidden justify-center gap-2">
                    {categories.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-primary' : 'bg-muted-foreground/30'}`}
                            aria-label={`Go to ${categories[i].name}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
