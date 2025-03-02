
import React from 'react';
import ServicePageHeader from './ServicePageHeader';
import ServiceTrustBadges from './ServiceTrustBadges';
import ServiceMainContent from './ServiceMainContent';
import ServiceProcessSection from './ServiceProcessSection';
import ServiceFAQSection from './ServiceFAQSection';
import ServiceCtaSection from './ServiceCtaSection';
import ServiceSidebar from './ServiceSidebar';
import { ServicePageSharedStyles } from './ServicePageStyles';

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  path: string;
  description: string;
}

interface ServicePageContentProps {
  title: string;
  description: string;
  serviceName: string;
  serviceCategory: string;
  mainContent: React.ReactNode;
  faqs?: FAQItem[];
  relatedServices?: RelatedService[];
  customBreadcrumbs?: Array<{name: string, path: string}>;
}

const ServicePageContent: React.FC<ServicePageContentProps> = ({
  title,
  description,
  serviceName,
  serviceCategory,
  mainContent,
  faqs = [],
  relatedServices = [],
  customBreadcrumbs
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content area - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <ServicePageHeader 
                title={title} 
                description={description} 
              />
              
              <ServiceTrustBadges />
              
              <ServiceMainContent 
                serviceName={serviceName}
                serviceCategory={serviceCategory}
                mainContent={mainContent}
              />
              
              <ServiceProcessSection serviceName={serviceName} />
              
              {faqs.length > 0 && (
                <ServiceFAQSection faqs={faqs} />
              )}
              
              <ServiceCtaSection serviceName={serviceName} />
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <ServiceSidebar 
            serviceName={serviceName} 
            relatedServices={relatedServices} 
          />
        </div>
      </div>

      <ServicePageSharedStyles />
    </div>
  );
};

export default ServicePageContent;
