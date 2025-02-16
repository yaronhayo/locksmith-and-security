import { BasicMetaTags } from "../meta/BasicMetaTags";
import { OpenGraphTags } from "../meta/OpenGraphTags";
import { TwitterTags } from "../meta/TwitterTags";
import { SchemaScripts } from "../meta/SchemaScripts";
import { useSettings, type SiteSettings } from "@/hooks/useSettings";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

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

const DEFAULT_SETTINGS: SiteSettings = {
  base_url: "https://247locksmithandsecurity.com",
  company_name: "Locksmith & Security LLC",
  company_phone: "+12017482070",
  company_address: "123 Main Street",
  company_city: "North Bergen",
  company_state: "NJ",
  company_zip: "07047",
  company_lat: "40.7795",
  company_lng: "-74.0324",
  default_meta_title: "24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured",
  default_meta_description: "Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  GOOGLE_MAPS_API_KEY: "",
};

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
  const { data: settings, error } = useSettings();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      console.error('Error loading site settings:', error);
      toast({
        title: "Warning",
        description: "Some site information might not be up to date.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const siteSettings = settings || DEFAULT_SETTINGS;

  const baseUrl = siteSettings.base_url;
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullTitle = `${title} | ${siteSettings.company_name} - Professional Locksmith Services in ${siteSettings.company_city}, ${siteSettings.company_state}`;

  const schemas = [];

  if (businessSchema) {
    schemas.push({
      type: 'LocalBusiness',
      data: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": baseUrl,
        "name": siteSettings.company_name,
        "image": `${baseUrl}/og-image.png`,
        "logo": `${baseUrl}/logo.png`,
        "description": description,
        "url": baseUrl,
        "telephone": siteSettings.company_phone,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteSettings.company_address,
          "addressLocality": siteSettings.company_city,
          "addressRegion": siteSettings.company_state,
          "postalCode": siteSettings.company_zip,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteSettings.company_lat,
          "longitude": siteSettings.company_lng
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
          "name": siteSettings.company_name,
          "image": `${baseUrl}/og-image.png`
        },
        "areaServed": {
          "@type": "City",
          "name": siteSettings.company_city,
          "sameAs": `https://en.wikipedia.org/wiki/${siteSettings.company_city},_New_Jersey`
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": fullCanonicalUrl,
          "servicePhone": siteSettings.company_phone
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
