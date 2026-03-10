"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export function WhoWeAre() {
    const containerRef = useRef<HTMLElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cursorRef.current || !containerRef.current) return;

        // Create highly performant GSAP quick setters
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

        // Center the circle dynamically on its coordinates
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

        const container = containerRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            // Calculate coordinates relative to the absolute top of the section
            const rect = container.getBoundingClientRect();
            xTo(e.clientX - rect.left);
            yTo(e.clientY - rect.top);
        };

        const handleMouseEnter = () => {
            gsap.to(cursorRef.current, { scale: 1, autoAlpha: 1, duration: 0.4, ease: "back.out(1.5)" });
        };

        const handleMouseLeave = () => {
            gsap.to(cursorRef.current, { scale: 0, autoAlpha: 0, duration: 0.3, ease: "power3.in" });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* CUSTOM CURSOR (Mix Blend Mode) restricted to this section */}
            <div
                ref={cursorRef}
                className="absolute left-0 top-0 w-32 h-32 bg-white rounded-full mix-blend-difference pointer-events-none z-[100] scale-0 opacity-0 hidden md:block"
            />

            <div className="container-custom max-w-4xl relative z-10">
                <div className="reveal-section text-center space-y-8">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png"
                            alt="Maaisa Traders India Pvt. LTD. Logo"
                            width={180}
                            height={60}
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                        Who We Are
                    </p>
                    <h2 className="text-foreground font-light leading-tight tracking-tighter mx-auto max-w-4xl">
                        <span className="font-bold">Maaisa Traders India Pvt. Ltd.</span> <br />
                        <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2 inline-block">
                            is an <strong className="font-semibold text-primary">Authorized Distributor</strong> based in Pune, specializing in premium <strong className="font-semibold text-primary">electricals</strong> and professional <strong className="font-semibold text-primary">electrical experts</strong> services. We are dedicated to supplying high-quality appliances and electrical solutions with maximum efficiency.
                        </span>
                    </h2>
                </div>
            </div>
        </section >
    );
}
