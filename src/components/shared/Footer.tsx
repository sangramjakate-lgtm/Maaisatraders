import Link from "next/link";
import { MapPin, Phone, Mail, Building2, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-white/90 pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Company Info */}
                <div className="space-y-4">
                    <h4 className="text-lg font-heading font-bold text-white">
                        Maaisa Traders India Pvt. LTD.
                    </h4>
                    <p className="text-sm leading-relaxed text-white/60">
                        Maaisa Traders India Pvt. Ltd. provides the best range of electric
                        fans, water heaters & geysers, water purifiers and other quality
                        products with effective & timely delivery.
                    </p>
                    <div className="pt-2 space-y-1 text-xs text-white/40">
                        <p className="break-all">CIN: U51909PN2014PTC181608</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                href="/"
                                className="text-sm text-white/60 hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/product"
                                className="text-sm text-white/60 hover:text-white transition-colors"
                            >
                                Products & Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-sm text-white/60 hover:text-white transition-colors"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Trending Categories (SEO Linking) */}
                <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-4">
                        Trending Categories
                    </h4>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/category/fans" className="text-sm text-white/60 hover:text-white transition-colors">
                                BLDC Energy Saving Fans
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/cables-wires" className="text-sm text-white/60 hover:text-white transition-colors">
                                Industrial Wires & Cables
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/switches-switchgear" className="text-sm text-white/60 hover:text-white transition-colors">
                                Modular Switches & MCBs
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/lighting" className="text-sm text-white/60 hover:text-white transition-colors">
                                LED Commercial Lighting
                            </Link>
                        </li>
                        <li>
                            <Link href="/category/air-conditioners" className="text-sm text-white/60 hover:text-white transition-colors">
                                Premium Air Conditioners
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Reach Us */}
                <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-4">
                        Connect with Us
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm text-white/60">
                            <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                            <span>
                                3rd Floor, Office No 301 & 302, 41 Elite, Kalewadi Main Road,
                                Tathawade, Hinjewadi, Pune – 411033, Maharashtra
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white/60">
                            <Mail size={16} className="shrink-0 text-white/40" />
                            <a href="mailto:info@maaisatraders.com" className="hover:text-white transition-colors">
                                info@maaisatraders.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white/60">
                            <Phone size={16} className="shrink-0 text-white/40" />
                            <a href="tel:+919890200222" className="hover:text-white transition-colors">
                                +91 98902 00222
                            </a>
                        </li>
                        <li className="flex items-center gap-4 pt-4 mt-2 border-t border-white/10 w-3/4">
                            <a href="https://www.facebook.com/people/Maaisa-Traders-India-Pvt-Ltd/61556569127302/?mibextid=wwXIfr&rdid=MMWA8ynUGyTeayyG" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/maaisatraderspvtltd?igsh=MXFrNTZudGpxcno5" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container-custom mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 md:mb-0">
                    <span className="opacity-50">Authorized Distributor for:</span>
                    <span>Havells</span>
                    <span>Legrand</span>
                    <span>Polycab</span>
                    <span>Usha</span>
                    <span>Orient</span>
                </div>
                <div className="text-right">
                    <p>&copy; {new Date().getFullYear()} Maaisa Traders India Pvt. Ltd. All rights reserved.</p>
                    <p className="mt-1">Authorized Electrical Goods Distributor Pune & Maharashtra</p>
                </div>
            </div>
        </footer>
    );
}
