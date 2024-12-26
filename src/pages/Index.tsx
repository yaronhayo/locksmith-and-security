import React from "react";
import PageLayout from "@/components/layouts/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import SkipLink from "@/components/ui/skip-link";

const IndexPage = () => {
  return (
    <PageLayout
      title="24/7 Locksmith Services in North Bergen | Emergency Locksmith"
      description="Professional locksmith services in North Bergen. Available 24/7 with fast response times. Licensed and insured specialists for residential, commercial, and automotive needs."
    >
      <SkipLink />
      <main id="main-content" role="main" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUs />
        <ReviewsSection />
        <ServiceAreasSection />
        <EmergencyServicesSection />
        <TrustBadgesSection />
      </main>
    </PageLayout>
  );
};

export default IndexPage;