
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/ServicePageContent';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { commercialReviews } from '@/data/reviews';

const relatedEmergencyServices = [
  {
    title: "Commercial Lock Replacement",
    path: "/services/commercial-locksmith/lock-replacement",
    description: "Professional commercial lock replacement services to upgrade your business security systems."
  },
  {
    title: "Commercial Lock Rekey",
    path: "/services/commercial-locksmith/lock-rekey",
    description: "Maintain your existing hardware while changing access permissions with our expert lock rekeying services."
  },
  {
    title: "Master Key Systems",
    path: "/services/commercial-locksmith/master-key",
    description: "Implement sophisticated master key systems for convenient access management across your business."
  },
];

const businessLockoutFaqs = [
  {
    question: "How quickly can you respond to a commercial lockout?",
    answer: "We understand that business lockouts can disrupt operations, so we prioritize commercial emergency calls. In most cases, we can dispatch a technician within 30 minutes of your call, depending on your location and current service demand."
  },
  {
    question: "Can you unlock all types of commercial doors and locks?",
    answer: "Yes, our commercial locksmiths are trained to handle virtually all types of business security systems, including high-security locks, electronic access control systems, panic bars, commercial-grade deadbolts, and specialized industry-specific locks."
  },
  {
    question: "Will your locksmith service damage my commercial door?",
    answer: "Our professional locksmiths use specialized non-destructive entry techniques designed specifically for commercial applications. Our goal is always to gain access with zero damage to your property, preserving both function and aesthetics."
  },
  {
    question: "What proof do I need to show that I'm authorized to access the business?",
    answer: "For security purposes, we require verification that you're authorized to access the property. This typically includes business identification, proof of ownership (business license, lease agreement, etc.), and personal identification. For employees, we may need authorization from the owner or manager."
  },
  {
    question: "Can you help if we've lost all copies of our business keys?",
    answer: "Yes, we can create new keys for most commercial locks even if you've lost all existing copies. For high-security systems, we may need to verify authorization through additional documentation. We can also recommend and implement more secure solutions to prevent future lockouts."
  }
];

const BusinessLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Lockout Service",
    "description": "Professional business lockout services by certified commercial locksmiths. Fast, reliable, and damage-free entry for all types of commercial properties.",
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
      "name": "Commercial Lockout Services",
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
            "name": "Commercial Lock Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Lockout Assistance"
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
    "mainEntity": businessLockoutFaqs.map(faq => ({
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
        A business lockout can disrupt operations, affect employee productivity, and impact your bottom line. Whether you're locked out of your office, retail store, warehouse, or any commercial property, our professional business lockout service provides rapid, reliable assistance to minimize downtime and get your operations back on track quickly.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Specialized Commercial Lockout Solutions</h3>
      <p className="mb-4">
        Our certified commercial locksmiths are specifically trained to handle business security systems and understand the unique needs of commercial clients. We can quickly and efficiently gain access to your business property while maintaining the integrity of your security systems.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our Business Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency commercial door unlocking</li>
          <li>Office lockout assistance</li>
          <li>File cabinet and desk unlock services</li>
          <li>Server room and restricted area access</li>
          <li>Safe and vault lockout solutions</li>
          <li>Master key system assistance</li>
          <li>Commercial lock repair and maintenance</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Solutions for All Commercial Security Systems</h3>
      <p className="mb-6">
        Modern businesses employ various security systems to protect their assets. Our technicians are equipped to handle all types of commercial locks and security systems, including:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Commercial-grade deadbolts and mortise locks</li>
        <li>Electronic access control systems</li>
        <li>Keycard and fob entry systems</li>
        <li>High-security cylinders (Medeco, Mul-T-Lock, etc.)</li>
        <li>Panic bars and emergency exit devices</li>
        <li>Interchangeable core systems</li>
        <li>Biometric access systems</li>
        <li>Commercial safes and vaults</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Business Lockout Scenarios We Resolve</h3>
      <p className="mb-4">
        Our experienced commercial locksmiths routinely assist businesses with various lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost Office Keys</h4>
          <p className="text-gray-700">
            We'll provide immediate access and can create new keys or recommend more secure alternatives.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Early Morning/After Hours Lockouts</h4>
          <p className="text-gray-700">
            Our 24/7 service ensures you never have to wait long, even outside normal business hours.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Employee Termination Security</h4>
          <p className="text-gray-700">
            After employee turnover, we can rekey or replace locks to maintain security integrity.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Malfunctioning Access Systems</h4>
          <p className="text-gray-700">
            We can troubleshoot and repair electronic or mechanical systems that have failed.
          </p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Commercial-Grade Expertise</h3>
      <p className="mb-4">
        Business security systems often involve more complex mechanisms and higher security standards than residential locks. Here's why professional commercial locksmith service is essential:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Commercial locks often require specialized tools and techniques</li>
        <li>Business security systems can have integrated components that require expert handling</li>
        <li>Improper entry attempts can cause costly damage to high-value security infrastructure</li>
        <li>Professional service ensures regulatory compliance remains intact</li>
        <li>Expert technicians can identify and address underlying security vulnerabilities</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Our Commercial Locksmith Advantage</h3>
      <p className="mb-4">
        When you choose our business lockout service, you benefit from:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Technicians specifically trained in commercial security systems</li>
        <li>Advanced tools designed for commercial-grade locks</li>
        <li>Priority response for business clients</li>
        <li>Non-destructive entry techniques that preserve your security infrastructure</li>
        <li>Comprehensive security assessments to prevent future lockouts</li>
        <li>Expert advice on security upgrades and best practices</li>
        <li>Full documentation for insurance or compliance purposes</li>
      </ul>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Business Security Tip</h4>
        <p>
          Consider implementing a master key system with clearly defined access levels for different employee roles. This can significantly reduce lockout incidents while maintaining strong security protocols. Our locksmiths can design and implement a custom master key system for your specific business needs.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Preventative Measures for Businesses</h3>
      <p className="mb-4">
        To minimize the risk of business lockouts and strengthen your overall security, consider these preventative strategies:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li><strong>Develop a key management system:</strong> Document who has which keys and implement sign-out procedures</li>
        <li><strong>Establish emergency protocols:</strong> Create clear procedures for lockout situations</li>
        <li><strong>Implement redundant access methods:</strong> Consider keypad or card access alongside traditional keys</li>
        <li><strong>Schedule regular maintenance:</strong> Have locks and access systems serviced regularly</li>
        <li><strong>Install security cameras:</strong> Monitor access points to deter unauthorized entry attempts</li>
      </ol>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide commercial lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile commercial locksmiths arrive fully equipped to handle any business lockout situation efficiently and professionally.
      </p>
    </>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Business Lockout Service | 24/7 Commercial Locksmith</title>
        <meta name="description" content="Expert business lockout service by certified commercial locksmiths. Fast, damage-free access 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="business lockout, commercial lockout, office lockout, emergency business locksmith, locked out of office, commercial door unlock, business security" />
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
        description="Professional locksmith assistance when you're locked out of your commercial property. Our certified technicians provide fast, reliable service to minimize business disruption."
        serviceName="Business Lockout"
        serviceLabel="Emergency Commercial Locksmith"
      />
      
      <ServicePageContent
        title="Professional Business Lockout Assistance"
        description="Expert commercial lockout services by certified business locksmiths"
        serviceName="Business Lockout"
        serviceCategory="Commercial Locksmith"
        mainContent={mainContent}
        relatedServices={relatedEmergencyServices}
        faqs={businessLockoutFaqs}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default BusinessLockout;
