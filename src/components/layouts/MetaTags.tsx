
import { BasicMetaTags } from "@/components/meta/BasicMetaTags";
import { OpenGraphTags } from "@/components/meta/OpenGraphTags";
import { TwitterTags } from "@/components/meta/TwitterTags";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import { HreflangTags } from "@/components/meta/HreflangTags";
import React from "react";

interface Schema {
  type: string;
  data: object;
}

interface MetaTagsProps {
  title: string;
  description: string;
  schemas?: Schema[];
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
  nofollow?: boolean;
  baseUrl?: string;
  modifiedDate?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  twitterCardType?: "summary" | "summary_large_image" | "app" | "player";
  alternateLanguages?: {
    lang: string;
    href: string;
  }[];
  defaultLang?: string;
}

const MetaTags = ({
  title,
  description,
  schemas = [],
  canonicalUrl,
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  keywords = "",
  noindex = false,
  nofollow = false,
  baseUrl = "https://247locksmithandsecurity.com",
  modifiedDate = new Date().toISOString().split('T')[0], // Default to today's date in YYYY-MM-DD format
  ogType = "website",
  twitterCardType = "summary_large_image",
  alternateLanguages = [],
  defaultLang = "en-US"
}: MetaTagsProps) => {
  // Ensure canonical URL has the proper base and remove trailing slashes for consistency
  const normalizeUrl = (url: string) => url.replace(/\/+$/, '');
  
  const fullCanonicalUrl = canonicalUrl ? 
    (canonicalUrl.startsWith('http') ? normalizeUrl(canonicalUrl) : `${normalizeUrl(baseUrl)}${canonicalUrl}`) 
    : normalizeUrl(baseUrl);
    
  return (
    <>
      <BasicMetaTags 
        title={title}
        description={description}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        canonicalUrl={fullCanonicalUrl}
        modifiedDate={modifiedDate}
      />
      
      <OpenGraphTags 
        title={title}
        description={description}
        image={ogImage}
        url={fullCanonicalUrl}
        modifiedDate={modifiedDate}
        baseUrl={baseUrl}
        type={ogType}
      />
      
      <TwitterTags 
        title={title}
        description={description}
        image={ogImage}
        baseUrl={baseUrl}
        cardType={twitterCardType}
      />
      
      {/* Add hreflang tags if alternateLanguages are provided */}
      {alternateLanguages.length > 0 && (
        <HreflangTags
          alternateLanguages={alternateLanguages}
          defaultHref={fullCanonicalUrl}
          defaultLang={defaultLang}
        />
      )}
      
      {schemas && schemas.length > 0 && (
        <SchemaScripts schemas={schemas} />
      )}
    </>
  );
};

export default MetaTags;
