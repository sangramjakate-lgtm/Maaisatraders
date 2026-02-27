"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Code2, Compass, Layers } from "lucide-react";

export default function About() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".anim-heading", { y: -30, opacity: 0, duration: 1, ease: "power4.out" });
        gsap.from(".anim-content", { y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 });
    }, { scope: container });

    return (
        <section ref={container} className="py-24 container-custom relative min-h-[80vh] flex flex-col justify-center">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="text-center mb-16 space-y-4 anim-heading">
                <h1 className="gradient-text inline-block">About Us</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We craft digital experiences combining art and technology.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 anim-content text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Our mission is to empower developers with state-of-the-art UI architectures and seamless GSAP animations out of the box. Building stunning interfaces shouldn't be an afterthought.
                    </p>
                    <p>
                        By leveraging <strong className="text-foreground font-semibold">shadcn/ui</strong> as a foundational accessibility layer and layering it with <strong className="text-primary font-semibold">glassmorphism principles</strong>, we create premium environments that wow users from the first paint.
                    </p>
                </div>

                <div className="space-y-6 anim-content">
                    {[
                        { icon: <Layers />, title: "Structural Integrity", text: "Robust folder hierarchy handling large Next.js routing patterns." },
                        { icon: <Code2 />, title: "Type-Safe Components", text: "Strict TypeScript enforcement for scalable properties." },
                        { icon: <Compass />, title: "Precision Navigation", text: "Intuitive pathfinding driven by lucid modern interactions." },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 glass rounded-2xl group hover:bg-white/5 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-foreground text-lg">{item.title}</h4>
                                <p className="text-muted-foreground text-sm">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
