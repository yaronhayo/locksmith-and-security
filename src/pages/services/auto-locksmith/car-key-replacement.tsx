
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarKeyReplacement = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Car Key Replacement"
        description="Professional car key replacement services. Fast and reliable replacement for all vehicle makes and models."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default CarKeyReplacement;
