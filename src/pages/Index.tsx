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

const Index = () => {
  return (
    <PageLayout
      title="24/7 Locksmith Services in North Bergen"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service."
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