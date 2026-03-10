"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export function ProductPageCategories() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="bg-background pt-16 pb-24 border-t border-border/20">
            <div className="container-custom">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                            Explore
                        </p>
                        <h2 className="text-foreground text-3xl md:text-5xl font-black tracking-tighter">
                            More Categories
                        </h2>
                    </div>
                </div>

                {/* Horizontal Glass Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            className="group relative flex flex-col h-full bg-white border border-border/50 p-6 transition-all duration-500 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1"
                        >
                            {/* Accent Line Top */}
                            <div
                                className="absolute top-0 left-0 w-full h-[3px] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
                                style={{ background: `hsl(${cat.accentHsl})` }}
                            />

                            {/* Background Number */}
                            <span
                                className="absolute -right-4 -bottom-6 text-[8rem] font-black leading-none opacity-[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-2"
                                style={{ color: `hsl(${cat.accentHsl})` }}
                            >
                                {i + 1}
                            </span>

                            {/* Image Container */}
                            <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                                {/* Subtle Glow */}
                                <div
                                    className="absolute inset-0 rounded-full blur-2xl opacity-10 scale-50 transition-all duration-700 group-hover:scale-100 group-hover:opacity-20"
                                    style={{ background: `hsl(${cat.accentHsl})` }}
                                />
                                <img
                                    src={cat.categoryImage}
                                    alt={cat.name}
                                    className="relative z-10 w-3/4 h-3/4 object-contain transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-sm group-hover:drop-shadow-xl"
                                />
                            </div>

                            {/* Content bottom flush */}
                            <div className="mt-auto relative z-10">
                                <h3 className="font-bold text-foreground text-lg tracking-tight mb-2 group-hover:text-primary transition-colors">
                                    {cat.name}
                                </h3>
                                <div
                                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest w-fit"
                                    style={{ color: `hsl(${cat.accentHsl})` }}
                                >
                                    <span className="relative">
                                        Explore
                                        <span
                                            className="absolute left-0 -bottom-0.5 w-full h-px scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                                            style={{ background: `hsl(${cat.accentHsl})` }}
                                        />
                                    </span>
                                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
