
/**
 * Schema.org JSON-LD data structure types
 */

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

export interface ServiceSchemaInput {
  title: string;
  description: string;
  category?: string;
  offerings?: string[];
  price?: string;
  canonicalUrl: string;
}

export interface ServiceAreaSchemaInput {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  services: string[];
  canonicalUrl: string;
}

export interface LocalBusinessSchemaInput {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
}
