import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "24/7 Locksmith Services in North Bergen",
  "description": "Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    }
  }
};

const Index = () => {
  return (
    <PageLayout
      title="24/7 Locksmith Services in North Bergen"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service."
      schema={schema}
      heroTitle="Your Trusted 24/7 Emergency Locksmith in North Bergen"
      heroDescription="Professional, reliable, and fast locksmith services when you need them most. Licensed and insured experts ready to help."
    >
      <HeroSection />
      <TrustBadgesSection />
      <ServicesSection />
      <EmergencyServicesSection />
      <ProcessSection />
      <AboutSection />
      <ServiceAreasSection />
      <ReviewsSection />
      <FAQSection />
    </PageLayout>
  );
};

export default Index;