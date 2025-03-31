
import React from 'react';

interface ServiceProcessSectionProps {
  serviceName: string;
}

const ServiceProcessSection: React.FC<ServiceProcessSectionProps> = ({ serviceName }) => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Our Service Process</h2>
      
      <div className="space-y-6">
        <div className="service-process-step">
          <div className="service-process-step-number">1</div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-gray-600">
            Call our 24/7 service line or book online. Our friendly staff will gather your information
            and schedule an appointment at your convenience.
          </p>
        </div>
        
        <div className="service-process-step">
          <div className="service-process-step-number">2</div>
          <h3 className="font-semibold text-lg mb-2">Professional Assessment</h3>
          <p className="text-gray-600">
            Our licensed locksmith will arrive promptly, assess your specific {serviceName.toLowerCase()} needs,
            and explain the recommended solutions.
          </p>
        </div>
        
        <div className="service-process-step">
          <div className="service-process-step-number">3</div>
          <h3 className="font-semibold text-lg mb-2">Transparent Quote</h3>
          <p className="text-gray-600">
            We provide a clear, upfront price quote before any work begins,
            ensuring there are no surprises or hidden fees.
          </p>
        </div>
        
        <div className="service-process-step">
          <div className="service-process-step-number">4</div>
          <h3 className="font-semibold text-lg mb-2">Expert Service</h3>
          <p className="text-gray-600">
            Our technician will complete the {serviceName.toLowerCase()} service efficiently,
            using high-quality parts and professional techniques.
          </p>
        </div>
        
        <div className="service-process-step">
          <div className="service-process-step-number">5</div>
          <h3 className="font-semibold text-lg mb-2">Quality Check</h3>
          <p className="text-gray-600">
            We'll test everything to ensure proper function and explain how to use
            and maintain your locks or keys going forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
