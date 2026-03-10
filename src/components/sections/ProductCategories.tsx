"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

/* ─── All hover transitions defined in ONE place, pure CSS ─────────────────
   We avoid Tailwind group-hover utilities for anything animated so there's
   zero class-vs-style conflict. Every property that moves uses transform or
   opacity — both compositor-thread only, never triggering layout reflow.     */
const hoverStyles = `
  .cat-row .cat-bar {
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .cat-row:hover .cat-bar {
    transform: scaleY(1);
  }

  .cat-row .cat-ghost {
    opacity: 0;
    transition: opacity 1.1s ease;
  }
  .cat-row:hover .cat-ghost {
    opacity: 0.04;
  }

  .cat-row .cat-heading {
    color: hsl(var(--foreground));
    transition: color 0.55s ease;
  }
  .cat-row:hover .cat-heading {
    color: hsl(var(--primary));
  }

  .cat-row .cat-img {
    transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                filter     0.9s ease;
    filter: drop-shadow(0 20px 36px rgba(0,0,0,0.09))
            drop-shadow(0 6px 12px rgba(0,0,0,0.05));
  }
  .cat-row:hover .cat-img {
    transform: translateY(-10px);
    filter: drop-shadow(0 32px 52px rgba(0,0,0,0.14))
            drop-shadow(0 10px 18px rgba(0,0,0,0.08));
  }

  .cat-row .cat-glow {
    transition: opacity 0.9s ease;
    opacity: 0.15;
  }
  .cat-row:hover .cat-glow {
    opacity: 0.27;
  }

  .cat-row .cat-underline {
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .cat-row:hover .cat-underline {
    transform: scaleX(1);
  }

  .cat-row .cat-arrow {
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .cat-row:hover .cat-arrow {
    transform: translateX(8px);
  }
`;

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

            <style>{hoverStyles}</style>

            {/* Header */}
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

            {categories.map((cat, i) => {
                const isEven = i % 2 === 0;
                return (
                    <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        className="cat-row block relative overflow-hidden border-t border-border/40 last:border-b min-h-[50vh] md:min-h-[70vh]"
                    >
                        {/* Accent left bar — scaleY from top */}
                        <span
                            className="cat-bar absolute left-0 top-0 w-[3px] h-full z-20 pointer-events-none"
                            style={{ background: `hsl(${cat.accentHsl})` }}
                        />

                        {/* Giant ghost index number */}
                        <span
                            className="cat-ghost absolute select-none pointer-events-none font-black z-0"
                            style={{
                                fontSize: "clamp(10rem, 22vw, 20rem)",
                                color: `hsl(${cat.accentHsl})`,
                                bottom: "-0.1em",
                                right: isEven ? "-0.05em" : undefined,
                                left: !isEven ? "-0.05em" : undefined,
                                lineHeight: 1,
                            }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        <div
                            className={`container-custom h-full flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-20 min-h-[50vh] md:min-h-[70vh] relative z-10`}
                        >
                            {/* ── TEXT ─────────────────────────────── */}
                            <div className="flex-1 py-10 md:py-16 flex flex-col justify-center text-left">

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

                                <h3
                                    className="cat-heading tracking-tighter mb-6"
                                    style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)", lineHeight: 1.1, fontWeight: 800 }}
                                >
                                    {cat.name}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-[1.8] max-w-sm mb-9">
                                    {cat.description}
                                </p>

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

                                <span className="block w-10 h-px bg-border mb-5" />

                                <div
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest w-fit"
                                    style={{ color: `hsl(${cat.accentHsl})` }}
                                >
                                    <span className="relative">
                                        Explore Category
                                        <span
                                            className="cat-underline absolute left-0 -bottom-0.5 h-px w-full block"
                                            style={{ background: `hsl(${cat.accentHsl})` }}
                                        />
                                    </span>
                                    <span className="cat-arrow inline-flex">
                                        <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>

                            {/* ── IMAGE ───────────────────────────── */}
                            <div
                                className="flex-1 relative flex items-center justify-center self-stretch"
                                style={{ minHeight: "260px" }}
                            >
                                <div
                                    className="absolute inset-0"
                                    style={{ background: `hsl(${cat.accentHsl} / 0.06)` }}
                                />

                                <div
                                    className="cat-img relative z-10"
                                    style={{ width: "min(72%, 340px)", aspectRatio: "1 / 1" }}
                                >
                                    <Image
                                        src={cat.categoryImage}
                                        alt={`${cat.name} — Authorized Distributor & Service Provider Pune`}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>

                                <div
                                    className="cat-glow absolute rounded-full blur-3xl pointer-events-none"
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
