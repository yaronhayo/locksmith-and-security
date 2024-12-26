import PageLayout from "@/components/layouts/PageLayout";
import BusinessLockChangeHero from "@/components/sections/BusinessLockChangeHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/business-lock-change/ServiceDescription";
import RealWorldExamples from "@/components/services/business-lock-change/RealWorldExamples";
import EmergencyCallout from "@/components/services/business-lock-change/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Lock } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Lock Change Services in North Bergen",
  "description": "Professional business lock change services available in North Bergen and surrounding areas. Fast response times and licensed technicians.",
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

const BusinessLockChangePage = () => {
  return (
    <PageLayout
      title="Business Lock Change Services North Bergen | Commercial Lock Change"
      description="Professional business lock change services in North Bergen. Available 24/7 with fast response time. Licensed and insured commercial locksmith specialists ready to help."
      schema={schema}
    >
      <BusinessLockChangeHero />
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

export default BusinessLockChangePage;