
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const LockRepair = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Lock Repair Service"
        description="Professional lock repair services by experienced technicians. Expert solutions for all lock issues."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default LockRepair;
