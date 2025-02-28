
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/ServicePageContent';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { residentialReviews } from '@/data/reviews';

const relatedEmergencyServices = [
  {
    title: "Car Lockout Service",
    path: "/services/emergency-locksmith/car-lockout",
    description: "Professional assistance when you're locked out of your vehicle. Quick, damage-free entry methods."
  },
  {
    title: "Business Lockout Service",
    path: "/services/emergency-locksmith/business-lockout",
    description: "Secure, professional commercial lockout solutions for all types of businesses and commercial properties."
  },
  {
    title: "Lock Replacement",
    path: "/services/residential-locksmith/lock-replacement",
    description: "Upgrade your home security with professional lock replacement services for added protection and peace of mind."
  },
];

const houseLockoutFaqs = [
  {
    question: "How long does it typically take to unlock a house?",
    answer: "Most residential lockouts can be resolved within 15-30 minutes after our technician arrives. The exact time depends on the type of lock, security features, and complexity of your home's locking system."
  },
  {
    question: "Will unlocking my house door cause any damage?",
    answer: "Our professional locksmiths use specialized tools and techniques designed to open your door without causing damage. We prioritize non-destructive entry methods to protect your property's integrity."
  },
  {
    question: "What information should I have ready when calling for house lockout service?",
    answer: "To provide efficient service, please have your address, type of lock if known, and be prepared to show proof of residence upon the locksmith's arrival for security purposes."
  },
  {
    question: "Can you unlock all types of residential locks?",
    answer: "Yes, our technicians are trained to handle virtually all types of residential locks, including standard doorknobs, deadbolts, mortise locks, smart locks, high-security locks, and keypad systems."
  },
  {
    question: "How do I prove the house is mine when the locksmith arrives?",
    answer: "For security purposes, you'll need to provide identification that matches the address or documents showing proof of residence such as a utility bill, lease agreement, or property deed."
  }
];

const HouseLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Lockout Service",
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
      "name": "Residential Lockout Services",
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
            "name": "Lock Repair and Replacement"
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
    "mainEntity": houseLockoutFaqs.map(faq => ({
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
        Being locked out of your home can be a frustrating and sometimes frightening experience. Whether you've misplaced your keys, left them inside, or have a malfunctioning lock, our professional house lockout service provides fast, reliable assistance to get you back into your home safely and with minimal disruption.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Residential Lockout Solutions</h3>
      <p className="mb-4">
        Our certified residential locksmiths specialize in all types of home lockout situations and can handle any residential lock on the market. We use specialized tools and techniques to safely gain entry to your home without causing unnecessary damage to your doors or locks.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our House Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency residential lockout assistance</li>
          <li>Lock picking and non-destructive entry</li>
          <li>Broken key extraction</li>
          <li>Smart lock and electronic lock solutions</li>
          <li>Lock repair after entry</li>
          <li>On-the-spot key making if needed</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Expert Solutions for All Types of Residential Locks</h3>
      <p className="mb-6">
        Modern homes often feature a variety of locking mechanisms, from traditional deadbolts to advanced smart locks. Our technicians are trained and equipped to handle all residential security systems, including:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Standard doorknob locks</li>
        <li>Deadbolts (single and double cylinder)</li>
        <li>Smart locks and keyless entry systems</li>
        <li>Mortise locks</li>
        <li>High-security locks (Medeco, Mul-T-Lock, etc.)</li>
        <li>Lever handle locks</li>
        <li>Electronic keypads and card readers</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Common House Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have assisted countless homeowners with various residential lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost House Keys</h4>
          <p className="text-gray-700">
            We'll get you back inside and can make new keys on the spot if needed.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Keys Locked Inside</h4>
          <p className="text-gray-700">
            Our technicians can quickly gain entry without damaging your door or lock.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Broken Key in Lock</h4>
          <p className="text-gray-700">
            We can extract broken keys and repair or replace the lock if necessary.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Malfunctioning Locks</h4>
          <p className="text-gray-700">
            Whether your lock is jammed, stuck, or not working properly, we can diagnose and fix the issue.
          </p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">The Importance of Professional Locksmith Service</h3>
      <p className="mb-4">
        When locked out of your home, it's tempting to try DIY methods or call the cheapest service available. However, inexperienced attempts can lead to:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Damaged doors that are expensive to repair</li>
        <li>Broken locks that compromise your home's security</li>
        <li>Voided home insurance in some cases</li>
        <li>Higher overall costs when amateur attempts fail</li>
      </ul>
      
      <p className="mb-4">
        Our professional locksmiths:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Are licensed, insured, and background-checked</li>
        <li>Use specialized tools designed for non-destructive entry</li>
        <li>Have extensive training on all types of residential locks</li>
        <li>Follow industry best practices</li>
        <li>Provide warranty on services performed</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your House</h3>
      <p className="mb-4">
        If you find yourself locked out of your home, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Check all doors and windows for possible entry (while ensuring safety)</li>
        <li>Call our 24/7 emergency locksmith service</li>
        <li>Provide your exact address and lock details if known</li>
        <li>Have identification ready to prove residency</li>
        <li>Wait in a safe location until the locksmith arrives</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Security Tip</h4>
        <p>
          After experiencing a lockout, consider implementing a key management system or upgrading to smart locks that provide alternative entry methods. We can advise on the best security solutions for your specific needs.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Preventative Measures</h3>
      <p className="mb-4">
        To avoid future lockouts, consider these preventative measures:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Keep spare keys with trusted friends or family members</li>
        <li>Install a smart lock with keypad or mobile access</li>
        <li>Consider a key lockbox for emergency access</li>
        <li>Establish a routine for checking for keys before leaving home</li>
        <li>Regular maintenance of locks to prevent malfunctions</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide residential lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your home lockout situation.
      </p>
    </>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Residential Lockout Service | 24/7 Emergency Home Locksmith</title>
        <meta name="description" content="Expert house lockout service by certified residential locksmiths. Fast, damage-free home entry 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="house lockout, residential lockout, home locksmith, emergency house lockout, locked out of house, home door unlock, residential locksmith, home security" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/house-lockout" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: serviceSchema },
          { type: 'faq', data: faqSchema }
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
        mainContent={mainContent}
        relatedServices={relatedEmergencyServices}
        faqs={houseLockoutFaqs}
      />
      
      <ServicesProof reviewsData={residentialReviews.slice(0, 8)} />
    </main>
  );
};

export default HouseLockout;
