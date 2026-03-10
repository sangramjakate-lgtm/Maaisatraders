import dynamic from "next/dynamic";
import { Metadata } from "next";

const HomeClient = dynamic(() => import("@/components/sections/HomeClient").then(mod => mod.HomeClient), {
  ssr: true, // We want the skeleton or initial content to be there, but animations can wait
});

export const metadata: Metadata = {
  title: "Authorized Distributor - Maaisa Traders India Pvt. LTD.",
  description: "Premier authorized distributors of Havells, Polycab & Legrand. Specialist electrical works & solutions in Pune, Maharashtra.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "https://maaisatraders.com",
      "x-default": "https://maaisatraders.com",
    },
  },
  other: {
    "product:section": "Electricals",
    "product:tag": "Authorized Distributor, Electricals, Pune, Maharashtra",
  }
};

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Maaisa Traders India Pvt. LTD.",
    "image": "https://res.cloudinary.com/de6u5kbiw/image/upload/v1772447140/maaisa/Maaisa_wxdvqt.png",
    "@id": "https://maaisatraders.com",
    "url": "https://maaisatraders.com",
    "telephone": "+91-9890200222",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Office No 301 & 302, 41 Elite, Kalewadi Main Road, Tathawade",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411033",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.6161, // Approximate for Tathawade
      "longitude": 73.7441
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

  const searchBoxJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://maaisatraders.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://maaisatraders.com/product?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Service Structured Data for Contracting/Work
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Electrical Contracting & Electric Works",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maaisa Traders India Pvt. LTD."
    },
    "areaServed": "Maharashtra",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Electrical Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Maintenance Contracts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Wiring & Setup"
          }
        }
      ]
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchBoxJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HomeClient />
    </main>
  );
}
