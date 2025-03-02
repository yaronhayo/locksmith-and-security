
import React, { useEffect } from 'react';
import MetaTags from './MetaTags';
import { BreadcrumbSchema } from '../meta/schema/BreadcrumbSchema';
import { SchemaScripts } from '../meta/SchemaScripts';
import ScrollToTop from '../ScrollToTop';
import Breadcrumbs from '../Breadcrumbs';
import ScrollToTopButton from '../ScrollToTopButton';
import { LoadingState } from './LoadingState';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from './PageHero';
import { cn } from '@/lib/utils';

export interface PageLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  children: React.ReactNode;
  schema?: any;
  className?: string;
  breadcrumbs?: Array<{name: string, path: string}>;
  customBreadcrumbs?: Array<{name: string, path: string}>;
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  hideBreadcrumbs?: boolean; // When true, breadcrumbs are hidden
  heroTitle?: string;
  heroDescription?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType,
  children,
  schema,
  className,
  breadcrumbs,
  customBreadcrumbs,
  noindex,
  nofollow,
  modifiedDate,
  hideBreadcrumbs = false, // Default to false (show breadcrumbs)
  heroTitle,
  heroDescription,
}) => {
  useEffect(() => {
    // Auto-scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [title]); // Re-trigger on title change (new page)

  // Generate breadcrumb schema if breadcrumbs are present
  const breadcrumbSchema = ((breadcrumbs && breadcrumbs.length > 0) || (customBreadcrumbs && customBreadcrumbs.length > 0)) 
    ? <BreadcrumbSchema breadcrumbs={customBreadcrumbs || breadcrumbs} /> 
    : null;

  // Combine all schemas for the page
  const schemas = [];
  if (schema) schemas.push({ type: 'WebPage', data: schema });
  if (breadcrumbSchema) schemas.push({ type: 'BreadcrumbList', data: breadcrumbSchema });

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        ogType={ogType}
        noindex={noindex}
        nofollow={nofollow}
        modifiedDate={modifiedDate}
      />
      
      <SchemaScripts schemas={schemas} />
      
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("min-h-screen flex flex-col", className)}
        >
          {/* Only render breadcrumbs once at the top level if not hidden */}
          {!hideBreadcrumbs && (breadcrumbs || customBreadcrumbs) && (
            <div className="container mx-auto px-4 py-4">
              <Breadcrumbs breadcrumbs={customBreadcrumbs || breadcrumbs} includeSchema={false} />
            </div>
          )}
          
          {/* Hero section */}
          {heroTitle && (
            <PageHero 
              title={heroTitle} 
              description={heroDescription} 
              // Don't pass showBreadcrumbs to PageHero to avoid duplicate breadcrumbs
            />
          )}
          
          {children}
        </motion.div>
      </AnimatePresence>
      
      <ScrollToTopButton />
    </>
  );
};

export default PageLayout;
