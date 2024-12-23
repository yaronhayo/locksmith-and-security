import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Car, CheckCircle } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Car Lockout Service in North Bergen",
  "description": "Professional car lockout services available 24/7 in North Bergen and surrounding areas. Fast response times, competitive pricing, and experienced technicians.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "telephone": "+15513037874",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "geoRadius": "30mi"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Car Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Car Lockout",
          "description": "24/7 emergency car lockout service with fast response times"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Key Replacement",
          "description": "Professional car key cutting and programming services"
        }
      }
    ]
  }
};

const CarLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 Car Lockout Service in North Bergen | Locksmith & Security LLC"
      description="Professional car lockout services in North Bergen. Available 24/7 with fast response times. Licensed and insured car locksmith specialists ready to help."
      schema={schema}
      heroTitle="24/7 Car Lockout Service"
      heroDescription="Locked out of your car? Our professional locksmiths are available 24/7 to help you regain access to your vehicle quickly and safely."
    >
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Professional Car Lockout Services in North Bergen</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Getting locked out of your car can be a stressful experience, especially during late hours or in unfamiliar areas. 
              At Locksmith & Security LLC, we provide fast and reliable car lockout services 24 hours a day, 7 days a week in North Bergen and surrounding areas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Car Lockout Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" />
                    Emergency car lockout assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" />
                    Car key replacement and duplication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" />
                    Broken key extraction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" />
                    Transponder key programming
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="text-primary mr-2" />
                    24/7 emergency service
                  </li>
                  <li className="flex items-center">
                    <Shield className="text-primary mr-2" />
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <Car className="text-primary mr-2" />
                    All vehicle makes and models
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-primary mr-2" />
                    Fast 30-minute response time
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Fast Response Car Lockout Service</h3>
            <p className="mb-6">
              When you're locked out of your car, every minute counts. Our experienced locksmiths arrive within 30 minutes of your call, 
              equipped with the latest tools and technology to handle any car lockout situation quickly and professionally.
            </p>

            <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
            <p className="mb-6">
              We provide car lockout services throughout North Bergen and surrounding areas, including Jersey City, Union City, 
              West New York, Secaucus, Weehawken, Hoboken, and Guttenberg. Our mobile locksmiths are strategically positioned 
              to reach you quickly, no matter where you are in our service area.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Car Lockout? Call Us Now!</h3>
              <p className="mb-6">
                Don't wait stranded outside your car. Our professional locksmiths are ready to help 24/7.
              </p>
              <Button size="lg" asChild>
                <a href="tel:5513037874" className="flex items-center">
                  <Phone className="mr-2" />
                  Call (551) 303-7874
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CarLockoutPage;