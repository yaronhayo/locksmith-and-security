
import { Helmet } from "react-helmet";

interface BasicMetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  noindex: boolean;
  nofollow: boolean;
  canonicalUrl: string;
  modifiedDate: string;
}

export const BasicMetaTags = ({
  title,
  description,
  keywords,
  noindex,
  nofollow,
  canonicalUrl,
  modifiedDate
}: BasicMetaTagsProps) => {
  // Ensure description stays within recommended length (150-157 characters to be safe)
  const optimizedDescription = description.length > 157 
    ? `${description.substring(0, 157)}...` 
    : description;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      {(noindex || nofollow) && (
        <meta 
          name="robots" 
          content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} 
        />
      )}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content="#1E3A8A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="author" content="Locksmith & Security LLC" />
      <meta name="copyright" content="© 2024 Locksmith & Security LLC. All rights reserved." />
      <meta name="last-modified" content={modifiedDate} />
    </Helmet>
  );
};
