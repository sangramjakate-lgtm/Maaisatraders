"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { categories } from "@/data/categories";

export function ProductListCategories() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Subtle parallax for the main images
    const yParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <section ref={containerRef} className="bg-background pt-24 pb-16 overflow-hidden border-b border-border/40">
            <div className="container-custom max-w-7xl">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-4 mb-4">
                        <span className="w-1.5 h-1.5 rounded-none bg-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                            Explore Catalog
                        </span>
                        <span className="w-1.5 h-1.5 rounded-none bg-primary" />
                    </div>

                    <h2 className="text-foreground tracking-tighter text-4xl md:text-6xl font-black mb-6 leading-none">
                        All <span className="text-muted-foreground/50">Categories</span>
                    </h2>

                    <p className="text-muted-foreground text-sm md:text-base leading-[1.8] max-w-xl mx-auto">
                        Dive deep into our extensive range of industrial and residential electrical solutions safely engineered for longevity.
                    </p>
                </motion.div>

                {/* ── BENTO GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {categories.map((cat, i) => {
                        // Create a sprawling, asymmetrical bento layout
                        let colSpan = "md:col-span-4";
                        let rowSpan = "md:row-span-1";
                        let isLarge = false;

                        if (i === 0) {
                            colSpan = "md:col-span-8";
                            rowSpan = "md:row-span-2";
                            isLarge = true;
                        } else if (i === 1 || i === 2) {
                            colSpan = "md:col-span-4";
                            rowSpan = "md:row-span-1";
                        } else if (i === 3) {
                            colSpan = "md:col-span-7";
                            rowSpan = "md:row-span-1";
                            isLarge = true;
                        } else if (i === 4) {
                            colSpan = "md:col-span-5";
                            rowSpan = "md:row-span-1";
                        }

                        return (
                            <Link
                                key={cat.slug}
                                href={`/category/${cat.slug}`}
                                className={`group relative block bg-white border border-border/50 overflow-hidden transition-all duration-700 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ${colSpan} ${rowSpan}`}
                                style={{
                                    minHeight: isLarge ? "400px" : "300px"
                                }}
                            >
                                {/* Background Accent Glow */}
                                <div
                                    className="absolute inset-0 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-150 transition-all duration-1000 ease-out z-0 pointer-events-none"
                                    style={{ background: `hsl(${cat.accentHsl})`, transitionDelay: "0.1s" }}
                                />

                                {/* Progress/Accent Bar Top */}
                                <span
                                    className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 pointer-events-none"
                                    style={{ background: `hsl(${cat.accentHsl})` }}
                                />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                    {/* TOP CONTENT */}
                                    <div className="flex items-start justify-between w-full">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                                <span
                                                    className="w-1.5 h-1.5 rounded-none pointer-events-none"
                                                    style={{ background: `hsl(${cat.accentHsl})` }}
                                                />
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground pointer-events-none">
                                                    0{i + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter leading-none group-hover:text-primary transition-colors duration-300">
                                                {cat.name}
                                            </h3>
                                        </div>

                                        {/* Floating Explore Arrow Button */}
                                        <div
                                            className="w-12 h-12 bg-background border border-border flex items-center justify-center -translate-y-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20"
                                        >
                                            <ArrowRight size={18} style={{ color: `hsl(${cat.accentHsl})` }} />
                                        </div>
                                    </div>

                                    {/* BOTTOM CONTENT (Only visible on large blocks for extra detail) */}
                                    {isLarge && (
                                        <div className="max-w-xs mt-auto relative z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <p className="text-sm text-foreground/70 font-medium leading-relaxed bg-white/80 backdrop-blur-sm p-4 border border-border/30 shadow-lg">
                                                {cat.tagline}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* CENTER IMAGE */}
                                <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none z-0">
                                    <motion.div
                                        className="relative w-full h-full flex items-center justify-center"
                                        style={{ y: yParallax }}
                                    >
                                        <img
                                            src={cat.categoryImage}
                                            alt={cat.name}
                                            className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:-translate-y-4"
                                            style={{
                                                maxWidth: isLarge ? "75%" : "85%",
                                                maxHeight: isLarge ? "75%" : "85%"
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
