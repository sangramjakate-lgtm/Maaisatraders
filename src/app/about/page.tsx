import dynamic from "next/dynamic";
import { Metadata } from "next";

const AboutClient = dynamic(() => import("@/components/sections/AboutClient").then(mod => mod.AboutClient), {
    ssr: true,
});

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Maaisa Traders India Pvt. Ltd., pulse-setters in authorized electrical distribution since 2014. Discover our mission, our leadership, and why we are Pune's preferred electrical partners.",
    openGraph: {
        title: "About Us | Maaisa Traders India",
        description: "A legacy of authorized distribution and electrical expertise in Maharashtra.",
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
