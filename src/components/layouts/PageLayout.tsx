
import React, { useEffect } from 'react';
import MetaTags from './MetaTags';
import { BreadcrumbSchema } from '../meta/schema/BreadcrumbSchema';
import { SchemaScripts } from '../meta/SchemaScripts';
import ScrollToTop from '../ScrollToTop';
import Breadcrumbs from '../Breadcrumbs';
import ScrollToTopButton from '../ScrollToTopButton';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from './PageHero';
import { cn } from '@/lib/utils';
import { BreadcrumbItem } from '@/routes/types';

export interface PageLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  children: React.ReactNode;
  schema?: any | any[]; // Clarify that schema can be an array or single object
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
  customBreadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  hideBreadcrumbs?: boolean;
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
  hideBreadcrumbs = false,
  heroTitle,
  heroDescription,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  // Determine which breadcrumbs to use (custom or standard)
  const activeBreadcrumbs = customBreadcrumbs || breadcrumbs;

  // Generate breadcrumb schema if breadcrumbs are present
  const breadcrumbSchemaData = activeBreadcrumbs && activeBreadcrumbs.length > 0
    ? <BreadcrumbSchema breadcrumbs={activeBreadcrumbs} /> 
    : null;

  // Combine all schemas for the page
  const schemas = [];
  if (schema) {
    // Handle both array and single schema object
    if (Array.isArray(schema)) {
      schemas.push(...schema);
    } else {
      schemas.push({ type: 'WebPage', data: schema });
    }
  }
  
  // Only add breadcrumb schema if we have breadcrumbs and they're not hidden
  if (breadcrumbSchemaData && !hideBreadcrumbs) {
    schemas.push({ 
      type: 'BreadcrumbList', 
      data: breadcrumbSchemaData.props.children
    });
  }

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
          {!hideBreadcrumbs && activeBreadcrumbs && activeBreadcrumbs.length > 0 && (
            <div className="container mx-auto px-4 py-4">
              <Breadcrumbs breadcrumbs={activeBreadcrumbs} />
            </div>
          )}
          
          {heroTitle && (
            <PageHero 
              title={heroTitle} 
              description={heroDescription} 
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
