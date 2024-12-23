import PageLayout from "@/components/layouts/PageLayout";
import { Shield, Clock, Check, Key, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 House Lockout Service in North Bergen",
  "description": "Professional residential lockout services available 24/7 in North Bergen and surrounding areas. Fast response times and licensed technicians.",
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
    "name": "House Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency House Lockout",
          "description": "24/7 emergency residential lockout service with fast response times"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lock Replacement",
          "description": "Professional lock replacement and rekeying services"
        }
      }
    ]
  }
};

const HouseLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 House Lockout Service in North Bergen | Professional Residential Locksmith"
      description="Expert house lockout services in North Bergen. Available 24/7 with fast response times. Licensed and insured residential locksmith specialists ready to help."
      schema={schema}
      heroTitle="Professional House Lockout Services"
      heroDescription="Locked out of your home? Our expert locksmiths provide fast, reliable residential lockout solutions 24/7."
    >
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Trusted Residential Locksmith Services in North Bergen</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Being locked out of your home can be a stressful and potentially dangerous situation, 
              especially during late hours or severe weather. At Locksmith & Security LLC, we provide 
              rapid, professional house lockout services throughout North Bergen and surrounding areas, 
              ensuring you regain access to your home quickly and safely.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Residential Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Key className="text-primary mr-2" />
                    Emergency lockout assistance
                  </li>
                  <li className="flex items-center">
                    <Lock className="text-primary mr-2" />
                    Lock replacement and repair
                  </li>
                  <li className="flex items-center">
                    <Lock className="text-primary mr-2" />
                    Broken key extraction
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" />
                    Security assessments
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="text-primary mr-2" />
                    24/7 emergency availability
                  </li>
                  <li className="flex items-center">
                    <Shield className="text-primary mr-2" />
                    Licensed and insured technicians
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" />
                    30-minute response time
                  </li>
                  <li className="flex items-center">
                    <Lock className="text-primary mr-2" />
                    Advanced security solutions
                  </li>
                </ul>
              </div>
            </div>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Fast Response House Lockout Service</h3>
              <p className="mb-6">
                When you're locked out of your house, every minute counts. Our experienced locksmiths 
                arrive within 30 minutes of your call, equipped with state-of-the-art tools and expertise 
                to handle any residential lockout situation professionally and efficiently.
              </p>
              <p className="mb-6">
                We understand the stress and inconvenience of being locked out of your home. That's why 
                we prioritize rapid response times while maintaining the highest standards of service quality 
                and security.
              </p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Residential Security Solutions</h3>
              <p className="mb-6">
                Beyond emergency lockout services, we offer complete residential security solutions to 
                help prevent future lockouts and enhance your home's security. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>High-security lock installation</li>
                <li>Smart lock systems</li>
                <li>Key duplication and management</li>
                <li>Security system integration</li>
                <li>Regular maintenance services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <p className="mb-6">
                We provide comprehensive house lockout services throughout North Bergen and surrounding areas, 
                including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="/service-areas/north-bergen" className="text-primary hover:underline">North Bergen</a>
                <a href="/service-areas/jersey-city" className="text-primary hover:underline">Jersey City</a>
                <a href="/service-areas/union-city" className="text-primary hover:underline">Union City</a>
                <a href="/service-areas/west-new-york" className="text-primary hover:underline">West New York</a>
                <a href="/service-areas/secaucus" className="text-primary hover:underline">Secaucus</a>
                <a href="/service-areas/weehawken" className="text-primary hover:underline">Weehawken</a>
                <a href="/service-areas/hoboken" className="text-primary hover:underline">Hoboken</a>
                <a href="/service-areas/guttenberg" className="text-primary hover:underline">Guttenberg</a>
              </div>
            </section>

            <div className="bg-primary/5 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">Emergency House Lockout? Call Us Now!</h3>
              <p className="mb-6">
                Don't wait outside your home. Our professional locksmiths are ready to help 24/7.
              </p>
              <Button size="lg" asChild>
                <a href="tel:5513037874" className="flex items-center">
                  <Clock className="mr-2" />
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

export default HouseLockoutPage;