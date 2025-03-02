import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';

const relatedEmergencyServices = [
  {
    title: "Car Lockout Service",
    path: "/services/emergency-locksmith/car-lockout",
    description: "Professional assistance when you're locked out of your car. Our technicians provide quick, damage-free entry."
  },
  {
    title: "House Lockout Service",
    path: "/services/emergency-locksmith/house-lockout",
    description: "Secure, professional residential lockout solutions for all types of homes and apartments."
  },
  {
    title: "Business Lockout Service",
    path: "/services/emergency-locksmith/business-lockout",
    description: "Expert lockout service for storage units. Regain access to your belongings without damaging your unit."
  },
];

const storageUnitLockoutFaqs = [
  {
    question: "What should I do if I'm locked out of my storage unit?",
    answer: "First, verify that you have the correct unit number and that your account is in good standing with the storage facility. Then, contact us for professional lockout assistance."
  },
  {
    question: "Can you open any storage unit lock?",
    answer: "In most cases, yes. Our experienced locksmiths have the tools and knowledge to open a variety of storage unit locks without causing damage to the unit."
  },
  {
    question: "Do I need to provide proof that I own the storage unit?",
    answer: "Yes, we require proof of ownership or authorization to access the storage unit. This typically involves showing identification and your storage unit rental agreement."
  },
  {
    question: "Will you damage my storage unit lock when opening it?",
    answer: "Our priority is to open your storage unit lock without causing damage. However, in some cases, the lock may need to be drilled or cut, especially if it's a high-security lock."
  },
  {
    question: "How long will it take for you to arrive and open my storage unit?",
    answer: "Our response time varies depending on our current workload and your location. However, we strive to arrive as quickly as possible to resolve your storage unit lockout situation."
  }
];

const StorageUnitLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Storage Unit Lockout Service",
    "description": "Professional locksmith services for storage unit lockouts. Our certified technicians provide fast, reliable, and damage-free entry.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Locksmith & Security LLC",
      "telephone": "(201) 748-2070",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "North Bergen",
        "addressRegion": "NJ"
      }
    },
    "areaServed": [
      "North Bergen, NJ",
      "Jersey City, NJ",
      "Hoboken, NJ",
      "Weehawken, NJ",
      "Union City, NJ",
      "West New York, NJ",
      "Secaucus, NJ",
      "Guttenberg, NJ"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Storage Unit Lockout Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Storage Unit Lockout"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Drilling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Cutting"
          }
        }
      ]
    },
    "review": residentialReviews.slice(0, 5).map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": storageUnitLockoutFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Main content to be passed to the ServicePageContent component
  const mainContent = (
    <>
      <p className="mb-4">
        Being locked out of your storage unit can be a major inconvenience, especially when you need to access your stored belongings urgently. Our professional storage unit lockout service provides quick and reliable assistance to regain access to your unit without causing damage.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Expert Storage Unit Lockout Solutions</h3>
      <p className="mb-4">
        Our certified locksmiths specialize in all types of storage unit lockout situations and can handle virtually any lock type. We use specialized tools and techniques to safely gain entry to your unit without damaging the door or frame.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our Storage Unit Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency storage unit lockout assistance</li>
          <li>Lock drilling and cutting services</li>
          <li>Padlock removal</li>
          <li>Rekeying or replacement of locks</li>
          <li>Assistance with lost or forgotten combinations</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Storage Unit Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless customers with various storage unit lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost Keys</h4>
          <p className="text-gray-700">
            If you've lost the keys to your storage unit, we can help you regain access quickly and efficiently.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Forgotten Combination</h4>
          <p className="text-gray-700">
            If you've forgotten the combination to your storage unit lock, we can assist you in resetting or bypassing the lock.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Faulty Locks</h4>
          <p className="text-gray-700">
            If your storage unit lock is malfunctioning or damaged, we can repair or replace it to ensure the security of your belongings.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Eviction Lockouts</h4>
          <p className="text-gray-700">
            In the event of an eviction, we can provide lockout services to ensure that the storage unit is secured and the contents are protected.
          </p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Why You Should Call a Professional</h3>
      <p className="mb-4">
        While it might be tempting to try opening your storage unit lock yourself, DIY methods can potentially cause damage to the unit or your belongings. Our professional locksmiths:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Use specialized tools designed specifically for storage unit locks</li>
        <li>Apply techniques that protect your unit from damage</li>
        <li>Have experience with virtually all storage unit lock types</li>
        <li>Provide fast service to minimize your inconvenience</li>
        <li>Offer additional services such as lock replacement if needed</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your Storage Unit</h3>
      <p className="mb-4">
        If you find yourself locked out of your storage unit, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Verify that you have the correct unit number and that your account is in good standing with the storage facility</li>
        <li>Contact our 24/7 emergency locksmith service</li>
        <li>Provide your exact location and storage unit details</li>
        <li>Have identification and your storage unit rental agreement ready to prove ownership</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Professional Tip</h4>
        <p>
          Consider purchasing a high-quality padlock for your storage unit to deter theft and ensure the security of your belongings. Our locksmiths can recommend and install a variety of secure padlocks.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide storage unit lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your storage unit lockout situation.
      </p>
    </>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Storage Unit Lockout Service | 24/7 Emergency Locksmith</title>
        <meta name="description" content="Expert storage unit lockout service by certified locksmiths. Fast, reliable, and damage-free entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="storage unit lockout, locked out of storage unit, storage unit lock opening, emergency locksmith, storage unit lock replacement, storage unit key" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/storage-unit-lockout" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: serviceSchema },
          { type: 'faq', data: faqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Storage Unit Lockout Service"
        description="Professional locksmith services for when you're locked out of your storage unit. Our certified technicians provide fast, reliable, and damage-free entry methods."
        serviceName="Storage Unit Lockout"
        serviceLabel="Emergency Locksmith"
      />
      
      <ServicePageContent
        title="Professional Storage Unit Lockout Assistance"
        description="Expert storage unit lockout services by certified locksmiths"
        serviceName="Storage Unit Lockout"
        serviceCategory="Emergency Locksmith"
        mainContent={mainContent}
        relatedServices={relatedEmergencyServices}
        faqs={storageUnitLockoutFaqs}
      />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default StorageUnitLockout;
