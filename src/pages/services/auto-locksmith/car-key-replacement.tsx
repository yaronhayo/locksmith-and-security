
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { CarKeyReplacementContent } from '@/components/services/car-key-replacement/CarKeyReplacementContent';
import { carKeyReplacementFaqs, carKeyReplacementServiceSchema, carKeyReplacementFaqSchema } from '@/components/services/car-key-replacement/CarKeyReplacementSchema';
import { relatedAutoServices } from '@/components/services/car-key-replacement/relatedServices';

const CarKeyReplacement = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Car Key Replacement | Save 50% vs Dealer Prices | All Makes & Models</title>
        <meta name="description" content="Lost or broken car key? We make keys for all vehicles at 50% less than dealers. On-site service for standard, transponder, smart keys & key fobs." />
        <meta name="keywords" content="car key replacement, lost car keys, broken car key, car key fob, transponder key, smart key, replacement car keys, automotive locksmith, vehicle key" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/auto-locksmith/car-key-replacement" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: carKeyReplacementServiceSchema },
          { type: 'faq', data: carKeyReplacementFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Car Key Replacement Service"
        description="Professional key replacement for all vehicle makes and models. Our certified automotive locksmiths provide expert key cutting and programming for traditional keys, transponders, remote fobs, and smart keys."
        serviceName="Car Key Replacement"
        serviceLabel="Automotive Locksmith"
      />
      
      <ServicePageContent
        title="Professional Car Key Replacement"
        description="Expert solution for lost, broken or spare car keys"
        serviceName="Car Key Replacement"
        serviceCategory="Auto Locksmith"
        mainContent={<CarKeyReplacementContent />}
        relatedServices={relatedAutoServices}
        faqs={carKeyReplacementFaqs}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default CarKeyReplacement;
