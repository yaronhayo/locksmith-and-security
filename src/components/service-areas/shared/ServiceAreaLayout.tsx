
import { memo } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FAQSchema } from "@/types/schema";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import PageLoading from "@/components/layouts/PageLoading";
import ServiceAreaContent from "./ServiceAreaContent";
import { useServiceAreaData } from "./hooks/useServiceAreaData";

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
    >
      <Helmet>
        <link rel="canonical" href={`https://247locksmithandsecurity.com/service-areas/${areaSlug}`} />
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content={location.name} />
        <meta name="geo.position" content={`${location.lat};${location.lng}`} />
        <meta name="ICBM" content={`${location.lat}, ${location.lng}`} />
      </Helmet>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 overflow-visible">
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
  );
});

ServiceAreaLayout.displayName = 'ServiceAreaLayout';

export default ServiceAreaLayout;
