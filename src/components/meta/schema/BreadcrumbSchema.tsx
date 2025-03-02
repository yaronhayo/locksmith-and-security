
import React from 'react';

type BreadcrumbItemType = {
  name: string;
  path?: string; // Make path optional to accommodate both structures
  item?: string; // Make item optional to accommodate both structures
};

interface BreadcrumbSchemaProps {
  breadcrumbs?: BreadcrumbItemType[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ breadcrumbs = [] }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  // Create schema for breadcrumbs
  const itemListElement = breadcrumbs.map((breadcrumb, index) => {
    // Handle both formats by using the appropriate property
    const url = breadcrumb.path || breadcrumb.item || '';
    
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": url.startsWith('http') ? url : `https://247locksmithandsecurity.com${url}`
    };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>;
};
