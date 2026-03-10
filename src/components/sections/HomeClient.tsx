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
import { ProductCategories } from "@/components/sections/ProductCategories";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeClient() {
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
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.8)",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Staggered image/product cards
      gsap.utils
        .toArray<HTMLElement>(".stagger-group")
        .forEach((group) => {
          const cards = group.querySelectorAll(".stagger-card");
          if (cards.length > 0) {
            gsap.fromTo(cards,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.4)",
                scrollTrigger: {
                  trigger: group,
                  start: "top 95%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

      // Ensure ScrollTrigger refreshes accurately after component paint
      const stTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(stTimeout);
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
    window.location.href = `mailto:info@maaisatraders.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
  };

  const featuredProducts = [
    { image: "/images/products/opus-8.png", title: "Havells Opus 8 Blade Ceiling Fan" },
    { image: "/images/products/single-core-wire.png", title: "Multi Strand Flexible Wire" },
    { image: "/images/products/smart-touch.jpg", title: "Smart Touch Panel" },
    { image: "/images/products/round-panel.jpg", title: "Havells Round LED Panel" },
    { image: "/images/products/inverter-ac-2.jpg", title: "2 Ton Inverter Split AC" },
    { image: "/images/products/mcb-single.jpg", title: "Havells MCB Single Pole" },
    { image: "/images/products/armoured-cable.png", title: "Armoured Control Cable" },
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Maaisa Traders India Pvt. Ltd.",
    "image": "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png",
    "@id": "https://maaisatraders.com",
    "url": "https://maaisatraders.com",
    "telephone": "+91-9890200222",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Office No 301 & 302, 41 Elite, Kalewadi Main Road, Tathawade",
      "addressLocality": "Pune",
      "postalCode": "411033",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.6186,
      "longitude": 73.7516
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <div ref={pageRef} className="bg-background selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

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
            <span className="jiggly-text block text-primary transform-origin-center text-[clamp(2rem,8vw,4.5rem)] leading-[0.9] md:leading-[1.1]">
              Authorized Distributors.
            </span>
            <span className="jiggly-text block mt-2 transform-origin-center text-[clamp(1.75rem,7vw,4.5rem)] leading-[1]">
              Electrical Experts.
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
            Premier authorized distributors specializing in <span className="text-foreground font-semibold">electricals</span> and comprehensive <span className="text-foreground font-semibold">electric work</span> across Maharashtra.
          </p>

          <div className="hero-cta flex justify-center">
            <a
              href="#catalog"
              aria-label="Explore our full product catalog"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-none text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 group"
            >
              Explore Catalog
            </a>
          </div>
        </div>
      </section>

      <BrandSlider />

      <WhoWeAre />

      <div id="products">
        <ProductCategories />
      </div>

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
            {featuredProducts.map((product, i) => (
              <div
                key={i}
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
                <h3 className="font-bold text-sm text-foreground line-clamp-2 md:text-base group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </div>
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
                Sangram Jakate & Nasir Patil
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

              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 z-10">Department Heads</p>
              <h3 className="text-base font-bold text-foreground leading-tight mb-2 transition-colors duration-300 z-10 flex flex-col gap-1 mt-2">
                <span className="group-hover:text-primary transition-colors">Suresh S B <span className="text-xs text-muted-foreground font-normal">(Head of Sales & Marketing)</span></span>
                <span className="group-hover:text-primary transition-colors">Chaitali Dhale <span className="text-xs text-muted-foreground font-normal">(Administration Head)</span></span>
              </h3>
              <p className="text-[11px] text-muted-foreground/80 mt-auto pt-3 border-t border-border/40 w-full z-10 uppercase tracking-wider font-semibold">
                Core Operations
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
                      info@maaisatraders.com
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
