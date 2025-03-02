
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from "@/components/layouts/PageLayout";
import { RouteConfig, PageMetaProps, BreadcrumbItem } from './types';
import { mapServicePathToOption } from '@/utils/servicePathMapper';

/**
 * Creates a route with PageLayout
 */
export const createPageRoute = (
  path: string, 
  component: ReactNode, 
  meta: PageMetaProps
): RouteConfig => {
  // Get preselected service if applicable based on path
  const preselectedService = mapServicePathToOption(path);
  
  return {
    path,
    // We provide the component directly without additional PageLayout since specialized
    // components like ServiceLayout, ServiceAreaLayout, etc. already use PageLayout internally
    element: component,
    meta: {
      title: meta.title,
      description: meta.description
    }
  };
};

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
