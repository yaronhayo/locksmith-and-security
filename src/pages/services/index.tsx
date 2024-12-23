import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Professional Locksmith Services | Locksmith & Security LLC</title>
        <meta name="description" content="Expert locksmith services in North Bergen including residential, commercial, and automotive solutions. Available 24/7 for all your security needs." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="hero-gradient py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                Professional Locksmith Services
              </h1>
              <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
                Comprehensive security solutions for residential, commercial, and automotive needs
              </p>
            </div>
          </div>
          <ServicesSection />
          <EmergencyServicesSection />
          <TrustBadgesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;