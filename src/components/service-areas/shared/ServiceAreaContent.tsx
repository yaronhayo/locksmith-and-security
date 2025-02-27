
import { useSettings } from "@/hooks/useSettings";
import { useLocations } from "@/hooks/useLocations";
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
  const { data: settings } = useSettings();
  const { data: locations } = useLocations();

  return (
    <div className="container mx-auto px-4 space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-2 gap-8 items-start"
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
      
      <ServiceAreaForm />
      
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
