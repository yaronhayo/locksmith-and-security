
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarKeyCutting = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Car Key Cutting Service"
        description="Professional car key cutting by experienced technicians. Expert service for all vehicle makes and models."
      />
      <ServicesFeatures />
      <ServicesProof category="car" />
      <ServicesCTA />
    </main>
  );
};

export default CarKeyCutting;
