
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import ServicesProof from '@/components/sections/services/ServicesProof';
import PageLayout from '@/components/layouts/PageLayout';

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
    <PageLayout
      title={title}
      description={description}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      schemas={schemas}
      customBreadcrumbs={customBreadcrumbs}
      heroTitle={title}
      heroDescription={description}
      hideBreadcrumbs={false} // Let PageLayout handle breadcrumbs
    >
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
      />
      
      {reviewsData.length > 0 && (
        <ServicesProof reviewsData={reviewsData} />
      )}
    </PageLayout>
  );
};

export default ServiceLayout;
