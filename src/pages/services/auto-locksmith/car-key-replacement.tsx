
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
import ServicePageHeader from '@/components/sections/services/service-page/ServicePageHeader';
import OptimizedImage from '@/components/ui/optimized-image';

const CarKeyReplacement = () => {
  // Enhanced metadata for SEO
  const pageTitle = "Car Key Replacement | Expert Solutions for All Vehicle Makes & Models";
  const pageDescription = "Restore vehicle access with precision-engineered replacement keys crafted for your exact make and model. Advanced technology ensures perfect functionality. Available 24/7.";
  const pageKeywords = "car key replacement, lost car keys, broken car key, car key fob, transponder key, smart key, replacement car keys, automotive locksmith, vehicle key";
  const canonicalUrl = "https://247locksmithandsecurity.com/services/auto-locksmith/car-key-replacement";
  const modifiedDate = "2024-05-01T00:00:00+00:00";
  
  return (
    <main className="flex-grow">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Locksmith & Security LLC" />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="og:image" content="https://247locksmithandsecurity.com/lovable-uploads/car-key-replacement-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
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
