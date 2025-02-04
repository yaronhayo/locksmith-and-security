import PageLayout from "@/components/layouts/PageLayout";
import BusinessLockoutHero from "@/components/sections/BusinessLockoutHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/business-lockout/ServiceDescription";
import RealWorldExamples from "@/components/services/business-lockout/RealWorldExamples";
import EmergencyCallout from "@/components/services/business-lockout/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Building2 } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Emergency Business Lockout Service in North Bergen",
  "description": "Professional commercial lockout services available 24/7 in North Bergen and surrounding areas. Fast response times and licensed technicians.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "telephone": "+12017482070",
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

const BusinessLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 Business Lockout Service North Bergen | Emergency Commercial Locksmith"
      description="Professional business lockout services in North Bergen. Available 24/7 with 15-30 minute response time. Licensed and insured commercial locksmith specialists ready to help."
      schema={schema}
    >
      <BusinessLockoutHero />
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

export default BusinessLockoutPage;