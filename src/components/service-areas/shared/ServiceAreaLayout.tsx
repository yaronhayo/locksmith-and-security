
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import { useLocations } from "@/hooks/useLocations";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useReviews } from "@/components/reviews/useReviews";
import { createServiceAreaSchemas } from "./ServiceAreaSchemas";
import ServiceAreaContent from "./ServiceAreaContent";
import { FAQSchema } from "@/types/schema";
import { Helmet } from "react-helmet";

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

  const pageTitle = `Top-Rated Locksmith in ${location.name}, NJ | 24/7 Emergency Service`;
  const pageDescription = `Professional locksmith services in ${location.name}, NJ. Licensed & insured experts providing residential, commercial & automotive locksmith solutions with fast 24/7 emergency response.`;

  return (
    <PageLayout
      title={pageTitle}
      description={pageDescription}
      schema={schemas}
      className="py-12 md:py-20"
    >
      <Helmet>
        <link rel="canonical" href={`https://247locksmithandsecurity.com/service-areas/${areaSlug}`} />
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content={location.name} />
        <meta name="geo.position" content={`${location.lat};${location.lng}`} />
        <meta name="ICBM" content={`${location.lat}, ${location.lng}`} />
      </Helmet>
      <Breadcrumbs />
      <ServiceAreaHero areaName={location.name} isLoading={settingsLoading || locationsLoading} />
      <ServiceAreaContent 
        locationName={location.name}
        locationDescription={location.description}
        locationSlug={areaSlug}
        locationCoordinates={{lat: location.lat, lng: location.lng}}
        displayedReviews={displayedReviews}
        isLoading={reviewsLoading}
        totalReviews={totalReviews}
        faqSchema={faqSchema}
      />
    </PageLayout>
  );
};

export default ServiceAreaLayout;
