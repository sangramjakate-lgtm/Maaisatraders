import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-center px-4 pt-20">
            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.05] via-background to-background"></div>

            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 shadow-sm">
                <AlertTriangle size={36} strokeWidth={1.5} />
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-foreground mb-4 tracking-tighter">
                <span className="font-bold text-primary">404</span> Not Found
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed font-medium">
                The page you are looking for doesn't exist or has been moved. Let's get you back to browsing premium electricals.
            </p>

            <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-none text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 group"
            >
                Return Home
                <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                />
            </Link>
        </div>
    );
}
