
import type { SiteSettings } from "@/hooks/useSettings";

interface ServiceSchemaProps {
  title: string;
  description: string;
  baseUrl: string;
  settings: SiteSettings;
  canonicalUrl: string;
}

export const createServiceSchema = ({ title, description, baseUrl, settings, canonicalUrl }: ServiceSchemaProps) => ({
  type: 'Service',
  data: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": settings.company_name,
      "image": `${baseUrl}/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png`,
      "availabilityStarts": "00:00",
      "availabilityEnds": "23:59",
      "hoursAvailable": "24/7 Emergency Service"
    },
    "areaServed": {
      "@type": "City",
      "name": settings.company_city,
      "sameAs": `https://en.wikipedia.org/wiki/${settings.company_city},_New_Jersey`
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": canonicalUrl,
      "servicePhone": settings.company_phone
    }
  }
});
