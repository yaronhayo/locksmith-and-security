import PageLayout from "@/components/layouts/PageLayout";
import CarLockoutHero from "@/components/sections/CarLockoutHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/car-lockout/ServiceDescription";
import RealWorldExamples from "@/components/services/car-lockout/RealWorldExamples";
import EmergencyCallout from "@/components/services/car-lockout/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Car } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Car Lockout Service in North Bergen",
  "description": "Professional car lockout services available 24/7 in North Bergen and surrounding areas. Fast response times and licensed technicians.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "telephone": "+15513037874",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7995",
        "longitude": "-74.0246"
      },
      "geoRadius": "30mi"
    }
  }
};

const CarLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 Car Lockout Service North Bergen | Emergency Auto Locksmith"
      description="Professional car lockout services in North Bergen. Available 24/7 with 15-30 minute response time. Licensed and insured auto locksmith specialists ready to help."
      schema={schema}
    >
      <CarLockoutHero />
      <LockoutServices />
      <WhyChooseUs />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <ServiceDescription />
          <RealWorldExamples />
          <EmergencyCallout />
        </div>
      </div>
      <FAQSection />
    </PageLayout>
  );
};

export default CarLockoutPage;