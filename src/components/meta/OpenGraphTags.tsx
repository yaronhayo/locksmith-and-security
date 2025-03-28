
import { Helmet } from "react-helmet";

interface OpenGraphTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  modifiedDate: string;
  baseUrl: string;
  type?: "website" | "article" | "product" | "profile" | "book";
  siteName?: string;
  locale?: string;
}

export const OpenGraphTags = ({ 
  title, 
  description, 
  image, 
  url, 
  modifiedDate,
  baseUrl,
  type = "website",
  siteName = "Locksmith & Security LLC",
  locale = "en_US" 
}: OpenGraphTagsProps) => {
  // Ensure OG description stays within recommended length (150-157 characters to be safe)
  const optimizedDescription = description.length > 157 
    ? `${description.substring(0, 157)}...` 
    : description;

  // Ensure image URL is absolute
  const absoluteImageUrl = image && !image.startsWith('http') && baseUrl 
    ? `${baseUrl}${image}` 
    : image || "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";

  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:alt" content={`Image for ${title}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:updated_time" content={modifiedDate} />
    </Helmet>
  );
};
