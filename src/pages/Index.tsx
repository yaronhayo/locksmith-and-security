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
import ScrollToTop from "@/components/ScrollToTop";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>24/7 Locksmith Services in North Bergen | Locksmith & Security LLC</title>
        <meta name="description" content="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service." />
        <meta name="keywords" content="locksmith, North Bergen locksmith, 24/7 locksmith, emergency locksmith, residential locksmith, commercial locksmith, automotive locksmith" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EmergencyServicesSection />
        <ProcessSection />
        <ServiceAreasSection />
        <ReviewsSection />
        <FAQSection />
        <TrustBadgesSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;