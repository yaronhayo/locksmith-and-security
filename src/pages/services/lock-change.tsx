import PageLayout from "@/components/layouts/PageLayout";
import LockChangeHero from "@/components/sections/LockChangeHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/lock-change/ServiceDescription";
import RealWorldExamples from "@/components/services/lock-change/RealWorldExamples";
import EmergencyCallout from "@/components/services/lock-change/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Lock Change Service in North Bergen",
  "description": "Expert lock change and replacement services available 24/7 in North Bergen and surrounding areas. Licensed technicians and high-security solutions.",
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

const LockChangePage = () => {
  return (
    <PageLayout
      title="24/7 Lock Change Service North Bergen | Professional Lock Replacement"
      description="Professional lock change and replacement services in North Bergen. Available 24/7 with fast response times. Licensed and insured lock installation specialists."
      schema={schema}
    >
      <LockChangeHero />
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

export default LockChangePage;