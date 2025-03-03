
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ServicePageWrapper from './ServicePageWrapper';

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
  preselectedService?: string;
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
  customBreadcrumbs,
  preselectedService
}) => {
  return (
    <PageLayout
      title={title}
      description={description}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      schema={schemas}
      customBreadcrumbs={customBreadcrumbs}
      hideBreadcrumbs={false}
      preselectedService={preselectedService}
    >
      <ServicePageWrapper
        title={title}
        description={description}
        serviceName={serviceName}
        serviceCategory={serviceCategory}
        mainContent={mainContent}
        faqs={faqs}
        relatedServices={relatedServices}
        reviewsData={reviewsData}
        preselectedService={preselectedService}
      />
    </PageLayout>
  );
};

export default ServiceLayout;
