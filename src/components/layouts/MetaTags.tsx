
import React from 'react';
import { Helmet } from 'react-helmet';

export interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  schema?: any | any[]; // Schema can be a single object or array
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  noindex,
  nofollow,
  modifiedDate,
  schema
}) => {
  // Convert schema to array if it's a single object
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph tags */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {!ogImage && <meta property="og:image" content="/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png" />}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {!ogImage && <meta name="twitter:image" content="/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png" />}
      
      {/* Robots meta tags for SEO control */}
      {(noindex || nofollow) && (
        <meta 
          name="robots" 
          content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} 
        />
      )}
      
      {/* Modified date for SEO */}
      {modifiedDate && <meta name="last-modified" content={modifiedDate} />}
      
      {/* Schema markup */}
      {schemas.map((schemaItem, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default MetaTags;
