
import { BasicMetaTags } from "../meta/BasicMetaTags";
import { OpenGraphTags } from "../meta/OpenGraphTags";
import { TwitterTags } from "../meta/TwitterTags";
import { SchemaScripts } from "../meta/SchemaScripts";

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  schema?: object;
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  articleSchema?: boolean;
  businessSchema?: boolean;
  serviceSchema?: boolean;
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
  modifiedDate = new Date().toISOString().split('T')[0],
  breadcrumbs,
  articleSchema = false,
  businessSchema = true,
  serviceSchema = false,
}: MetaTagsProps) => {
  const baseUrl = "https://247locksmithandsecurity.com";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullTitle = `${title} | Locksmith & Security LLC - Professional Locksmith Services in North Bergen, NJ`;

  // Generate all schemas
  const schemas = [];

  if (businessSchema) {
    schemas.push({
      type: 'LocalBusiness',
      data: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": baseUrl,
        "name": "Locksmith & Security LLC",
        "image": `${baseUrl}/og-image.png`,
        "logo": `${baseUrl}/logo.png`,
        "description": description,
        "url": baseUrl,
        "telephone": "+12017482070",
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
        ]
      }
    });
  }

  schemas.push({
    type: articleSchema ? 'Article' : 'WebPage',
    data: {
      "@context": "https://schema.org",
      "@type": articleSchema ? "Article" : "WebPage",
      "name": title,
      "description": description,
      "dateModified": modifiedDate,
      "isPartOf": {
        "@id": baseUrl
      },
      ...schema
    }
  });

  if (serviceSchema) {
    schemas.push({
      type: 'Service',
      data: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "image": `${baseUrl}/og-image.png`
        },
        "areaServed": {
          "@type": "City",
          "name": "North Bergen",
          "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": fullCanonicalUrl,
          "servicePhone": "+12017482070"
        }
      }
    });
  }

  if (breadcrumbs) {
    schemas.push({
      type: 'BreadcrumbList',
      data: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${baseUrl}${item.item}`
        }))
      }
    });
  }

  return (
    <>
      <BasicMetaTags
        title={fullTitle}
        description={description}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        canonicalUrl={fullCanonicalUrl}
        modifiedDate={modifiedDate}
      />
      <OpenGraphTags
        title={fullTitle}
        description={description}
        image={ogImage}
        url={fullCanonicalUrl}
        modifiedDate={modifiedDate}
        baseUrl={baseUrl}
      />
      <TwitterTags
        title={fullTitle}
        description={description}
        image={ogImage}
        baseUrl={baseUrl}
      />
      <SchemaScripts schemas={schemas} />
    </>
  );
};

export default MetaTags;
