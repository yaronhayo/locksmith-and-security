
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
    title: "House Lockout Service",
    path: "/services/emergency-locksmith/house-lockout",
    description: "Fast, professional assistance when you're locked out of your home. Trained technicians provide damage-free entry."
  },
  {
    title: "Lock Replacement",
    path: "/services/residential-locksmith/lock-replacement",
    description: "Upgrade your security with professional lock replacement services for added protection and peace of mind."
  },
];

const storageUnitLockoutFaqs = [
  {
    question: "Can you open any type of storage unit lock?",
    answer: "Yes, our technicians are equipped to handle virtually all types of storage unit locking mechanisms, including disc locks, cylinder locks, padlocks, and built-in locking systems used by various storage facilities."
  },
  {
    question: "Will I need to provide proof that the storage unit is mine?",
    answer: "Yes, for security purposes, we require verification of ownership or rental agreement for the storage unit. Please have your ID and storage facility contract or recent receipt available. In some cases, we may need to coordinate with facility management."
  },
  {
    question: "How long does it take to unlock a storage unit?",
    answer: "Most standard storage unit lockouts can be resolved within 15-30 minutes after our technician arrives. The exact time depends on the type and complexity of the lock, but our goal is always to provide efficient, timely service."
  },
  {
    question: "Will unlocking my storage unit damage the door or lock?",
    answer: "Our professional locksmiths use specialized tools and techniques designed to open your storage unit without causing damage to the door or surrounding structure. We prioritize non-destructive entry methods whenever possible."
  },
  {
    question: "Do I need permission from the storage facility to call a locksmith?",
    answer: "While policies vary by facility, many storage locations require notification or permission before a third-party locksmith can work on their premises. We recommend contacting your facility management first, though we can often coordinate with them directly if needed."
  }
];

const StorageUnitLockout = () => {
  // Schema data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Storage Unit Lockout Service",
    "description": "Professional storage unit lockout services by certified locksmiths. Fast, reliable access when you're locked out of your storage unit.",
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
            "name": "Broken Lock Extraction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Replacement for Storage Units"
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
        Being locked out of your storage unit can be particularly frustrating, especially when you need immediate access to your belongings. Whether you've lost your key, the lock is malfunctioning, or you're dealing with a broken key, our professional storage unit lockout service provides fast, efficient assistance to restore access to your valuable possessions.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Specialized Storage Unit Lockout Solutions</h3>
      <p className="mb-4">
        Our certified locksmiths are specifically trained to handle the unique challenges presented by storage facility locks. We understand the security concerns of both renters and storage facility managers, providing solutions that respect property while efficiently resolving lockout situations.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
        <h4 className="text-xl font-bold mb-3">Our Storage Unit Lockout Services Include:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Emergency storage unit access</li>
          <li>Disc lock and padlock opening</li>
          <li>Broken key extraction</li>
          <li>Lock cutting (when necessary and authorized)</li>
          <li>Replacement lock installation</li>
          <li>New key creation</li>
          <li>Security consultation for improved storage unit protection</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Expert Solutions for All Storage Lock Types</h3>
      <p className="mb-6">
        Storage facilities use various locking mechanisms to secure units. Our technicians are equipped to handle all common storage unit locks, including:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Disc locks (round, high-security locks commonly used for storage units)</li>
        <li>Traditional padlocks</li>
        <li>Cylinder locks built into the unit door</li>
        <li>Electronic or smart locks used in modern facilities</li>
        <li>Built-in latch systems</li>
        <li>High-security shackle protected locks</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Storage Unit Lockout Scenarios</h3>
      <p className="mb-4">
        Our experienced locksmiths have assisted countless customers with various storage unit lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost Storage Unit Keys</h4>
          <p className="text-gray-700">
            We can gain access to your unit and provide replacement keys so you can retrieve your belongings.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Broken Keys in Locks</h4>
          <p className="text-gray-700">
            We can extract broken key fragments and repair or replace the lock as needed.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Malfunctioning Locks</h4>
          <p className="text-gray-700">
            If your lock is jammed, frozen, or otherwise not functioning, we can diagnose and resolve the issue.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Forgotten Combinations</h4>
          <p className="text-gray-700">
            For combination locks, we can help you regain access when you've forgotten the code.
          </p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">The Importance of Professional Storage Unit Locksmith Service</h3>
      <p className="mb-4">
        When locked out of your storage unit, you might be tempted to try forced entry methods or call the cheapest service available. However, there are several reasons why professional locksmith service is the better choice:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Storage facility policy compliance - many facilities prohibit forced entry or DIY solutions</li>
        <li>Damage prevention - amateur methods often damage doors or surrounding structures</li>
        <li>Security maintenance - professional service ensures continued protection for your belongings</li>
        <li>Liability concerns - improper entry can violate rental agreements and create liability issues</li>
        <li>Time efficiency - professional locksmiths resolve the issue quickly and cleanly</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Our Storage Unit Locksmith Process</h3>
      <p className="mb-4">
        When you call us for a storage unit lockout, here's what you can expect:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li><strong>Verification:</strong> We'll gather information about your situation and verify your authorization to access the unit</li>
        <li><strong>Facility Coordination:</strong> If required, we'll coordinate with storage facility management</li>
        <li><strong>Assessment:</strong> Upon arrival, our technician will evaluate the lock and determine the best entry method</li>
        <li><strong>Professional Entry:</strong> Using specialized tools, we'll gain access with minimal or no damage</li>
        <li><strong>Lock Service:</strong> We can repair, replace, or provide new keys as needed</li>
        <li><strong>Security Advice:</strong> We'll offer recommendations to prevent future lockouts</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Security Tip</h4>
        <p>
          Consider using a high-quality disc lock for your storage unit rather than a standard padlock. Disc locks are specifically designed to resist cutting and tampering, providing superior protection for your stored belongings. We can recommend and install the best lock for your specific storage unit.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Preventative Measures</h3>
      <p className="mb-4">
        To avoid future storage unit lockouts, consider these preventative strategies:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Keep spare keys in a secure, remembered location (not in the storage unit itself)</li>
        <li>Take photos of your keys so a locksmith can create duplicates if needed</li>
        <li>Record lock serial numbers and key codes when available</li>
        <li>Consider using a high-quality lock with registered keys</li>
        <li>Maintain your lock regularly, especially in facilities exposed to weather</li>
        <li>Consider a lock with multiple access methods (key plus combination or electronic access)</li>
      </ul>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide storage unit lockout services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your storage unit lockout situation professionally and efficiently.
      </p>
    </>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Storage Unit Lockout Service | Emergency Locksmith</title>
        <meta name="description" content="Expert storage unit lockout service by certified locksmiths. Fast, damage-free access 24/7. Serving North Bergen, Jersey City, Hoboken & all NJ areas." />
        <meta name="keywords" content="storage unit lockout, storage locksmith, locked out of storage unit, storage facility locksmith, self-storage lockout, storage lock opening" />
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
        description="Professional locksmith assistance when you're locked out of your storage unit. Our certified technicians provide fast, reliable solutions to regain access to your belongings."
        serviceName="Storage Unit Lockout"
        serviceLabel="Emergency Locksmith Service"
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
