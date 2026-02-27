"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Shield, Truck, Target, Award, CheckCircle2, Building2 } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Jiggly hero entrance
            const tl = gsap.timeline();

            tl.from(".hero-badge", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(2)",
            })
                .from(
                    ".jiggly-text",
                    {
                        y: 60,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.1,
                        ease: "elastic.out(1, 0.75)",
                        rotation: 2,
                    },
                    "-=0.6"
                )
                .from(
                    ".hero-subtitle",
                    { y: 30, opacity: 0, duration: 1, ease: "power3.out" },
                    "-=0.8"
                );

            // Scroll-triggered sections
            gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
                gsap.from(el, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.8)",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%", // More forgiving start point
                        toggleActions: "play none none reverse",
                    },
                });
            });

            // Staggered cards
            gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
                const cards = group.querySelectorAll(".stagger-card");
                if (cards.length > 0) {
                    gsap.from(cards, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: group,
                            start: "top 95%", // More forgiving start point
                            toggleActions: "play none none reverse",
                        },
                    });
                }
            });
        },
        { scope: container }
    );

    return (
        <div ref={container as any} className="bg-background selection:bg-primary/20 pt-20">

            {/* HERO SECTION */}
            <section className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] via-background to-background"></div>

                <div className="container-custom max-w-4xl">
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-none border-b border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-10">
                        About Our Company
                    </div>

                    <h1 className="text-foreground mb-8">
                        <span className="jiggly-text block transform-origin-center">
                            A Legacy Of
                        </span>
                        <span className="jiggly-text block text-primary mt-1 transform-origin-center">
                            Distribution Excellence.
                        </span>
                    </h1>

                    <p className="hero-subtitle text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Maaisa Traders India Pvt. Ltd. is a premier distributor based in Pune,
                        committed to delivering top-tier home appliances with uncompromising efficiency.
                    </p>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="section-padding bg-white border-y border-border/50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="reveal-section space-y-6">
                            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Our Mission</p>
                            <h2 className="text-foreground tracking-tighter leading-tight font-light">
                                Bridging the gap between <span className="font-bold">premium brands</span> and <span className="font-bold">consumers.</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed pt-4">
                                <p>
                                    Founded in 2019, our core mission has always been to streamline the supply chain for high-quality electronics and home appliances. We pride ourselves on maintaining an agile inventory and ensuring timely deliveries to all our partners in the retail sector.
                                </p>
                                <p>
                                    As an authorized distributor for leading brands like Havells, we uphold stringent quality standards, ensuring that every product that leaves our warehouse meets the expectations of the end consumer.
                                </p>
                            </div>
                        </div>

                        <div className="stagger-group grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <Target size={24} />, title: "Precision", text: "Accurate order fulfillment" },
                                { icon: <Truck size={24} />, title: "Logistics", text: "Rapid statewide delivery" },
                                { icon: <Shield size={24} />, title: "Authenticity", text: "100% genuine products" },
                                { icon: <Award size={24} />, title: "Excellence", text: "Award-winning service" }
                            ].map((item, i) => (
                                <div key={i} className="stagger-card bg-muted/20 border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300">
                                    <div className="text-primary mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="reveal-section text-center mb-16">
                        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="text-foreground tracking-tighter">Our Core Strengths</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 stagger-group max-w-5xl mx-auto">
                        {[
                            {
                                title: "Vast Network",
                                desc: "An extensive retail network across Maharashtra ensuring maximum market penetration for our partnered brands."
                            },
                            {
                                title: "Inventory Management",
                                desc: "State-of-the-art warehousing facilities that ensure optimal stock levels and immediate dispatch capabilities."
                            },
                            {
                                title: "Client Centric",
                                desc: "Dedicated support teams providing prompt resolution to queries, fostering long-term B2B relationships."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="stagger-card group flex flex-col items-center text-center p-8 bg-white border border-border/50 hover:shadow-xl hover:border-primary transition-all duration-500">
                                <CheckCircle2 className="text-border group-hover:text-primary transition-colors duration-300 mb-6 w-12 h-12" strokeWidth={1.5} />
                                <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wider">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="section-padding bg-muted/30 border-t border-border/50 pb-32">
                <div className="container-custom max-w-3xl text-center">
                    <div className="reveal-section">
                        <Building2 className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" strokeWidth={1} />
                        <h2 className="text-foreground tracking-tighter mb-6">Leadership</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Guided by the vision of our Directors: <br />
                            <strong className="text-foreground font-semibold">Chaitali Dhale, Sangram Jakate, and Nasir Patil</strong>.
                        </p>
                        <div className="inline-block border border-border bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground shadow-sm">
                            Est. 2019
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
