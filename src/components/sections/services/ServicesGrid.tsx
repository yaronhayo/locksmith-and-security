
import React, { useEffect, memo } from "react";
import { trackComponentRender } from "@/utils/performanceMonitoring";
import ServicesSectionHeader from "./ServicesSectionHeader";
import ServicesCardGrid from "./ServicesCardGrid";

const ServicesGrid = memo(() => {
  const finishRenderTracking = trackComponentRender('ServicesGrid');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ServicesSectionHeader 
          title="Professional Locksmith Services"
          description="Expert security solutions for all your residential, commercial, and automotive needs"
        />
        
        <ServicesCardGrid />
      </div>
    </section>
  );
});

ServicesGrid.displayName = 'ServicesGrid';

export default ServicesGrid;
