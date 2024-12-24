import React from "react";
import PageLayout from "@/components/layouts/PageLayout";
import BusinessLockoutHero from "@/components/services/business-lockout/BusinessLockoutHero";
import BusinessServices from "@/components/services/business-lockout/BusinessServices";
import SecuritySolutions from "@/components/services/business-lockout/SecuritySolutions";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";

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
    >
      <div className="hero-gradient">
        <div className="container mx-auto px-4 py-12">
          <BusinessLockoutHero />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <BusinessServices />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <SecuritySolutions />
          </div>
        </div>
      </div>

      <ServiceAreasSection />
    </PageLayout>
  );
};

export default BusinessLockoutPage;