
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { CarKeyDuplicateContent } from '@/components/services/car-key-duplicate/CarKeyDuplicateContent';
import { carKeyDuplicateFaqs, carKeyDuplicateServiceSchema, carKeyDuplicateFaqSchema } from '@/components/services/car-key-duplicate/CarKeyDuplicateSchema';
import { relatedAutomotiveServices } from '@/components/services/car-key-duplicate/relatedServices';

const CarKeyDuplicate = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Car Key Duplication | 24/7 Automotive Locksmith Services</title>
        <meta name="description" content="Expert car key duplication for all vehicle makes and models. Get reliable spare keys at competitive prices. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="car key duplication, duplicate car key, spare car key, copy car key, automotive locksmith, car key copy, transponder key duplication" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/auto-locksmith/car-key-duplicate" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: carKeyDuplicateServiceSchema },
          { type: 'faq', data: carKeyDuplicateFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Car Key Duplication Service"
        description="Professional car key duplication services for all vehicle makes and models. Our expert locksmiths create reliable spare keys using advanced technology to ensure perfect functionality."
        serviceName="Car Key Duplication"
        serviceLabel="Auto Locksmith Service"
      />
      
      <ServicePageContent
        title="Professional Car Key Duplication"
        description="Expert key duplication services for all vehicle types including transponder and smart keys"
        serviceName="Car Key Duplication"
        serviceCategory="Auto Locksmith"
        mainContent={<CarKeyDuplicateContent />}
        relatedServices={relatedAutomotiveServices}
        faqs={carKeyDuplicateFaqs}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default CarKeyDuplicate;
