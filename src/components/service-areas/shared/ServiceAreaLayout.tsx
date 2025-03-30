
import { memo } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FAQSchema } from "@/types/schema";
import { Card, CardContent } from "@/components/ui/card";
import PageLoading from "@/components/layouts/PageLoading";
import ServiceAreaContent from "./ServiceAreaContent";
import { useServiceAreaData } from "./hooks/useServiceAreaData";
import ServiceAreaHead from "@/components/meta/ServiceAreaHead";

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
  const pageTitle = `Locksmith in ${location.name}, NJ | 24/7 Emergency Service`;
  const pageDescription = `Professional locksmith services in ${location.name}, NJ. Available 24/7 for residential, commercial & auto emergencies. Licensed & insured, fast response times.`;
  
  // Enhanced keywords specific to this service area
  const areaKeywords = `locksmith ${location.name}, 24/7 locksmith ${location.name} NJ, emergency locksmith ${location.name}, residential locksmith ${location.name}, commercial locksmith ${location.name}, automotive locksmith ${location.name}, lock repair ${location.name}, lock installation ${location.name}, security solutions ${location.name}`;

  // Get FAQs from the schema for SEO - with proper type checking
  const faqs = faqSchema?.data && 
    'mainEntity' in faqSchema.data ? 
    faqSchema.data.mainEntity.map((item: any) => ({
      question: item.name,
      answer: item.acceptedAnswer.text
    })) : [];

  // Get common locksmith services for schema
  const commonServices = [
    `Emergency Lockout Service in ${location.name}`,
    `Residential Lock Installation in ${location.name}`,
    `Commercial Security Solutions in ${location.name}`,
    `Car Key Replacement in ${location.name}`,
    `High-Security Lock Installation in ${location.name}`,
    `Lock Repair in ${location.name}`
  ];

  return (
    <>
      <ServiceAreaHead 
        areaName={location.name}
        title={pageTitle}
        description={pageDescription}
        keywords={areaKeywords}
        canonicalUrl={`/service-areas/${areaSlug}`}
        geoCoordinates={{
          latitude: location.lat,
          longitude: location.lng
        }}
        services={commonServices}
        faqs={faqs}
        modifiedDate={new Date().toISOString()}
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
