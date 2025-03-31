
interface WebSiteSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  publisherName?: string;
  publisherLogo?: string;
  inLanguage?: string;
  keywords?: string;
}

export const createWebSiteSchema = ({
  name = "Locksmith & Security LLC",
  description = "Professional 24/7 locksmith services for residential, commercial, and automotive needs.",
  url = "https://247locksmithandsecurity.com",
  publisherName = "Locksmith & Security LLC",
  publisherLogo = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  inLanguage = "en-US",
  keywords = "locksmith, emergency locksmith, 24/7 locksmith, residential locksmith, commercial locksmith, auto locksmith"
}: WebSiteSchemaProps = {}) => {
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    "name": name,
    "description": description,
    "url": url,
    "inLanguage": inLanguage,
    "keywords": keywords,
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo.startsWith('http') ? publisherLogo : `${url}${publisherLogo.startsWith('/') ? publisherLogo : `/${publisherLogo}`}`,
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
      }
    ]
  };
  
  return {
    type: 'WebSite',
    data: websiteSchema
  };
};
