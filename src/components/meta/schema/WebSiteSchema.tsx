
interface WebSiteSchemaProps {
  name?: string;
  description?: string;
  baseUrl?: string;
  searchUrl?: string;
}

export const createWebSiteSchema = ({
  name = "Locksmith & Security LLC",
  description = "Professional 24/7 locksmith services for residential, commercial, and automotive needs throughout North Bergen, NJ and surrounding areas.",
  baseUrl = "https://247locksmithandsecurity.com",
  searchUrl = "https://247locksmithandsecurity.com/search?q="
}: WebSiteSchemaProps = {}) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": baseUrl,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${searchUrl}{search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  
  return {
    type: 'WebSite',
    data: websiteSchema
  };
};
