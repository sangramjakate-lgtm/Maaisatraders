"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export function ProductCategories() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rows = sectionRef.current?.querySelectorAll<HTMLDivElement>(".cat-row");
        if (!rows) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLDivElement;
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.06 }
        );

        rows.forEach((row, i) => {
            row.style.opacity = "0";
            row.style.transform = "translateY(32px)";
            row.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`;
            observer.observe(row);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-background border-t border-border/50 py-20">
            <div className="container-custom mb-14">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                    What We Offer
                </p>
                <h2 className="text-foreground tracking-tighter mb-3">
                    Products We Provide
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                    Premium electrical products across 5 categories — sourced from top brands and delivered across Maharashtra.
                </p>
            </div>

            {/* Full-bleed rows */}
            {categories.map((cat, i) => {
                const isEven = i % 2 === 0;
                return (
                    <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        className="cat-row group block relative overflow-visible border-t border-border/40 last:border-b"
                        style={{ minHeight: "68vh" }}
                    >
                        {/* Soft tinted background strip */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{ background: `hsl(${cat.accentHsl} / 0.04)` }}
                        />

                        <div className={`container-custom h-full flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-20`}
                            style={{ minHeight: "68vh" }}
                        >
                            {/* ── TEXT SIDE ──────────────────────────── */}
                            <div className="flex-1 py-10 md:py-16 flex flex-col justify-center relative z-10 text-left">
                                {/* Index + tagline row */}
                                <div className="flex items-center gap-3 mb-7">
                                    <span
                                        className="text-[11px] font-black tracking-[0.2em] opacity-20 select-none"
                                        style={{ color: `hsl(${cat.accentHsl})` }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="w-6 h-px bg-border" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                                        {cat.tagline}
                                    </span>
                                </div>

                                {/* Heading */}
                                <h3
                                    className="text-foreground tracking-tighter mb-7 group-hover:text-primary transition-colors duration-500"
                                    style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)", lineHeight: 1.1, fontWeight: 800 }}
                                >
                                    {cat.name}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-[1.8] max-w-sm mb-9">
                                    {cat.description}
                                </p>

                                {/* Highlights */}
                                <ul className="flex flex-col gap-4 mb-10">
                                    {cat.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-3 text-sm text-foreground/65">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ background: `hsl(${cat.accentHsl})` }}
                                            />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {/* Thin divider before CTA */}
                                <span className="block w-10 h-px bg-border mb-5" />

                                {/* CTA */}
                                <div
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-4 w-fit"
                                    style={{ color: `hsl(${cat.accentHsl})` }}
                                >
                                    Explore Category
                                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>

                            {/* ── IMAGE SIDE ─────────────────────────── */}
                            <div
                                className="flex-1 relative flex items-center justify-center self-stretch"
                                style={{ minHeight: "260px" }}
                            >
                                {/* Tinted bg panel */}
                                <div
                                    className="absolute inset-0 rounded-none transition-opacity duration-500"
                                    style={{ background: `hsl(${cat.accentHsl} / 0.06)` }}
                                />

                                {/* Image — overflows the panel on the outer edge for depth */}
                                <div
                                    className={`relative z-10 transition-transform duration-700 group-hover:scale-[1.03]`}
                                    style={{
                                        width: "min(72%, 340px)",
                                        aspectRatio: "1 / 1",
                                        /* Pop out toward the text side */
                                        transform: isEven
                                            ? "perspective(900px) rotateY(-4deg) rotateX(2deg) translateX(-5%)"
                                            : "perspective(900px) rotateY(4deg) rotateX(2deg) translateX(5%)",
                                        filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.13)) drop-shadow(0 8px 16px rgba(0,0,0,0.08))",
                                    }}
                                >
                                    <img
                                        src={cat.categoryImage}
                                        alt={cat.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Subtle accent circle behind image */}
                                <div
                                    className="absolute rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"
                                    style={{
                                        width: "55%",
                                        aspectRatio: "1",
                                        background: `hsl(${cat.accentHsl})`,
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}
