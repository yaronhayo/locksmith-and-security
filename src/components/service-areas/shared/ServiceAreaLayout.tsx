
import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import ServicesList from "./ServicesList";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import { motion } from "framer-motion";
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";
import { createRatingSchema } from "@/components/meta/schema/RatingSchema";
import { useLocations } from "@/hooks/useLocations";

interface ServiceAreaLayoutProps {
  areaSlug: string;
}

const ServiceAreaLayout = ({ areaSlug }: ServiceAreaLayoutProps) => {
  const { data: settings, isLoading: settingsLoading } = useSettings();
  const { data: locations, isLoading: locationsLoading } = useLocations();

  const location = locations?.find(loc => loc.slug === areaSlug);

  // Add schema data
  const faqSchema = createFAQSchema({
    questions: [
      {
        question: `What areas of ${location?.name || ''} do you serve?`,
        answer: `We provide comprehensive locksmith services throughout all of ${location?.name || ''}, NJ and surrounding areas.`
      },
      {
        question: "Are you available 24/7 for emergencies?",
        answer: "Yes, we offer 24/7 emergency locksmith services for all residential, commercial, and automotive needs."
      },
      {
        question: "How quickly can you arrive?",
        answer: "We typically arrive within 20-30 minutes for emergency calls in our service area."
      }
    ]
  });

  const ratingSchema = createRatingSchema({
    ratingValue: 4.8,
    reviewCount: 150,
    name: settings?.company_name || "Locksmith & Security LLC"
  });

  const schemas = [faqSchema, ratingSchema].filter(Boolean);

  if (!location) {
    return null; // Or a 404 component
  }

  return (
    <PageLayout
      title={location.title}
      description={location.description}
      schema={schemas}
      className="py-12 md:py-20"
    >
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-12 md:gap-20">
          <ServiceAreaHero areaName={location.name} isLoading={settingsLoading || locationsLoading} />
          <ServicesList areaName={location.name} />
          <ServiceAreaFeatures />
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ServiceAreaLayout;
