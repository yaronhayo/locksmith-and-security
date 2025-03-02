
import React, { ReactNode } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { RouteConfig, PageMetaProps } from './types';

/**
 * Creates a route with PageLayout
 */
export const createPageRoute = (
  path: string, 
  component: ReactNode, 
  meta: PageMetaProps
): RouteConfig => ({
  path,
  element: (
    <PageLayout 
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      canonicalUrl={meta.canonicalUrl}
      ogImage={meta.ogImage}
      ogType={meta.ogType}
      breadcrumbs={meta.breadcrumbs}
      noindex={meta.noindex}
      nofollow={meta.nofollow}
      modifiedDate={meta.modifiedDate}
    >
      {component}
    </PageLayout>
  ),
  meta: {
    title: meta.title,
    description: meta.description
  }
});

/**
 * Creates a simple route without PageLayout
 */
export const createRoute = (
  path: string, 
  component: ReactNode, 
  title?: string,
  description?: string
): RouteConfig => ({
  path,
  element: component,
  meta: {
    title,
    description
  }
});

/**
 * Groups routes by category for better organization
 */
export const createRouteGroup = (prefix: string, routes: RouteConfig[]): RouteConfig[] => {
  return routes.map(route => ({
    ...route,
    path: `${prefix}${route.path}`
  }));
};
