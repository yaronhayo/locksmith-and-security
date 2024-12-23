import PageLayout from "@/components/layouts/PageLayout";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencyServicesSection from "@/components/sections/EmergencyServicesSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";

const ServicesPage = () => {
  return (
    <PageLayout
      title="Professional Locksmith Services"
      description="Expert locksmith services in North Bergen including residential, commercial, and automotive solutions. Available 24/7 for all your security needs."
    >
      <ServicesSection />
      <EmergencyServicesSection />
      <TrustBadgesSection />
    </PageLayout>
  );
};

export default ServicesPage;