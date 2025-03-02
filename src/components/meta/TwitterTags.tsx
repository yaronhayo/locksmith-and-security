
import { Helmet } from "react-helmet";

interface TwitterTagsProps {
  title: string;
  description: string;
  image: string;
  baseUrl: string;
}

export const TwitterTags = ({ 
  title, 
  description, 
  image,
  baseUrl 
}: TwitterTagsProps) => {
  // Ensure Twitter description stays within recommended length (150-157 characters to be safe)
  const optimizedDescription = description.length > 157 
    ? `${description.substring(0, 157)}...` 
    : description;

  // Ensure image URL is absolute
  const absoluteImageUrl = image && !image.startsWith('http') && baseUrl 
    ? `${baseUrl}${image}` 
    : image || "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";

  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />
    </Helmet>
  );
};
