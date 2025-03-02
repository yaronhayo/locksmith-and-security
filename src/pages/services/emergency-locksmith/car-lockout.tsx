
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { CarLockoutContent } from '@/components/services/car-lockout/CarLockoutContent';
import { carLockoutSchema, carLockoutFaqSchema } from '@/components/services/car-lockout/CarLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/car-lockout/relatedServices';

const CarLockout = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Car Lockout Service | 24/7 Emergency Automotive Locksmith</title>
        <meta name="description" content="Expert car lockout service by certified automotive locksmiths. Fast, damage-free vehicle entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="car lockout, locked out of car, auto locksmith, emergency car lockout, vehicle lockout service, car door unlock, car key locked in car, automotive locksmith" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/car-lockout" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: carLockoutSchema },
          { type: 'faq', data: carLockoutFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Car Lockout Service"
        description="Professional automotive locksmith services for when you're locked out of your vehicle. Our certified technicians provide fast, reliable, and damage-free entry methods."
        serviceName="Car Lockout"
        serviceLabel="Emergency Auto Locksmith"
      />
      
      <ServicePageContent
        title="Professional Car Lockout Assistance"
        description="Expert car lockout services by certified automotive locksmiths"
        serviceName="Car Lockout"
        serviceCategory="Emergency Locksmith"
        mainContent={<CarLockoutContent />}
        relatedServices={relatedEmergencyServices}
        faqs={carLockoutFaqSchema.mainEntity}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default CarLockout;
