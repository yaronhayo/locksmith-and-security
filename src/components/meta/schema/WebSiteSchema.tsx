
import { WebSiteSchemaProps } from "@/types/schema";

export const createWebSiteSchema = ({
  name = "Locksmith & Security LLC",
  url = "https://247locksmithandsecurity.com",
  description = "Professional locksmith services offering residential, commercial, and automotive solutions.",
  publisher = "Locksmith & Security LLC",
  potentialAction = []
}: WebSiteSchemaProps = {}) => {
  
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": publisher,
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png`,
        "width": 600,
        "height": 60
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      ...potentialAction
    ]
  };
  
  return {
    type: 'WebSite',
    data: webSiteSchema
  };
};
