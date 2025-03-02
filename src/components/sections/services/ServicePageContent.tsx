import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Calendar, ArrowUpRight, MessageSquare, ShieldCheck, Star } from "lucide-react";
import { FAQsAccordion } from "@/components/sections/FAQAccordion";
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
}

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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content area - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">{title}</h1>
              <p className="text-lg text-gray-600 mb-8">
                <span className="inline-block border-b-2 border-secondary/40 pb-1">{description}</span>
              </p>
              
              <div className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary mb-8">
                <div className="flex items-center mb-3">
                  <Star className="text-secondary h-5 w-5 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Professional {serviceName} Service</h3>
                </div>
                <p className="text-gray-700">Our certified technicians provide fast, reliable {serviceName.toLowerCase()} solutions with guaranteed workmanship. Available 24/7 for emergency assistance.</p>
              </div>
              
              {/* Apply orange accents to the mainContent container */}
              <div className="service-content">
                {mainContent}
              </div>
              
              {faqs.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
                    Frequently Asked Questions
                  </h2>
                  <FAQsAccordion faqs={faqs} />
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Contact card */}
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-xl overflow-hidden shadow-lg text-white mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                    <ShieldCheck className="mr-2 h-5 w-5 text-secondary" />
                    Need {serviceName} Service?
                  </h3>
                  <p className="mb-6 text-white/90">
                    Our professional team is ready to help. Contact us now for quick assistance.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full justify-center text-primary font-semibold hover:bg-secondary-hover hover:text-primary-dark"
                      asChild
                    >
                      <a href="tel:2017482070" className="flex items-center justify-center">
                        <Phone className="mr-2 h-5 w-5" />
                        (201) 748-2070
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full justify-center bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/30"
                      asChild
                    >
                      <Link to="/book-online" className="flex items-center justify-center">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Online
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Services card */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-secondary/20">
                  <div className="bg-secondary/10 p-3 border-b border-secondary/20">
                    <h3 className="text-xl font-bold text-primary flex items-center">
                      <Star className="mr-2 h-5 w-5 text-secondary" />
                      Related Services
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {relatedServices.map((service, index) => (
                        <Link 
                          key={index} 
                          to={service.path}
                          className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 no-underline border border-gray-100 hover:border-secondary/30"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-gray-900">{service.title}</h4>
                              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-secondary flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .service-content h3 {
          color: #1E3A8A;
          border-left: 3px solid #FFA500;
          padding-left: 12px;
          margin-top: 28px;
          margin-bottom: 16px;
        }
        
        .service-content strong {
          color: #1E3A8A;
        }
        
        .service-content ul li::marker {
          color: #FFA500;
        }
        
        .service-content ul li strong {
          color: #1E3A8A;
        }
        
        .service-content p em {
          color: #F97316;
          font-style: italic;
          font-weight: 500;
        }

        .service-content h4 {
          color: #1E3A8A;
          border-bottom: 2px solid #FFA500;
          display: inline-block;
          padding-bottom: 4px;
        }

        .service-content a {
          color: #F97316;
          text-decoration: underline;
          text-decoration-color: #FFA500;
          text-underline-offset: 2px;
        }

        .service-content a:hover {
          color: #1E3A8A;
          text-decoration-color: #1E3A8A;
        }
        `}
      </style>
    </div>
  );
};

export default ServicePageContent;
