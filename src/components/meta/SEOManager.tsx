
import React from 'react';
import { SchemaData } from '@/types/schema';
import SEOHead from './SEOHead';
import { createServiceAreaSchema } from './schema/ServiceAreaSchema';
import { createFAQSchema } from './schema/FAQSchema';
import { createServiceSchema } from './schema/ServiceSchema';
import { createLocalBusinessSchema } from './schema/LocalBusinessSchema';
import { createBreadcrumbSchema } from './schema/BreadcrumbSchema';
import { useSettings } from '@/hooks/useSettings';

interface SEOManagerProps {
  pageType: 'home' | 'serviceArea' | 'service' | 'category' | 'blog' | 'contact' | 'about';
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
  children?: React.ReactNode;
  
  // Service Area specific props
  areaName?: string;
  areaDescription?: string;
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };
  areaServices?: string[];
  
  // Service specific props
  serviceName?: string;
  serviceCategory?: string;
  serviceDescription?: string;
  serviceOfferings?: string[];
  servicePrice?: string;
  serviceRegion?: string;
  
  // FAQ props
  faqs?: Array<{ question: string; answer: string }>;
  
  // Breadcrumb props
  breadcrumbs?: Array<{ name: string; item: string }>;
  
  // Additional SEO props
  modifiedDate?: string;
  publishedDate?: string;
  author?: string;
}

const SEOManager: React.FC<SEOManagerProps> = ({
  pageType,
  title,
  description,
  canonicalUrl,
  keywords = '',
  ogImage = '/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png',
  noindex = false,
  children,
  areaName,
  areaDescription,
  geoCoordinates,
  areaServices,
  serviceName,
  serviceCategory,
  serviceDescription,
  serviceOfferings,
  servicePrice,
  serviceRegion,
  faqs = [],
  breadcrumbs,
  modifiedDate = new Date().toISOString(),
  publishedDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
  author,
}) => {
  const settings = useSettings();
  const baseUrl = "https://247locksmithandsecurity.com";
  
  // Default settings to use if data is not available
  const defaultSettings = {
    company_name: "Locksmith & Security LLC", 
    company_phone: "(201) 748-2070", 
    company_address: "5800 Kennedy Blvd", 
    company_city: "North Bergen", 
    company_state: "NJ", 
    company_zip: "07047", 
    company_lat: "40.7795", 
    company_lng: "-74.0324", 
    base_url: "https://247locksmithandsecurity.com", 
    default_meta_title: "Professional Locksmith Services", 
    default_meta_description: "Expert locksmith services for residential, commercial and automotive needs.",
    GOOGLE_MAPS_API_KEY: "" 
  };
  
  // Build schemas based on page type
  const schemas: SchemaData[] = [];
  
  // Always add local business schema for all page types
  schemas.push(createLocalBusinessSchema({
    name: settings.data?.company_name || defaultSettings.company_name,
    telephone: settings.data?.company_phone || defaultSettings.company_phone,
    streetAddress: settings.data?.company_address || defaultSettings.company_address,
    addressLocality: settings.data?.company_city || defaultSettings.company_city,
    addressRegion: settings.data?.company_state || defaultSettings.company_state,
    postalCode: settings.data?.company_zip || defaultSettings.company_zip,
    geo: {
      latitude: parseFloat(settings.data?.company_lat || defaultSettings.company_lat),
      longitude: parseFloat(settings.data?.company_lng || defaultSettings.company_lng)
    }
  }));
  
  // Add breadcrumb schema if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(createBreadcrumbSchema({ breadcrumbs, baseUrl }));
  }
  
  // Service Area specific schemas
  if (pageType === 'serviceArea' && areaName) {
    schemas.push(createServiceAreaSchema({
      areaName,
      areaDescription: areaDescription || description,
      baseUrl,
      settings: settings.data || defaultSettings,
      canonicalUrl,
      services: areaServices || [],
      geoCoordinates,
      dateModified: modifiedDate,
      datePublished: publishedDate,
      areaServedRegion: serviceRegion || 'NJ'
    }));
  }
  
  // Service specific schemas
  if (pageType === 'service' && serviceName) {
    schemas.push(createServiceSchema({
      title: serviceName,
      description: serviceDescription || description,
      baseUrl,
      settings: settings.data || defaultSettings,
      canonicalUrl,
      category: serviceCategory,
      offerings: serviceOfferings,
      price: servicePrice,
      dateModified: modifiedDate,
      datePublished: publishedDate
    }));
  }
  
  // Add FAQ schema if FAQs exist
  if (faqs && faqs.length > 0) {
    schemas.push(createFAQSchema({ questions: faqs }));
  }

  // Optimize title for SEO (50-60 characters is ideal)
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  
  // Optimize description for SEO (150-155 characters is ideal)
  const optimizedDescription = description.length > 155 ? description.substring(0, 152) + "..." : description;
  
  // Determine geo settings based on page type
  const geoSettings: {
    geoRegion?: string;
    geoPlaceName?: string;
    geoPosition?: string;
    icbm?: string;
  } = {};
  
  if (pageType === 'serviceArea' && areaName && geoCoordinates) {
    geoSettings.geoRegion = `US-${serviceRegion || 'NJ'}`;
    geoSettings.geoPlaceName = areaName;
    geoSettings.geoPosition = `${geoCoordinates.latitude};${geoCoordinates.longitude}`;
    geoSettings.icbm = `${geoCoordinates.latitude}, ${geoCoordinates.longitude}`;
  }

  return (
    <>
      <SEOHead
        title={optimizedTitle}
        description={optimizedDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        schemas={schemas}
        ogImage={ogImage}
        noindex={noindex}
        nofollow={false}
        modifiedDate={modifiedDate}
        publishedDate={publishedDate}
        ogType="website"
        twitterCardType="summary_large_image"
        baseUrl={baseUrl}
        author={author || (settings.data?.company_name || 'Locksmith & Security LLC')}
        geoRegion={geoSettings.geoRegion}
        geoPlaceName={geoSettings.geoPlaceName}
        geoPosition={geoSettings.geoPosition}
        icbm={geoSettings.icbm}
      />
      {children}
    </>
  );
};

export default SEOManager;
