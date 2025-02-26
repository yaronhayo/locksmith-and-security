
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const MasterKey = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Master Key System Installation"
        description="Professional master key system design and implementation by certified technicians. Expert access control solutions for your business."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default MasterKey;
