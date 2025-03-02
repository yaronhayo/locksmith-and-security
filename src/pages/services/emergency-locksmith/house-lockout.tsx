import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { residentialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';

const HouseLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Lockout Service",
    "description": "Professional residential locksmith services for house lockouts. Our certified technicians provide fast, reliable, and damage-free home entry.",
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
      "name": "House Lockout Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency House Lockout"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Broken Key Extraction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Repair After Break-in"
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I do if I'm locked out of my house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stay calm and assess the situation. Check all doors and windows to ensure they are locked. If you cannot find a way in, call a professional locksmith for assistance."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you get to my location for a house lockout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our response time varies depending on your location and our current workload. However, we strive to arrive as quickly as possible, typically within 30 minutes to an hour."
        }
      },
      {
        "@type": "Question",
        "name": "Will you damage my door or locks when unlocking my house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our experienced locksmiths use specialized tools and techniques to minimize the risk of damage to your door or locks. In most cases, we can unlock your house without causing any damage."
        }
      },
      {
        "@type": "Question",
        "name": "What information do I need to provide when calling for a house lockout service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please provide your name, address, and a brief description of the situation. If possible, also provide the type of lock you have on your door."
        }
      },
      {
        "@type": "Question",
        "name": "Can you make a new key for me if I've lost mine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our locksmiths can create a new key for you on the spot. We can also rekey your locks to ensure that your old key no longer works."
        }
      }
    ]
  };

  // Main content to be passed to the ServicePageContent component
  const mainContent = (
    <>
      <p className="mb-4">
        Being locked out of your house can be a frustrating and stressful experience, especially during inclement weather or late at night. Our professional house lockout service provides fast and reliable assistance to get you back inside your home safely and quickly.
      </p>

      <h3 className="text-2xl font-bold mb-4 mt-8">Expert House Lockout Solutions</h3>
      <p className="mb-4">
        Our certified residential locksmiths specialize in all types of house lockout situations and can handle virtually any type of door and lock. We use specialized tools and techniques to safely gain entry to your home without causing damage to the door, lock, or frame.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our House Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency house lockout assistance</li>
          <li>Key extraction from locks</li>
          <li>Lock repair and replacement</li>
          <li>Rekeying of locks</li>
          <li>New key creation</li>
          <li>Security assessments and upgrades</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mb-4 mt-8">Common House Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless customers with various house lockout situations, including:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Keys Locked Inside</h4>
          <p className="text-gray-700">
            The most common scenario – we'll safely unlock your door without damage to retrieve your keys from inside.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost or Stolen Keys</h4>
          <p className="text-gray-700">
            If your keys have been lost or stolen, we can get you back into your home and provide key replacement services if needed.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Broken Key in Lock</h4>
          <p className="text-gray-700">
            If your key has broken off in the door lock, we can extract it without damaging the lock mechanism.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Damaged or Malfunctioning Locks</h4>
          <p className="text-gray-700">
            If your lock is damaged or malfunctioning, we can repair or replace it to restore your home's security.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 mt-8">Why You Should Call a Professional</h3>
      <p className="mb-4">
        While it might be tempting to try unlocking your house yourself, DIY methods can potentially cause expensive damage to your door, lock, or frame. Our professional locksmiths:
      </p>

      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Use specialized tools designed specifically for residential entry</li>
        <li>Apply techniques that protect your home from damage</li>
        <li>Have experience with virtually all types of residential locks</li>
        <li>Provide fast service to minimize your inconvenience</li>
        <li>Offer additional services such as key replacement if needed</li>
      </ul>

      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your House</h3>
      <p className="mb-4">
        If you find yourself locked out of your home, follow these steps:
      </p>

      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Check all doors and windows to make sure they're actually locked</li>
        <li>Look for a spare key hidden outside</li>
        <li>Call our 24/7 emergency locksmith service</li>
        <li>Provide your exact location and a description of the situation</li>
        <li>Have identification ready to prove ownership of the property</li>
      </ol>

      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Professional Tip</h4>
        <p>
          Consider having a spare key made and giving it to a trusted neighbor or friend. This can save you time and money in future lockout situations.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide house lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your house lockout situation.
      </p>
    </>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>24/7 House Lockout Service | Emergency Residential Locksmith</title>
        <meta name="description" content="Emergency house lockout service by certified residential locksmiths. Fast, damage-free home entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="house lockout, locked out of house, residential locksmith, emergency house lockout, home lockout service, house door unlock, house key locked in house, residential locksmith" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/house-lockout" />
      </Helmet>

      <SchemaScripts
        schemas={[
          { type: 'service', data: serviceSchema },
          { type: 'faq', data: faqSchema }
        ]}
      />

      <EnhancedServicesHero
        title="House Lockout Service"
        description="Professional residential locksmith services for when you're locked out of your home. Our certified technicians provide fast, reliable, and damage-free entry methods."
        serviceName="House Lockout"
        serviceLabel="Emergency Residential Locksmith"
      />

      <ServicePageContent
        title="Professional House Lockout Assistance"
        description="Expert house lockout services by certified residential locksmiths"
        serviceName="House Lockout"
        serviceCategory="Emergency Locksmith"
        mainContent={mainContent}
        relatedServices={[]}
        faqs={faqSchema.mainEntity}
      />

      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default HouseLockout;
