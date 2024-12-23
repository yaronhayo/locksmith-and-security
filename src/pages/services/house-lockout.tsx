import PageLayout from "@/components/layouts/PageLayout";
import ServiceDescription from "@/components/services/house-lockout/ServiceDescription";
import RealWorldExamples from "@/components/services/house-lockout/RealWorldExamples";
import CommonQuestions from "@/components/services/house-lockout/CommonQuestions";
import EmergencyCallout from "@/components/services/house-lockout/EmergencyCallout";
import { Lock } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Emergency House Lockout Service in North Bergen",
  "description": "Professional residential lockout services available 24/7 in North Bergen and surrounding areas. Fast response times and licensed technicians.",
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

const HouseLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 House Lockout Service North Bergen | Emergency Residential Locksmith"
      description="Professional house lockout services in North Bergen. Available 24/7 with 15-30 minute response time. Licensed and insured residential locksmith specialists ready to help."
      schema={schema}
    >
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-primary h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                24/7 Emergency House Lockout Service in North Bergen
              </h1>
            </div>
            
            <ServiceDescription />
            <RealWorldExamples />
            <CommonQuestions />
            <EmergencyCallout />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HouseLockoutPage;