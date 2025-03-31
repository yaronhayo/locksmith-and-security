
import { SiteSettings } from "@/hooks/useSettings";

interface ServiceSchemaProps {
  title: string;
  description: string;
  baseUrl: string;
  settings?: SiteSettings;
  canonicalUrl: string;
  category?: string;
  offerings?: string[];
  price?: string;
  priceCurrency?: string;
  dateModified?: string;
  datePublished?: string;
  relatedServices?: string[];
}

export const createServiceSchema = ({
  title,
  description,
  baseUrl,
  settings,
  canonicalUrl,
  category = "Locksmith Service",
  offerings = [],
  price = "49.00",
  priceCurrency = "USD",
  dateModified = new Date().toISOString(),
  datePublished = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
  relatedServices = []
}: ServiceSchemaProps) => {
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
    
  // Create service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "serviceType": category,
    "url": fullCanonicalUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": settings?.company_name || "Locksmith & Security LLC",
      "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
      "email": "info@247locksmithandsecurity.com",
      "telephone": settings?.company_phone || "(201) 748-2070",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": settings?.company_address || "5800 Kennedy Blvd",
        "addressLocality": settings?.company_city || "North Bergen",
        "addressRegion": settings?.company_state || "NJ",
        "postalCode": settings?.company_zip || "07047",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${title} Services`,
      "itemListElement": offerings.map(offering => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offering
        }
      }))
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency || "USD"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonicalUrl,
      "lastReviewed": dateModified,
      "datePublished": datePublished,
      "dateModified": dateModified
    }
  };
  
  return {
    type: 'Service',
    data: serviceSchema
  };
};
