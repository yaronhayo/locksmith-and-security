import { Helmet } from "react-helmet";

interface OpenGraphTagsProps {
  title: string;
  description: string;
  ogImage: string;
  baseUrl: string;
  canonicalUrl: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const OpenGraphTags = ({
  title,
  description,
  ogImage,
  baseUrl,
  canonicalUrl,
  type = "website",
  publishedTime = new Date().toISOString(),
  modifiedTime = new Date().toISOString(),
}: OpenGraphTagsProps) => {
  const fullTitle = `${title} | Locksmith & Security LLC - Professional Locksmith Services in North Bergen, NJ`;

  return (
    <Helmet>
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Locksmith & Security LLC" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:modified_time" content={modifiedTime} />
    </Helmet>
  );
};

export default OpenGraphTags;