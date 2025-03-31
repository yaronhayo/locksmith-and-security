
export interface SchemaData {
  type: string;
  data: object;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaProps {
  title: string;
  description: string;
  baseUrl: string;
  settings?: any;
  canonicalUrl: string;
  category?: string;
  offerings?: string[];
  price?: string;
  priceCurrency?: string;
  dateModified?: string;
  datePublished?: string;
  relatedServices?: string[];
}

export interface LocationSchemaProps {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  areaServed: string;
  companyName: string;
  address: string;
  phone: string;
}

export interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  publisher?: string;
  potentialAction?: any[];
}

export interface FAQQuestion {
  "@type": string;
  name: string;
  acceptedAnswer: {
    "@type": string;
    text: string;
  };
}

export interface FAQSchema {
  type: string;
  data: {
    "@context": string;
    "@type": string;
    mainEntity: FAQQuestion[];
  };
}
