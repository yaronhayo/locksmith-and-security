
import { memo } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FAQSchema } from "@/types/schema";
import { Card, CardContent } from "@/components/ui/card";
import PageLoading from "@/components/layouts/PageLoading";
import ServiceAreaContent from "./ServiceAreaContent";
import { useServiceAreaData } from "./hooks/useServiceAreaData";
import MetaTags from "@/components/layouts/MetaTags";

interface ServiceAreaLayoutProps {
  areaSlug: string;
}

const ServiceAreaLayout = memo(({ areaSlug }: ServiceAreaLayoutProps) => {
  const {
    location,
    schemas,
    displayedReviews,
    reviewsLoading,
    totalReviews,
    faqSchema,
    isLoading
  } = useServiceAreaData(areaSlug);

  if (isLoading) {
    return <PageLoading type="skeleton" />;
  }

  if (!location) {
    return null;
  }

  // Create optimized meta title and description
  const pageTitle = `Locksmith in ${location.name}, NJ | 24/7 Emergency Service | Quick Response`;
  const pageDescription = `Locked out in ${location.name}? Our local locksmiths arrive in 20-30 minutes for home, business & auto emergencies. Licensed & insured service, fair pricing.`;
  
  // Enhanced service area schema attributes
  const localSEOAttributes = {
    geoRegion: "US-NJ",
    geoPlaceName: location.name,
    geoPosition: `${location.lat};${location.lng}`,
    icbm: `${location.lat}, ${location.lng}`
  };

  // Keywords specific to this service area
  const areaKeywords = `locksmith ${location.name}, 24/7 locksmith ${location.name} NJ, emergency locksmith ${location.name}, residential locksmith ${location.name}, commercial locksmith ${location.name}, automotive locksmith ${location.name}, lock repair ${location.name}, lock installation ${location.name}`;

  return (
    <>
      <MetaTags 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`/service-areas/${areaSlug}`}
        schemas={schemas}
        keywords={areaKeywords}
        {...localSEOAttributes}
      />
      
      <PageLayout
        title={pageTitle}
        description={pageDescription}
        heroTitle={`Professional Locksmith Services in ${location.name}, NJ`}
        heroDescription={`24/7 expert locksmith services for residential, commercial, and automotive needs in ${location.name}. Licensed, insured, and locally trusted.`}
      >
        <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 overflow-visible">
          <Breadcrumbs />
          
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
                  faqSchema={faqSchema as FAQSchema}
                />
              </CardContent>
            </div>
          </Card>
        </div>
      </PageLayout>
    </>
  );
});

ServiceAreaLayout.displayName = 'ServiceAreaLayout';

export default ServiceAreaLayout;
