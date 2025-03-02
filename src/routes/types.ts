
import { ReactNode } from 'react';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  // Additional optional properties for metadata
  meta?: {
    title?: string;
    description?: string;
    requiresAuth?: boolean;
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  breadcrumbs?: BreadcrumbItem[];
  customBreadcrumbs?: Array<{name: string, path: string}>;
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  hideBreadcrumbs?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}
