
import { BasicMetaTags } from "../meta/BasicMetaTags";
import { OpenGraphTags } from "../meta/OpenGraphTags";
import { TwitterTags } from "../meta/TwitterTags";
import { SchemaScripts } from "../meta/SchemaScripts";
import { useSettings, type SiteSettings } from "@/hooks/useSettings";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { createBusinessSchema } from "../meta/schema/BusinessSchema";
import { createContentSchema } from "../meta/schema/ArticleSchema";
import { createServiceSchema } from "../meta/schema/ServiceSchema";
import { createBreadcrumbSchema } from "../meta/schema/BreadcrumbSchema";

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
  ogImage = "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
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
  const fullTitle = title.includes(siteSettings.company_name) ? 
    title : 
    `${title} | ${siteSettings.company_name} - Professional Locksmith Services in ${siteSettings.company_city}, ${siteSettings.company_state}`;

  const schemas = [];

  if (businessSchema) {
    schemas.push(createBusinessSchema({ baseUrl, description, settings: siteSettings }));
  }

  schemas.push(createContentSchema({ 
    title: fullTitle, 
    description, 
    modifiedDate, 
    baseUrl, 
    isArticle: articleSchema, 
    schema 
  }));

  if (serviceSchema) {
    schemas.push(createServiceSchema({ 
      title: fullTitle, 
      description, 
      baseUrl, 
      settings: siteSettings, 
      canonicalUrl: fullCanonicalUrl 
    }));
  }

  if (breadcrumbs) {
    schemas.push(createBreadcrumbSchema({ breadcrumbs, baseUrl }));
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
