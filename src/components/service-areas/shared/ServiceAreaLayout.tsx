
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import { useLocations } from "@/hooks/useLocations";
import { useReviews } from "@/components/reviews/useReviews";
import { createServiceAreaSchemas } from "./ServiceAreaSchemas";
import ServiceAreaContent from "./ServiceAreaContent";
import { FAQSchema } from "@/types/schema";
import { Card, CardContent } from "@/components/ui/card";
import { memo, useMemo } from "react";
import PageLoading from "@/components/layouts/PageLoading";

interface ServiceAreaLayoutProps {
  areaSlug: string;
}

const ServiceAreaLayout = memo(({ areaSlug }: ServiceAreaLayoutProps) => {
  const { data: settings, isLoading: settingsLoading } = useSettings();
  const { data: locations, isLoading: locationsLoading } = useLocations();
  
  const location = useMemo(() => {
    return locations?.find(loc => loc.slug === areaSlug);
  }, [locations, areaSlug]);
  
  const { displayedReviews, isLoading: reviewsLoading, totalReviews } = useReviews(location?.name);

  const schemas = useMemo(() => {
    return createServiceAreaSchemas(location as any, settings, areaSlug);
  }, [location, settings, areaSlug]);
  
  const rawFaqSchema = useMemo(() => {
    return schemas.find(schema => schema.type === 'FAQPage');
  }, [schemas]);
  
  const faqSchema = rawFaqSchema as FAQSchema | undefined;
  
  const isLoading = settingsLoading || locationsLoading;

  if (isLoading) {
    return <PageLoading type="skeleton" />;
  }

  if (!location) {
    return null;
  }

  // Create optimized meta description (staying within 150-160 chars)
  const pageTitle = `Top-Rated Locksmith in ${location.name}, NJ | 24/7 Emergency Service`;
  const pageDescription = `Professional locksmith services in ${location.name}. Licensed & insured experts providing residential, commercial & auto solutions with fast 24/7 response.`;

  return (
    <PageLayout
      title={pageTitle}
      description={pageDescription}
      schema={schemas}
      heroTitle={`Locksmith Services in ${location.name}, NJ`}
      heroDescription={`Professional 24/7 locksmith services for residential, commercial, and automotive needs in ${location.name}`}
      hideBreadcrumbs={false} // Let PageLayout handle breadcrumbs
    >
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 overflow-visible">
        <Card className="mt-4 sm:mt-6 md:mt-8 border-secondary/20 shadow-md overflow-visible">
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-3 sm:p-4 md:p-6 lg:p-8 overflow-visible">
            <CardContent className="p-0 max-w-full overflow-visible">
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
            </CardContent>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
});

ServiceAreaLayout.displayName = 'ServiceAreaLayout';

export default ServiceAreaLayout;
