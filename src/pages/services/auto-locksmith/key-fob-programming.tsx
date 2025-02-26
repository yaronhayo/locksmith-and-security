
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const KeyFobProgramming = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Key Fob Programming"
        description="Professional key fob programming services. Expert programming for all vehicle makes and models."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default KeyFobProgramming;
