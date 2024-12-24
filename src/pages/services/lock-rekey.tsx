import PageLayout from "@/components/layouts/PageLayout";
import LockRekeyHero from "@/components/sections/LockRekeyHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/lock-rekey/ServiceDescription";
import RealWorldExamples from "@/components/services/lock-rekey/RealWorldExamples";
import EmergencyCallout from "@/components/services/lock-rekey/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Key } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Lock Rekey Service in North Bergen",
  "description": "Expert lock rekeying services available 24/7 in North Bergen and surrounding areas. Fast, reliable service by licensed technicians.",
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
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "geoRadius": "30mi"
  }
};

const LockRekeyPage = () => {
  return (
    <PageLayout
      title="Professional Lock Rekey Service North Bergen | Expert Locksmith"
      description="Expert lock rekeying services in North Bergen. Available 24/7 with fast response time. Licensed and insured locksmith specialists ready to help."
      schema={schema}
    >
      <LockRekeyHero />
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

export default LockRekeyPage;