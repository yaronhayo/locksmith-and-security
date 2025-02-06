
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  schema?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const MetaTags = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/og-image.png",
  keywords = "locksmith, security, lock services, emergency locksmith, North Bergen",
  schema,
  noindex = false,
  nofollow = false,
}: MetaTagsProps) => {
  const baseUrl = "https://247locksmithandsecurity.com";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullTitle = `${title} | Locksmith & Security LLC - Professional Locksmith Services in North Bergen, NJ`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    "name": "Locksmith & Security LLC",
    "image": `${baseUrl}/og-image.png`,
    "logo": `${baseUrl}/logo.png`,
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
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/247locksmithandsecurity",
      "https://www.yelp.com/biz/247-locksmith-and-security-north-bergen"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Lockout Service",
            "description": "24/7 emergency lockout services for homes, businesses, and vehicles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Installation",
            "description": "Professional installation of high-security locks"
          }
        }
      ]
    }
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": baseUrl
    },
    ...schema
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      {(noindex || nofollow) && (
        <meta 
          name="robots" 
          content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} 
        />
      )}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Locksmith & Security LLC" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1E3A8A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="author" content="Locksmith & Security LLC" />
      <meta name="copyright" content="© 2024 Locksmith & Security LLC. All rights reserved." />
      
      {/* Geo Location Tags */}
      <meta name="geo.region" content="US-NJ" />
      <meta name="geo.placename" content="North Bergen" />
      <meta name="geo.position" content="40.7995;-74.0246" />
      <meta name="ICBM" content="40.7995, -74.0246" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Main Street" />
      <meta name="business:contact_data:locality" content="North Bergen" />
      <meta name="business:contact_data:region" content="NJ" />
      <meta name="business:contact_data:postal_code" content="07047" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+15513037874" />
      <meta name="business:contact_data:website" content={baseUrl} />
      <meta name="business:contact_data:email" content="info@247locksmithandsecurity.com" />
      
      {/* Accessibility Tags */}
      <meta name="apple-mobile-web-app-title" content="Locksmith & Security LLC" />
      <meta name="application-name" content="Locksmith & Security LLC" />
      
      <script type="application/ld+json">
        {JSON.stringify(defaultSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  );
};

export default MetaTags;
