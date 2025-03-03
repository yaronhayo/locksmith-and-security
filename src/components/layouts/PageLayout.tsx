
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MetaTags from './MetaTags';
import Breadcrumbs from '../Breadcrumbs';
import LoadingState from './LoadingState';
import PageHero from './PageHero';
import ScrollToTop from '../ScrollToTop';
import { SchemaScripts } from '../meta/SchemaScripts';
import { BreadcrumbItem } from '@/routes/types';
import { HreflangTags } from '../meta/HreflangTags';
import { setupIframeObserver } from '@/utils/iframeUtils';

interface PageLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  breadcrumbs?: BreadcrumbItem[];
  heroTitle?: string;
  heroDescription?: string;
  customBreadcrumbs?: Array<{name: string, path: string}>;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  hideBreadcrumbs?: boolean;
  isLoading?: boolean;
  schema?: { type: string; data: any }[];
  preselectedService?: string;
  languages?: Array<{lang: string, path?: string}>;
  defaultLang?: string;
}

/**
 * Primary layout component for all pages
 * Includes header, footer, and meta tags
 */
const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  title,
  description,
  keywords = '',
  canonicalUrl,
  heroTitle,
  heroDescription,
  customBreadcrumbs,
  children,
  ogImage,
  ogType = 'website',
  noindex = false,
  nofollow = false,
  modifiedDate,
  hideBreadcrumbs = false,
  isLoading = false,
  schema = [],
  breadcrumbs = [],
  preselectedService,
  languages,
  defaultLang = 'en-US'
}) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  
  useEffect(() => {
    console.log('PageLayout mounted');
    
    // Set up iframe doctype fixer with proper cleanup handling
    try {
      const cleanupIframeObserver = setupIframeObserver();
      cleanupRef.current = cleanupIframeObserver;
    } catch (error) {
      console.error("Error setting up iframe observer:", error);
    }
    
    return () => {
      // Clean up the observer when component unmounts
      if (cleanupRef.current) {
        try {
          cleanupRef.current();
          cleanupRef.current = null;
        } catch (error) {
          console.error("Error cleaning up iframe observer:", error);
        }
      }
    };
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  const baseUrl = 'https://247locksmithandsecurity.com';

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
      
      {/* Add hreflang tags if multiple languages are supported */}
      {languages && (
        <HreflangTags 
          baseUrl={baseUrl} 
          languages={languages} 
          defaultLang={defaultLang} 
        />
      )}
      
      <SchemaScripts schemas={schema} />
      
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {heroTitle && (
            <PageHero 
              title={heroTitle} 
              description={heroDescription || description}
              preselectedService={preselectedService}
            />
          )}
          
          {!hideBreadcrumbs && (customBreadcrumbs || breadcrumbs.length > 0) && (
            <div className="container mx-auto px-4 py-4">
              <Breadcrumbs items={customBreadcrumbs || breadcrumbs.map(b => ({ name: b.name, path: b.path }))} />
            </div>
          )}
          
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
