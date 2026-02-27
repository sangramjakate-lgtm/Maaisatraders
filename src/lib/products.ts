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
    link: string;
    stats: ProductStat[];
}

export const allProducts: Product[] = [
    {
        id: "havells-opus-8-blade-ceiling-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577534893/WX/TD/FW/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-2-500x500.jpeg",
        title: "Havells Opus 8 Blade Ceiling Fan",
        price: "Contact for Quote",
        description: "The Havells Opus 8 Blade Ceiling Fan combines high-end aesthetic appeal with powerful air delivery. Engineered with superior metallic finish blades, it ensures optimum performance even at low voltages.",
        link: "https://www.indiamart.com/proddetail/havells-opus-8-blade-ceiling-fan-2858611809533.html",
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
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577536669/OQ/GL/CN/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-1-500x500.jpeg",
        title: "White Remote Control Ceiling Fan",
        price: "Contact for Quote",
        description: "Modern smart ceiling fan featuring convenient remote-control operation. Designed with a sleek white finish to seamlessly blend into any contemporary interior decor while providing whisper-quiet air circulation.",
        link: "https://www.indiamart.com/proddetail/white-remote-control-ceiling-fan-2858611856491.html",
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
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577525356/SS/ZR/NR/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-1-jpeg-500x500.jpeg",
        title: "Led Lights Luxury Ceiling Fan",
        price: "Contact for Quote",
        description: "Enhance your living space with this luxury ceiling fan that integrates brilliant LED lighting. Perfect for dining rooms and large master bedrooms, offering both illumination and excellent air delivery.",
        link: "https://www.indiamart.com/proddetail/led-lights-luxury-ceiling-fan-2858611401188.html",
        stats: [
            { label: "Lighting", value: "Integrated LED Dimmable" },
            { label: "Sweep Size", value: "1200mm (48 Inches)" },
            { label: "Design", value: "Premium Luxury" },
            { label: "Power", value: "Energy Saving BLDC" },
        ]
    },
    {
        id: "led-light-ceiling-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577539635/ZY/NV/WS/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-1-500x500.jpeg",
        title: "Led Light Ceiling Fan",
        price: "Contact for Quote",
        description: "A compact and incredibly stylish LED fan unit that serves as a central room fixture. Combines multi-functional utility with reliable air delivery built to last for thousands of operational hours.",
        link: "https://www.indiamart.com/proddetail/led-light-ceiling-fan-2858611921773.html",
        stats: [
            { label: "Type", value: "Underlight Fan" },
            { label: "Material", value: "Anti-Rust Aluminum" },
            { label: "Air Delivery", value: "230 CMM" },
            { label: "RPM", value: "350 High Speed" },
        ]
    },
    {
        id: "usha-hunter-luxury-ceiling-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577541187/EN/LT/TU/247573501/whatsapp-image-2026-01-21-at-11-25-43-am-2-500x500.jpeg",
        title: "Usha Hunter Luxury Ceiling Fan",
        price: "Contact for Quote",
        description: "The Usha Hunter series represents the pinnacle of premium fan design. Boasting beautiful wooden-finish blades and an elegant motor housing, it is the ultimate statement piece for luxury homes.",
        link: "https://www.indiamart.com/proddetail/usha-hunter-luxury-ceiling-fan-2858611951055.html",
        stats: [
            { label: "Finish", value: "Classic Wooden Texture" },
            { label: "Operation", value: "Whisper Quiet" },
            { label: "Durability", value: "Dust Resistant" },
            { label: "Warranty", value: "3 Years Comprehensive" },
        ]
    },
    {
        id: "havells-water-geyser",
        category: "Water Heaters",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577527120/IE/US/NB/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-3-jpeg-500x500.jpeg",
        title: "Havells Water Geyser",
        price: "Contact for Quote",
        description: "High-performance instant water geyser suitable for bathrooms and kitchens. Designed with rust-resistant ABS bodies and advanced safety features including auto cut-off protection.",
        link: "https://www.indiamart.com/proddetail/havells-water-geyser-2858611493812.html",
        stats: [
            { label: "Capacity", value: "10L / 15L / 25L" },
            { label: "Heating Element", value: "Incoloy Glass Coated" },
            { label: "Inner Tank", value: "Feroglas Technology" },
            { label: "Safety", value: "Multi-Function Valve" },
        ]
    },
    {
        id: "havells-electric-storage-water-heater",
        category: "Water Heaters",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577533832/FQ/QV/SL/247573501/electric-storage-water-heater-500x500.jpeg",
        title: "Havells Electric Storage Water Heater",
        price: "Contact for Quote",
        description: "The premier choice for large families. This storage water heater retains hot water for longer durations using high-density PUF insulation, drastically reducing electricity bills.",
        link: "https://www.indiamart.com/proddetail/havells-electric-storage-water-heater-2858611721873.html",
        stats: [
            { label: "Insulation", value: "High-Density PUF" },
            { label: "Tank Warranty", value: "7 Years Manufacturer" },
            { label: "Installation", value: "Vertical Wall Mount" },
            { label: "Bar Pressure", value: "Up to 8 Bars Rated" },
        ]
    },
    {
        id: "standard-water-geyser",
        category: "Water Heaters",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577451828/PW/XG/LT/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-3-jpeg-500x500.jpeg",
        title: "Standard Water Geyser",
        link: "#",
        price: "Contact for Quote",
        description: "Reliable and cost-effective instant heating solution. Ideal for high-rise buildings and apartments, providing consistent hot water output on demand.",
        stats: [
            { label: "Type", value: "Instant Heating" },
            { label: "Wattage", value: "3000W / 4500W" },
            { label: "Indicator", value: "LED Status Light" },
            { label: "Safety", value: "Thermal Cut-off" },
        ]
    },
    {
        id: "premium-ro-water-purifier",
        category: "Water Purifiers",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577528732/UO/ZT/VY/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg",
        title: "Premium Ro Water Purifier",
        price: "Contact for Quote",
        description: "Advanced RO + UV + UF purification system that eliminates dissolved impurities, bacteria, and viruses. Features an alkaline cartridge to maintain optimal pH levels.",
        link: "https://www.indiamart.com/proddetail/premium-ro-water-purifier-2858611546255.html",
        stats: [
            { label: "Purification", value: "RO+UV+UF+Alkaline" },
            { label: "Tank Capacity", value: "8 Liters Storage" },
            { label: "Filter Life", value: "6000L Rated Capacity" },
            { label: "Display", value: "Smart LED Indicators" },
        ]
    },
    {
        id: "havells-water-purifier",
        category: "Water Purifiers",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577529649/HT/OD/FA/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg",
        title: "Havells Water Purifier",
        price: "Contact for Quote",
        description: "Compact and aesthetically pleasing Havells water purifier providing 100% RO and UV purified water safely into its built-in food-grade tank.",
        link: "https://www.indiamart.com/proddetail/havells-water-purifier-2858611586948.html",
        stats: [
            { label: "Brand", value: "Havells Genuine" },
            { label: "Operation", value: "Fully Automatic" },
            { label: "Design", value: "Space-Saving Wall Mount" },
            { label: "Voltage", value: "Operates 150V-280V" },
        ]
    },
    {
        id: "uv-water-purifier",
        category: "Water Purifiers",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577451934/XF/KR/FI/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-2-jpeg-500x500.jpeg",
        title: "UV Water Purifier",
        link: "#",
        price: "Contact for Quote",
        description: "Sleek UV purification system aimed at low TDS municipal water sources. It effectively kills completely harmful micro-organisms without removing essential minerals.",
        stats: [
            { label: "Purification Level", value: "UV + UF" },
            { label: "TDS Control", value: "Not Required (<200 TDS)" },
            { label: "Flow Rate", value: "2L / Minute" },
            { label: "Design", value: "Table Top / Wall Mount" },
        ]
    },
    {
        id: "ceiling-fan-blade-set",
        category: "Accessories",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577538710/TU/SN/HS/247573501/whatsapp-image-2026-01-21-at-11-25-45-am-500x500.jpeg",
        title: "Ceiling Fan Blade Set",
        price: "Contact for Replacement Quote",
        description: "Original OEM replacement fan blade sets. Meticulously balanced to prevent wobbling and restore smooth, quiet operation to your premium ceiling fans.",
        link: "https://www.indiamart.com/proddetail/ceiling-fan-blade-set-2858611894597.html",
        stats: [
            { label: "Material", value: "Anti-Bend Aluminum" },
            { label: "Sets", value: "3 or 4 Blade Packs" },
            { label: "Compatibility", value: "Universal Havells Range" },
            { label: "Coating", value: "Anti-Dust Finish" },
        ]
    },
    {
        id: "havells-bldc-ceiling-fans-a",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514994/RW/TH/GO/247573501/1000055176-500x500.jpg",
        title: "Havells Bldc Ceiling Fans (Model A)",
        link: "#",
        price: "Contact for Quote",
        description: "Save up to 60% on your electricity bills with the intelligent BLDC motor architecture in this modern Havells fan. Includes inverter stabilization technology.",
        stats: [
            { label: "Motor", value: "Brushless DC (BLDC)" },
            { label: "Power Consumption", value: "28 Watts" },
            { label: "Remote", value: "RF Remote Included" },
            { label: "Eco-Friendly", value: "Yes" },
        ]
    },
    {
        id: "havells-bldc-ceiling-fans-b",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577542711/XA/XJ/FN/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-500x500.jpeg",
        title: "Havells Bldc Ceiling Fans (Model B)",
        price: "Contact for Quote",
        description: "High-speed BLDC variant featuring sweeping metallic blade designs for improved aesthetics in living rooms and guest halls.",
        link: "https://www.indiamart.com/proddetail/havells-bldc-ceiling-fans-2858611975830.html",
        stats: [
            { label: "Motor", value: "BLDC High RPM" },
            { label: "Noise Level", value: "Ultra Quiet < 40dB" },
            { label: "Smart Ready", value: "IoT Compatible" },
            { label: "Warranty", value: "3 Years Standard" },
        ]
    },
    {
        id: "havells-underlight-ceiling-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/1/577543809/VN/CW/DG/247573501/whatsapp-image-2026-01-21-at-11-25-44-am-500x500.jpeg",
        title: "Havells Underlight Ceiling Fan",
        price: "Contact for Quote",
        description: "Dual-purpose underlight ceiling fan. Eliminates the need for multiple ceiling fixtures while providing a magnificent centerpiece and grand air flow.",
        link: "https://www.indiamart.com/proddetail/havells-underlight-ceiling-fan-2858611994662.html",
        stats: [
            { label: "Design Type", value: "Royal Chandelier Equivalent" },
            { label: "Blades", value: "5 Wood-Finish Blades" },
            { label: "Light Control", value: "Pull Chain or Remote" },
            { label: "Weight", value: "Approx 8kg" },
        ]
    },
    {
        id: "havells-bldc-ceiling-fans-c",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514905/FS/EC/AW/247573501/1000055173-500x500.jpg",
        title: "Havells Bldc Ceiling Fans (Model C)",
        link: "#",
        price: "Contact for Quote",
        description: "A compact BLDC model perfect for smaller rooms or offices. Efficient running performance even during profound voltage drops.",
        stats: [
            { label: "Sweep Size", value: "900mm (36 Inches)" },
            { label: "Motor Size", value: "Compact Copper" },
            { label: "Energy Class", value: "A++" },
            { label: "Remote", value: "Included Point-Anywhere RF" },
        ]
    },
    {
        id: "royal-luxury-ceiling-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517088/YI/PO/YX/247573501/1000055184-500x500.jpg",
        title: "Royal Luxury Ceiling fan",
        link: "#",
        price: "Contact for Quote",
        description: "Make a statement with the Royal Luxury ceiling fan. Plated housing covers and elegantly carved blade brackets guarantee a sophisticated and regal finish.",
        stats: [
            { label: "Finish", value: "Antique Brass/Bronze" },
            { label: "Blades", value: "High Grade ABS" },
            { label: "Downrod", value: "Included Extension Kit" },
            { label: "Warranty", value: "2 Years Motor" },
        ]
    },
    {
        id: "havells-bldc-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514939/DL/HC/LS/247573501/1000055174-500x500.jpg",
        title: "Havells Bldc Fan",
        link: "#",
        price: "Contact for Quote",
        description: "Experience the difference of brushless technology. Run your fan longer on inverters and enjoy noiseless environments for years.",
        stats: [
            { label: "Inverter Runtime", value: "Extended (3x longer)" },
            { label: "Style", value: "Contemporary Minimalist" },
            { label: "RPM", value: "High Speed Configured" },
            { label: "Color Options", value: "White, Brown, Grey" },
        ]
    },
    {
        id: "havells-opus-ceiling-fan",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584516059/KZ/HH/IZ/247573501/1000055179-500x500.jpg",
        title: "Havells Opus Ceiling Fan",
        link: "#",
        price: "Contact for Quote",
        description: "A standard Opus model variant, offering dependable, low-maintenance airflow using premium materials sourced exclusively from the best suppliers.",
        stats: [
            { label: "Material", value: "CRCA Steel Body" },
            { label: "Stator Size", value: "Enhanced 14 Pole" },
            { label: "Air Delivery", value: "240 CMM" },
            { label: "Install Type", value: "Standard Ceiling" },
        ]
    },
    {
        id: "luxury-ceiling-fans",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517154/OO/NF/WN/247573501/1000055182-500x500.jpg",
        title: "Luxury Ceiling Fans",
        link: "#",
        price: "Contact for Quote",
        description: "Versatile luxury ceiling fans built for premium retail spaces, hotel lobbies, and large domestic homes aiming to elevate their decor dramatically.",
        stats: [
            { label: "Range", value: "Designer Grade" },
            { label: "Power", value: "Optimized Performance" },
            { label: "Maintenance", value: "Low Effort" },
            { label: "Bearing", value: "Double Ball Bearing Unit" },
        ]
    },
    {
        id: "havells-ceiling-fan-bldc",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584514964/ES/OP/KN/247573501/1000055175-500x500.jpg",
        title: "Havells Ceiling Fan Bldc",
        link: "#",
        price: "Contact for Quote",
        description: "Another fantastic entry in the BLDC category. Features a wide, aerodynamic blade design specifically to push maximum air vertically.",
        stats: [
            { label: "Design Mode", value: "Wide Spread Circulation" },
            { label: "RPM Control", value: "Smart Chip Regulated" },
            { label: "Input Voltage", value: "140V-285V AC Compatible" },
            { label: "Timer", value: "1/2/4/8 Hours" },
        ]
    },
    {
        id: "led-lights-luxury-ceiling-fan-variant",
        category: "Fans",
        image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584517263/JW/ZX/MJ/247573501/1000055180-500x500.jpg",
        title: "Led Lights Luxury Ceiling Fan (Variant)",
        link: "#",
        price: "Contact for Quote",
        description: "This variant of the LED luxury series introduces a warm-lighting option for coziness with a brushed nickel blade finishing for modern contrasts.",
        stats: [
            { label: "LED Mode", value: "Warm White / Cool White / Natural" },
            { label: "Blade Finish", value: "Brushed Nickel Texture" },
            { label: "Power", value: "70 Watts Max Output" },
            { label: "Style", value: "Modern Urban" },
        ]
    }
];
