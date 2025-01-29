interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  imageUrl?: string;
}

export const createServiceSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  imageUrl = "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
}: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://247locksmithandsecurity.com${serviceUrl}#service`,
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": imageUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    "url": "https://247locksmithandsecurity.com",
    "telephone": "+15513037874"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    "geoRadius": "30000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Locksmith Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName,
          "description": serviceDescription
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD"
        }
      }
    ]
  }
});