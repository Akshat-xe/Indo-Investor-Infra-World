import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PropertiesSection from "@/components/PropertiesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import LocationsSection from "@/components/LocationsSection";
import EditorialSection from "@/components/EditorialSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  usePageSEO({
    title: "Indo Investor Infra World | Premium Real Estate Investment — Noida, Jewar & Dholera",
    description: "India's trusted real estate investment firm. RERA-verified residential plots, co-working pods, commercial offices & premium properties across Noida, Greater Noida, Jewar Airport Zone & Dholera Smart City. 25,500+ happy customers.",
    canonical: "/",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://indoinvestorinfraworld.com/#webpage",
        "url": "https://indoinvestorinfraworld.com/",
        "name": "Indo Investor Infra World | Premium Real Estate Investment",
        "isPartOf": { "@id": "https://indoinvestorinfraworld.com/#website" },
        "about": { "@id": "https://indoinvestorinfraworld.com/#organization" },
        "description": "Premium RERA-verified real estate investment opportunities across Noida, Jewar & Dholera Smart City.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://indoinvestorinfraworld.com/" }]
        }
      }
    ],
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <ProcessSection />
      <StatsSection />
      <LocationsSection />
      <EditorialSection />
      <TestimonialsSection />
      <NewsSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
