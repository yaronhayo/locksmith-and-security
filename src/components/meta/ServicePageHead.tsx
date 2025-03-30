
import React from 'react';
import SEOHead from './SEOHead';
import { createServiceSchema } from './schema/ServiceSchema';
import { createFAQSchema } from './schema/FAQSchema';
import { useSettings } from '@/hooks/useSettings';

interface Question {
  question: string;
  answer: string;
}

interface ServicePageHeadProps {
  title: string;
  description: string;
  serviceName: string;
  serviceCategory: string;
  mainKeywords: string;
  canonicalUrl: string;
  ogImage?: string;
  faqs?: Question[];
  modifiedDate?: string;
  publishedDate?: string;
  noindex?: boolean;
  relatedServices?: string[];
  serviceDescription?: string;
  serviceOfferings?: string[];
  servicePrice?: string;
  servicePriceCurrency?: string;
}

const ServicePageHead: React.FC<ServicePageHeadProps> = ({
  title,
  description,
  serviceName,
  serviceCategory,
  mainKeywords,
  canonicalUrl,
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  faqs = [],
  modifiedDate = new Date().toISOString(),
  publishedDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
  noindex = false,
  relatedServices = [],
  serviceDescription,
  serviceOfferings = [],
  servicePrice = "49.00",
  servicePriceCurrency = "USD"
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
  
  // Build schemas
  const schemas = [
    {
      type: 'service',
      data: createServiceSchema({
        title: serviceName,
        description: serviceDescription || description,
        baseUrl,
        settings: settings.data || defaultSettings,
        canonicalUrl,
        category: serviceCategory,
        dateModified: modifiedDate,
        datePublished: publishedDate,
        offerings: serviceOfferings.length > 0 ? serviceOfferings : [serviceName],
        relatedServices,
        price: servicePrice,
        priceCurrency: servicePriceCurrency
      })
    }
  ];
  
  // Add FAQ schema if FAQs exist
  if (faqs && faqs.length > 0) {
    schemas.push(createFAQSchema({ questions: faqs }));
  }

  // Optimize title for SEO (50-60 characters is ideal)
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  
  // Optimize description for SEO (150-155 characters is ideal)
  const optimizedDescription = description.length > 155 ? description.substring(0, 152) + "..." : description;

  return (
    <SEOHead
      title={optimizedTitle}
      description={optimizedDescription}
      keywords={mainKeywords}
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
    />
  );
};

export default ServicePageHead;
