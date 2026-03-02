"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

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
                className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full mix-blend-difference pointer-events-none z-[100] scale-0 opacity-0 hidden md:block"
            />

            <div className="container-custom max-w-4xl relative z-10">
                <div className="reveal-section text-center space-y-8">
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                        Who We Are
                    </p>
                    <h2 className="text-foreground font-light leading-tight tracking-tighter mx-auto max-w-3xl">
                        <span className="font-bold">Maaisa Traders India Pvt. Ltd.</span> is a trusted distributor based in Pune, dedicated to supplying high-quality appliances efficiently and on time.
                    </h2>
                </div>
            </div>
        </section>
    );
}
