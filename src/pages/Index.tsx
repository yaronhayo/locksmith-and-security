import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>24/7 Locksmith Services in North Bergen | Locksmith & Security LLC</title>
        <meta name="description" content="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service." />
      </Helmet>
      <Header />
      <HeroSection />
      <TrustBadgesSection />
      <ServicesSection />
      <EmergencyServicesSection />
      <ProcessSection />
      <AboutSection />
      <ServiceAreasSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;