
import { motion } from "framer-motion";
import type { ServiceAreaLocation } from "../types";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import ServiceAreaInfo from "./ServiceAreaInfo";
import ServiceAreaMap from "./ServiceAreaMap";
import ServicesList from "./ServicesList";
import ServiceAreaReviews from "./ServiceAreaReviews";
import ServiceAreaFAQ from "./ServiceAreaFAQ";
import { FAQSchema } from "@/types/schema";

interface ServiceAreaContentProps {
  locationName: string;
  displayedReviews: Review[];
  isLoading: boolean;
  totalReviews: number;
  faqSchema: FAQSchema;
}

const ServiceAreaContent = ({ 
  locationName,
  displayedReviews,
  isLoading,
  totalReviews,
  faqSchema
}: ServiceAreaContentProps) => {
  return (
    <div className="space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <ServiceAreaInfo locationName={locationName} />
        </div>
      </motion.section>

      <ServiceAreaFeatures locationName={locationName} />
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <ServicesList areaName={locationName} />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <ServiceAreaMap locationName={locationName} />
        </div>
      </motion.section>

      <ServiceAreaReviews 
        locationName={locationName}
        displayedReviews={displayedReviews}
        isLoading={isLoading}
        totalReviews={totalReviews}
      />
      <ServiceAreaFAQ locationName={locationName} faqSchema={faqSchema} />
    </div>
  );
};

export default ServiceAreaContent;
