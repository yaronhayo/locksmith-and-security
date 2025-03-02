
import { Helmet } from "react-helmet";

interface OpenGraphTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  modifiedDate: string;
  baseUrl: string;
}

export const OpenGraphTags = ({ 
  title, 
  description, 
  image, 
  url, 
  modifiedDate,
  baseUrl 
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
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Locksmith & Security LLC" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content={modifiedDate} />
    </Helmet>
  );
};
