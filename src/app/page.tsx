import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { WhatIsThisSection } from "@/components/landing/WhatIsThisSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";



export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <HeroSection />
                <BenefitsSection />
                <AboutSection />
                <WhatIsThisSection />
                <ServicesSection />
                <TestimonialsSection />
                <FAQSection />
                <OfferSection />
            </main>

            <Footer />
        </div>
    );
}
