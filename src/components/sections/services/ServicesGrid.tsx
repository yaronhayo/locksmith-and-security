
import React, { useEffect, memo } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import ServicesSectionHeader from "./ServicesSectionHeader";
import ServicesCardGrid from "./ServicesCardGrid";

interface ServicesGridProps {
  title?: string;
  description?: string;
  className?: string;
  serviceCategory?: string;
}

const ServicesGrid = memo(({ 
  title = "Professional Locksmith Services",
  description = "Expert security solutions for all your residential, commercial, and automotive needs",
  className = "py-24 bg-gradient-to-b from-white to-gray-50",
  serviceCategory
}: ServicesGridProps) => {
  const finishRenderTracking = trackComponentRender('ServicesGrid');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <section className={className}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ServicesSectionHeader 
          title={title}
          description={description}
        />
        
        <ServicesCardGrid category={serviceCategory} />
      </div>
    </section>
  );
});

ServicesGrid.displayName = 'ServicesGrid';

export default ServicesGrid;
