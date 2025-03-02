
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Calendar, ArrowUpRight, MessageSquare, ShieldCheck, Star, Clock, Check, AlertTriangle, Award } from "lucide-react";
import FAQAccordion from "@/components/sections/FAQAccordion";
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
              
              {/* Enhanced introduction */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary mb-8">
                <p className="text-lg text-gray-700 mb-0">
                  <span className="inline-block border-b-2 border-secondary/40 pb-1">{description}</span>
                </p>
              </div>
              
              {/* Trust badges section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="text-base font-semibold text-gray-800 mb-1">Fast Response</h3>
                  <p className="text-sm text-gray-600">Available 24/7 for emergency assistance</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 flex flex-col items-center text-center">
                  <ShieldCheck className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="text-base font-semibold text-gray-800 mb-1">Licensed Experts</h3>
                  <p className="text-sm text-gray-600">Fully insured professional technicians</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 flex flex-col items-center text-center">
                  <Award className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="text-base font-semibold text-gray-800 mb-1">Satisfaction Guaranteed</h3>
                  <p className="text-sm text-gray-600">Quality workmanship you can trust</p>
                </div>
              </div>
              
              {/* Primary service callout */}
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-10">
                <div className="flex items-center mb-3">
                  <Star className="text-secondary h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold text-primary">Professional {serviceName} Service</h3>
                </div>
                <p className="text-gray-700 mb-4">Our certified technicians provide fast, reliable {serviceName.toLowerCase()} solutions with guaranteed workmanship. Available 24/7 for emergency assistance.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                    <span>Quick response time to your location</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                    <span>Advanced tools and techniques for damage-free service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                    <span>Upfront pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
              
              {/* Enhanced warning callout for emergency services */}
              {serviceCategory === "Emergency" && (
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-10">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-red-700 mb-2">Emergency Situation?</h4>
                      <p className="text-gray-700 mb-3">Don't wait - if you're in an urgent situation, call us immediately for the fastest response.</p>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="font-semibold"
                        asChild
                      >
                        <a href="tel:2017482070" className="flex items-center">
                          <Phone className="mr-2 h-4 w-4" />
                          (201) 748-2070
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Main content with enhanced styling */}
              <div className="service-content mb-10">
                {mainContent}
              </div>
              
              {/* Service process section */}
              <div className="mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
                  Our {serviceName} Process
                </h2>
                <div className="grid gap-8 md:grid-cols-3 my-8">
                  <div className="relative pl-8 border-l-2 border-secondary/30">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary" />
                    <h4 className="text-lg font-semibold text-primary mb-2">1. Contact Us</h4>
                    <p className="text-gray-600">Call our emergency number or book online. Provide your location and details about your situation.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-secondary/30">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary" />
                    <h4 className="text-lg font-semibold text-primary mb-2">2. Quick Response</h4>
                    <p className="text-gray-600">Our technician arrives promptly with all necessary equipment to handle your {serviceName.toLowerCase()}.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-secondary/30">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary" />
                    <h4 className="text-lg font-semibold text-primary mb-2">3. Professional Solution</h4>
                    <p className="text-gray-600">We resolve your issue quickly and efficiently, with upfront pricing and professional workmanship.</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced FAQ section */}
              {faqs.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600 mb-6">Find answers to common questions about our {serviceName.toLowerCase()} services. If you don't see your question answered below, please feel free to contact us.</p>
                  <FAQAccordion faqs={faqs} />
                </div>
              )}
              
              {/* Call to action section */}
              <div className="bg-gradient-to-r from-primary to-primary-hover rounded-lg overflow-hidden shadow-lg text-white p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4">Need {serviceName} Service Now?</h3>
                <p className="mb-6 text-white/90">Our team is ready to help you with professional, reliable service. Contact us now for immediate assistance.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full sm:w-auto justify-center text-primary font-semibold hover:bg-secondary-hover hover:text-primary-dark"
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
                    className="w-full sm:w-auto justify-center bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/30"
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
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Contact card */}
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-xl overflow-hidden shadow-lg text-white">
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
              
              {/* Enhanced testimonial card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="bg-secondary/10 p-3 border-b border-secondary/20">
                  <h3 className="text-xl font-bold text-primary flex items-center">
                    <Star className="mr-2 h-5 w-5 text-secondary" />
                    Customer Testimonial
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="italic text-gray-600 text-sm">"I was locked out of my car in the middle of nowhere. Called these guys and they arrived within 20 minutes. Professional, fast service at a reasonable price. Highly recommend!"</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="bg-secondary/20 text-secondary font-bold h-10 w-10 rounded-full flex items-center justify-center mr-3">
                        {serviceName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Michael R.</p>
                        <p className="text-sm text-gray-500">Jersey City, NJ</p>
                      </div>
                    </div>
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
              
              {/* Emergency services hours */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="bg-primary/10 p-3 border-b border-primary/20">
                  <h3 className="text-xl font-bold text-primary flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Service Hours
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="text-right">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span className="text-right">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-right">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Holidays:</span>
                      <span className="text-right">24 Hours</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">Our emergency {serviceName.toLowerCase()} service is available 24/7, 365 days a year including all holidays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Replace the problematic <style jsx> tag with <style> */}
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
