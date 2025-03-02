
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { Helmet } from 'react-helmet';
import { CarLockoutContent } from '@/components/services/car-lockout/CarLockoutContent';
import { carLockoutSchema, carLockoutFaqs, carLockoutFaqSchema } from '@/components/services/car-lockout/CarLockoutSchema';
import { relatedEmergencyServices } from '@/components/services/car-lockout/relatedServices';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { createBreadcrumbSchema } from '@/components/meta/schema/BreadcrumbSchema';
import { BasicMetaTags } from '@/components/meta/BasicMetaTags';
import { OpenGraphTags } from '@/components/meta/OpenGraphTags';
import { TwitterTags } from '@/components/meta/TwitterTags';

const CarLockout = () => {
  const pageTitle = "Professional Car Lockout Service | 24/7 Emergency Automotive Locksmith";
  const pageDescription = "Expert car lockout service by certified automotive locksmiths. Fast, damage-free vehicle entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas.";
  const keywords = "car lockout, locked out of car, auto locksmith, emergency car lockout, vehicle lockout service, car door unlock, car key locked in car, automotive locksmith";
  const canonicalUrl = "https://247locksmithandsecurity.com/services/emergency-locksmith/car-lockout";
  const imageUrl = "/lovable-uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png";
  const baseUrl = "https://247locksmithandsecurity.com";
  
  // Create breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema({
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Services", item: "/services" },
      { name: "Emergency Locksmith", item: "/services/emergency-locksmith" },
      { name: "Car Lockout", item: "/services/emergency-locksmith/car-lockout" }
    ],
    baseUrl
  });

  return (
    <main className="flex-grow">
      <BasicMetaTags 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        noindex={false}
        nofollow={false}
        canonicalUrl={canonicalUrl}
        modifiedDate={new Date().toISOString()}
      />
      
      <OpenGraphTags 
        title={pageTitle}
        description={pageDescription}
        image={imageUrl}
        url={canonicalUrl}
        modifiedDate={new Date().toISOString()}
        baseUrl={baseUrl}
        type="article"
      />
      
      <TwitterTags 
        title={pageTitle}
        description={pageDescription}
        image={imageUrl}
        baseUrl={baseUrl}
        cardType="summary_large_image"
      />
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: carLockoutSchema },
          { type: 'faq', data: carLockoutFaqSchema },
          breadcrumbSchema
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
        faqs={carLockoutFaqs}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default CarLockout;
