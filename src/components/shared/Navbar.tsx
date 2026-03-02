"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const routes = [
        { href: "/", label: "Home" },
        { href: "/product", label: "Products & Services" },
        { href: "/about", label: "About Us" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
            <div className="container-custom h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png"
                        alt="Maaisa Traders India Pvt. LTD. Logo"
                        width={120}
                        height={40}
                        className="h-8 md:h-9 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-[13px] uppercase tracking-wider font-semibold transition-colors hover:text-primary",
                                pathname === route.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+919890200222"
                        className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone size={14} className="mt-0.5" />
                        +91 98902 00222
                    </a>

                    <a
                        href="#contact"
                        className="hidden md:inline-flex px-6 py-2 bg-foreground text-background rounded-none text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors"
                    >
                        Contact
                    </a>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-border/40 px-6 py-4 space-y-3">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                                "block text-sm font-medium py-2 transition-colors",
                                pathname === route.href
                                    ? "text-primary font-semibold"
                                    : "text-muted-foreground"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}

                    <a
                        href="tel:+919890200222"
                        className="flex items-center gap-3 text-sm font-medium py-3 text-muted-foreground hover:text-primary transition-colors border-t border-border/40 mt-2 pt-4"
                    >
                        <Phone size={16} />
                        +91 98902 00222
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium mt-4"
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
}
