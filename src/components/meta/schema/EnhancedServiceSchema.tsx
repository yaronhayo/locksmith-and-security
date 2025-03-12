
import { createLocationSchema } from "../schema/LocationSchema";
import { createLocalBusinessSchema } from "../schema/LocalBusinessSchema";

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider?: {
    name: string;
    url: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  areasServed?: string[];
  offers?: Array<{
    name: string;
    description?: string;
    price?: string;
    priceCurrency?: string;
  }>;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
}

export const createEnhancedServiceSchema = ({
  name,
  description,
  serviceType,
  provider = {
    name: "Locksmith & Security LLC",
    url: "https://247locksmithandsecurity.com",
    telephone: "+12017482070",
    address: {
      streetAddress: "7116 Bergenline Ave",
      addressLocality: "North Bergen",
      addressRegion: "NJ",
      postalCode: "07047",
      addressCountry: "US"
    }
  },
  areasServed = [
    "North Bergen, NJ",
    "Jersey City, NJ",
    "Hoboken, NJ",
    "Weehawken, NJ"
  ],
  offers = [],
  availability = "InStock"
}: ServiceSchemaProps) => {
  // Create base schema for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider.name,
      "url": provider.url,
      "telephone": provider.telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": provider.address.streetAddress,
        "addressLocality": provider.address.addressLocality,
        "addressRegion": provider.address.addressRegion,
        "postalCode": provider.address.postalCode,
        "addressCountry": provider.address.addressCountry
      }
    },
    "areaServed": areasServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "availability": `https://schema.org/${availability}`,
      "availabilityStarts": new Date().toISOString().split('T')[0],
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };

  // Add specific service offerings if provided
  if (offers.length > 0) {
    serviceSchema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${name} Services`,
      "itemListElement": offers.map((offer, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description || `Professional ${offer.name.toLowerCase()} service by ${provider.name}`
        },
        ...(offer.price && {
          "price": offer.price,
          "priceCurrency": offer.priceCurrency || "USD"
        })
      }))
    };
  }

  return {
    type: 'service',
    data: serviceSchema
  };
};
