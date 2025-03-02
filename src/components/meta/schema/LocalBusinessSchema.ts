
interface LocalBusinessSchemaProps {
  name: string;
  description?: string;
  image?: string;
  telephone?: string;
  priceRange?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  sameAs?: string[];
  url?: string;
}

export const createLocalBusinessSchema = ({
  name,
  description = "Professional locksmith services for residential, commercial, and automotive needs. 24/7 emergency service available.",
  image = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  telephone = "(201) 748-2070",
  priceRange = "$$",
  address = {
    streetAddress: "7611 Bergenline Ave",
    addressLocality: "North Bergen",
    addressRegion: "NJ",
    postalCode: "07047",
    addressCountry: "US"
  },
  geo = {
    latitude: 40.7795,
    longitude: -74.0324
  },
  sameAs = [
    "https://www.facebook.com/247locksmithandsecurity/",
    "https://twitter.com/LocksmithSecurity",
    "https://www.instagram.com/247locksmithandsecurity/"
  ],
  url = "https://247locksmithandsecurity.com"
}: LocalBusinessSchemaProps) => {
  return {
    type: 'LocalBusiness',
    data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${url}#localbusiness`,
      "name": name,
      "description": description,
      "image": image,
      "url": url,
      "telephone": telephone,
      "priceRange": priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "sameAs": sameAs
    }
  };
};
