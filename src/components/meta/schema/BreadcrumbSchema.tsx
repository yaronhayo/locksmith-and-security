
interface BreadcrumbSchemaProps {
  breadcrumbs: Array<{
    name: string;
    item: string;
  }>;
  baseUrl?: string;
}

export const createBreadcrumbSchema = ({
  breadcrumbs,
  baseUrl = "https://247locksmithandsecurity.com"
}: BreadcrumbSchemaProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => {
      const fullUrl = breadcrumb.item.startsWith('http') 
        ? breadcrumb.item 
        : `${baseUrl}${breadcrumb.item.startsWith('/') ? breadcrumb.item : `/${breadcrumb.item}`}`;
        
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumb.name,
        "item": fullUrl
      };
    })
  };
  
  return {
    type: 'BreadcrumbList',
    data: breadcrumbSchema
  };
};
