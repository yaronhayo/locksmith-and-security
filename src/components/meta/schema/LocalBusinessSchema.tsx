
import { SiteSettings } from "@/hooks/useSettings";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  image?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  geo?: {
    latitude?: string;
    longitude?: string;
  };
  priceRange?: string;
  openingHours?: string[];
  sameAs?: string[];
  settings?: SiteSettings;
}

export const createLocalBusinessSchema = ({
  name = "Locksmith & Security LLC",
  description = "Professional 24/7 locksmith services for residential, commercial, and automotive needs.",
  url = "https://247locksmithandsecurity.com",
  telephone = "(201) 748-2070",
  image = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  address = {
    street: "5800 Kennedy Blvd",
    city: "North Bergen",
    state: "NJ",
    zip: "07047",
    country: "US"
  },
  geo = {
    latitude: "40.7795",
    longitude: "-74.0324"
  },
  priceRange = "$$",
  openingHours = ["Mo-Su 00:00-23:59"],
  sameAs = [
    "https://www.facebook.com/locksmithandsecurity/",
    "https://www.yelp.com/biz/locksmith-and-security-north-bergen"
  ],
  settings
}: LocalBusinessSchemaProps = {}) => {
  
  // Use settings if provided
  const businessName = settings?.company_name || name;
  const businessPhone = settings?.company_phone || telephone;
  const businessStreet = settings?.company_address || address.street;
  const businessCity = settings?.company_city || address.city;
  const businessState = settings?.company_state || address.state;
  const businessZip = settings?.company_zip || address.zip;
  const businessLatitude = settings?.company_lat || geo.latitude;
  const businessLongitude = settings?.company_lng || geo.longitude;
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    "name": businessName,
    "description": description,
    "url": url,
    "telephone": businessPhone,
    "image": image.startsWith('http') ? image : `${url}${image.startsWith('/') ? image : `/${image}`}`,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessStreet,
      "addressLocality": businessCity,
      "addressRegion": businessState,
      "postalCode": businessZip,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessLatitude,
      "longitude": businessLongitude
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1].split('-')[0],
      "closes": hours.split(' ')[1].split('-')[1]
    })),
    "sameAs": sameAs,
    "servesCuisine": "Locksmith Services",
    "paymentAccepted": "Cash, Credit Card",
    "additionalType": "http://www.productontology.org/id/Locksmith",
    "keywords": "locksmith, emergency locksmith, 24/7 locksmith, residential locksmith, commercial locksmith, auto locksmith"
  };
  
  return {
    type: 'LocalBusiness',
    data: localBusinessSchema
  };
};
