
interface LocalBusinessSchemaProps {
  name?: string;
  telephone?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  images?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  email?: string;
  sameAs?: string[];
}

export const createLocalBusinessSchema = ({
  name = "Locksmith & Security LLC",
  telephone = "(201) 748-2070",
  streetAddress = "5800 Kennedy Blvd",
  addressLocality = "North Bergen",
  addressRegion = "NJ",
  postalCode = "07047",
  images = ["/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png"],
  geo = { latitude: 40.7795, longitude: -74.0324 },
  priceRange = "$$",
  email = "info@247locksmithandsecurity.com",
  sameAs = [
    "https://www.facebook.com/247locksmithandsecurity/",
    "https://www.yelp.com/biz/locksmith-and-security-north-bergen"
  ]
}: LocalBusinessSchemaProps = {}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "image": images[0],
    "telephone": telephone,
    "email": email,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "url": "https://247locksmithandsecurity.com",
    "sameAs": sameAs,
    "hasMap": `https://www.google.com/maps?cid=12345678901234567890`,
    "areaServed": [
      {
        "@type": "City",
        "name": "North Bergen",
        "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
      },
      {
        "@type": "City",
        "name": "Jersey City",
        "sameAs": "https://en.wikipedia.org/wiki/Jersey_City,_New_Jersey"
      },
      {
        "@type": "City",
        "name": "Hoboken",
        "sameAs": "https://en.wikipedia.org/wiki/Hoboken,_New_Jersey"
      }
    ]
  };
  
  return {
    type: 'LocalBusiness',
    data: localBusinessSchema
  };
};
