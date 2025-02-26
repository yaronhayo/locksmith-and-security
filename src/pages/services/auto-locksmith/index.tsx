
import React from 'react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const AutoLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Auto Locksmith Services"
        description="Professional automotive locksmith solutions by certified technicians. Expert service for all vehicle makes and models."
      />
      <ServicesGrid />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default AutoLocksmith;
