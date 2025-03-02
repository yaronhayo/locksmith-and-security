
import React, { memo, useMemo } from 'react';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';

interface ServicesCardGridProps {
  category?: string;
}

const ServicesCardGrid = memo(({ category }: ServicesCardGridProps) => {
  const filteredServices = useMemo(() => {
    if (!category) return services;
    return services.filter(service => {
      // Filter logic based on your data structure
      // This is a simple example - you might need to adjust based on your actual data
      if (category === 'auto' || category === 'automotive') {
        return service.title.toLowerCase().includes('car') || 
               service.title.toLowerCase().includes('auto') || 
               service.highlight.toLowerCase().includes('auto');
      }
      if (category === 'residential') {
        return service.title.toLowerCase().includes('home') || 
               service.title.toLowerCase().includes('house') || 
               service.highlight.toLowerCase().includes('residential');
      }
      if (category === 'commercial') {
        return service.title.toLowerCase().includes('business') || 
               service.title.toLowerCase().includes('commercial') || 
               service.highlight.toLowerCase().includes('commercial');
      }
      if (category === 'emergency') {
        return service.title.toLowerCase().includes('emergency') || 
               service.title.toLowerCase().includes('lockout') || 
               service.highlight.toLowerCase().includes('emergency');
      }
      return true;
    });
  }, [category]);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8 justify-items-center w-full">
      {filteredServices.map((service, index) => (
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
