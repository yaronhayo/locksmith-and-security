import PageLayout from "@/components/layouts/PageLayout";
import CarKeyProgramHero from "@/components/sections/CarKeyProgramHero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/car-key-program/ServiceDescription";
import RealWorldExamples from "@/components/services/car-key-program/RealWorldExamples";
import EmergencyCallout from "@/components/services/car-key-program/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Key } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Key Programming Service in North Bergen",
  "description": "Professional car key programming services for all vehicle makes and models. Expert programming of transponder keys and key fobs.",
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

const CarKeyProgramPage = () => {
  return (
    <PageLayout
      title="Car Key Programming Service North Bergen | Professional Auto Locksmith"
      description="Expert car key programming services in North Bergen. We program transponder keys, smart keys, and key fobs for all vehicle makes and models. Licensed and insured specialists."
      schema={schema}
    >
      <CarKeyProgramHero />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Car Key Programming Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Key className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transponder Keys</h3>
              <p className="text-gray-600">Expert programming of transponder chips for enhanced vehicle security.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Key className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Keys</h3>
              <p className="text-gray-600">Professional programming of smart keys and proximity fobs for modern vehicles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Key className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Key Fobs</h3>
              <p className="text-gray-600">Complete programming solutions for remote key fobs and entry systems.</p>
            </div>
          </div>
        </div>
      </section>
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

export default CarKeyProgramPage;