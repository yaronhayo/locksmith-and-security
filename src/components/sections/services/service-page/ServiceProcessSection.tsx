
import React from 'react';

interface ServiceProcessSectionProps {
  serviceName: string;
}

const ServiceProcessSection: React.FC<ServiceProcessSectionProps> = ({ serviceName }) => {
  return (
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
          <h4 className="text-lg font-semibold text-primary mb-2">2. Professional Dispatch</h4>
          <p className="text-gray-600">Our technician will be dispatched with all necessary equipment to handle your {serviceName.toLowerCase()}.</p>
        </div>
        <div className="relative pl-8 border-l-2 border-secondary/30">
          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary" />
          <h4 className="text-lg font-semibold text-primary mb-2">3. Professional Solution</h4>
          <p className="text-gray-600">We resolve your issue efficiently, with upfront pricing and professional workmanship.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcessSection;
