import Image from "next/image";

const brands = [
    { name: "Usha", url: "https://images.seeklogo.com/logo-png/34/2/usha-logo-png_seeklogo-347449.png" },
    { name: "Havells", url: "https://www.logo.wine/a/logo/Havells/Havells-Logo.wine.svg" },
    { name: "Polycab", url: "https://www.wirecable.in/wp-content/uploads/2023/09/polycab-logo.jpg" },
    { name: "Brand4", url: "https://p7.hiclipart.com/preview/40/38/430/5bfa9b3d70512.jpg" },
    { name: "Legrand", url: "https://e7.pngegg.com/pngimages/317/720/png-clipart-logo-legrand-electricals-brand-graphics-general-electric-text-logo.png" },
    { name: "Crompton", url: "https://vectorseek.com/wp-content/uploads/2023/10/Crompton-Logo-Vector.svg-.png" },
    { name: "Apar", url: "https://companieslogo.com/img/orig/APARINDS.NS_BIG-0ae30472.png?t=1720244490" },
    { name: "Schneider", url: "https://www.logo.wine/a/logo/Schneider_Electric/Schneider_Electric-Logo.wine.svg" }
];

export function BrandSlider() {
    return (
        <section className="py-16 bg-background border-t border-border/50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-10">
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                        Our Partners
                    </p>
                    <h2 className="text-foreground tracking-tighter text-2xl md:text-3xl">
                        Authorized Distributor For
                    </h2>
                </div>
            </div>

            {/* Slider container */}
            <div className="relative w-full overflow-hidden flex pt-4 pb-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-marquee gap-12 md:gap-24 items-center px-6">
                    {/* First Map */}
                    {brands.map((brand, idx) => (
                        <div key={`brand-1-${idx}`} className="flex-shrink-0 w-40 md:w-56 h-28 md:h-32 relative transition-transform duration-300 hover:scale-105">
                            <Image
                                src={brand.url}
                                alt={`${brand.name} Logo`}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                    {/* Second Map (Duplicate for infinite seamless scrolling) */}
                    {brands.map((brand, idx) => (
                        <div key={`brand-2-${idx}`} className="flex-shrink-0 w-40 md:w-56 h-28 md:h-32 relative transition-transform duration-300 hover:scale-105">
                            <Image
                                src={brand.url}
                                alt={`${brand.name} Logo`}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
