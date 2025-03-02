
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { commercialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { BusinessLockoutContent } from '@/components/services/business-lockout/BusinessLockoutContent';
import { businessLockoutFaqs, businessServiceSchema, businessLockoutFaqSchema } from '@/components/services/business-lockout/BusinessLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/business-lockout/relatedServices';

const BusinessLockout = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Business Lockout Service | 24/7 Emergency Commercial Locksmith</title>
        <meta name="description" content="Expert business lockout service by certified commercial locksmiths. Fast, damage-free entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="business lockout, locked out of business, commercial locksmith, emergency business lockout, commercial lockout service, business door unlock, business key locked in business, commercial locksmith" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/business-lockout" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: businessServiceSchema },
          { type: 'faq', data: businessLockoutFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Business Lockout Service"
        description="Professional commercial locksmith services for when you're locked out of your business. Our certified technicians provide fast, reliable, and damage-free entry methods."
        serviceName="Business Lockout"
        serviceLabel="Emergency Commercial Locksmith"
      />
      
      <ServicePageContent
        title="Professional Business Lockout Assistance"
        description="Expert business lockout services by certified commercial locksmiths"
        serviceName="Business Lockout"
        serviceCategory="Emergency Locksmith"
        mainContent={<BusinessLockoutContent />}
        relatedServices={relatedEmergencyServices}
        faqs={businessLockoutFaqs}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default BusinessLockout;
