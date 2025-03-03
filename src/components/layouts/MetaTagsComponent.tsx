import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaTagsComponentProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
}

const MetaTagsComponent: React.FC<MetaTagsComponentProps> = ({
  title,
  description,
  keywords = '',
  canonicalUrl,
  ogImage,
  ogType = 'website',
  noindex = false,
  nofollow = false,
  modifiedDate
}) => {
  // Prepare robots meta content
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  else robotsContent.push('index');
  if (nofollow) robotsContent.push('nofollow');
  else robotsContent.push('follow');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent.join(', ')} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && (
        <>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </>
      )}
      
      {/* If there's a modified date (for articles/blogs) */}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      
      {/* Other standard meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default MetaTagsComponent;
