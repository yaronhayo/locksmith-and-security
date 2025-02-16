
import { SchemaScripts } from "@/components/meta/SchemaScripts";

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  price?: {
    amount: number;
    currency: string;
  };
  areaServed?: string[];
  estimatedTime?: string;
}

const ServiceSchema = ({
  name,
  description,
  serviceType,
  price,
  areaServed = ["North Bergen", "Union City", "West New York", "Guttenberg"],
  estimatedTime
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Locksmith & Security LLC",
      "image": "/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "North Bergen",
        "addressRegion": "NJ",
        "postalCode": "07047",
        "addressCountry": "US"
      }
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area,
      "sameAs": `https://en.wikipedia.org/wiki/${area.replace(' ', '_')},_New_Jersey`
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://247locksmithandsecurity.com/book-online",
      "servicePhone": "+12017482070",
      "availableLanguage": ["English", "Spanish"]
    },
    "termsOfService": {
      "@type": "DigitalDocument",
      "name": "Service Terms and Conditions",
      "url": "https://247locksmithandsecurity.com/terms-conditions"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name,
            "description": description
          },
          ...(price && {
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": price.amount,
              "priceCurrency": price.currency
            }
          })
        }
      ]
    },
    ...(estimatedTime && {
      "serviceOutput": {
        "@type": "Duration",
        "name": "Estimated Service Time",
        "value": estimatedTime
      }
    }),
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Customer"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  };

  return <SchemaScripts schemas={[{ type: 'Service', data: schema }]} />;
};

export default ServiceSchema;
