interface LocalBusinessSchemaProps {
  baseUrl: string;
  description: string;
  ogImage: string;
}

export const createLocalBusinessSchema = ({ baseUrl, description, ogImage }: LocalBusinessSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": baseUrl,
  "name": "Locksmith & Security LLC",
  "image": `${baseUrl}${ogImage}`,
  "logo": `${baseUrl}${ogImage}`,
  "description": description,
  "url": baseUrl,
  "telephone": "+15513037874",
  "priceRange": "$$",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "North Bergen",
      "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Union City",
      "sameAs": "https://en.wikipedia.org/wiki/Union_City,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "West New York",
      "sameAs": "https://en.wikipedia.org/wiki/West_New_York,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Weehawken",
      "sameAs": "https://en.wikipedia.org/wiki/Weehawken,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Hoboken",
      "sameAs": "https://en.wikipedia.org/wiki/Hoboken,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Jersey City",
      "sameAs": "https://en.wikipedia.org/wiki/Jersey_City,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Secaucus",
      "sameAs": "https://en.wikipedia.org/wiki/Secaucus,_New_Jersey"
    },
    {
      "@type": "City",
      "name": "Guttenberg",
      "sameAs": "https://en.wikipedia.org/wiki/Guttenberg,_New_Jersey"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/247locksmithandsecurity",
    "https://www.yelp.com/biz/247-locksmith-and-security-north-bergen",
    "https://www.google.com/maps?cid=your-google-business-id"
  ]
});