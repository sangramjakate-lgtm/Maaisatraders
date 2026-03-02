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
  title: "Maaisa Traders India Pvt. LTD. — Authorized Distribution & Electric Works",
  description:
    "Maaisa Traders India Pvt. Ltd. provides the best range of electric fans, water heaters, geysers, water purifiers, and elite electric work with effective and timely delivery.",
  keywords: [
    "Maaisa Traders India Pvt. LTD.",
    "Authorized Dealer",
    "Electric Work",
    "Electricals",
    "Premium Distributor",
    "electric fans",
    "water heater",
    "Pune",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
