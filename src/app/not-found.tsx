import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
            <div className="max-w-xl w-full text-center">
                <h1 className="text-[clamp(4rem,20vw,12rem)] font-black text-primary/10 leading-none select-none">
                    404
                </h1>
                <div className="relative -mt-12 md:-mt-24">
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-12 max-w-md mx-auto leading-relaxed">
                        The page you're looking for might have been moved or deleted.
                        Explore our categories below to find what you're looking for.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                        {["Fans", "Cables & Wires", "Switches", "Lighting", "Air Conditioners"].map((cat) => (
                            <Link
                                key={cat}
                                href={`/category/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="px-4 py-3 bg-muted/50 border border-border text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all text-center"
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors w-full sm:w-auto justify-center"
                        >
                            <Home size={14} />
                            Return Home
                        </Link>
                        <Link
                            href="/product"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-[10px] font-bold uppercase tracking-widest hover:bg-muted transition-colors w-full sm:w-auto justify-center"
                        >
                            <ArrowLeft size={14} />
                            View Catalog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
