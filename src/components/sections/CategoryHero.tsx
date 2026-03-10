"use client";

import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { Category } from "@/data/categories";
import { motion } from "framer-motion";
import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

interface Props {
    cat: Category;
    catIndex: number;
}

export function CategoryHero({ cat, catIndex }: Props) {
    return (
        <section className="relative w-full overflow-hidden bg-background flex flex-col min-h-[90vh] lg:min-h-screen pt-28 pb-20">
            {/* ─── AMBIENT BACKGROUND GLOW ─── */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: ['-5%', '5%', '-5%'],
                        y: ['-5%', '5%', '-5%'],
                    }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full filter blur-[120px] opacity-[0.08] mix-blend-screen"
                    style={{ background: `radial-gradient(circle, hsl(${cat.accentHsl}) 0%, transparent 70%)` }}
                />
            </div>

            {/* ─── GIANT BACKGROUND TYPOGRAPHY ─── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-black uppercase tracking-tighter whitespace-nowrap"
                    style={{ fontSize: "clamp(5rem, 15vw, 18rem)", lineHeight: 1, color: `hsl(${cat.accentHsl})` }}
                >
                    {cat.name}
                </motion.h1>
            </div>

            {/* ─── MAIN CONTAINER ─── */}
            <div className="container-custom relative z-10 flex-1 flex flex-col">

                {/* TOP NAVIGATION — Aligned with Container */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 w-full mb-8 lg:mb-16"
                >
                    <Breadcrumbs
                        items={[
                            { label: "Products", href: "/product" },
                            { label: cat.name, href: "#", active: true }
                        ]}
                    />

                    <div className="flex items-center justify-between w-full">
                        <Link
                            href="/#products"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft size={12} /> Back to Products
                        </Link>

                        <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-30 select-none">
                            Category {String(catIndex + 1).padStart(2, "0")}
                        </div>
                    </div>
                </motion.div>

                {/* TWO-COLUMN CONTENT */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full flex-1 gap-12 lg:gap-8">

                    {/* Left: Text Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex-1 flex flex-col items-start text-left w-full lg:max-w-xl xl:max-w-2xl"
                    >
                        <div
                            className="inline-flex items-center px-4 py-1.5 rounded-none border mb-8"
                            style={{ borderColor: `hsl(${cat.accentHsl} / 0.3)`, backgroundColor: `hsl(${cat.accentHsl} / 0.05)` }}
                        >
                            <span className="w-1.5 h-1.5 rounded-none mr-3 animate-pulse" style={{ backgroundColor: `hsl(${cat.accentHsl})` }} />
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: `hsl(${cat.accentHsl})` }}>
                                {cat.tagline}
                            </span>
                        </div>

                        <h2 className="font-extrabold tracking-tighter mb-6 text-foreground leading-[1.05] text-[clamp(2.5rem,7vw,4.5rem)]">
                            {cat.name}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-10 max-w-lg">
                            As an <strong className="text-foreground">Authorized Distributor</strong>, Maaisa Traders provides a premium range of <strong className="text-foreground">{cat.name}</strong> solutions. {cat.description}
                        </p>

                        <div className="flex flex-col gap-4 w-full max-w-md">
                            {cat.highlights.map((highlight, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                    className="flex items-center gap-4 py-3 border-b border-border/40 last:border-0"
                                >
                                    <span className="w-1.5 h-1.5 rounded-none flex-shrink-0" style={{ backgroundColor: `hsl(${cat.accentHsl})` }} />
                                    <span className="text-xs md:text-sm font-bold tracking-wide text-foreground/80 uppercase">{highlight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Floating Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 relative flex items-center justify-center w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] self-center"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="w-full aspect-square relative"
                        >
                            <Image
                                src={cat.categoryImage}
                                alt={`${cat.name} Authorized Distributor Pune`}
                                fill
                                className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                                priority
                            />
                        </motion.div>

                        {/* Authorized Distributor Badge - Sharp Edges */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                            className="absolute bottom-0 right-0 md:-right-4 bg-background border border-border rounded-none px-4 py-3 lg:px-5 lg:py-4 shadow-xl flex items-center gap-3 lg:gap-4"
                        >
                            <div className="w-1 h-8 lg:h-10" style={{ backgroundColor: `hsl(${cat.accentHsl})` }} />
                            <div>
                                <p className="text-[8px] lg:text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5 lg:mb-1">Guaranteed</p>
                                <p className="text-[10px] lg:text-xs font-black tracking-widest text-foreground">AUTHORIZED DISTRIBUTOR</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* ─── SCROLL INDICATOR ─── */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground z-10"
            >
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
                <ArrowDown size={14} />
            </motion.div>
        </section>
    );
}
