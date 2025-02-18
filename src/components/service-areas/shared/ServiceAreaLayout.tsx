
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
import { useLocations } from "@/hooks/useLocations";
import ReviewsSection from "@/components/reviews/ReviewsSection";

interface ServiceAreaLayoutProps {
  areaSlug: string;
}

const ServiceAreaLayout = ({ areaSlug }: ServiceAreaLayoutProps) => {
  const { data: settings, isLoading: settingsLoading } = useSettings();
  const { data: locations, isLoading: locationsLoading } = useLocations();

  const location = locations?.find(loc => loc.slug === areaSlug);

  // Location-specific FAQ schema
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

  // Location-specific rating schema
  const ratingSchema = createRatingSchema({
    ratingValue: 4.8,
    reviewCount: 150,
    name: settings?.company_name || "Locksmith & Security LLC"
  });

  // Location schema
  const locationSchema = createLocationSchema({
    name: location?.name || '',
    description: location?.description || '',
    latitude: location?.lat || 0,
    longitude: location?.lng || 0,
    areaServed: location?.name || '',
    companyName: settings?.company_name || "Locksmith & Security LLC",
    address: settings?.company_address || "",
    phone: settings?.company_phone || ""
  });

  const schemas = [faqSchema, ratingSchema, locationSchema].filter(Boolean);

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
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-12 md:gap-20">
          <ServiceAreaHero areaName={location.name} isLoading={settingsLoading || locationsLoading} />
          <ServicesList areaName={location.name} />
          <ServiceAreaFeatures />
          
          {/* Location-specific Reviews Section */}
          <section className="py-12" id="reviews">
            <h2 className="text-3xl font-bold text-center mb-8">
              Customer Reviews in {location.name}
            </h2>
            <ReviewsSection location={location.name} />
          </section>

          {/* Location-specific FAQ Section */}
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
