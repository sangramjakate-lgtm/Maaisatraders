"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Shield, Truck, Target, Award, CheckCircle2, Building2, Quote, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const container = useRef<HTMLElement>(null);
    const [hoveredBox, setHoveredBox] = useState<"mission" | "stats" | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            // Sharp, energetic hero entrance
            tl.from(".hero-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1.2,
                ease: "expo.inOut"
            })
                .from(".hero-badge", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(2)"
                }, "-=0.6")
                .from(".clip-text-reveal", {
                    y: 60,
                    clipPath: "inset(100% 0 0 0)",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out"
                }, "-=0.4")
                .from(".hero-subtitle", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6");

            // Cinematic Image Mask Reveal
            gsap.to(".mask-reveal-image", {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".mask-reveal-section",
                    start: "top 85%",
                    end: "bottom 35%",
                    scrub: 1, // Smooth, slow scrub
                }
            });

            // Parallax element helper
            gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((elem) => {
                const speed = parseFloat(elem.getAttribute("data-parallax") || "0.1");
                gsap.to(elem, {
                    y: () => `${-100 * speed}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            });

            // Snappy scroll-triggered sections
            gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
                gsap.fromTo(el,
                    { y: 30, opacity: 0, scale: 0.98 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Fast, punchy staggered cards
            gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
                const cards = group.querySelectorAll(".stagger-card");
                if (cards.length > 0) {
                    gsap.fromTo(cards,
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.1,
                            ease: "back.out(1.5)",
                            scrollTrigger: {
                                trigger: group,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }
            });

            const stTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);

            return () => clearTimeout(stTimeout);
        },
        { scope: container }
    );

    return (
        <div ref={container as any} className="bg-background selection:bg-primary/20 pt-16 md:pt-20 pb-0 overflow-hidden">

            {/* ── HERO SECTION ── */}
            <section className="relative pt-10 md:pt-16 pb-12 md:pb-20 flex flex-col items-center justify-center text-center">
                {/* Structural Background Lines */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[1px] bg-border/40 hero-line" />
                    <div className="absolute right-[5%] md:right-[10%] top-0 bottom-0 w-[1px] bg-border/40 hero-line" />
                    <div className="absolute left-0 right-0 top-[20%] h-[1px] bg-border/40 hero-line" />

                    {/* Glowing Ambient Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px]" />
                </div>

                <div className="container-custom max-w-4xl relative z-10 px-4">
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-border/50 bg-background/50 backdrop-blur-sm text-primary text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black mb-6 md:mb-10 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                        About Our Company
                    </div>

                    <h1 className="text-foreground tracking-tighter mb-4 md:mb-6 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1]">
                        <span className="block overflow-hidden pb-1 md:pb-2">
                            <span className="clip-text-reveal block">A Legacy Of</span>
                        </span>
                        <span className="block overflow-hidden text-primary">
                            <span className="clip-text-reveal block">Authorized</span>
                        </span>
                        <span className="block overflow-hidden pb-2 md:pb-4 text-primary">
                            <span className="clip-text-reveal block">Distribution.</span>
                        </span>
                    </h1>

                    <p className="hero-subtitle text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-4 md:pl-6 text-left">
                        Maaisa Traders India Pvt. Ltd. is a premier <strong className="text-foreground">Authorized Distributor</strong> based in Pune,
                        specializing in top-tier <strong className="text-foreground">electricals</strong> and comprehensive <strong className="text-foreground">electric work</strong> with uncompromising efficiency.
                    </p>
                </div>
            </section>

            {/* ── CINEMATIC IMAGE MASK REVEAL ── */}
            <section className="mask-reveal-section py-8 md:py-16 bg-background relative z-20">
                <div className="container-custom max-w-5xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-foreground reveal-section leading-[1.1]">
                            Powering <br className="hidden md:block" />Infrastructure.
                        </h2>
                        <p className="text-muted-foreground max-w-sm text-xs md:text-sm border-l-2 border-primary/40 pl-4 py-1 reveal-section">
                            We don't just move boxes. We engineer supply chains that build cities, power industries, and light homes.
                        </p>
                    </div>

                    <div className="w-full h-[30vh] sm:h-[40vh] md:h-[55vh] relative overflow-hidden bg-muted/20 border border-border">
                        <div
                            className="mask-reveal-image absolute inset-0 w-full h-full"
                            style={{
                                clipPath: "inset(25% 5% 25% 5%)",
                                scale: 1.05,
                                backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=3540&auto=format&fit=crop')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "grayscale(20%) contrast(110%)"
                            }}
                        >
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION & STRATEGY (Asymmetrical Bento) ── */}
            <section className="py-12 md:py-20 bg-muted/20 border-y border-border/50 relative">
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("/images/noise.png")' }} />

                <div className="container-custom max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 group/swap">

                        {/* Huge Mission Block */}
                        <div
                            onMouseEnter={() => setHoveredBox('mission')}
                            onMouseLeave={() => setHoveredBox(null)}
                            className={`reveal-section md:col-span-8 bg-white border border-border/50 p-6 md:p-10 shadow-sm relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left z-10
                                ${hoveredBox === 'stats' ? 'md:scale-[0.95] md:-translate-x-4 md:opacity-40 md:blur-[2px]' : ''}
                                ${hoveredBox === 'mission' ? 'md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] md:scale-[1.02] z-20' : ''}
                            `}
                        >
                            <div data-parallax="0.2" className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-colors duration-700 pointer-events-none" />
                            <p className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
                                <span className="w-6 md:w-8 h-[1px] bg-primary" /> Our Mission
                            </p>
                            <h2 className="text-foreground tracking-tighter leading-[1.1] font-black text-xl sm:text-2xl md:text-4xl mb-4 md:mb-6">
                                Elevating infrastructure through <span className="text-primary">premium electricals</span>.
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-xs md:text-sm max-w-2xl">
                                Founded in 2014, our core mission has always been to streamline the supply chain for high-quality electronics. We pride ourselves on maintaining an agile inventory and ensuring timely deliveries to all our partners in the retail and contracting sectors.
                            </p>
                        </div>

                        {/* Stats / Quick Facts */}
                        <div
                            onMouseEnter={() => setHoveredBox('stats')}
                            onMouseLeave={() => setHoveredBox(null)}
                            className={`reveal-section md:col-span-4 bg-primary text-primary-foreground p-6 md:p-8 flex flex-col justify-center relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-right z-10
                                ${hoveredBox === 'stats' ? 'md:-translate-x-[40%] md:scale-[1.15] md:shadow-[0_40px_100px_-20px_rgba(0,100,50,0.5)] z-30' : ''}
                                ${hoveredBox === 'mission' ? 'md:scale-[0.95] md:translate-x-4 md:opacity-40' : ''}
                            `}
                        >
                            <div data-parallax="-0.15" className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] mix-blend-overlay" />
                            <div className="relative z-10">
                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 md:mb-3 opacity-80">Established</p>
                                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-4 md:mb-6">2014</div>

                                <div className="w-full h-[1px] bg-white/20 mb-4 md:mb-6" />

                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 md:mb-3 opacity-80">Headquarters</p>
                                <div className="text-lg md:text-xl font-bold tracking-tight">Pune, India</div>
                            </div>
                        </div>

                        {/* Four Pillars / Stagger Group */}
                        <div className="md:col-span-12 stagger-group grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-1 md:mt-2">
                            {[
                                { icon: <Target className="w-4 h-4 md:w-5 md:h-5" />, title: "Precision", text: "Accurate fulfillment" },
                                { icon: <Truck className="w-4 h-4 md:w-5 md:h-5" />, title: "Logistics", text: "Rapid delivery" },
                                { icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />, title: "Authenticity", text: "Genuine products" },
                                { icon: <Award className="w-4 h-4 md:w-5 md:h-5" />, title: "Excellence", text: "Award-winning service" }
                            ].map((item, i) => (
                                <div key={i} className="stagger-card group bg-white border border-border/50 p-4 md:p-6 hover:border-primary transition-all duration-300 hover:shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                                    <div className="text-primary/50 group-hover:text-primary transition-colors duration-300 mb-3 md:mb-4 bg-primary/5 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-none">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-black text-foreground mb-1 md:mb-2 text-sm md:text-base uppercase tracking-wider">{item.title}</h4>
                                    <p className="text-[10px] md:text-[11px] text-muted-foreground font-medium uppercase tracking-wide">{item.text}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CORE STRENGTHS (Hover Glow Cards) ── */}
            <section className="py-16 md:py-24 bg-background relative border-b border-border/50">
                <div className="container-custom">
                    <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-12 max-w-5xl mx-auto">
                        <div>
                            <p className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                                Why Choose Us <span className="w-6 md:w-8 h-[1px] bg-primary" />
                            </p>
                            <h2 className="text-foreground tracking-tighter text-3xl md:text-4xl lg:text-5xl font-black">Our Core Strengths</h2>
                        </div>
                        <p className="text-muted-foreground max-w-sm text-xs md:text-sm border-l border-border/50 pl-4 md:pl-5 py-1">
                            We leverage industry expertise and massive infrastructure to deliver unparalleled reliability to our partners.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 stagger-group max-w-5xl mx-auto">
                        {[
                            {
                                title: "Vast Network",
                                desc: "An extensive retail network across Maharashtra ensuring maximum market penetration for our partnered brands.",
                                colorHsl: "210, 100%, 50%" // Blue accent
                            },
                            {
                                title: "Agile Inventory",
                                desc: "State-of-the-art warehousing facilities that ensure optimal stock levels and immediate dispatch capabilities.",
                                colorHsl: "250, 100%, 65%" // Purple accent
                            },
                            {
                                title: "Client Centric",
                                desc: "Dedicated B2B support teams providing prompt resolution to queries, fostering long-term relationships.",
                                colorHsl: "150, 100%, 40%" // Green accent
                            }
                        ].map((feature, i) => (
                            <div key={i} className="stagger-card group relative flex flex-col items-start text-left p-6 md:p-8 bg-white border border-border/50 overflow-hidden transition-all duration-500 hover:bg-primary hover:border-transparent hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,100,50,0.3)]">
                                <div className="relative z-10 w-full transition-colors duration-500">
                                    <div className="flex justify-between items-start mb-6 md:mb-8">
                                        <div className="w-10 h-10 md:w-12 md:h-12 border border-border group-hover:border-white/30 flex items-center justify-center bg-background group-hover:bg-white/10 transition-colors duration-500">
                                            <CheckCircle2 className="text-muted-foreground group-hover:text-white transition-colors duration-500 w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                                        </div>
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 group-hover:text-white/70 transition-colors duration-500">0{i + 1}</span>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-black text-foreground mb-2 md:mb-3 uppercase tracking-tight leading-none group-hover:text-white transition-colors duration-500">{feature.title}</h3>
                                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LEADERSHIP (Editorial Layout) ── */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/20 border-l border-border/40 hidden lg:block pointer-events-none" />

                <div className="container-custom max-w-5xl">
                    <div className="reveal-section flex flex-col lg:flex-row gap-10 lg:gap-20 relative z-10">
                        {/* Title Block */}
                        <div className="lg:w-1/3 flex flex-col items-start lg:pt-4">
                            <Building2 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-5 md:mb-6" strokeWidth={1.5} />
                            <h2 className="text-foreground tracking-tighter font-black text-4xl md:text-5xl lg:text-5xl mb-3 md:mb-4 leading-none">
                                Leadership.
                            </h2>
                            <div className="w-8 md:w-10 h-[2px] bg-primary mb-3 md:mb-4" />
                            <p className="text-muted-foreground text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
                                The Visionaries
                            </p>
                        </div>

                        {/* Content Block */}
                        <div className="lg:w-2/3 flex flex-col justify-center relative">
                            <Quote className="w-10 h-10 md:w-14 md:h-14 text-muted-foreground/10 absolute -top-4 -left-4 md:-top-6 md:-left-6" />

                            <h3 className="text-lg md:text-xl lg:text-2xl font-light text-foreground leading-[1.4] mb-8 md:mb-10 relative z-10">
                                Guided by the strategic foresight of our Directors, <span className="font-black">Sangram Jakate</span> & <span className="font-black">Nasir Patil</span>.
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 border-t border-border/50 pt-6 md:pt-8">
                                <div>
                                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1 md:mb-2">Head of Sales & Mktg</p>
                                    <p className="text-base md:text-lg font-bold tracking-tight text-foreground">Suresh S B</p>
                                </div>
                                <div>
                                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1 md:mb-2">Administration Head</p>
                                    <p className="text-base md:text-lg font-bold tracking-tight text-foreground">Chaitali Dhale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
