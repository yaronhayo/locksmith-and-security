
import React from 'react';
import { Shield, Clock, DollarSign } from 'lucide-react';

interface ServicePageHeaderProps {
  title: string;
  description: string;
}

const ServicePageHeader: React.FC<ServicePageHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Shield className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Licensed & Insured</p>
            <p className="text-xs text-gray-500">Professional service</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Clock className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Available 24/7</p>
            <p className="text-xs text-gray-500">Fast response time</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <DollarSign className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Upfront Pricing</p>
            <p className="text-xs text-gray-500">No hidden fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHeader;
