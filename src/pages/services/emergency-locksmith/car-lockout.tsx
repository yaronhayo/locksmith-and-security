
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/ServicePageContent';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';

const relatedEmergencyServices = [
  {
    title: "House Lockout Service",
    path: "/services/emergency-locksmith/house-lockout",
    description: "Professional assistance when you're locked out of your home. Our technicians provide quick, damage-free entry."
  },
  {
    title: "Business Lockout Service",
    path: "/services/emergency-locksmith/business-lockout",
    description: "Secure, professional commercial lockout solutions for all types of businesses and commercial properties."
  },
  {
    title: "Storage Unit Lockout",
    path: "/services/emergency-locksmith/storage-unit-lockout",
    description: "Expert lockout service for storage units. Regain access to your belongings without damaging your unit."
  },
];

const carLockoutFaqs = [
  {
    question: "How long does it typically take to unlock a car?",
    answer: "Most standard car lockouts can be resolved in 15-30 minutes after our technician arrives. However, the exact time depends on the vehicle make, model, and lock type. High-security vehicles or those with advanced locking mechanisms may require additional time."
  },
  {
    question: "Will unlocking my car cause any damage?",
    answer: "Our professional locksmiths use specialized tools and techniques designed to open your vehicle without causing damage. We prioritize non-destructive entry methods to protect your vehicle's integrity."
  },
  {
    question: "What information do I need to provide when calling for car lockout service?",
    answer: "To provide the most efficient service, please have your vehicle's make, model, year, and your exact location ready. This helps us dispatch the right technician with the appropriate tools for your specific vehicle."
  },
  {
    question: "Can you unlock all types of vehicles?",
    answer: "Yes, our technicians are trained to handle virtually all passenger vehicles, including cars, trucks, SUVs, and vans. This includes both domestic and foreign vehicles with various locking systems."
  },
  {
    question: "Do I need to prove the car is mine?",
    answer: "Yes, for security purposes, we require proof of ownership or authorization to access the vehicle. This typically involves showing identification and vehicle registration or insurance documentation."
  }
];

const CarLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Lockout Service",
    "description": "Professional automotive locksmith services for car lockouts. Our certified technicians provide fast, reliable, and damage-free vehicle entry.",
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
      "name": "Car Lockout Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Car Lockout"
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
            "name": "Trunk Unlock"
          }
        }
      ]
    },
    "review": carServiceReviews.slice(0, 5).map(review => ({
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
    "mainEntity": carLockoutFaqs.map(faq => ({
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
        Finding yourself locked out of your car can be a stressful experience, whether you're in a parking lot, on the side of the road, or in your own driveway. Our professional car lockout service provides quick and reliable assistance to get you back into your vehicle without causing damage to your locks or door.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Expert Car Lockout Solutions</h3>
      <p className="mb-4">
        Our certified automotive locksmiths specialize in all types of car lockout situations and can handle virtually any make and model. We use specialized tools and techniques to safely gain entry to your vehicle without damaging the door, lock, or frame.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our Car Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency vehicle lockout assistance</li>
          <li>Trunk unlocking services</li>
          <li>Broken key extraction from locks or ignition</li>
          <li>Transponder and smart key solutions</li>
          <li>Ignition key retrieval</li>
          <li>Door lock repair after attempted break-ins</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Advanced Techniques for Modern Vehicles</h3>
      <p className="mb-6">
        Modern vehicles often feature sophisticated locking mechanisms and security systems. Our technicians stay up-to-date with the latest technologies and techniques to handle even the most advanced automotive security systems. We can assist with:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Keyless entry systems</li>
        <li>Push-to-start vehicles</li>
        <li>High-security locks</li>
        <li>Smart key systems</li>
        <li>Electronic lock mechanisms</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Car Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless customers with various car lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Keys Locked Inside</h4>
          <p className="text-gray-700">
            The most common scenario – we'll safely unlock your door without damage to retrieve your keys from inside.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Broken Key in Lock</h4>
          <p className="text-gray-700">
            If your key has broken off in the door lock or ignition, we can extract it without damaging the lock mechanism.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost Car Keys</h4>
          <p className="text-gray-700">
            We can get you back into your vehicle and provide key replacement services if needed.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Frozen Locks</h4>
          <p className="text-gray-700">
            During cold weather, car locks can freeze. We use special techniques to thaw and unlock frozen vehicle locks.
          </p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Why You Should Call a Professional</h3>
      <p className="mb-4">
        While it might be tempting to try unlocking your car yourself, DIY methods can potentially cause expensive damage to your vehicle's door, lock, or electronic systems. Our professional locksmiths:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Use specialized tools designed specifically for vehicle entry</li>
        <li>Apply techniques that protect your car from damage</li>
        <li>Have experience with virtually all vehicle makes and models</li>
        <li>Provide fast service to minimize your inconvenience</li>
        <li>Offer additional services such as key replacement if needed</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your Car</h3>
      <p className="mb-4">
        If you find yourself locked out of your vehicle, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Ensure you're in a safe location, especially if on the side of a road</li>
        <li>Check all doors and the trunk to make sure they're actually locked</li>
        <li>Call our 24/7 emergency locksmith service</li>
        <li>Provide your exact location and vehicle details</li>
        <li>Have identification ready to prove ownership of the vehicle</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Professional Tip</h4>
        <p>
          Consider having a spare key made after experiencing a lockout. Our locksmiths can create a spare key for almost any vehicle, which can save you time and stress in future situations.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide car lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your car lockout situation.
      </p>
    </>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Car Lockout Service | 24/7 Emergency Automotive Locksmith</title>
        <meta name="description" content="Expert car lockout service by certified automotive locksmiths. Fast, damage-free vehicle entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="car lockout, locked out of car, auto locksmith, emergency car lockout, vehicle lockout service, car door unlock, car key locked in car, automotive locksmith" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/car-lockout" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: serviceSchema },
          { type: 'faq', data: faqSchema }
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
        mainContent={mainContent}
        relatedServices={relatedEmergencyServices}
        faqs={carLockoutFaqs}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default CarLockout;
