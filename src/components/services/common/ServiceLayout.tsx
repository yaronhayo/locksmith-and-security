
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
      <div className="-mt-8 sm:-mt-6">
        <EnhancedServicesHero 
          title={title}
          description={description}
          serviceName={serviceName}
          serviceLabel={serviceCategory}
          preselectedService={preselectedService}
        />
      </div>
      
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
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          <ServicesProof reviewsData={reviewsData} />
        </div>
      )}
    </PageLayout>
  );
};

export default ServiceLayout;
