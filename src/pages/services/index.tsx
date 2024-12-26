import PageLayout from "@/components/layouts/PageLayout";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesFeatures from "@/components/sections/services/ServicesFeatures";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesCTA from "@/components/sections/services/ServicesCTA";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <PageLayout
      title="Professional Locksmith Services in North Bergen"
      description="Expert locksmith services including residential, commercial, and automotive solutions. Available 24/7 for all your security needs."
    >
      <ServicesHero />
      <ServicesFeatures />
      <ServicesGrid />
      <ServicesCTA />
    </PageLayout>
  );
};

export default ServicesPage;