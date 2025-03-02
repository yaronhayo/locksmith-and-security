
import React from "react";

interface NavItem {
  name: string;
  url: string;
}

export interface SiteNavigationSchemaProps {
  items: NavItem[];
  baseUrl?: string;
}

export const createSiteNavigationSchema = ({ items, baseUrl = "https://247locksmithandsecurity.com" }: SiteNavigationSchemaProps) => {
  return {
    type: 'SiteNavigationElement',
    data: {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": items.map(item => item.name),
      "url": items.map(item => item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`)
    }
  };
};
