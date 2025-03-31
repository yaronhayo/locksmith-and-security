
import React from 'react';
import { Helmet } from 'react-helmet';
import SEOHead from './SEOHead';
import { createServicePageSchema } from './schema/ServicePageSchema';
import { createFAQSchema } from './schema/FAQSchema';
import { createBreadcrumbSchema } from './schema/BreadcrumbSchema';
import { createServiceSchema } from './schema/ServiceSchema';
import { BreadcrumbItem, FAQItem, SchemaData } from '@/types/schema';
import EnhancedBreadcrumbs from '../navigation/EnhancedBreadcrumbs';

interface SEOManagerProps {
  children: React.ReactNode;
  pageType: 'home' | 'service' | 'service-area' | 'blog' | 'about' | 'contact' | 'faq' | 'reviews' | 'default';
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  twitterCardType?: "summary" | "summary_large_image" | "app" | "player";
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  publishedDate?: string;
  serviceName?: string;
  serviceCategory?: string;
  serviceDescription?: string;
  serviceOfferings?: string[];
  servicePrice?: string;
  servicePriceCurrency?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  areaName?: string;
  areaDescription?: string;
  locationName?: string;
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };
  areaServices?: string[];
  author?: string;
  alternateLanguages?: {locale: string, url: string}[];
  nextPrevLinks?: {prev?: string, next?: string};
}

const SEOManager: React.FC<SEOManagerProps> = ({ 
  children,
  pageType,
  title,
  description,
  canonicalUrl,
  keywords = "",
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  ogType = "website",
  twitterCardType = "summary_large_image",
  noindex = false,
  nofollow = false,
  modifiedDate = new Date().toISOString(),
  publishedDate,
  serviceName,
  serviceCategory,
  serviceDescription,
  serviceOfferings = [],
  servicePrice = "49.00",
  servicePriceCurrency = "USD",
  faqs = [],
  breadcrumbs = [],
  locationName,
  geoCoordinates,
  author,
  alternateLanguages,
  nextPrevLinks
}) => {
  // Base URL for absolute references
  const baseUrl = "https://247locksmithandsecurity.com";
  
  // Generate schemas based on page type
  const schemas: SchemaData[] = [];
  
  // Add breadcrumb schema if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(createBreadcrumbSchema({ breadcrumbs, baseUrl }));
  }
  
  // Add FAQ schema if FAQs are provided
  if (faqs && faqs.length > 0) {
    schemas.push(createFAQSchema({ questions: faqs }));
  }
  
  // Add service schema for service pages
  if (pageType === 'service' && serviceName && serviceCategory) {
    // For detailed service pages
    schemas.push(
      createServicePageSchema({
        title: serviceName,
        description: serviceDescription || description,
        serviceName,
        serviceCategory,
        canonicalUrl,
        price: servicePrice,
        serviceOfferings: serviceOfferings,
        dateModified: modifiedDate,
        datePublished: publishedDate
      })
    );
  }
  
  // SEO metadata
  const pageTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const pageDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  return (
    <>
      {/* SEO Head with metadata */}
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        schemas={schemas}
        ogImage={ogImage}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        modifiedDate={modifiedDate}
        publishedDate={publishedDate}
        ogType={ogType}
        twitterCardType={twitterCardType}
        baseUrl={baseUrl}
        author={author}
        alternateLanguages={alternateLanguages}
        nextPrevLinks={nextPrevLinks}
      />
      
      {/* Schema specific to location pages */}
      {pageType === 'service-area' && locationName && geoCoordinates && (
        <Helmet>
          <meta name="geo.region" content={`US-NJ`} />
          <meta name="geo.placename" content={locationName} />
          <meta name="geo.position" content={`${geoCoordinates.latitude};${geoCoordinates.longitude}`} />
          <meta name="ICBM" content={`${geoCoordinates.latitude}, ${geoCoordinates.longitude}`} />
        </Helmet>
      )}
      
      {/* Show breadcrumbs if provided */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <EnhancedBreadcrumbs 
          baseUrl={baseUrl}
          includeSchema={false}
          customPaths={breadcrumbs.reduce((acc, crumb) => {
            // Extract the last part of the path for the breadcrumb key
            const pathSegment = crumb.item.split('/').filter(Boolean).pop() || '';
            return { ...acc, [pathSegment]: crumb.name };
          }, {})}
        />
      )}
      
      {/* Page content */}
      {children}
    </>
  );
};

export default SEOManager;
