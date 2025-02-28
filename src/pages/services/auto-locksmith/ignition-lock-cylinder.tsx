
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const IgnitionLockCylinder = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Ignition Lock Cylinder Replacement"
        description="Professional ignition lock cylinder service by certified technicians. Expert solutions for all vehicle makes and models."
      />
      <ServicesFeatures />
      <ServicesProof category="car" />
      <ServicesCTA />
    </main>
  );
};

export default IgnitionLockCylinder;
