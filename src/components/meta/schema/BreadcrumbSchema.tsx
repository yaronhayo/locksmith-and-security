
interface BreadcrumbSchemaProps {
  breadcrumbs: Array<{ name: string; item: string }>;
  baseUrl: string;
}

export const createBreadcrumbSchema = ({ breadcrumbs, baseUrl }: BreadcrumbSchemaProps) => ({
  type: 'BreadcrumbList',
  data: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.item}`
    }))
  }
});
