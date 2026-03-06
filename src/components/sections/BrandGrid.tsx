"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const brands = [
    { name: "Usha", url: "https://images.seeklogo.com/logo-png/34/2/usha-logo-png_seeklogo-347449.png" },
    { name: "Havells", url: "https://www.logo.wine/a/logo/Havells/Havells-Logo.wine.svg" },
    { name: "Polycab", url: "https://www.wirecable.in/wp-content/uploads/2023/09/polycab-logo.jpg" },
    { name: "Wipro", url: "https://companieslogo.com/img/orig/WIT-1453b096.png" },
    { name: "Legrand", url: "https://1000logos.net/wp-content/uploads/2020/08/Legrand-Logo.png" },
    { name: "Crompton", url: "https://vectorseek.com/wp-content/uploads/2023/10/Crompton-Logo-Vector.svg-.png" },
    { name: "Apar", url: "https://companieslogo.com/img/orig/APARINDS.NS_BIG-0ae30472.png?t=1720244490" },
    { name: "Schneider", url: "https://www.logo.wine/a/logo/Schneider_Electric/Schneider_Electric-Logo.wine.svg" },
    { name: "Atomberg", url: "https://brandlogos.net/wp-content/uploads/2023/10/atomberg-logo_brandlogos.net_3z2cw.png" }
];

export function BrandGrid() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".brand-grid-item", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".brand-grid-container",
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    }, { scope: container });

    return (
        <section ref={container} className="pt-28 pb-16 bg-white border-b border-border/40 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

            <div className="container-custom brand-grid-container relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 mb-6 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                        Industry Partners
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-foreground mb-6 leading-tight">
                        <span className="font-bold text-primary">Authorized</span> Distributors & <br className="hidden md:block" /> Associated Brands
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        We partner with top-tier global manufacturers to deliver uncompromising quality, durable electrics, and cutting-edge innovations directly to your infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {brands.map((brand, i) => (
                        <div
                            key={i}
                            className="brand-grid-item group relative aspect-[4/3] bg-muted/10 border border-border/50 flex items-center justify-center p-6 overflow-hidden hover:border-primary/50 transition-colors duration-500 rounded-sm shadow-sm hover:shadow-md"
                        >
                            {/* Hover effect glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <Image
                                src={brand.url}
                                alt={brand.name}
                                fill
                                className="object-contain p-8 md:p-10 filter hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
