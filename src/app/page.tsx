import { HomeClient } from "@/components/sections/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maaisa Traders India Pvt. LTD. | Authorized Distribution & Electric Works",
  description: "Premier authorized distributors of Havells, Legrand, Polycab and more. Specialists in electric fans, cables, and comprehensive electric work across Maharashtra.",
  alternates: {
    canonical: "/",
  },
  other: {
    "product:section": "Electricals",
    "product:tag": "Authorized Distributor, Pune, Maharashtra",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchBoxJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
