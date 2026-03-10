import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { CategoryHero } from "@/components/sections/CategoryHero";
import { CategoryProductGrid } from "@/components/sections/CategoryProductGrid";

import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const cat = categories.find((c) => c.slug === slug);

    if (!cat) return {};

    return {
        title: `${cat.name} - Authorized Distributor | Maaisa Traders`,
        description: `Premium range of authorized ${cat.name} from industry leading brands. Efficient and timely delivery across Maharashtra.`,
        openGraph: {
            title: `${cat.name} | Authorized Electrical Solutions`,
            description: `Explore our premium collection of ${cat.name} for industrial and residential use.`,
            images: [{ url: cat.categoryImage }],
        },
        alternates: {
            canonical: `/category/${slug}`,
        }
    };
}

export function generateStaticParams() {
    return categories.map((c) => ({ slug: c.slug }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const cat = categories.find((c) => c.slug === slug);
    if (!cat) notFound();

    const catIndex = categories.findIndex((c) => c.slug === slug);
    const next = categories[(catIndex + 1) % categories.length];

    // Breadcrumbs Structured Data
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://maaisatraders.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Categories",
                "item": "https://maaisatraders.com/product"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": cat.name,
                "item": `https://maaisatraders.com/category/${slug}`
            }
        ]
    };

    // CollectionPage Structured Data
    const collectionJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${cat.name} - Authorized Electrical Solutions`,
        "description": cat.description,
        "url": `https://maaisatraders.com/category/${slug}`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": cat.highlights.map((h, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": h
            }))
        }
    };

    return (
        <main className="bg-background min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
            />

            {/* ─── ENHANCED HERO (Client Component with Framer Motion) ─── */}
            <CategoryHero cat={cat} catIndex={catIndex} />

            {/* ─── ANIMATED PRODUCT GRID (Client Component) ─── */}
            <CategoryProductGrid cat={cat} />

            {/* ─── NEXT CATEGORY STRIP ──────────────────────────────── */}
            <section
                className="relative overflow-hidden border-t border-border/40 cat-next-section"
                style={{ minHeight: "22vh" }}
            >
                <Link
                    href={`/category/${next.slug}`}
                    className="cat-next block relative z-10"
                    style={{ minHeight: "22vh" }}
                >
                    <div
                        className="cat-next-bg absolute inset-0 opacity-0 pointer-events-none"
                        style={{
                            background: `hsl(${next.accentHsl} / 0.05)`,
                            transition: "opacity 0.6s ease",
                        }}
                    />
                    <span
                        className="cat-next-bar absolute left-0 top-0 w-[4px] h-full pointer-events-none"
                        style={{
                            background: `hsl(${next.accentHsl})`,
                            transform: "scaleY(0)",
                            transformOrigin: "top",
                            transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                    />
                    <div
                        className="container-custom flex items-center justify-between gap-6"
                        style={{ minHeight: "22vh" }}
                    >
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                Next Up
                            </p>
                            <h3
                                className="cat-next-heading text-foreground font-extrabold tracking-tight"
                                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", transition: "color 0.4s ease" }}
                            >
                                {next.name}
                            </h3>
                            <p className="text-muted-foreground text-xs mt-1 uppercase tracking-widest">
                                {next.tagline}
                            </p>
                        </div>
                        <span
                            className="cat-next-arrow flex-shrink-0"
                            style={{ color: `hsl(${next.accentHsl})`, transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)" }}
                        >
                            <ArrowRight size={32} />
                        </span>
                    </div>
                </Link>
                <style>{`
                    .cat-next:hover .cat-next-bg { opacity: 1 !important; }
                    .cat-next:hover .cat-next-bar { transform: scaleY(1) !important; }
                    .cat-next:hover .cat-next-arrow { transform: translateX(16px); }
                    .cat-next:hover .cat-next-heading { color: hsl(var(--primary)); }
                `}</style>
            </section>

        </main>
    );
}
