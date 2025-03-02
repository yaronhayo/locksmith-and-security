
import React from 'react';

type BreadcrumbItemType = {
  name: string;
  path?: string; // Make path optional to accommodate both structures
  item?: string; // Make item optional to accommodate both structures
};

interface BreadcrumbSchemaProps {
  breadcrumbs?: BreadcrumbItemType[];
  baseUrl?: string; // Add baseUrl as an optional property
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ breadcrumbs = [], baseUrl = '' }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  // Create schema for breadcrumbs
  const itemListElement = breadcrumbs.map((breadcrumb, index) => {
    // Handle both formats by using the appropriate property
    const url = breadcrumb.path || breadcrumb.item || '';
    
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": url.startsWith('http') ? url : `${baseUrl || 'https://247locksmithandsecurity.com'}${url}`
    };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>;
};

// Add back the create function for compatibility with existing code
export const createBreadcrumbSchema = (props: BreadcrumbSchemaProps) => {
  if (!props.breadcrumbs || props.breadcrumbs.length === 0) return null;

  const itemListElement = props.breadcrumbs.map((breadcrumb, index) => {
    const url = breadcrumb.path || breadcrumb.item || '';
    
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": url.startsWith('http') ? url : `${props.baseUrl || 'https://247locksmithandsecurity.com'}${url}`
    };
  });

  return {
    type: 'BreadcrumbList',
    data: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    }
  };
};
