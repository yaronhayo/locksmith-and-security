
import { SchemaData } from "@/types/schema";

interface ServicePageSchemaProps {
  title: string;
  description: string;
  serviceName: string;
  serviceCategory: string;
  canonicalUrl: string;
  price?: string;
  areaServed?: string[];
  serviceOfferings?: string[];
  datePublished?: string;
  dateModified?: string;
}

export const createServicePageSchema = ({
  title,
  description,
  serviceName,
  serviceCategory,
  canonicalUrl,
  price = "49.00",
  areaServed = [
    "North Bergen, NJ",
    "Jersey City, NJ",
    "Hoboken, NJ",
    "Weehawken, NJ",
    "Union City, NJ",
    "West New York, NJ"
  ],
  serviceOfferings = [],
  datePublished = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
  dateModified = new Date().toISOString()
}: ServicePageSchemaProps): SchemaData => {
  const baseUrl = "https://247locksmithandsecurity.com";
  const fullUrl = canonicalUrl.startsWith("/") 
    ? `${baseUrl}${canonicalUrl}` 
    : `${baseUrl}/${canonicalUrl}`;
  
  // Generate default offerings if none provided
  const offerings = serviceOfferings.length > 0 
    ? serviceOfferings 
    : [
        `${serviceName} Installation`,
        `${serviceName} Repair`,
        `Emergency ${serviceName} Service`,
        `${serviceName} Consultation`,
        `Professional ${serviceName} Solutions`
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Locksmith & Security LLC",
      "url": baseUrl,
      "image": `${baseUrl}/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png`,
      "telephone": "(201) 748-2070",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5800 Kennedy Blvd",
        "addressLocality": "North Bergen",
        "addressRegion": "NJ",
        "postalCode": "07047",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7795",
        "longitude": "-74.0324"
      }
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "url": fullUrl,
      "availability": "https://schema.org/InStock"
    },
    "url": fullUrl,
    "category": serviceCategory,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": offerings.map(offering => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offering
        }
      }))
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  };

  return {
    type: 'Service',
    data: serviceSchema
  };
};
