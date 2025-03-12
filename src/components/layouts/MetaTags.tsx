
import { BasicMetaTags } from "@/components/meta/BasicMetaTags";
import { OpenGraphTags } from "@/components/meta/OpenGraphTags";
import { TwitterTags } from "@/components/meta/TwitterTags";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
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
  author?: string;
  geoRegion?: string;
  geoPlaceName?: string;
  geoPosition?: string;
  icbm?: string;
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
  modifiedDate = new Date().toISOString(),
  ogType = "website",
  twitterCardType = "summary_large_image",
  author = "Locksmith & Security LLC",
  geoRegion,
  geoPlaceName,
  geoPosition,
  icbm
}: MetaTagsProps) => {
  // Ensure canonical URL has the proper base
  const fullCanonicalUrl = canonicalUrl ? 
    (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`) 
    : baseUrl;
    
  // Optimize meta description (150-160 chars is ideal)
  const optimizedDescription = description.length > 160 ? 
    `${description.substring(0, 157)}...` : 
    description;
    
  return (
    <>
      <BasicMetaTags 
        title={title}
        description={optimizedDescription}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        canonicalUrl={fullCanonicalUrl}
        modifiedDate={modifiedDate}
      />
      
      <OpenGraphTags 
        title={title}
        description={optimizedDescription}
        image={ogImage}
        url={fullCanonicalUrl}
        modifiedDate={modifiedDate}
        baseUrl={baseUrl}
        type={ogType}
      />
      
      <TwitterTags 
        title={title}
        description={optimizedDescription}
        image={ogImage}
        baseUrl={baseUrl}
        cardType={twitterCardType}
      />
      
      {schemas && schemas.length > 0 && (
        <SchemaScripts schemas={schemas} />
      )}
    </>
  );
};

export default MetaTags;
