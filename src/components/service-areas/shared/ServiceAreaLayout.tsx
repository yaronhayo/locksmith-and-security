
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import { useLocations } from "@/hooks/useLocations";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useReviews } from "@/components/reviews/useReviews";
import { createServiceAreaSchemas } from "./ServiceAreaSchemas";
import ServiceAreaContent from "./ServiceAreaContent";
import { FAQSchema } from "@/types/schema";

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

  const rawFaqSchema = schemas.find(schema => schema.type === 'FAQPage');
  const faqSchema = rawFaqSchema as FAQSchema | undefined;

  return (
    <PageLayout
      title={`${location.name} Locksmith Services | 24/7 Emergency Service | Licensed & Insured`}
      description={`Professional locksmith services in ${location.name}, NJ. Fast 24/7 emergency response for residential, commercial, and automotive locksmith needs. Licensed & insured.`}
      schema={schemas}
      className="py-12 md:py-20"
    >
      <Breadcrumbs />
      <ServiceAreaHero areaName={location.name} isLoading={settingsLoading || locationsLoading} />
      <ServiceAreaContent 
        locationName={location.name}
        displayedReviews={displayedReviews}
        isLoading={reviewsLoading}
        totalReviews={totalReviews}
        faqSchema={faqSchema}
      />
    </PageLayout>
  );
};

export default ServiceAreaLayout;
