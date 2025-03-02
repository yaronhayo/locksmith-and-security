
import React from 'react';
import { Star, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceMainContentProps {
  serviceName: string;
  serviceCategory: string;
  mainContent: React.ReactNode;
}

const ServiceMainContent: React.FC<ServiceMainContentProps> = ({ 
  serviceName, 
  serviceCategory, 
  mainContent 
}) => {
  return (
    <>
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
            <span>24/7 emergency availability</span>
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
                  <AlertTriangle className="mr-2 h-4 w-4" />
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
    </>
  );
};

export default ServiceMainContent;
