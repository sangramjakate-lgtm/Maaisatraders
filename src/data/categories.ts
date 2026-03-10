export interface CategoryProduct {
    title: string;
    image: string;
    link: string;
}

export interface Category {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    highlights: string[];
    icon: string;          // emoji used in the card
    accentHsl: string;     // HSL value for accent colour
    gradient: string;      // Tailwind gradient classes for card bg
    spotlightColor: string; // rgba spotlight used in JS tilt effect
    categoryImage: string; // Path to the category image
    products: CategoryProduct[];
}

export const categories: Category[] = [
    {
        slug: "fans",
        name: "Fans",
        tagline: "Stay cool, stay stylish",
        description:
            "Premium ceiling, pedestal and BLDC fans from Havells, Usha and more — engineered for energy efficiency and silent operation.",
        highlights: ["BLDC energy-saving technology", "Silent, high-speed motors", "Havells, Usha & more"],
        icon: "🌀",
        categoryImage: "/images/Celing Fan.png",
        accentHsl: "198 80% 48%",
        gradient: "from-sky-50 to-cyan-100",
        spotlightColor: "rgba(14,165,233,0.15)",
        products: [
            {
                title: "Havells Opus 8 Blade Ceiling Fan",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2026/1/577534893/WX/TD/FW/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-2-500x500.jpeg",
                link: "https://www.indiamart.com/proddetail/havells-opus-8-blade-ceiling-fan-2858611809533.html",
            },
            {
                title: "White Remote Control Ceiling Fan",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2026/1/577536669/OQ/GL/CN/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-1-500x500.jpeg",
                link: "https://www.indiamart.com/proddetail/white-remote-control-ceiling-fan-2858611856491.html",
            },
            {
                title: "Led Lights Luxury Ceiling Fan",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2026/1/577525356/SS/ZR/NR/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-1-jpeg-500x500.jpeg",
                link: "https://www.indiamart.com/proddetail/led-lights-luxury-ceiling-fan-2858611401188.html",
            },
            {
                title: "Havells BLDC Ceiling Fan",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2026/2/584514994/RW/TH/GO/247573501/1000055176-500x500.jpg",
                link: "#",
            },
            {
                title: "Havells Underlight Ceiling Fan",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2026/1/577543809/VN/CW/DG/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-500x500.jpeg",
                link: "https://www.indiamart.com/proddetail/havells-underlight-ceiling-fan-2858611994662.html",
            },
            {
                title: "Usha Hunter Luxury Ceiling Fan",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2026/1/577541187/EN/LT/TU/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-2-500x500.jpeg",
                link: "https://www.indiamart.com/proddetail/usha-hunter-luxury-ceiling-fan-2858611951055.html",
            },
        ],
    },
    {
        slug: "wires-cables",
        name: "Wire & Cables",
        tagline: "Safe connections, every time",
        description:
            "ISI certified, flame-retardant wires and industrial cables built to meet the strictest safety standards across residential and commercial projects.",
        highlights: ["ISI certified & flame-retardant", "Residential & commercial grades", "Havells, Finolex & more"],
        icon: "⚡",
        categoryImage: "/images/Wires.png",
        accentHsl: "38 95% 50%",
        gradient: "from-amber-50 to-yellow-100",
        spotlightColor: "rgba(245,158,11,0.15)",
        products: [
            {
                title: "Havells FR PVC Insulated Cable",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/RH/IB/CM/247573501/havells-fr-pvc-insulated-cable-500x500.jpeg",
                link: "#",
            },
            {
                title: "Havells Life Shield HFFR Cable",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/SD/BA/OM/247573501/havells-life-shield-hffr-cable-500x500.jpeg",
                link: "#",
            },
            {
                title: "Multi Strand Flexible Wire",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/flexible-wire-500x500.jpeg",
                link: "#",
            },
            {
                title: "Armoured Control Cable",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/armoured-control-cable-500x500.jpeg",
                link: "#",
            },
        ],
    },
    {
        slug: "switchgear",
        name: "Switchgear & Switches",
        tagline: "Control at your fingertips",
        description:
            "MCBs, distribution boards, modular switches and smart control panels that protect your installations while adding an elegant finish.",
        highlights: ["MCBs & distribution boards", "Smart & modular switches", "Protection + elegant finish"],
        icon: "🔌",
        categoryImage: "/images/Switches.png",
        accentHsl: "262 70% 55%",
        gradient: "from-violet-50 to-purple-100",
        spotlightColor: "rgba(139,92,246,0.15)",
        products: [
            {
                title: "Havells MCB Single Pole",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/mcb-500x500.jpeg",
                link: "#",
            },
            {
                title: "Havells Distribution Board",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/distribution-board-500x500.jpeg",
                link: "#",
            },
            {
                title: "Modular Switch Plate 6A",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/modular-switch-500x500.jpeg",
                link: "#",
            },
            {
                title: "Smart Touch Panel",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/smart-switch-500x500.jpeg",
                link: "#",
            },
            {
                title: "RCCB Double Pole",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/rccb-500x500.jpeg",
                link: "#",
            },
        ],
    },
    {
        slug: "lights",
        name: "Lights",
        tagline: "Illuminate every space",
        description:
            "Energy-saving LED panels, battens, downlighters and decorative fixtures that cut electricity bills while delivering brilliant, consistent light.",
        highlights: ["Up to 80% energy savings", "LED panels, battens & strips", "Warm & cool white options"],
        icon: "💡",
        categoryImage: "/images/Celling lights.png",
        accentHsl: "55 100% 50%",
        gradient: "from-yellow-50 to-lime-100",
        spotlightColor: "rgba(234,179,8,0.18)",
        products: [
            {
                title: "Havells LED Batten 20W",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/led-batten-500x500.jpeg",
                link: "#",
            },
            {
                title: "Havells Round LED Panel",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/led-panel-500x500.jpeg",
                link: "#",
            },
            {
                title: "Decorative Pendant Light",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/pendant-500x500.jpeg",
                link: "#",
            },
            {
                title: "LED Strip Light 5M",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/led-strip-500x500.jpeg",
                link: "#",
            },
            {
                title: "Surface Mount Spot Light",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/spot-light-500x500.jpeg",
                link: "#",
            },
        ],
    },
    {
        slug: "air-conditioners",
        name: "Air Conditioners",
        tagline: "Perfect climate, every season",
        description:
            "5-star rated split and cassette ACs from top brands with inverter technology — install, service and AMC all handled under one roof.",
        highlights: ["5-star inverter ACs", "Installation & AMC service", "Split, cassette & window units"],
        icon: "❄️",
        categoryImage: "/images/AirConditional.png",
        accentHsl: "200 85% 55%",
        gradient: "from-blue-50 to-indigo-100",
        spotlightColor: "rgba(59,130,246,0.15)",
        products: [
            {
                title: "Havells 1.5 Ton Split AC",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/split-ac-500x500.jpeg",
                link: "#",
            },
            {
                title: "2 Ton Inverter Split AC",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/inverter-ac-500x500.jpeg",
                link: "#",
            },
            {
                title: "Cassette AC 2 Ton",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/AA/WD/YX/247573501/cassette-ac-500x500.jpeg",
                link: "#",
            },
            {
                title: "Window AC 1 Ton",
                image:
                    "https://5.imimg.com/data5/SELLER/Default/2022/5/KD/WH/LM/247573501/window-ac-500x500.jpeg",
                link: "#",
            },
        ],
    },
];
