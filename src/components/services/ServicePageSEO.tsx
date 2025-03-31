
import React from 'react';
import SEOManager from '@/components/meta/SEOManager';

interface Question {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  path: string;
  description: string;
}

interface ServicePageSEOProps {
  title: string;
  description: string;
  serviceName: string;
  serviceCategory: string;
  canonicalUrl: string;
  faqs?: Question[];
  relatedServices?: RelatedService[];
  serviceOfferings?: string[];
  servicePrice?: string;
  children: React.ReactNode;
}

const ServicePageSEO: React.FC<ServicePageSEOProps> = ({
  title,
  description,
  serviceName,
  serviceCategory,
  canonicalUrl,
  faqs = [],
  relatedServices = [],
  serviceOfferings = [],
  servicePrice = "49.00",
  children
}) => {
  // Generate optimized keywords for the service
  const keywordsArray = [
    serviceName.toLowerCase(),
    `${serviceName.toLowerCase()} services`,
    `${serviceName.toLowerCase()} locksmith`,
    `professional ${serviceName.toLowerCase()}`,
    `${serviceCategory.toLowerCase()} locksmith services`,
    '24/7 locksmith',
    'emergency locksmith',
    'licensed locksmith',
    'insured locksmith',
    'New Jersey locksmith',
    'North Bergen locksmith',
    'Hudson County locksmith'
  ];
  
  // Create service-specific schema offerings
  const offerings = serviceOfferings.length > 0 
    ? serviceOfferings 
    : [
        `${serviceName} Services`,
        `Emergency ${serviceName}`,
        `Residential ${serviceName}`,
        `Commercial ${serviceName}`,
        `24/7 ${serviceName}`
      ];
      
  // Create breadcrumbs for schema
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: serviceCategory, item: `/services/${serviceCategory.toLowerCase().replace(/\s+/g, '-')}` },
    { name: serviceName, item: canonicalUrl }
  ];
  
  return (
    <SEOManager
      pageType="service"
      title={title}
      description={description}
      canonicalUrl={canonicalUrl}
      keywords={keywordsArray.join(', ')}
      serviceName={serviceName}
      serviceCategory={serviceCategory}
      serviceDescription={description}
      serviceOfferings={offerings}
      servicePrice={servicePrice}
      faqs={faqs}
      breadcrumbs={breadcrumbs}
      modifiedDate={new Date().toISOString()}
    >
      {children}
    </SEOManager>
  );
};

export default ServicePageSEO;
