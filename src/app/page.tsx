"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Mail,
  Send,
  Building2,
  FileText,
  BadgeCheck,
  Shield,
  Calendar,
  Users,
  Phone
} from "lucide-react";

import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { BrandSlider } from "@/components/sections/BrandSlider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Jiggly / Elastic Hero Entrance
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
            rotation: 2
          },
          "-=0.6"
        )
        .from(
          ".hero-subtitle",
          { y: 30, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.6"
        );

      // Scroll-triggered sections with jiggly/smooth reveals
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Staggered image/product cards
      gsap.utils
        .toArray<HTMLElement>(".stagger-group")
        .forEach((group) => {
          const cards = group.querySelectorAll(".stagger-card");
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });

      // End of global animations
    },
    { scope: pageRef }
  );

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    const subject = "Website Inquiry: " + (name ? name : "New Contact");
    const mailtoBody = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    // Open default mail client
    window.location.href = `mailto:info@maaisagroup.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
  };

  const distributedProducts = [
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577534893/WX/TD/FW/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-2-500x500.jpeg", title: "Havells Opus 8 Blade Ceiling Fan", link: "https://www.indiamart.com/proddetail/havells-opus-8-blade-ceiling-fan-2858611809533.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577536669/OQ/GL/CN/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-1-500x500.jpeg", title: "White Remote Control Ceiling Fan", link: "https://www.indiamart.com/proddetail/white-remote-control-ceiling-fan-2858611856491.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577525356/SS/ZR/NR/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-1-jpeg-500x500.jpeg", title: "Led Lights Luxury Ceiling Fan", link: "https://www.indiamart.com/proddetail/led-lights-luxury-ceiling-fan-2858611401188.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577539635/ZY/NV/WS/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-1-500x500.jpeg", title: "Led Light Ceiling Fan", link: "https://www.indiamart.com/proddetail/led-light-ceiling-fan-2858611921773.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577541187/EN/LT/TU/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-2-500x500.jpeg", title: "Usha Hunter Luxury Ceiling Fan", link: "https://www.indiamart.com/proddetail/usha-hunter-luxury-ceiling-fan-2858611951055.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577527120/IE/US/NB/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-3-jpeg-500x500.jpeg", title: "Havells Water Geyser", link: "https://www.indiamart.com/proddetail/havells-water-geyser-2858611493812.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577533832/FQ/QV/SL/247573501/electric-storage-water-heater-500x500.jpeg", title: "Havells Electric Storage Water Heater", link: "https://www.indiamart.com/proddetail/havells-electric-storage-water-heater-2858611721873.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577528732/UO/ZT/VY/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg", title: "Premium Ro Water Purifier", link: "https://www.indiamart.com/proddetail/premium-ro-water-purifier-2858611546255.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577529649/HT/OD/FA/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg", title: "Havells Water Purifier", link: "https://www.indiamart.com/proddetail/havells-water-purifier-2858611586948.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577538710/TU/SN/HS/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-500x500.jpeg", title: "Ceiling Fan Blade Set", link: "https://www.indiamart.com/proddetail/ceiling-fan-blade-set-2858611894597.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514994/RW/TH/GO/247573501/1000055176-500x500.jpg", title: "Havells Bldc Ceiling Fans", link: "#" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577543809/VN/CW/DG/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-500x500.jpeg", title: "Havells Underlight Ceiling Fan", link: "https://www.indiamart.com/proddetail/havells-underlight-ceiling-fan-2858611994662.html" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517088/YI/PO/YX/247573501/1000055184-500x500.jpg", title: "Royal Luxury Ceiling fan", link: "#" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514939/DL/HC/LS/247573501/1000055174-500x500.jpg", title: "Havells Bldc Fan", link: "#" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584516059/KZ/HH/IZ/247573501/1000055179-500x500.jpg", title: "Havells Opus Ceiling Fan", link: "#" },
  ];

  return (
    <div ref={pageRef} className="bg-background selection:bg-primary/20">

      {/* ═══════════════════════════════════════════════
          MINIMALIST HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden pt-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] via-background to-background"></div>

        <div className="container-custom max-w-4xl">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-none border-b border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-10">
            MAAISA Traders India Pvt. Ltd.
          </div>

          <h1 className="text-foreground mb-8">
            <span className="jiggly-text block text-primary transform-origin-center">
              Authorized Dealers.
            </span>
            <span className="jiggly-text block mt-1 transform-origin-center">
              Electrical Experts.
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
            Premier authorized dealers and distributors specializing in <span className="text-foreground font-semibold">electricals</span> and comprehensive <span className="text-foreground font-semibold">electric work</span> across Maharashtra.
          </p>

          <div className="hero-cta flex justify-center">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-none text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 group"
            >
              Explore Catalog
              {/* <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              /> */}
            </a>
          </div>
        </div>
      </section>

      <WhoWeAre />

      <BrandSlider />

      {/* ═══════════════════════════════════════════════
          MINIMALIST CATALOG GRID (Provided Products)
      ═══════════════════════════════════════════════ */}
      <section id="catalog" className="section-padding bg-muted/20 border-t border-border/50">
        <div className="container-custom">

          <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Our Catalog
              </p>
              <h2 className="text-foreground tracking-tighter">
                Featured Products
              </h2>
            </div>
            <Link href="/product" className="text-sm font-semibold text-primary hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 stagger-group pb-10">
            {distributedProducts.map((product, i) => (
              <a
                key={i}
                href={product.link !== "#" ? product.link : undefined}
                target={product.link !== "#" ? "_blank" : undefined}
                rel="noreferrer"
                className="stagger-card group flex flex-col cursor-pointer"
              >
                <div className="relative aspect-square mb-4 bg-white border border-border/50 p-4 transition-all duration-500 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                    unoptimized // Since these are external generic HTTPs sources
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPANY PROFILE SECTION
      ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-muted/30 border-y border-border/50 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="reveal-section mb-14 text-center">
            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Statutory Profile
            </p>
            <h2 className="text-foreground tracking-tighter">Company Details</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
              A transparent look into our operational structure, statutory details, and the leadership driving our vision forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-group">
            {/* Bento Block 1: Massive Main Block */}
            <div className="stagger-card group relative bg-white border border-border/60 hover:border-primary/50 p-8 md:p-10 transition-all duration-500 hover:shadow-xl overflow-hidden flex flex-col items-start md:col-span-2">
              <div className="absolute right-0 bottom-0 p-32 bg-primary/5 rounded-tl-full group-hover:scale-110 transition-transform duration-700 ease-in-out pointer-events-none"></div>

              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500 z-10">
                <Building2 className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 z-10">
                Nature of Business
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-foreground leading-tight mb-4 z-10">
                <span className="font-bold text-primary">Authorized</span> Premium Distributor & Service Provider
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg z-10 leading-relaxed">
                We handle comprehensive electrical distribution, supply chains, and specialized electrical work contracts to commercial specifications.
              </p>
            </div>

            {/* Bento Block 2: Tall Vertical */}
            <div className="stagger-card group relative bg-foreground border border-foreground p-8 md:p-10 transition-all duration-500 hover:shadow-xl overflow-hidden flex flex-col items-start text-background h-full">
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/5 rounded-full group-hover:scale-[2] transition-transform duration-700 ease-in-out pointer-events-none"></div>

              <div className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-colors duration-500 z-10">
                <FileText className="w-5 h-5" strokeWidth={1.5} />
              </div>

              <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 z-10">
                Corporate Identity
              </p>
              <h3 className="text-lg font-semibold text-white leading-tight mb-3 z-10 break-all">
                U51909PN2014PTC<br />181608
              </h3>
              <p className="text-xs text-white/50 mt-auto pt-4 border-t border-white/10 w-full z-10">
                Official CIN Registration
              </p>
            </div>

            {/* Bento Block 3 */}
            <div className="stagger-card group relative bg-white border border-border/60 hover:border-primary/50 p-8 transition-all duration-500 hover:shadow-lg overflow-hidden flex flex-col items-start h-full">
              <div className="w-12 h-12 rounded-none bg-muted/50 text-primary flex items-center justify-center mb-6 border border-border/50 group-hover:bg-primary group-hover:text-white transition-colors duration-500 z-10">
                <Users className="w-5 h-5" strokeWidth={1.5} />
              </div>

              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 z-10">Leadership</p>
              <h3 className="text-base font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-300 z-10">
                Sangram Jakate & Nasir Ustaad
              </h3>
              <p className="text-[11px] text-muted-foreground/80 mt-auto pt-4 border-t border-border/40 w-full z-10 uppercase tracking-wider font-semibold">
                Board of Directors
              </p>
            </div>

            {/* Bento Block 4 */}
            <div className="stagger-card group relative bg-white border border-border/60 hover:border-primary/50 p-8 transition-all duration-500 hover:shadow-lg overflow-hidden flex flex-col items-start h-full md:col-span-2">
              <div className="w-12 h-12 rounded-none bg-muted/50 text-primary flex items-center justify-center mb-6 border border-border/50 group-hover:bg-primary group-hover:text-white transition-colors duration-500 z-10">
                <BadgeCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>

              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 z-10">Sales & Marketing</p>
              <h3 className="text-base font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-300 z-10">
                Suresh S B & Chaitali Dhale
              </h3>
              <p className="text-[11px] text-muted-foreground/80 mt-auto pt-4 border-t border-border/40 w-full z-10 uppercase tracking-wider font-semibold">
                Department Heads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT / REACH US SECTION
      ═══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="section-padding bg-background"
      >
        <div className="container-custom">

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="reveal-section space-y-10">
              <div>
                <h2 className="text-foreground tracking-tighter mb-4">Reach Us.</h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Whether you're looking for wholesale distribution or project supply, we are here to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Corporate Office
                    </p>
                    <p className="text-sm font-medium text-foreground leading-relaxed">
                      3rd Floor, Office No 301 & 302, 41 Elite, Kalewadi Main
                      Road, Tathawade, Ashok Nagar, Dattwadi, Pimpri Chinchwad,
                      Pune – 411033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Email Inquiries
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      info@maaisagroup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a href="tel:+919890200222" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      +91 98902 00222
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal-section">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="border-b border-border focus-within:border-primary transition-colors">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full py-3 bg-transparent text-sm font-medium focus:outline-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="border-b border-border focus-within:border-primary transition-colors">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full py-3 bg-transparent text-sm font-medium focus:outline-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="border-b border-border focus-within:border-primary transition-colors">
                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    rows={1}
                    className="w-full pt-3 pb-8 bg-transparent text-sm font-medium focus:outline-none resize-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-none text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 w-full md:w-auto"
                >
                  Send Inquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
