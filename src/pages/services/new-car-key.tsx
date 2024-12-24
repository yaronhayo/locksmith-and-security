import PageLayout from "@/components/layouts/PageLayout";
import NewCarKeyHero from "@/components/sections/NewCarKeyHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/new-car-key/ServiceDescription";
import RealWorldExamples from "@/components/services/new-car-key/RealWorldExamples";
import EmergencyCallout from "@/components/services/new-car-key/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Key } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Key Replacement Service in North Bergen",
  "description": "Professional car key cutting and programming services available 24/7 in North Bergen and surrounding areas. All vehicle makes and models.",
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

const NewCarKeyPage = () => {
  return (
    <PageLayout
      title="Car Key Replacement Service North Bergen | New Car Keys Cut & Programmed"
      description="Professional car key replacement services in North Bergen. We cut and program keys for all vehicle makes and models. Available 24/7 with mobile service."
      schema={schema}
    >
      <NewCarKeyHero />
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

export default NewCarKeyPage;