
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
  publishedDate?: string;
  alternateLanguages?: {locale: string, url: string}[];
  nextPrevLinks?: {prev?: string, next?: string};
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
  publishedDate,
  ogType = "website",
  twitterCardType = "summary_large_image",
  language = "en",
  geoRegion,
  geoPlaceName,
  geoPosition,
  icbm,
  author = "Locksmith & Security LLC",
  baseUrl = "https://247locksmithandsecurity.com",
  alternateLanguages,
  nextPrevLinks
}) => {
  // Truncate title for optimal display (50-60 characters)
  const optimizedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  
  // Truncate description for optimal display (150-158 characters)
  const optimizedDescription = description.length > 158 ? `${description.substring(0, 155)}...` : description;
  
  // Ensure canonical URL has the proper base
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
    
  return (
    <>
      <BasicMetaTags 
        title={optimizedTitle}
        description={optimizedDescription}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        canonicalUrl={fullCanonicalUrl}
        modifiedDate={modifiedDate}
        language={language}
      />
      
      <OpenGraphTags 
        title={optimizedTitle}
        description={optimizedDescription}
        image={ogImage}
        url={fullCanonicalUrl}
        modifiedDate={modifiedDate}
        baseUrl={baseUrl}
        type={ogType}
        publishedDate={publishedDate}
      />
      
      <TwitterTags 
        title={optimizedTitle}
        description={optimizedDescription}
        image={ogImage}
        baseUrl={baseUrl}
        cardType={twitterCardType}
      />
      
      <Helmet>
        {/* Core meta tags */}
        <link rel="sitemap" type="application/xml" href={`${baseUrl}/sitemap.xml`} />
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-image-preview:large,max-snippet:-1,max-video-preview:-1`} />
        
        {/* Structured data attributes */}
        {publishedDate && <meta property="article:published_time" content={publishedDate} />}
        {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
        
        {/* Location-specific meta tags for service areas */}
        {geoRegion && <meta name="geo.region" content={geoRegion} />}
        {geoPlaceName && <meta name="geo.placename" content={geoPlaceName} />}
        {geoPosition && <meta name="geo.position" content={geoPosition} />}
        {icbm && <meta name="ICBM" content={icbm} />}
        {author && <meta name="author" content={author} />}
        
        {/* Alternate language versions */}
        {alternateLanguages && alternateLanguages.map(alt => (
          <link 
            key={alt.locale} 
            rel="alternate" 
            hrefLang={alt.locale} 
            href={alt.url.startsWith('http') ? alt.url : `${baseUrl}${alt.url.startsWith('/') ? alt.url : `/${alt.url}`}`}
          />
        ))}
        
        {/* Pagination links for sequential content */}
        {nextPrevLinks?.prev && (
          <link 
            rel="prev" 
            href={nextPrevLinks.prev.startsWith('http') ? nextPrevLinks.prev : `${baseUrl}${nextPrevLinks.prev.startsWith('/') ? nextPrevLinks.prev : `/${nextPrevLinks.prev}`}`}
          />
        )}
        {nextPrevLinks?.next && (
          <link 
            rel="next" 
            href={nextPrevLinks.next.startsWith('http') ? nextPrevLinks.next : `${baseUrl}${nextPrevLinks.next.startsWith('/') ? nextPrevLinks.next : `/${nextPrevLinks.next}`}`}
          />
        )}
      </Helmet>
      
      {schemas && schemas.length > 0 && (
        <SchemaScripts schemas={schemas} />
      )}
    </>
  );
};

export default SEOHead;
