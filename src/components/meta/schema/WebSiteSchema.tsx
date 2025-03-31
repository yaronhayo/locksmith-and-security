
import React from "react";

export interface WebSiteSchemaProps {
  name?: string;
  alternateName?: string;
  url?: string;
  description?: string;
  publisher?: string;
  inLanguage?: string;
  potentialAction?: {
    target: string;
  };
}

const defaultProps: WebSiteSchemaProps = {
  name: "247 Locksmith & Security",
  alternateName: "24/7 Locksmith and Security",
  url: "https://247locksmithandsecurity.com",
  description: "Professional locksmith services for residential, commercial, and automotive needs. 24/7 emergency service available.",
  publisher: "247 Locksmith & Security LLC",
  inLanguage: "en-US",
  potentialAction: {
    target: "https://247locksmithandsecurity.com/search?q={search_term_string}"
  }
};

export const createWebSiteSchema = (props: WebSiteSchemaProps = {}) => {
  const mergedProps = { ...defaultProps, ...props };
  
  return {
    type: 'WebSite',
    data: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://247locksmithandsecurity.com/#website",
      "name": mergedProps.name,
      "alternateName": mergedProps.alternateName,
      "url": mergedProps.url,
      "description": mergedProps.description,
      "publisher": {
        "@id": "https://247locksmithandsecurity.com/#localbusiness"
      },
      "inLanguage": mergedProps.inLanguage,
      ...(mergedProps.potentialAction && {
        "potentialAction": {
          "@type": "SearchAction",
          "target": mergedProps.potentialAction.target,
          "query-input": "required name=search_term_string"
        }
      })
    }
  };
};
