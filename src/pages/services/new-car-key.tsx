import PageLayout from "@/components/layouts/PageLayout";
import NewCarKeyHero from "@/components/sections/NewCarKeyHero";
import LockoutServices from "@/components/sections/LockoutServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceDescription from "@/components/services/new-car-key/ServiceDescription";
import RealWorldExamples from "@/components/services/new-car-key/RealWorldExamples";
import EmergencyCallout from "@/components/services/new-car-key/EmergencyCallout";
import FAQSection from "@/components/sections/FAQSection";
import { Key, Smartphone, Car } from "lucide-react";

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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Car Key Replacement Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Key className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Key Cutting</h3>
              <p className="text-gray-600">Professional key cutting for all vehicle makes and models using state-of-the-art equipment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Key Programming</h3>
              <p className="text-gray-600">Expert programming of transponder keys and key fobs to work seamlessly with your vehicle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Car className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">All Vehicle Types</h3>
              <p className="text-gray-600">Comprehensive key replacement solutions for cars, trucks, SUVs, and commercial vehicles.</p>
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

export default NewCarKeyPage;