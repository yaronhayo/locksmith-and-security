import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  schema?: object;
  breadcrumbs?: Array<{ name: string; item: string }>;
  faqSchema?: Array<{ question: string; answer: string }>;
}

const MetaTags = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
  keywords = "locksmith, security, lock services, emergency locksmith, North Bergen",
  schema,
  breadcrumbs,
  faqSchema
}: MetaTagsProps) => {
  const baseUrl = "https://247locksmithandsecurity.com";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullTitle = `${title} | Locksmith & Security LLC - Professional Locksmith Services in North Bergen, NJ`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    "name": "Locksmith & Security LLC",
    "image": `${baseUrl}${ogImage}`,
    "logo": `${baseUrl}${ogImage}`,
    "description": description,
    "url": baseUrl,
    "telephone": "+15513037874",
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Key Programming",
            "description": "Professional car key programming and replacement services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Security Solutions",
            "description": "Complete commercial security system solutions"
          }
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michael R."
      },
      "reviewBody": "Called them at 2 AM when I was locked out of my car in North Bergen. The technician arrived quickly and had me back in my car in no time. Extremely professional service."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
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
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": `${baseUrl}${item.item}`
            }))
          })}
        </script>
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;