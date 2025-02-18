import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import ServicesList from "./ServicesList";
import ServiceAreaFeatures from "./ServiceAreaFeatures";
import { motion } from "framer-motion";
import { createFAQSchema } from "@/components/meta/schema/FAQSchema";
import { createRatingSchema } from "@/components/meta/schema/RatingSchema";
import { createLocationSchema } from "@/components/meta/schema/LocationSchema";
import { createBreadcrumbSchema } from "@/components/meta/schema/BreadcrumbSchema";
import { useLocations } from "@/hooks/useLocations";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewsContainer from "@/components/reviews/ReviewsContainer";
import { useReviews } from "@/components/reviews/useReviews";
import { Clock, Shield, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceAreaLayoutProps {
  areaSlug: string;
}

const ServiceAreaLayout = ({ areaSlug }: ServiceAreaLayoutProps) => {
  const { data: settings, isLoading: settingsLoading } = useSettings();
  const { data: locations, isLoading: locationsLoading } = useLocations();
  const location = locations?.find(loc => loc.slug === areaSlug);
  const { displayedReviews, isLoading: reviewsLoading, totalReviews } = useReviews(location?.name);

  const breadcrumbSchema = createBreadcrumbSchema({
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Service Areas", item: "/service-areas" },
      { name: location?.name || "", item: `/service-areas/${areaSlug}` }
    ],
    baseUrl: "https://247locksmithandsecurity.com"
  });

  const serviceSchema = {
    type: 'Service',
    data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Locksmith Services in ${location?.name || ''}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": settings?.company_name,
        "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
        "description": `Professional locksmith services in ${location?.name || ''}, NJ`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location?.name,
          "addressRegion": "NJ",
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": location?.name,
        "sameAs": `https://en.wikipedia.org/wiki/${location?.name?.replace(/ /g, '_')},_New_Jersey`
      }
    }
  };

  const locationSchema = location ? createLocationSchema({
    name: location.name,
    description: location.description,
    latitude: location.lat,
    longitude: location.lng,
    areaServed: location.name,
    companyName: settings?.company_name || "Locksmith & Security LLC",
    address: settings?.company_address || "",
    phone: settings?.company_phone || ""
  }) : null;

  const faqSchema = createFAQSchema({
    questions: [
      {
        question: `What areas of ${location?.name || ''} do you serve?`,
        answer: `We provide comprehensive locksmith services throughout all of ${location?.name || ''}, NJ and surrounding areas.`
      },
      {
        question: "Are you available 24/7 for emergencies?",
        answer: "Yes, we offer 24/7 emergency locksmith services for all residential, commercial, and automotive needs."
      },
      {
        question: "How quickly can you arrive?",
        answer: "We typically arrive within 20-30 minutes for emergency calls in our service area."
      },
      {
        question: `What are your most popular services in ${location?.name || ''}?`,
        answer: "Our most requested services include emergency lockouts, car key replacement, and commercial lock installation."
      },
      {
        question: "Do you provide written estimates?",
        answer: "Yes, we provide detailed written estimates before beginning any work, ensuring complete transparency."
      }
    ]
  });

  const schemas = [
    breadcrumbSchema,
    serviceSchema,
    locationSchema,
    faqSchema
  ].filter(Boolean);

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
          
          <section className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Our Services in {location.name}</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Trust your local locksmith in {location.name}, providing professional services 
                for residential, commercial, and automotive security needs. We're available 
                24/7 for emergencies and pride ourselves on fast response times.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    Service Coverage
                  </h3>
                  <p className="text-gray-600">
                    We provide comprehensive locksmith services throughout {location.name} and 
                    surrounding areas, ensuring quick response times and professional service.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                    <Clock className="h-5 w-5" />
                    Response Times
                  </h3>
                  <p className="text-gray-600">
                    Our average response time in {location.name} is 20-30 minutes, 
                    ensuring you get help when you need it most.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild className="flex items-center gap-2">
                  <a href="tel:2017482070">
                    <Phone className="h-5 w-5" />
                    Call (201) 748-2070
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/book-online">Book Online</a>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">24/7 Availability</h4>
                  <p className="text-sm text-gray-600">Emergency service available around the clock</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Licensed & Insured</h4>
                  <p className="text-sm text-gray-600">Professional, certified technicians</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg text-center">
                  <MapPin className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Local Service</h4>
                  <p className="text-sm text-gray-600">Serving all of {location.name}</p>
                </div>
              </div>
            </div>
          </section>

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

          <section className="py-12 bg-gray-50 rounded-xl" id="faq">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions About Our {location.name} Services
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqSchema.data.mainEntity.map((faq: any, index: number) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{faq.name}</h3>
                    <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ServiceAreaLayout;
