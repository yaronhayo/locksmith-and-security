
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
}: OpenGraphTagsProps) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image || "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg"} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Locksmith & Security LLC" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:updated_time" content={modifiedDate} />
  </Helmet>
);
