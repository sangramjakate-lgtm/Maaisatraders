export interface ProductStat {
    label: string;
    value: string;
    icon?: string;
}

export interface Product {
    id: string;
    category: string;
    image: string;
    title: string;
    price: string;
    description: string;
    stats: ProductStat[];
}

export const allProducts: Product[] = [
    // ─── FANS (6 Products) ─────────────────────────────────────────
    {
        id: "havells-opus-8-blade-ceiling-fan",
        category: "Fans",
        image: "/images/products/opus-8.png",
        title: "Havells Opus 8 Blade Ceiling Fan",
        price: "Contact for Quote",
        description: "The Havells Opus 8 Blade Ceiling Fan combines high-end aesthetic appeal with powerful air delivery. Engineered with superior metallic finish blades, it ensures optimum performance even at low voltages.",
        stats: [
            { label: "Blades", value: "8 Aerodynamic" },
            { label: "Motor", value: "Heavy Duty 100% Copper" },
            { label: "Warranty", value: "2 Years Comprehensive" },
            { label: "Energy Rating", value: "5-Star Certified" },
        ]
    },
    {
        id: "white-remote-control-ceiling-fan",
        category: "Fans",
        image: "/images/products/stealth-white.png",
        title: "White Remote Control Ceiling Fan",
        price: "Contact for Quote",
        description: "Modern smart ceiling fan featuring convenient remote-control operation. Designed with a sleek white finish to seamlessly blend into any contemporary interior decor while providing whisper-quiet air circulation.",
        stats: [
            { label: "Control", value: "IR Remote Included" },
            { label: "Speeds", value: "5 Speed Settings" },
            { label: "Timer", value: "Available (Sleep Mode)" },
            { label: "Warranty", value: "2 Years Motor" },
        ]
    },
    {
        id: "led-lights-luxury-ceiling-fan",
        category: "Fans",
        image: "/images/products/renesa-elite.jpg",
        title: "Led Lights Luxury Ceiling Fan",
        price: "Contact for Quote",
        description: "Enhance your living space with this luxury ceiling fan that integrates brilliant LED lighting. Perfect for dining rooms and large master bedrooms, offering both illumination and excellent air delivery.",
        stats: [
            { label: "Lighting", value: "Integrated LED Dimmable" },
            { label: "Sweep Size", value: "1200mm (48 Inches)" },
            { label: "Design", value: "Premium Luxury" },
            { label: "Power", value: "Energy Saving BLDC" },
        ]
    },
    {
        id: "havells-bldc-ceiling-fan",
        category: "Fans",
        image: "/images/products/indigo-blue.png",
        title: "Havells BLDC Ceiling Fan",
        price: "Contact for Quote",
        description: "Save up to 60% on your electricity bills with the intelligent BLDC motor architecture in this modern Havells fan. Includes inverter stabilization technology for consistent performance.",
        stats: [
            { label: "Motor", value: "Brushless DC (BLDC)" },
            { label: "Power", value: "28 Watts at Max Speed" },
            { label: "Remote", value: "RF Remote Included" },
            { label: "Efficiency", value: "A++ Energy Class" },
        ]
    },
    {
        id: "havells-underlight-ceiling-fan",
        category: "Fans",
        image: "/images/products/florence-walnut.png",
        title: "Havells Underlight Ceiling Fan",
        price: "Contact for Quote",
        description: "Dual-purpose underlight ceiling fan with elegant wood-finish blades. Eliminates the need for multiple ceiling fixtures while providing a magnificent centerpiece and grand air flow.",
        stats: [
            { label: "Finish", value: "Antique Walnut Texture" },
            { label: "Blades", value: "5 Premium Blades" },
            { label: "Lighting", value: "Built-in Light Kit" },
            { label: "Operation", value: "Pull Chain / Remote" },
        ]
    },
    {
        id: "usha-hunter-luxury-ceiling-fan",
        category: "Fans",
        image: "/images/products/usha-striker.jpeg",
        title: "Usha Hunter Luxury Ceiling Fan",
        price: "Contact for Quote",
        description: "The Usha Hunter series represents the pinnacle of premium fan design. Boasting beautiful wooden-finish blades and an elegant motor housing, it is the ultimate statement piece for luxury homes.",
        stats: [
            { label: "Design", value: "Royal Luxury Edition" },
            { label: "Finish", value: "Classic Wooden Texture" },
            { label: "Operation", value: "Ultra-Quiet Performance" },
            { label: "Warranty", value: "3 Years Standard" },
        ]
    },

    // ─── CABLES & WIRES (4 Products) ───────────────────────────────
    {
        id: "havells-fr-pvc-insulated-cable",
        category: "Cables & Wires",
        image: "/images/products/fr-pvc-green.png",
        title: "Havells FR PVC Insulated Cable",
        price: "Contact for Quote",
        description: "Havells Flame Retardant (FR) PVC insulated cables are manufactured with premium grade PVC resin and high-quality CC copper. They ensure maximum safety for building installations.",
        stats: [
            { label: "Insulation", value: "FR Grade PVC" },
            { label: "Conductor", value: "99.9% Pure Copper" },
            { label: "Standard", value: "ISI Licensed" },
            { label: "Usage", value: "House Wiring" },
        ]
    },
    {
        id: "havells-life-shield-hffr-cable",
        category: "Cables & Wires",
        image: "/images/products/life-shield-black.jpg",
        title: "Havells Life Shield HFFR Cable",
        price: "Contact for Quote",
        description: "Life Shield HFFR (Halogen Free Flame Retardant) cables provide enhanced safety during fire emergencies by not emitting toxic smoke or corrosive gases.",
        stats: [
            { label: "Type", value: "Halogen Free (HFFR)" },
            { label: "Safety", value: "Minimal Smoke Emission" },
            { label: "Temperature", value: "High Heat Resistant" },
            { label: "Compliance", value: "RoHS Compliant" },
        ]
    },
    {
        id: "multi-strand-flexible-wire",
        category: "Cables & Wires",
        image: "/images/products/single-core-wire.png",
        title: "Multi Strand Flexible Wire",
        price: "Contact for Quote",
        description: "Superior multi-strand wires designed for maximum flexibility and ease of installation in compact conduit systems. Ideal for panel wiring and domestic appliances.",
        stats: [
            { label: "Flexibility", value: "Class 5 Multi-Strand" },
            { label: "Length", value: "90 Meters Standard" },
            { label: "Current", value: "High Load Handling" },
            { label: "Jacket", value: "Anti-Abrasion PVC" },
        ]
    },
    {
        id: "armoured-control-cable",
        category: "Cables & Wires",
        image: "/images/products/armoured-cable.png",
        title: "Armoured Control Cable",
        price: "Contact for Quote",
        description: "Heavy-duty armoured cables for industrial applications. Provides high mechanical protection and electrical stability in underground and exposed installations.",
        stats: [
            { label: "Protection", value: "Steel Tape/Wire Armoured" },
            { label: "Layers", value: "Multi-Core Configuration" },
            { label: "Outer Sheath", value: "ST-2 Type PVC" },
            { label: "Environment", value: "Weather & Oil Resistant" },
        ]
    },

    // ─── SWITCHES & SWITCHGEAR (5 Products) ────────────────────────
    {
        id: "havells-mcb-single-pole",
        category: "Switches & Switchgear",
        image: "/images/products/mcb-single.jpg",
        title: "Havells MCB Single Pole",
        price: "Contact for Quote",
        description: "Advanced Miniature Circuit Breaker (MCB) providing reliable protection against short circuits and overloads. Features high breaking capacity and rapid tripping mechanism.",
        stats: [
            { label: "Capacity", value: "6A - 63A Available" },
            { label: "Poles", value: "Single Pole (SP)" },
            { label: "Sensitivity", value: "C Curve Standard" },
            { label: "Indicator", value: "On/Off Status Flag" },
        ]
    },
    {
        id: "havells-distribution-board",
        category: "Switches & Switchgear",
        image: "/images/products/distribution-board.jpg",
        title: "Havells Distribution Board",
        price: "Contact for Quote",
        description: "Ergonomically designed distribution boards for centralized power control. Manufactured with high-grade CRCA steel and finished with epoxy powder coating for durability.",
        stats: [
            { label: "Material", value: "CRCA Sheet Steel" },
            { label: "Finish", value: "Rust-Resistant Powder" },
            { label: "Ways", value: "4/6/8/12/16 Ways" },
            { label: "Entry", value: "Top & Bottom Cable Entry" },
        ]
    },
    {
        id: "modular-switch-plate-6a",
        category: "Switches & Switchgear",
        image: "/images/products/modular-plate-6a.jpg",
        title: "Modular Switch Plate 6A",
        price: "Contact for Quote",
        description: "Elegant modular switch plates that blend perfectly with modern interior designs. Features smooth click operation and silver-plated contacts for long life.",
        stats: [
            { label: "Type", value: "Modular Design" },
            { label: "Contacts", value: "Silver Cadmium Oxide" },
            { label: "Material", value: "Flame Retardant Polycarbonate" },
            { label: "Color", value: "Various Finishes Available" },
        ]
    },
    {
        id: "smart-touch-panel",
        category: "Switches & Switchgear",
        image: "/images/products/smart-touch.jpg",
        title: "Smart Touch Panel",
        price: "Contact for Quote",
        description: "Feather-touch control panels for smart lighting and appliance management. Compatible with home automation systems via Wi-Fi or Bluetooth.",
        stats: [
            { label: "Control", value: "Capacitive Touch" },
            { label: "Connectivity", value: "Wi-Fi / ZigBee Ready" },
            { label: "Indicators", value: "LED Backlit Buttons" },
            { label: "Compatibility", value: "Supports Voice Control" },
        ]
    },
    {
        id: "rccb-double-pole",
        category: "Switches & Switchgear",
        image: "/images/products/rccb-double.jpg",
        title: "RCCB Double Pole",
        price: "Contact for Quote",
        description: "Residual Current Circuit Breaker (RCCB) provides life safety protection against electric shocks and prevents fire hazards caused by earth leakage currents.",
        stats: [
            { label: "Sensitivity", value: "30mA / 100mA / 300mA" },
            { label: "Type", value: "AC / A Type" },
            { label: "Mechanism", value: "Current Sensing" },
            { label: "Poles", value: "Double Pole (DP)" },
        ]
    },

    // ─── LIGHTING (5 Products) ─────────────────────────────────────
    {
        id: "havells-led-batten-20w",
        category: "Lighting",
        image: "/images/products/led-batten.jpg",
        title: "Havells LED Batten 20W",
        price: "Contact for Quote",
        description: "Slim and efficient LED batten that provides glare-free, uniform lighting. Cuts electricity costs significantly while delivering superior brightness compared to traditional tube lights.",
        stats: [
            { label: "Wattage", value: "20 Watts" },
            { label: "Lumens", value: "2000lm Output" },
            { label: "Life", value: "25000 Burning Hours" },
            { label: "CCT", value: "6500K Cool White" },
        ]
    },
    {
        id: "havells-round-led-panel",
        category: "Lighting",
        image: "/images/products/round-panel.jpg",
        title: "Havells Round LED Panel",
        price: "Contact for Quote",
        description: "Elegant round recessed LED panel perfect for false ceilings. Features a high-efficiency driver and high-quality light guide plate for soft, shadow-free light.",
        stats: [
            { label: "Beam Angle", value: "110 Degrees Wide" },
            { label: "Mounting", value: "Recessed / Surface" },
            { label: "Protection", value: "Surge Protection up to 3kV" },
            { label: "Design", value: "Ultra-Slim Profile" },
        ]
    },
    {
        id: "decorative-pendant-light",
        category: "Lighting",
        image: "/images/products/pendant-light.jpg",
        title: "Decorative Pendant Light",
        price: "Contact for Quote",
        description: "Stunning pendant light fixture designed to provide character to any room. Ideal for over-the-counter lighting in kitchens or as a centerpiece in dining areas.",
        stats: [
            { label: "Style", value: "Contemporary Minimalist" },
            { label: "Adjustment", value: "Adjustable Cord Length" },
            { label: "Bulb Type", value: "E27 / LED Compatible" },
            { label: "Construction", value: "Metallic with Matte Finish" },
        ]
    },
    {
        id: "led-strip-light-5m",
        category: "Lighting",
        image: "/images/products/strip-light.jpg",
        title: "LED Strip Light 5M",
        price: "Contact for Quote",
        description: "Flexible LED strip lights for ambient and decorative lighting applications. Ideal for coves, cabinets, and backlighting requirements.",
        stats: [
            { label: "Length", value: "5 Meters Reel" },
            { label: "IP Rating", value: "IP20 / IP65 Available" },
            { label: "Density", value: "60 LEDs per Meter" },
            { label: "Adhesive", value: "3M Tape Backing" },
        ]
    },
    {
        id: "surface-mount-spot-light",
        category: "Lighting",
        image: "/images/products/spot-light.jpg",
        title: "Surface Mount Spot Light",
        price: "Contact for Quote",
        description: "Compact surface-mount spotlight for focused illumination. Perfect for highlighting artworks, cabinets, or specific architectural features.",
        stats: [
            { label: "Rotation", value: "Tiltable Head" },
            { label: "Color", value: "White / Natural / Warm" },
            { label: "Efficiency", value: "COB LED Technology" },
            { label: "Body", value: "Die-Cast Aluminum" },
        ]
    },

    // ─── AIR CONDITIONERS (4 Products) ─────────────────────────────
    {
        id: "havells-1.5-ton-split-ac",
        category: "Air Conditioners",
        image: "/images/products/split-ac-1.5.jpg",
        title: "Havells 1.5 Ton Split AC",
        price: "Contact for Quote",
        description: "Energy-efficient 1.5 ton split AC with inverter technology. Features anti-corrosive coating and rapid cooling mode for extreme summers.",
        stats: [
            { label: "Capacity", value: "1.5 Ton" },
            { label: "Rating", value: "5 Star BEE" },
            { label: "Technology", value: "Dual Inverter" },
            { label: "Condenser", value: "100% Copper Coil" },
        ]
    },
    {
        id: "2-ton-inverter-split-ac",
        category: "Air Conditioners",
        image: "/images/products/inverter-ac-2.jpg",
        title: "2 Ton Inverter Split AC",
        price: "Contact for Quote",
        description: "Powerful 2 ton AC designed for larger rooms. Maintains whisper-quiet operation while providing uniform cooling through 4-way air swing.",
        stats: [
            { label: "Capacity", value: "2 Ton" },
            { label: "Swing", value: "4-Way Auto Swing" },
            { label: "Filter", value: "PM 2.5 Filter Built-in" },
            { label: "Noise", value: "Ultra Quiet Operation" },
        ]
    },
    {
        id: "cassette-ac-2-ton",
        category: "Air Conditioners",
        image: "/images/products/cassette-ac.jpg",
        title: "Cassette AC 2 Ton",
        price: "Contact for Quote",
        description: "Space-saving 360-degree cassette AC for commercial spaces and premium living halls. Provides unobtrusive, powerful vertical cooling.",
        stats: [
            { label: "Installation", value: "Ceiling Mounted" },
            { label: "Casing", value: "Galvanized Steel" },
            { label: "Coverage", value: "360 Degree Airflow" },
            { label: "Usage", value: "Commercial / Premium Residential" },
        ]
    },
    {
        id: "window-ac-1-ton",
        category: "Air Conditioners",
        image: "/images/products/window-ac.jpg",
        title: "Window AC 1 Ton",
        price: "Contact for Quote",
        description: "Compact and easy-to-install 1 ton window AC. Reliable cooling performance with low maintenance requirements for smaller spaces.",
        stats: [
            { label: "Capacity", value: "1 Ton" },
            { label: "Size", value: "Standard Window Cutout" },
            { label: "Refrigerant", value: "R32 Eco Friendly" },
            { label: "Maintenance", value: "Slide-Out Filter" },
        ]
    },
];
