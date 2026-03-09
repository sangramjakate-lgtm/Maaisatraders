"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export function ProductCategories() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Stagger entrance via IntersectionObserver (no extra GSAP dep needed here)
    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll<HTMLDivElement>(".cat-card");
        if (!cards) return;

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
            { threshold: 0.1 }
        );

        cards.forEach((card, i) => {
            card.style.opacity = "0";
            card.style.transform = "translateY(48px)";
            card.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1}s`;
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    // CSS 3D mouse-tracking tilt
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rotY = ((e.clientX - cx) / (rect.width / 2)) * 12;
        const rotX = -((e.clientY - cy) / (rect.height / 2)) * 10;
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(18px) scale(1.03)`;
        card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 40px rgba(0,0,0,0.18)`;
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
        const card = e.currentTarget;
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
        card.style.boxShadow = "";
    }

    return (
        <section ref={sectionRef} className="section-padding bg-background border-t border-border/50 overflow-hidden">
            <div className="container-custom">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                            What We Offer
                        </p>
                        <h2 className="text-foreground tracking-tighter">
                            Products We Provide
                        </h2>
                        <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-lg">
                            Premium electrical products across 5 categories — sourced from top brands and delivered across Maharashtra.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            className={`cat-card block group relative rounded-2xl overflow-hidden bg-gradient-to-br ${cat.gradient} border border-white/70 cursor-pointer`}
                            style={{ willChange: "transform" }}
                            onMouseMove={handleMouseMove as never}
                            onMouseLeave={handleMouseLeave as never}
                        >
                            {/* Glow blob */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 40%, ${cat.spotlightColor} 0%, transparent 70%)`,
                                }}
                            />

                            {/* Floating icon */}
                            <div className="relative z-10 px-8 pt-10 pb-2 flex items-center gap-4">
                                <span
                                    className="text-5xl leading-none select-none"
                                    style={{ animation: `catFloat ${2.6 + i * 0.25}s ease-in-out infinite` }}
                                >
                                    {cat.icon}
                                </span>
                                <span
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full border"
                                    style={{
                                        color: `hsl(${cat.accentHsl})`,
                                        borderColor: `hsl(${cat.accentHsl} / 0.35)`,
                                        background: `hsl(${cat.accentHsl} / 0.08)`,
                                    }}
                                >
                                    {cat.products.length} Products
                                </span>
                            </div>

                            {/* Text */}
                            <div className="relative z-10 px-8 pb-8 pt-4">
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                    {cat.tagline}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {cat.description}
                                </p>

                                {/* CTA */}
                                <div
                                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3"
                                    style={{ color: `hsl(${cat.accentHsl})` }}
                                >
                                    Explore
                                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>

                            {/* Bottom stripe */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `hsl(${cat.accentHsl})` }}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Floating keyframes injected inline */}
            <style>{`
        @keyframes catFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-10px) rotate(-3deg); }
          66%       { transform: translateY(-5px) rotate(2deg); }
        }
      `}</style>
        </section>
    );
}
