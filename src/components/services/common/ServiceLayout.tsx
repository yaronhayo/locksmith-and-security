
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import ServicesProof from '@/components/sections/services/ServicesProof';

interface ServiceLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  serviceName: string;
  serviceCategory: string;
  mainContent: React.ReactNode;
  faqs?: { question: string; answer: string }[];
  relatedServices?: { title: string; path: string; description: string }[];
  reviewsData?: any[];
  schemas?: { type: string; data: any }[];
  canonicalUrl?: string;
  customBreadcrumbs?: Array<{name: string, path: string}>;
}

/**
 * Standardized layout for all service pages
 */
const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  keywords,
  serviceName,
  serviceCategory,
  mainContent,
  faqs = [],
  relatedServices = [],
  reviewsData = [],
  schemas = [],
  canonicalUrl,
  customBreadcrumbs
}) => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={`https://247locksmithandsecurity.com${canonicalUrl}`} />}
      </Helmet>
      
      <SchemaScripts schemas={schemas} />
      
      <EnhancedServicesHero 
        title={title}
        description={description}
        serviceName={serviceName}
        serviceLabel={serviceCategory}
      />
      
      <ServicePageContent
        title={title}
        description={description}
        serviceName={serviceName}
        serviceCategory={serviceCategory}
        mainContent={mainContent}
        faqs={faqs}
        relatedServices={relatedServices}
        customBreadcrumbs={customBreadcrumbs}
      />
      
      {reviewsData.length > 0 && (
        <ServicesProof reviewsData={reviewsData} />
      )}
    </main>
  );
};

export default ServiceLayout;
