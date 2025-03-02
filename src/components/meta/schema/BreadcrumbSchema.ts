
interface BreadcrumbItem {
  name: string;
  path: string;
  item?: string;
}

interface BreadcrumbSchemaProps {
  breadcrumbs: BreadcrumbItem[];
  baseUrl?: string;
}

export const createBreadcrumbSchema = ({ 
  breadcrumbs, 
  baseUrl = "https://247locksmithandsecurity.com" 
}: BreadcrumbSchemaProps) => {
  return {
    type: 'BreadcrumbList',
    data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumb.name,
        "item": breadcrumb.item ? `${baseUrl}${breadcrumb.item}` : `${baseUrl}${breadcrumb.path}`
      }))
    }
  };
};
