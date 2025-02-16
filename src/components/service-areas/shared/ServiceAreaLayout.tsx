
import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import ServicesList from "./ServicesList";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import { motion } from "framer-motion";
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";
import { createRatingSchema } from "@/components/meta/schema/RatingSchema";

interface ServiceAreaLayoutProps {
  title: string;
  description: string;
  areaName: string;
  schema?: object;
}

const ServiceAreaLayout = ({ title, description, areaName, schema }: ServiceAreaLayoutProps) => {
  const { data: settings, isLoading } = useSettings();

  // Add schema data
  const faqSchema = createFAQSchema({
    questions: [
      {
        question: `What areas of ${areaName} do you serve?`,
        answer: `We provide comprehensive locksmith services throughout all of ${areaName}, NJ and surrounding areas.`
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

  const schemas = [faqSchema, ratingSchema, schema].filter(Boolean);

  return (
    <PageLayout
      title={title}
      description={description}
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
          <ServiceAreaHero areaName={areaName} isLoading={isLoading} />
          <ServicesList areaName={areaName} />
          <ServiceAreaFeatures />
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ServiceAreaLayout;
