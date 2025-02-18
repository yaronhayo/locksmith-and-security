
import { motion } from "framer-motion";
import ServiceAreaInfo from "./ServiceAreaInfo";
import ServicesList from "./ServicesList";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import ServiceAreaMap from "./ServiceAreaMap";
import ServiceAreaReviews from "./ServiceAreaReviews";
import ServiceAreaFAQ from "./ServiceAreaFAQ";
import { FAQSchema } from "@/types/schema";
import { Review } from "@/types/reviews";

interface ServiceAreaContentProps {
  locationName: string;
  displayedReviews: Review[];
  isLoading: boolean;
  totalReviews: number;
  faqSchema?: FAQSchema;
}

const ServiceAreaContent = ({ 
  locationName, 
  displayedReviews, 
  isLoading, 
  totalReviews,
  faqSchema 
}: ServiceAreaContentProps) => {
  return (
    <motion.div 
      className="container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-12 md:gap-20">
        <ServiceAreaMap locationName={locationName} />
        <ServiceAreaInfo locationName={locationName} />
        <ServicesList areaName={locationName} />
        <ServiceAreaFeatures />
        <ServiceAreaReviews
          locationName={locationName}
          displayedReviews={displayedReviews}
          isLoading={isLoading}
          totalReviews={totalReviews}
        />
        {faqSchema && faqSchema.data.mainEntity && (
          <ServiceAreaFAQ 
            faqSchema={faqSchema} 
            locationName={locationName}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ServiceAreaContent;
