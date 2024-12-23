import PageLayout from "@/components/layouts/PageLayout";
import { Shield, Clock, Check, Building2, Lock, Tool, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Commercial Lockout Service in North Bergen",
  "description": "Professional commercial lockout services available 24/7 in North Bergen. Fast response times and expert business security solutions.",
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
    "name": "Commercial Lockout Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Business Lockout",
          "description": "24/7 emergency commercial lockout service with rapid response"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Security Solutions",
          "description": "Advanced security systems and access control for businesses"
        }
      }
    ]
  }
};

const BusinessLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 Commercial Lockout Service in North Bergen | Business Security Solutions"
      description="Expert commercial lockout services in North Bergen. Available 24/7 with rapid response times. Licensed and insured commercial locksmith specialists."
      schema={schema}
      heroTitle="Professional Commercial Lockout Services"
      heroDescription="Locked out of your business? Our expert locksmiths provide fast, reliable commercial lockout solutions 24/7."
    >
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Professional Commercial Locksmith Services in North Bergen</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              A business lockout can disrupt operations and impact your bottom line. At Locksmith & Security LLC, 
              we understand the urgency of commercial lockout situations and provide rapid, professional service 
              to get your business back up and running quickly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Commercial Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Building2 className="text-primary mr-2" />
                    Emergency business lockout assistance
                  </li>
                  <li className="flex items-center">
                    <Lock className="text-primary mr-2" />
                    Master key system installation
                  </li>
                  <li className="flex items-center">
                    <Tool className="text-primary mr-2" />
                    Access control systems
                  </li>
                  <li className="flex items-center">
                    <Key className="text-primary mr-2" />
                    High-security locks
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Business Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="text-primary mr-2" />
                    24/7 emergency response
                  </li>
                  <li className="flex items-center">
                    <Shield className="text-primary mr-2" />
                    Licensed and insured service
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" />
                    Competitive rates
                  </li>
                  <li className="flex items-center">
                    <Building2 className="text-primary mr-2" />
                    All business types served
                  </li>
                </ul>
              </div>
            </div>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Rapid Response Commercial Lockout Service</h3>
              <p className="mb-6">
                Our commercial locksmith team specializes in quick response times and efficient solutions 
                for all types of businesses. We arrive fully equipped to handle any commercial lockout 
                situation, minimizing downtime and ensuring your business security is maintained.
              </p>
              <p className="mb-6">
                Whether you operate a small retail store, large office building, or industrial facility, 
                our experienced technicians have the expertise to handle your specific security needs.
              </p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Advanced Commercial Security Solutions</h3>
              <p className="mb-6">
                Beyond emergency lockout services, we offer comprehensive commercial security solutions:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access control system installation and maintenance</li>
                <li>Master key system design and implementation</li>
                <li>High-security lock upgrades</li>
                <li>Security system integration</li>
                <li>Regular maintenance programs</li>
                <li>Security consultation and assessment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <p className="mb-6">
                We provide commercial lockout services throughout North Bergen and surrounding areas:
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
              <h3 className="text-2xl font-bold mb-4">Business Lockout Emergency? Call Now!</h3>
              <p className="mb-6">
                Don't let a lockout disrupt your business. Our commercial locksmith team is ready to help 24/7.
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

export default BusinessLockoutPage;