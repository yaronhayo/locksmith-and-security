
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarKeyCutting = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Car Key Cutting"
        description="Professional car key cutting services. Precision cutting for all types of car keys."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default CarKeyCutting;
