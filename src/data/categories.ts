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
                image: "/images/stock/hero_fan_1773133471811.png",
            },
            {
                title: "White Remote Control Ceiling Fan",
                image: "/images/stock/hero_fan_1773133471811.png",
            },
            {
                title: "Led Lights Luxury Ceiling Fan",
                image: "/images/stock/hero_fan_1773133471811.png",
            },
            {
                title: "Havells BLDC Ceiling Fan",
                image: "/images/stock/hero_fan_1773133471811.png",
            },
            {
                title: "Havells Underlight Ceiling Fan",
                image: "/images/stock/hero_fan_1773133471811.png",
            },
            {
                title: "Usha Hunter Luxury Ceiling Fan",
                image: "/images/stock/hero_fan_1773133471811.png",
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
                image: "/images/stock/hero_wires_1773133489083.png",
            },
            {
                title: "Havells Life Shield HFFR Cable",
                image: "/images/stock/hero_wires_1773133489083.png",
            },
            {
                title: "Multi Strand Flexible Wire",
                image: "/images/stock/hero_wires_1773133489083.png",
            },
            {
                title: "Armoured Control Cable",
                image: "/images/stock/hero_wires_1773133489083.png",
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
                image: "/images/stock/hero_switch_1773133517455.png",
            },
            {
                title: "Havells Distribution Board",
                image: "/images/stock/hero_switch_1773133517455.png",
            },
            {
                title: "Modular Switch Plate 6A",
                image: "/images/stock/hero_switch_1773133517455.png",
            },
            {
                title: "Smart Touch Panel",
                image: "/images/stock/hero_switch_1773133517455.png",
            },
            {
                title: "RCCB Double Pole",
                image: "/images/stock/hero_switch_1773133517455.png",
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
                image: "/images/stock/hero_light_1773133532927.png",
            },
            {
                title: "Havells Round LED Panel",
                image: "/images/stock/hero_light_1773133532927.png",
            },
            {
                title: "Decorative Pendant Light",
                image: "/images/stock/hero_light_1773133532927.png",
            },
            {
                title: "LED Strip Light 5M",
                image: "/images/stock/hero_light_1773133532927.png",
            },
            {
                title: "Surface Mount Spot Light",
                image: "/images/stock/hero_light_1773133532927.png",
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
                image: "/images/stock/hero_ac_1773133602277.png",
            },
            {
                title: "2 Ton Inverter Split AC",
                image: "/images/stock/hero_ac_1773133602277.png",
            },
            {
                title: "Cassette AC 2 Ton",
                image: "/images/stock/hero_ac_1773133602277.png",
            },
            {
                title: "Window AC 1 Ton",
                image: "/images/stock/hero_ac_1773133602277.png",
            },
        ],
    },
];
