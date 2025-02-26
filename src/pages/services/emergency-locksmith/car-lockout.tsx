
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarLockout = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="24/7 Car Lockout Service"
        description="Emergency car lockout assistance. Fast response and professional service."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default CarLockout;
