import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { commercialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';

const BusinessLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Lockout Service",
    "description": "Professional commercial locksmith services for business lockouts. Our certified technicians provide fast, reliable, and damage-free entry.",
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
      "name": "Business Lockout Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Business Lockout"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Unlock"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Building Unlock"
          }
        }
      ]
    },
    "review": commercialReviews.slice(0, 5).map(review => ({
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of businesses do you provide lockout services for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide lockout services for a wide range of businesses, including offices, retail stores, restaurants, warehouses, and more. No matter the type of business, our experienced locksmiths can help you regain access quickly and safely."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to a business lockout call?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We understand that time is of the essence when you're locked out of your business. That's why we offer 24/7 emergency lockout services with a fast response time. In most cases, we can arrive at your location within 30 minutes to an hour, depending on traffic and location."
        }
      },
      {
        "@type": "Question",
        "name": "What information do I need to provide when calling for a business lockout service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you call us for a business lockout service, please provide the following information: your business name, address, contact person, and a brief description of the situation. This will help us dispatch the right technician with the appropriate tools for your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you unlock all types of commercial doors and locks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our technicians are trained to handle virtually all types of commercial doors and locks, including standard doors, high-security doors, and electronic access control systems. We use specialized tools and techniques to safely unlock your business without causing damage."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide proof of ownership or authorization to access the business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for security purposes, we require proof of ownership or authorization to access the business. This typically involves showing identification and business registration or lease documentation. We may also contact the property owner or manager to verify your authorization."
        }
      }
    ]
  };

  // Main content to be passed to the ServicePageContent component
  const mainContent = (
    <>
      <p className="mb-4">
        Being locked out of your business can disrupt operations, delay employees, and potentially cost you money. Our professional business lockout service provides quick and reliable assistance to get you back inside your commercial property with minimal downtime.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Expert Commercial Lockout Solutions</h3>
      <p className="mb-4">
        Our certified commercial locksmiths specialize in all types of business lockout situations and can handle virtually any commercial door and lock system. We use specialized tools and techniques to safely gain entry to your business without damaging the door, lock, or frame.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our Business Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency business lockout assistance</li>
          <li>Office unlocking services</li>
          <li>Commercial building unlocking</li>
          <li>Broken key extraction from locks</li>
          <li>Master key system access</li>
          <li>Access control system bypass</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Advanced Techniques for Commercial Properties</h3>
      <p className="mb-6">
        Commercial properties often feature sophisticated locking mechanisms and security systems. Our technicians stay up-to-date with the latest technologies and techniques to handle even the most advanced commercial security systems. We can assist with:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>High-security locks</li>
        <li>Master key systems</li>
        <li>Electronic access control systems</li>
        <li>Keypad entry systems</li>
        <li>Biometric locks</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Business Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless businesses with various lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost or Stolen Keys</h4>
          <p className="text-gray-700">
            If your business keys have been lost or stolen, we'll quickly unlock your door and provide key replacement services if needed.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Broken Key in Lock</h4>
          <p className="text-gray-700">
            If your key has broken off in the door lock, we can extract it without damaging the lock mechanism.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Malfunctioning Locks</h4>
          <p className="text-gray-700">
            If your commercial lock is malfunctioning and preventing you from entering your business, we can diagnose and repair the issue.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Electronic Access Control Issues</h4>
          <p className="text-gray-700">
            If you're experiencing issues with your electronic access control system, we can bypass the system to regain entry and troubleshoot the problem.
          </p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Why You Should Call a Professional</h3>
      <p className="mb-4">
        While it might be tempting to try unlocking your business yourself, DIY methods can potentially cause expensive damage to your commercial door, lock, or security system. Our professional locksmiths:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Use specialized tools designed specifically for commercial entry</li>
        <li>Apply techniques that protect your business from damage</li>
        <li>Have experience with virtually all commercial lock systems</li>
        <li>Provide fast service to minimize your downtime</li>
        <li>Offer additional services such as key replacement if needed</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your Business</h3>
      <p className="mb-4">
        If you find yourself locked out of your business, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Ensure you're in a safe location and assess the surroundings</li>
        <li>Check all doors and windows to make sure they're actually locked</li>
        <li>Call our 24/7 emergency locksmith service</li>
        <li>Provide your exact location and business details</li>
        <li>Have identification and business documentation ready to prove authorization</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Professional Tip</h4>
        <p>
          Consider implementing a master key system for your business. This allows you to control access to different areas of your commercial property while minimizing the number of keys needed.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide business lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your business lockout situation.
      </p>
    </>
  );

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
      title: "Storage Unit Lockout",
      path: "/services/emergency-locksmith/storage-unit-lockout",
      description: "Expert lockout service for storage units. Regain access to your belongings without damaging your unit."
    },
  ];

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
          { type: 'service', data: serviceSchema },
          { type: 'faq', data: faqSchema }
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
        mainContent={mainContent}
        relatedServices={relatedEmergencyServices}
        faqs={faqSchema.mainEntity}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default BusinessLockout;
