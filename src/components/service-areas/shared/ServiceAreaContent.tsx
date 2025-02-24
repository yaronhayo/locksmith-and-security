
import { motion } from "framer-motion";
import type { ServiceAreaLocation } from "../types";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import ServiceAreaInfo from "./ServiceAreaInfo";
import ServiceAreaMap from "./ServiceAreaMap";
import ServicesList from "./ServicesList";
import ServiceAreaReviews from "./ServiceAreaReviews";
import ServiceAreaFAQ from "./ServiceAreaFAQ";

interface ServiceAreaContentProps {
  location: ServiceAreaLocation;
}

const ServiceAreaContent = ({ location }: ServiceAreaContentProps) => {
  return (
    <div className="space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <ServiceAreaInfo location={location} />
        </div>
      </motion.section>

      <ServiceAreaFeatures location={location} />
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <ServicesList location={location} />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <ServiceAreaMap location={location} />
        </div>
      </motion.section>

      <ServiceAreaReviews location={location.name} />
      <ServiceAreaFAQ location={location} />
    </div>
  );
};

export default ServiceAreaContent;
