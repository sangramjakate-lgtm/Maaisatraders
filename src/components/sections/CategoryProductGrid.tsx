"use client";

import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";
import { motion } from "framer-motion";

interface Props {
  cat: Category;
}

export function CategoryProductGrid({ cat }: Props) {
  if (!cat.products || cat.products.length === 0) return null;

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="products">
      {/* Subtle background gradient to tie section together */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 block mix-blend-multiply"
        style={{
          background: `linear-gradient(to bottom, transparent, hsl(${cat.accentHsl} / 0.03) 50%, transparent)`
        }}
      />

      <div className="container-custom max-w-7xl relative z-10 px-6">
        {/* ─── ENHANCED GRID HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 flex flex-col items-start max-w-3xl"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-1.5 h-1.5 rounded-none" style={{ backgroundColor: `hsl(${cat.accentHsl})` }} />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: `hsl(${cat.accentHsl})` }}>
              Authorized Distributor
            </span>
          </div>

          <h2 className="text-foreground tracking-tighter text-3xl md:text-5xl font-black mb-6 leading-tight uppercase">
            Product <span style={{ color: `hsl(${cat.accentHsl})` }}>Range</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-[1.8] max-w-xl">
            Explore our curated selection of premium {cat.name.toLowerCase()} — engineered for maximum efficiency, safety, and modern aesthetics.
          </p>
        </motion.div>

        {/* ─── ANIMATED PRODUCT GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cat.products.map((product, i) => {
            // Helper to generate IDs matching the ones in products.ts
            const productId = product.title.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                key={i}
                className="group relative flex flex-col bg-card border border-border/40 hover:border-primary/40 rounded-none overflow-hidden transition-colors duration-500"
              >
                <Link href={`/product/${productId}`} className="absolute inset-0 z-30" />
                {/* Top Accent Line */}
                <span
                  className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-out z-20"
                  style={{ backgroundColor: `hsl(${cat.accentHsl})` }}
                />

                {/* ── IMAGE SECTION ── */}
                <div className="relative w-full aspect-square p-8 flex items-center justify-center overflow-hidden border-b border-border/20 z-10 bg-white">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.title} — Authorized Distribution & Electrical Supply Pune`}
                      fill
                      className="object-contain filter group-hover:drop-shadow-lg transition-all duration-500"
                      unoptimized
                    />
                  </motion.div>

                  {/* Overlay glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `hsl(${cat.accentHsl})` }}
                  />
                </div>

                {/* ── TEXT SECTION ── */}
                <div className="p-6 flex flex-col relative z-20 bg-background/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                      Model {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: `hsl(${cat.accentHsl})` }} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-400">
                    {product.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
