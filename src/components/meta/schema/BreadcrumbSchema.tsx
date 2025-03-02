
import { Helmet } from "react-helmet";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  breadcrumbs: BreadcrumbItem[];
  baseUrl?: string;
}

export const BreadcrumbSchema = ({ breadcrumbs, baseUrl = "https://247locksmithandsecurity.com" }: BreadcrumbSchemaProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.item}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export const createBreadcrumbSchema = ({ breadcrumbs, baseUrl = "https://247locksmithandsecurity.com" }: BreadcrumbSchemaProps) => ({
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
