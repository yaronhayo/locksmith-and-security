
import { BreadcrumbItem } from "@/types/schema";

interface BreadcrumbSchemaProps {
  breadcrumbs: BreadcrumbItem[];
  baseUrl?: string;
}

export const createBreadcrumbSchema = ({
  breadcrumbs,
  baseUrl = "https://247locksmithandsecurity.com"
}: BreadcrumbSchemaProps) => {
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith('http') 
        ? crumb.item 
        : `${baseUrl}${crumb.item.startsWith('/') ? crumb.item : `/${crumb.item}`}`
    }))
  };
  
  return {
    type: 'BreadcrumbList',
    data: breadcrumbSchema
  };
};
