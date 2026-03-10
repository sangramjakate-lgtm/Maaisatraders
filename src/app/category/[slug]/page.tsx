import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/data/categories";
import { CategoryProductGrid } from "@/components/sections/CategoryProductGrid";

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

    return (
        <main className="bg-background min-h-screen">

            {/* ── HERO ─────────────────────────────────────────── */}
            <section
                className={`relative overflow-hidden py-28 bg-gradient-to-br ${cat.gradient} border-b border-border/40`}
            >
                {/* decorative blobs */}
                <div
                    className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-40 pointer-events-none"
                    style={{ background: `hsl(${cat.accentHsl})` }}
                />
                <div
                    className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none"
                    style={{ background: `hsl(${cat.accentHsl})` }}
                />

                <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                        <Link
                            href="/#products"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft size={12} /> Back to Home
                        </Link>
                        <p
                            className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4"
                            style={{ color: `hsl(${cat.accentHsl})` }}
                        >
                            Product Category
                        </p>
                        <h1 className="text-foreground tracking-tighter mb-4">
                            {cat.name}
                        </h1>
                        <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8">
                            {cat.description}
                        </p>
                        <span
                            className="inline-block text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border"
                            style={{
                                color: `hsl(${cat.accentHsl})`,
                                borderColor: `hsl(${cat.accentHsl} / 0.4)`,
                                background: `hsl(${cat.accentHsl} / 0.08)`,
                            }}
                        >
                            {cat.products.length} Products Available
                        </span>
                    </div>

                    {/* 3D Floating Hero Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <div
                            className="relative w-36 h-36 md:w-56 md:h-56 select-none"
                            style={{ animation: "heroFloat 4s ease-in-out infinite" }}
                        >
                            {/* Glow ring */}
                            <div
                                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                                style={{ background: `hsl(${cat.accentHsl})` }}
                            />
                            {/* Icon container */}
                            <div
                                className="relative w-full h-full rounded-full flex items-center justify-center border-2"
                                style={{
                                    background: `hsl(${cat.accentHsl} / 0.12)`,
                                    borderColor: `hsl(${cat.accentHsl} / 0.3)`,
                                    boxShadow: `0 30px 80px -10px hsl(${cat.accentHsl} / 0.35), inset 0 1px 0 rgba(255,255,255,0.6)`,
                                    transform: "perspective(600px) rotateY(-10deg) rotateX(5deg)",
                                }}
                            >
                                <div
                                    className="w-24 h-24 md:w-36 md:h-36 drop-shadow-2xl"
                                    style={{ animation: "heroSpin 8s ease-in-out infinite" }}
                                >
                                    <img src={cat.categoryImage} alt={cat.name} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* keyframes */}
                <style>{`
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-16px); }
          }
          @keyframes heroSpin {
            0%, 100% { transform: rotateY(0deg) scale(1); }
            25%       { transform: rotateY(15deg) scale(1.05); }
            75%       { transform: rotateY(-15deg) scale(1.05); }
          }
        `}</style>
            </section>

            {/* ── PRODUCT GRID (client component for interactivity) ── */}
            <CategoryProductGrid cat={cat} />

        </main>
    );
}
