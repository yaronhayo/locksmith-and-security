
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarKeyReplacement = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Car Key Replacement Service"
        description="Professional car key replacement by certified technicians. Available 24/7 for all vehicle makes and models."
      />
      <ServicesFeatures />
      <ServicesProof category="car" />
      <ServicesCTA />
    </main>
  );
};

export default CarKeyReplacement;
