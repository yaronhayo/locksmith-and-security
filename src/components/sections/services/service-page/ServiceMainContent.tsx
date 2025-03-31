
import React from 'react';

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
    <section className="service-main-content my-8">
      <div className="service-highlight">
        <p>
          <strong>Professional {serviceName} Service:</strong> Our expert locksmiths provide reliable and efficient
          {serviceCategory.toLowerCase().includes('residential') ? ' home ' : 
            serviceCategory.toLowerCase().includes('commercial') ? ' business ' : 
            serviceCategory.toLowerCase().includes('auto') ? ' vehicle ' : ' '}
          security solutions with over 15 years of experience.
        </p>
      </div>
      
      {mainContent}
    </section>
  );
};

export default ServiceMainContent;
