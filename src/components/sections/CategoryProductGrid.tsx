"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";

interface Props {
    cat: Category;
}

export function CategoryProductGrid({ cat }: Props) {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                            Our Selection
                        </p>
                        <h2 className="text-foreground tracking-tighter">
                            {cat.name} Products
                        </h2>
                    </div>
                    <Link
                        href="/product"
                        className="text-sm font-semibold text-primary hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-2"
                    >
                        View Full Catalog <ArrowRight size={15} />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {cat.products.map((product, i) => (
                        <a
                            key={i}
                            href={product.link !== "#" ? product.link : undefined}
                            target={product.link !== "#" ? "_blank" : undefined}
                            rel="noreferrer"
                            className="group flex flex-col cursor-pointer"
                        >
                            <div
                                className="relative aspect-square mb-4 bg-white border border-border/50 p-4 overflow-hidden transition-all duration-500"
                                style={{ transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.02)";
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px -10px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                                }}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    unoptimized
                                />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `hsl(${cat.accentHsl} / 0.05)` }}
                                />
                            </div>
                            <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                {product.title}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
