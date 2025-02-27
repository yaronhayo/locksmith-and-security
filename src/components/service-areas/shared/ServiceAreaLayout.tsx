
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import { useLocations } from "@/hooks/useLocations";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useReviews } from "@/components/reviews/useReviews";
import { createServiceAreaSchemas } from "./ServiceAreaSchemas";
import ServiceAreaContent from "./ServiceAreaContent";
import { FAQSchema } from "@/types/schema";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

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

      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <Breadcrumbs />
        
        <Card className="mt-4 sm:mt-6 md:mt-8 border-secondary/20 shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 sm:p-6 md:p-8 lg:p-12">
            <CardContent className="p-0">
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
};

export default ServiceAreaLayout;
