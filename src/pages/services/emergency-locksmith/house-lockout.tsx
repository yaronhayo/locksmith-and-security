
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { HouseLockoutContent } from '@/components/services/house-lockout/HouseLockoutContent';
import { houseLockoutFaqs, houseServiceSchema, houseLockoutFaqSchema } from '@/components/services/house-lockout/HouseLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/house-lockout/relatedServices';

const HouseLockout = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Home Lockout Service | Quick Response 24/7 Residential Locksmith</title>
        <meta name="description" content="Locked out of your home? Our residential locksmiths use non-destructive entry techniques to get you back inside quickly. Available 24/7 with fast response times." />
        <meta name="keywords" content="house lockout, residential lockout, home locksmith, emergency house lockout, locked out of house, home door unlock, residential locksmith, home security" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/house-lockout" />
      </Helmet>

      <SchemaScripts
        schemas={[
          { type: 'service', data: houseServiceSchema },
          { type: 'faq', data: houseLockoutFaqSchema }
        ]}
      />
      
      <EnhancedServicesHero
        title="Residential Lockout Service"
        description="Professional locksmith assistance when you're locked out of your home. Our certified technicians provide fast, reliable, and damage-free entry methods."
        serviceName="House Lockout"
        serviceLabel="Emergency Residential Locksmith"
      />
      
      <ServicePageContent
        title="Professional House Lockout Assistance"
        description="Expert residential lockout services by certified home locksmiths"
        serviceName="House Lockout"
        serviceCategory="Emergency Locksmith"
        mainContent={<HouseLockoutContent />}
        relatedServices={relatedEmergencyServices}
        faqs={houseLockoutFaqs}
      />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default HouseLockout;
