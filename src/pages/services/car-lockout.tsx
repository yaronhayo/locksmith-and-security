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
      title="24/7 Car Lockout Service North Bergen | Emergency Auto Locksmith"
      description="Professional car lockout services in North Bergen. Available 24/7 with fast response times. Licensed and insured auto locksmith specialists ready to help."
      schema={schema}
    >
      <div className="hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Locked Out of Your Car? We're Here to Help!
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professional auto locksmith service in North Bergen available 24/7. 
                Fast response time, fair pricing, and damage-free entry guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="text-lg">
                  <a href="tel:5513037874" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    (551) 303-7874
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
                  Get Free Quote
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-secondary" />
                  <span className="text-white">15-30 Min Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-secondary" />
                  <span className="text-white">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-secondary" />
                  <span className="text-white">All Vehicle Types</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Request Emergency Service</h2>
                <p className="text-gray-600 mt-2">Get help within 15-30 minutes</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Car Make</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Car Model</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <Button className="w-full">Request Service Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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