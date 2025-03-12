
import React from 'react';
import { Helmet } from 'react-helmet';
import { BasicMetaTags } from './BasicMetaTags';
import { OpenGraphTags } from './OpenGraphTags';
import { TwitterTags } from './TwitterTags';
import { SchemaScripts } from './SchemaScripts';

interface Schema {
  type: string;
  data: object;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  schemas?: Schema[];
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  twitterCardType?: "summary" | "summary_large_image" | "app" | "player";
  language?: string;
  geoRegion?: string;
  geoPlaceName?: string;
  geoPosition?: string;
  icbm?: string;
  author?: string;
  baseUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  schemas = [],
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  keywords = "",
  noindex = false,
  nofollow = false,
  modifiedDate = new Date().toISOString(),
  ogType = "website",
  twitterCardType = "summary_large_image",
  language = "en",
  geoRegion,
  geoPlaceName,
  geoPosition,
  icbm,
  author = "Locksmith & Security LLC",
  baseUrl = "https://247locksmithandsecurity.com"
}) => {
  // Ensure canonical URL has the proper base
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
    
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
        language={language}
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
      
      <Helmet>
        {/* Bing/Microsoft specific tags */}
        <link rel="sitemap" type="application/xml" href={`${baseUrl}/sitemap.xml`} />
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-image-preview:large,max-snippet:-1,max-video-preview:-1`} />
        
        {/* Location-specific meta tags for service areas */}
        {geoRegion && <meta name="geo.region" content={geoRegion} />}
        {geoPlaceName && <meta name="geo.placename" content={geoPlaceName} />}
        {geoPosition && <meta name="geo.position" content={geoPosition} />}
        {icbm && <meta name="ICBM" content={icbm} />}
        {author && <meta name="author" content={author} />}
      </Helmet>
      
      {schemas && schemas.length > 0 && (
        <SchemaScripts schemas={schemas} />
      )}
    </>
  );
};

export default SEOHead;
