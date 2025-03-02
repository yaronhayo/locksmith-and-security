
import React, { memo } from 'react';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';

const ServicesCardGrid = memo(() => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8 justify-items-center w-full">
      {services.map((service, index) => (
        <ServiceCard 
          key={index} 
          service={service} 
          index={index} 
        />
      ))}
    </div>
  );
});

ServicesCardGrid.displayName = 'ServicesCardGrid';

export default ServicesCardGrid;
