
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import ServicesList from "./ServicesList";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import { motion } from "framer-motion";
import { useLocations } from "@/hooks/useLocations";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { useReviews } from "@/components/reviews/useReviews";
import { createServiceAreaSchemas } from "./ServiceAreaSchemas";
import ServiceAreaInfo from "./ServiceAreaInfo";
import ServiceAreaFAQ from "./ServiceAreaFAQ";

interface ServiceAreaLayoutProps {
  areaSlug: string;
}

const ServiceAreaLayout = ({ areaSlug }: ServiceAreaLayoutProps) => {
  const { data: settings, isLoading: settingsLoading } = useSettings();
  const { data: locations, isLoading: locationsLoading } = useLocations();
  const location = locations?.find(loc => loc.slug === areaSlug);
  const { displayedReviews, isLoading: reviewsLoading, totalReviews } = useReviews(location?.name);

  const schemas = createServiceAreaSchemas(location, settings, areaSlug);

  if (!location) {
    return null;
  }

  return (
    <PageLayout
      title={`${location.name} Locksmith Services | 24/7 Emergency Service | Licensed & Insured`}
      description={`Professional locksmith services in ${location.name}, NJ. Fast 24/7 emergency response for residential, commercial, and automotive locksmith needs. Licensed & insured.`}
      schema={schemas}
      className="py-12 md:py-20"
    >
      <Breadcrumbs />
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-12 md:gap-20">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
                alt={`Professional locksmith services in ${location.name}, New Jersey`}
                className="object-cover w-full h-full"
                loading="lazy"
                width={1200}
                height={675}
              />
            </AspectRatio>
          </div>

          <ServiceAreaHero areaName={location.name} isLoading={settingsLoading || locationsLoading} />
          <ServiceAreaInfo locationName={location.name} />
          <ServicesList areaName={location.name} />
          <ServiceAreaFeatures />
          
          <section className="py-12" id="reviews">
            <h2 className="text-3xl font-bold text-center mb-8">
              Customer Reviews in {location.name}
            </h2>
            <ReviewsContainer
              location={location.name}
              displayedReviews={displayedReviews}
              isLoading={reviewsLoading}
              totalReviews={totalReviews}
            />
          </section>

          <ServiceAreaFAQ 
            faqSchema={schemas[3]} 
            locationName={location.name}
          />
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ServiceAreaLayout;
