
import { Helmet } from "react-helmet";

interface BasicMetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  noindex: boolean;
  nofollow: boolean;
  canonicalUrl: string;
  modifiedDate: string;
  language?: string;
  viewport?: string;
  themeColor?: string;
}

export const BasicMetaTags = ({
  title,
  description,
  keywords,
  noindex,
  nofollow,
  canonicalUrl,
  modifiedDate,
  language = "en",
  viewport = "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor = "#1E3A8A"
}: BasicMetaTagsProps) => {
  // Ensure description stays within recommended length (150-157 characters to be safe)
  const optimizedDescription = description.length > 157 
    ? `${description.substring(0, 157)}...` 
    : description;

  // Create robots content based on props
  const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}${!noindex ? ',max-image-preview:large,max-snippet:-1,max-video-preview:-1' : ''}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content={viewport} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="author" content="Locksmith & Security LLC" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.`} />
      <meta name="last-modified" content={modifiedDate} />
    </Helmet>
  );
};
