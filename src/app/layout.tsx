import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maaisatraders.com"), // Update with actual domain
  title: {
    default: "Maaisa Traders India Pvt. LTD. — Authorized Distribution & Electric Works",
    template: "%s | Maaisa Traders India"
  },
  description:
    "Authorized distributors of Havells, Legrand & Polycab. Premium electrical solutions and official works in Pune, Maharashtra.",
  alternates: {
    canonical: 'https://maaisatraders.com',
    languages: {
      'en-IN': 'https://maaisatraders.com',
    },
  },
  keywords: [
    "Maaisa Traders India Pvt. LTD.",
    "Authorized Distributor Pune",
    "Electrical Goods Supplier Maharashtra",
    "Havells Brand Distributor",
    "Polycab Wires Pune",
    "Legrand Switchgear Supplier",
    "Usha Fans Pune",
    "Orient Electricals Distributor",
    "Industrial Electrical Consumables",
    "Corporate Electrical Contractor Pune",
    "Electrical Maintenance Services",
    "BLDC Energy Saving Fans",
    "Flame Retardant FR Cables",
    "Smart Modular Switches",
    "LED Lighting Solutions Pune",
    "Power Distribution Boards",
    "Residential Electrical Supply",
    "Tathawade Electrical Shop",
    "Hinjewadi Electrical Supplies",
    "Pimpri Chinchwad Electrical Distributor",
    "Electrical Wholesale Market Pune"
  ],
  authors: [{ name: "Maaisa Traders" }],
  creator: "Maaisa Traders",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maaisatraders.com",
    siteName: "Maaisa Traders India",
    title: "Maaisa Traders India Pvt. LTD. — Authorized Distribution",
    description: "Premium Distributors of industry-leading electric fans, water heaters, and purifiers across Maharashtra.",
    images: [
      {
        url: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png",
        width: 1200,
        height: 630,
        alt: "Maaisa Traders India Pvt. LTD. Corporate Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaisa Traders India Pvt. LTD.",
    description: "Premium Distributors for Havells, Legrand, Polycab and more.",
    images: ["https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png"],
  },
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png", sizes: "32x32" },
      { url: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png", sizes: "192x192" }
    ],
    apple: [
      { url: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png" }
    ]
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maaisa Traders India Pvt. LTD.",
    "url": "https://maaisatraders.com",
    "logo": "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9890200222",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/people/Maaisa-Traders-India-Pvt-Ltd/61556569127302/",
      "https://www.instagram.com/maaisatraderspvtltd/"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://maaisatraders.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased min-h-screen flex flex-col font-body`}
        suppressHydrationWarning
      >
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
