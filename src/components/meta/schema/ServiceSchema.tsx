
import type { SiteSettings } from "@/hooks/useSettings";

interface ServiceSchemaProps {
  title: string;
  description: string;
  baseUrl: string;
  settings: SiteSettings;
  canonicalUrl: string;
  category?: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
  offerings?: string[];
  relatedServices?: string[];
  price?: string;
  priceCurrency?: string;
}

export const createServiceSchema = ({ 
  title, 
  description, 
  baseUrl, 
  settings,
  canonicalUrl,
  category = "Locksmith",
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  imageUrl = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  offerings = [],
  relatedServices = [],
  price = "49.00",
  priceCurrency = "USD"
}: ServiceSchemaProps) => ({
  type: 'Service',
  data: {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${canonicalUrl}#service`,
    "name": title,
    "description": description,
    "url": `${baseUrl}${canonicalUrl}`,
    "serviceType": category,
    "provider": {
      "@type": "LocalBusiness",
      "name": settings.company_name || "Locksmith & Security LLC",
      "telephone": settings.company_phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": settings.company_address || "",
        "addressLocality": settings.company_city || "North Bergen",
        "addressRegion": "NJ",
        "postalCode": settings.company_zip || "",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "City",
        "name": "North Bergen"
      },
      {
        "@type": "City",
        "name": "Jersey City"
      },
      {
        "@type": "City",
        "name": "Hoboken"
      }
    ],
    "image": imageUrl && !imageUrl.startsWith('http') ? `${baseUrl}${imageUrl}` : imageUrl,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": `${baseUrl}${canonicalUrl}`,
    "hasOfferCatalog": offerings && offerings.length > 0 ? {
      "@type": "OfferCatalog",
      "name": `${title} Services`,
      "itemListElement": offerings.map(offering => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offering
        }
      }))
    } : undefined,
    ...(relatedServices.length > 0 && {
      "isRelatedTo": relatedServices.map(service => ({
        "@type": "Service",
        "name": service
      }))
    })
  }
});
