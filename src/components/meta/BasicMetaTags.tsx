import { Helmet } from "react-helmet";

interface BasicMetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  baseUrl?: string;
}

const BasicMetaTags = ({
  title,
  description,
  keywords = "locksmith, security, lock services, emergency locksmith, North Bergen",
  canonicalUrl,
  baseUrl = "https://247locksmithandsecurity.com"
}: BasicMetaTagsProps) => {
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullTitle = `${title} | Locksmith & Security LLC - Professional Locksmith Services in North Bergen, NJ`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <link rel="canonical" href={fullCanonicalUrl} />
    </Helmet>
  );
};

export default BasicMetaTags;