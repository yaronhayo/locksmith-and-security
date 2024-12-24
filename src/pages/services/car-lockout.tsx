import PageLayout from "@/components/layouts/PageLayout";
import CarLockoutHero from "@/components/sections/CarLockoutHero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
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

const CarLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 Car Lockout Service North Bergen | Emergency Auto Locksmith"
      description="Professional car lockout services in North Bergen. Available 24/7 with 15-30 minute response time. Licensed and insured auto locksmith specialists ready to help."
      schema={schema}
    >
      <CarLockoutHero />
      <WhyChooseUs />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Professional Car Lockout Services in North Bergen</h2>
            <p className="text-lg mb-6">
              Getting locked out of your car can be a stressful experience, especially during late hours or in unfamiliar areas. 
              Our professional auto locksmiths are available 24/7 to help you regain access to your vehicle quickly and safely.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Car Lockout Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Car className="text-primary mr-2" />
                    Emergency car lockout assistance
                  </li>
                  <li className="flex items-center">
                    <Car className="text-primary mr-2" />
                    Car key replacement and duplication
                  </li>
                  <li className="flex items-center">
                    <Car className="text-primary mr-2" />
                    Broken key extraction
                  </li>
                  <li className="flex items-center">
                    <Car className="text-primary mr-2" />
                    Transponder key programming
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="mb-4">
                  We provide fast car lockout services throughout:
                </p>
                <ul className="space-y-2">
                  <li>North Bergen</li>
                  <li>Jersey City</li>
                  <li>Union City</li>
                  <li>West New York</li>
                  <li>Secaucus</li>
                  <li>Weehawken</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
    </PageLayout>
  );
};

export default CarLockoutPage;