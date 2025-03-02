
import React from 'react';

interface ServicePageHeaderProps {
  title: string;
  description: string;
}

const ServicePageHeader: React.FC<ServicePageHeaderProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">{title}</h1>
      
      {/* Enhanced introduction */}
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary mb-8">
        <p className="text-lg text-gray-700 mb-0">
          <span className="inline-block border-b-2 border-secondary/40 pb-1">{description}</span>
        </p>
      </div>
    </>
  );
};

export default ServicePageHeader;
