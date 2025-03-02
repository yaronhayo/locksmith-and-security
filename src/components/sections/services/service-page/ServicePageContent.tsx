
import React from 'react';
import ServicePageHeader from './ServicePageHeader';
import ServiceTrustBadges from './ServiceTrustBadges';
import ServiceMainContent from './ServiceMainContent';
import ServiceProcessSection from './ServiceProcessSection';
import ServiceFAQSection from './ServiceFAQSection';
import ServiceCtaSection from './ServiceCtaSection';
import ServiceSidebar from './ServiceSidebar';
import { ServicePageSharedStyles } from './ServicePageStyles';
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  categoryDescription?: React.ReactNode;
  categoryFeatures?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const ServicePageContent: React.FC<ServicePageContentProps> = ({
  title,
  description,
  serviceName,
  serviceCategory,
  mainContent,
  faqs = [],
  relatedServices = [],
  categoryDescription,
  categoryFeatures = []
}) => {
  const showCategoryContent = !!categoryDescription;
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {showCategoryContent && (
          <div className="mb-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
              {title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {categoryDescription}
            </div>
            
            {categoryFeatures.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {categoryFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-primary/5 rounded-lg p-6 border border-primary/10 hover:shadow-md transition-shadow"
                  >
                    {feature.icon && (
                      <div className="text-secondary mb-3">
                        {feature.icon}
                      </div>
                    )}
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10">
              <Button asChild className="w-full sm:w-auto">
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (201) 748-2070
                </a>
              </Button>
              
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
        
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content area - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {!showCategoryContent && (
                <ServicePageHeader 
                  title={title} 
                  description={description} 
                />
              )}
              
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
