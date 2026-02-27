import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

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
  title: "MAAISA Group — Trusted Quality, Delivered with Care",
  description:
    "Maaisa Traders India Pvt. Ltd. provides the best range of electric fans, water heaters, geysers, water purifiers and other products with effective and timely delivery.",
  keywords: [
    "MAAISA Group",
    "Maaisa Traders",
    "electric fans",
    "water heater",
    "geyser",
    "water purifier",
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
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
