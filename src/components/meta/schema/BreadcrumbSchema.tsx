
import React from 'react';
import { BreadcrumbItem } from '@/routes/types';

interface BreadcrumbSchemaProps {
  breadcrumbs: BreadcrumbItem[];
  baseUrl?: string;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ 
  breadcrumbs, 
  baseUrl = 'https://247locksmithandsecurity.com' 
}) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  // Create schema for breadcrumbs
  const itemListElement = breadcrumbs.map((breadcrumb, index) => {
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.path.startsWith('http') 
        ? breadcrumb.path 
        : `${baseUrl}${breadcrumb.path}`
    };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>;
};

// Helper function to create breadcrumb schema data for non-component usage
export const createBreadcrumbSchema = ({ breadcrumbs, baseUrl = 'https://247locksmithandsecurity.com' }: BreadcrumbSchemaProps) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  const itemListElement = breadcrumbs.map((breadcrumb, index) => {
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.path.startsWith('http') 
        ? breadcrumb.path 
        : `${baseUrl}${breadcrumb.path}`
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
