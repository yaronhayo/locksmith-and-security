
import { motion } from "framer-motion";
import ServiceAreaMap from "./ServiceAreaMap";
import ServiceAreaInfo from "./ServiceAreaInfo";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import ServiceAreaForm from "./ServiceAreaForm";
import ServiceAreaFAQ from "./ServiceAreaFAQ";
import ServiceAreaReviews from "./ServiceAreaReviews";
import { FAQSchema } from "@/types/schema";
import ServicesList from "./ServicesList";
import { Review } from "@/types/reviews";
import ServiceAreaTestimonial from "./ServiceAreaTestimonial";
import ServiceAreaEmergency from "./ServiceAreaEmergency";
import ServiceAreaNeighborhoods from "./ServiceAreaNeighborhoods";
import ServiceAreaSecurityTips from "./ServiceAreaSecurityTips";
import ServiceAreaHero from "./ServiceAreaHero";

interface ServiceAreaContentProps {
  locationName: string;
  locationDescription?: string;
  locationSlug: string;
  locationCoordinates: {lat: number, lng: number};
  displayedReviews?: Review[];
  isLoading?: boolean;
  totalReviews?: number;
  faqSchema?: FAQSchema;
}

const ServiceAreaContent = ({
  locationName,
  locationDescription,
  locationSlug,
  locationCoordinates,
  displayedReviews,
  isLoading: reviewsLoading,
  totalReviews,
  faqSchema
}: ServiceAreaContentProps) => {
  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
        <ServiceAreaHero areaName={locationName} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start"
      >
        <ServiceAreaInfo 
          locationName={locationName} 
          locationDescription={locationDescription}
        />
        <div className="lg:sticky lg:top-24">
          <ServiceAreaMap 
            locationName={locationName} 
            lat={locationCoordinates.lat} 
            lng={locationCoordinates.lng} 
          />
        </div>
      </motion.div>

      <ServiceAreaEmergency locationName={locationName} />
      
      <ServiceAreaFeatures />
      
      <ServicesList areaName={locationName} />
      
      <ServiceAreaNeighborhoods locationName={locationName} locationSlug={locationSlug} />
      
      <ServiceAreaSecurityTips locationName={locationName} />
      
      <ServiceAreaTestimonial locationName={locationName} />
      
      <ServiceAreaForm locationName={locationName} />
      
      {displayedReviews && (
        <ServiceAreaReviews
          locationName={locationName}
          displayedReviews={displayedReviews}
          isLoading={reviewsLoading || false}
          totalReviews={totalReviews || 0}
        />
      )}
      
      {faqSchema && <ServiceAreaFAQ locationName={locationName} faqSchema={faqSchema} />}
    </div>
  );
};

export default ServiceAreaContent;
