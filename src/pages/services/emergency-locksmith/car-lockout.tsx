
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
import MetaTags from '@/components/layouts/MetaTags';
import { createLocalBusinessSchema } from '@/components/meta/schema/LocalBusinessSchema';
import { createWebSiteSchema } from '@/components/meta/schema/WebSiteSchema';
import { createSiteNavigationSchema } from '@/components/meta/schema/SiteNavigationSchema';

const CarLockout = () => {
  const pageTitle = "Professional Car Lockout Service | 24/7 Emergency Automotive Locksmith";
  const pageDescription = "Expert car lockout service by certified automotive locksmiths. Fast, damage-free vehicle entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas.";
  const keywords = "car lockout, locked out of car, auto locksmith, emergency car lockout, vehicle lockout service, car door unlock, car key locked in car, automotive locksmith";
  const canonicalUrl = "/services/emergency-locksmith/car-lockout";
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
  
  // Create LocalBusiness schema with customized info
  const localBusinessSchema = createLocalBusinessSchema({
    geo: {
      latitude: 40.7366,
      longitude: -74.0301
    }
  });
  
  // Create WebSite schema
  const websiteSchema = createWebSiteSchema();
  
  // Create SiteNavigation schema
  const navigationSchema = createSiteNavigationSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Emergency Locksmith", url: "/services/emergency-locksmith" },
      { name: "Residential Locksmith", url: "/services/residential-locksmith" },
      { name: "Commercial Locksmith", url: "/services/commercial-locksmith" },
      { name: "Auto Locksmith", url: "/services/auto-locksmith" },
      { name: "Service Areas", url: "/service-areas" },
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" }
    ]
  });

  return (
    <main className="flex-grow">
      <MetaTags 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        noindex={false}
        nofollow={false}
        canonicalUrl={canonicalUrl}
        ogImage={imageUrl}
        modifiedDate={new Date().toISOString()}
        ogType="article"
        schemas={[
          { type: 'service', data: carLockoutSchema },
          { type: 'faq', data: carLockoutFaqSchema },
          breadcrumbSchema,
          localBusinessSchema,
          websiteSchema,
          navigationSchema
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
