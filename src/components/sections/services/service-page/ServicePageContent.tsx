
import React from 'react';
import ServicePageHeader from './ServicePageHeader';
import ServiceMainContent from './ServiceMainContent';
import ServiceFAQSection from './ServiceFAQSection';
import ServiceProcessSection from './ServiceProcessSection';
import ServiceTrustBadges from './ServiceTrustBadges';
import ServiceCtaSection from './ServiceCtaSection';
import ServiceSidebar from './ServiceSidebar';

interface ServicePageContentProps {
  title: string;
  description: string;
  serviceName: string;
  serviceCategory: string;
  mainContent: React.ReactNode;
  faqs?: { question: string; answer: string }[];
  relatedServices?: { title: string; path: string; description: string }[];
}

/**
 * Main content layout for service detail pages
 */
const ServicePageContent: React.FC<ServicePageContentProps> = ({
  title,
  description,
  serviceName,
  serviceCategory,
  mainContent,
  faqs = [],
  relatedServices = []
}) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <ServicePageHeader 
          title={title} 
          description={description} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="col-span-1 lg:col-span-2">
            <ServiceMainContent>
              {mainContent}
            </ServiceMainContent>
            
            <ServiceProcessSection serviceName={serviceName} />
            
            <ServiceTrustBadges />
            
            {faqs.length > 0 && (
              <ServiceFAQSection
                title={`${serviceName} FAQs`}
                faqs={faqs}
              />
            )}
          </div>
          
          <div className="col-span-1">
            <ServiceSidebar 
              serviceCategory={serviceCategory}
              relatedServices={relatedServices}
            />
          </div>
        </div>
        
        <ServiceCtaSection 
          title={`Ready for Professional ${serviceName} Service?`}
          description="Contact our team for fast, reliable service from licensed professionals."
        />
      </div>
    </div>
  );
};

export default ServicePageContent;
