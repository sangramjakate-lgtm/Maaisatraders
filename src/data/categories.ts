export interface CategoryProduct {
    title: string;
    image: string;
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
                image: "/images/products/opus-8.png",
            },
            {
                title: "White Remote Control Ceiling Fan",
                image: "/images/products/stealth-white.png",
            },
            {
                title: "Led Lights Luxury Ceiling Fan",
                image: "/images/products/renesa-elite.jpg",
            },
            {
                title: "Havells BLDC Ceiling Fan",
                image: "/images/products/indigo-blue.png",
            },
            {
                title: "Havells Underlight Ceiling Fan",
                image: "/images/products/florence-walnut.png",
            },
            {
                title: "Usha Hunter Luxury Ceiling Fan",
                image: "/images/products/usha-striker.jpeg",
            },
        ],
    },
    {
        slug: "wires-cables",
        name: "Cables & Wires",
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
                image: "/images/products/fr-pvc-green.png",
            },
            {
                title: "Havells Life Shield HFFR Cable",
                image: "/images/products/life-shield-black.jpg",
            },
            {
                title: "Multi Strand Flexible Wire",
                image: "/images/products/single-core-wire.png",
            },
            {
                title: "Armoured Control Cable",
                image: "/images/products/armoured-cable.png",
            },
        ],
    },
    {
        slug: "switchgear",
        name: "Switches & Switchgear",
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
                image: "/images/products/mcb-single.jpg",
            },
            {
                title: "Havells Distribution Board",
                image: "/images/products/distribution-board.jpg",
            },
            {
                title: "Modular Switch Plate 6A",
                image: "/images/products/modular-plate-6a.jpg",
            },
            {
                title: "Smart Touch Panel",
                image: "/images/products/smart-touch.jpg",
            },
            {
                title: "RCCB Double Pole",
                image: "/images/products/rccb-double.jpg",
            },
        ],
    },
    {
        slug: "lights",
        name: "Lighting",
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
                image: "/images/products/led-batten.jpg",
            },
            {
                title: "Havells Round LED Panel",
                image: "/images/products/round-panel.jpg",
            },
            {
                title: "Decorative Pendant Light",
                image: "/images/products/pendant-light.jpg",
            },
            {
                title: "LED Strip Light 5M",
                image: "/images/products/strip-light.jpg",
            },
            {
                title: "Surface Mount Spot Light",
                image: "/images/products/spot-light.jpg",
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
                image: "/images/products/split-ac-1.5.jpg",
            },
            {
                title: "2 Ton Inverter Split AC",
                image: "/images/products/inverter-ac-2.jpg",
            },
            {
                title: "Cassette AC 2 Ton",
                image: "/images/products/cassette-ac.jpg",
            },
            {
                title: "Window AC 1 Ton",
                image: "/images/products/window-ac.jpg",
            },
        ],
    },
];
