
interface NavigationItem {
  name: string;
  url: string;
}

interface SiteNavigationSchemaProps {
  items: NavigationItem[];
  baseUrl?: string;
}

export const createSiteNavigationSchema = ({ 
  items, 
  baseUrl = "https://247locksmithandsecurity.com" 
}: SiteNavigationSchemaProps) => {
  return {
    type: 'SiteNavigationElement',
    data: {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "hasPart": items.map(item => ({
        "@type": "SiteNavigationElement",
        "name": item.name,
        "url": item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`
      }))
    }
  };
};
