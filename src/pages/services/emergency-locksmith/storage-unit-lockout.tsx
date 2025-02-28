
import React from 'react';
import { Helmet } from "react-helmet";
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Tool, Clock, Shield, Package, Key, MapPin, Lock, Unlock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { createServiceSchema } from '@/utils/schema/localBusinessSchema';

const StorageUnitLockout = () => {
  // SEO metadata
  const title = "24/7 Storage Unit Lockout Service | Emergency Locksmith";
  const description = "Professional storage unit lockout assistance by certified locksmiths. We quickly and safely regain access to your storage unit with no damage. Available 24/7 for emergencies.";
  const keywords = "storage unit lockout, storage facility lockout, storage locker lockout, locked out of storage, storage unit locksmith, emergency storage lockout, unlock storage unit";
  
  // Page schema for SEO
  const schema = createServiceSchema(
    "Storage Unit Lockout Service",
    "Professional storage unit lockout service by certified technicians. Our locksmiths use specialized tools to quickly and safely unlock your storage unit with no damage.",
    "North Bergen"
  );
  
  // Service locations
  const serviceLocations = [
    "North Bergen", "Jersey City", "Hoboken", "Union City", 
    "West New York", "Weehawken", "Secaucus", "Guttenberg",
    "Fairview", "Cliffside Park", "Edgewater", "Fort Lee"
  ];
  
  // Service features
  const serviceFeatures = [
    {
      title: "Damage-Free Entry",
      description: "Our technicians use professional tools and techniques to unlock your storage unit without causing any damage to the unit or your belongings.",
      icon: <Unlock className="w-6 h-6 text-primary" />
    },
    {
      title: "24/7 Emergency Response",
      description: "Locked out of your storage unit at an inconvenient time? Our emergency service is available 24 hours a day, 7 days a week.",
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: "Certified Technicians",
      description: "All our locksmiths are fully certified, insured, and extensively trained in storage facility lock systems and entry techniques.",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "All Storage Facilities",
      description: "We provide lockout service for all types of storage facilities and units, including self-storage, climate-controlled units, and business storage.",
      icon: <Package className="w-6 h-6 text-primary" />
    },
    {
      title: "Advanced Equipment",
      description: "Our technicians carry specialized tools designed specifically for the types of locks commonly used in storage facilities.",
      icon: <Tool className="w-6 h-6 text-primary" />
    },
    {
      title: "Local Expertise",
      description: "Our network of local locksmiths means faster response times in North Bergen and surrounding New Jersey areas.",
      icon: <MapPin className="w-6 h-6 text-primary" />
    }
  ];
  
  // How it works steps
  const howItWorks = [
    {
      title: "Contact Our Emergency Response Team",
      description: "Call our 24/7 hotline or book online. Our dispatcher will collect information about your storage unit and location to send the nearest available technician."
    },
    {
      title: "Quick Arrival at Your Storage Facility",
      description: "Our mobile locksmith will arrive promptly with all the necessary equipment to handle your specific storage unit lock."
    },
    {
      title: "Unit Assessment",
      description: "The technician will evaluate your specific situation and determine the safest, most efficient method to unlock your storage unit without causing damage."
    },
    {
      title: "Professional Entry",
      description: "Using specialized tools and techniques, our locksmith will safely gain access to your storage unit, ensuring no damage to the unit or lock."
    },
    {
      title: "Solution Verification",
      description: "Once your storage unit is unlocked, our technician will ensure the lock or locking mechanism operates correctly and offer advice for future access."
    }
  ];
  
  // FAQ questions
  const faqQuestions = [
    {
      question: "How quickly can you respond to a storage unit lockout?",
      answer: "Our average response time for storage unit lockouts is 15-30 minutes in most service areas, depending on your location and current demand. We understand the importance of quick access to your belongings and prioritize these calls accordingly."
    },
    {
      question: "Can you open any type of storage unit lock?",
      answer: "Yes, our technicians are trained and equipped to handle virtually all types of storage unit locks, including padlocks, disc locks, cylinder locks, and electronic access systems. We have specialized tools for the various security measures commonly used by storage facilities."
    },
    {
      question: "Will accessing my storage unit cause any damage?",
      answer: "No, our professional locksmiths use specialized tools and techniques designed to access your storage unit without causing any damage. We take great care to protect your unit, lock, and stored belongings during the unlocking process."
    },
    {
      question: "What information do I need to provide when I call for storage unit lockout service?",
      answer: "To provide the fastest service, please have the following information ready: the name and address of the storage facility, your unit number, the type of lock (if known), proof of ownership or rental agreement (which will be verified on-site), and a callback number."
    },
    {
      question: "How do you verify that I'm authorized to access the storage unit?",
      answer: "For security reasons, our technicians will request identification and proof of unit rental before performing lockout services. This typically includes a driver's license and documentation such as a rental agreement, payment receipt, or verification from the storage facility management."
    },
    {
      question: "Can you help if I've lost the key to my storage unit lock?",
      answer: "Yes, we can help when you've lost the key to your storage unit. Our technicians can either unlock the existing lock or replace it entirely, providing you with new keys to maintain security for your belongings."
    },
    {
      question: "Do you work with storage facility management?",
      answer: "Yes, we frequently work with storage facility managers and staff. In many cases, we can coordinate with the facility management to verify your identity and authorization, making the process smoother and faster."
    },
    {
      question: "Can you replace my storage unit lock if necessary?",
      answer: "Absolutely. If your existing lock is damaged or you prefer to replace it after a lockout, we carry a selection of high-quality storage unit locks. Our technician can install a new lock and provide you with keys on the spot."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Lock Replacement",
      description: "Need a new lock for your storage unit? We offer professional installation of high-security locks specifically designed for storage facilities.",
      link: "/services/residential-locksmith/lock-replacement"
    },
    {
      title: "Padlock Replacement",
      description: "Lost the key to your storage unit padlock? We can replace your padlock with a new, secure option.",
      link: "/services/residential-locksmith/lock-replacement"
    },
    {
      title: "Broken Key Extraction",
      description: "Key broken off in your storage unit lock? Our technicians can safely extract the broken key and provide a replacement.",
      link: "/services/emergency-locksmith/house-lockout"
    }
  ];
  
  // Intro content
  const introContent = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-primary mb-4">Professional Storage Unit Lockout Solutions</h2>
      
      <p>Being locked out of your storage unit can be a frustrating experience, especially when you need to access important belongings. Whether you've lost your key, forgotten the combination, or are dealing with a malfunctioning lock, our professional storage unit lockout service provides fast, reliable assistance.</p>
      
      <p>At Locksmith & Security LLC, we understand the urgency of storage unit lockouts. That's why we offer 24/7 emergency locksmith services throughout North Bergen and surrounding areas in New Jersey. Our team of certified technicians has the expertise, tools, and experience to quickly gain access to your storage unit without causing any damage to the unit or your stored items.</p>
      
      <p>Using advanced techniques and specialized equipment, we can safely unlock virtually any type of storage unit lock, from simple padlocks to disc locks and electronic systems. Our goal is to restore your access quickly and with minimal disruption.</p>
      
      <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
        <h3 className="font-semibold text-lg mb-2 flex items-center">
          <AlertTriangle className="h-5 w-5 text-secondary mr-2" />
          Common Storage Unit Lockout Scenarios
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Lost storage unit keys</li>
          <li>Forgotten lock combination</li>
          <li>Broken key in lock</li>
          <li>Damaged or malfunctioning lock</li>
          <li>Rusted or weathered padlocks</li>
          <li>Inherited or purchased units with no key</li>
          <li>Lock freezing during winter months</li>
        </ul>
      </div>
    </div>
  );
  
  // Benefits content
  const benefitsContent = (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Key Benefits</Badge>
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Storage Unit Lockout Service</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Immediate Assistance</h3>
              <p className="text-gray-600">Our emergency response team is ready to assist with storage unit lockouts 24/7, including weekends and holidays, ensuring you can access your belongings when needed.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Non-Destructive Entry</h3>
              <p className="text-gray-600">Our technicians are trained in non-destructive entry techniques specifically for storage units, ensuring your unit remains undamaged and your belongings are protected.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Storage Facility Expertise</h3>
              <p className="text-gray-600">We work regularly with storage facilities and understand their security systems, making the lockout process smoother and faster, often with facility management cooperation.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Complete Lock Solutions</h3>
              <p className="text-gray-600">Beyond just unlocking your unit, we offer on-the-spot lock replacement, key cutting, and security recommendations to better protect your valuable stored items.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/storage-unit-lockout" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <ServicePageTemplate
        title="Storage Unit Lockout Service"
        description="Professional storage unit lockout assistance. Fast response times and secure unit access restoration."
        category="residential"
        heroImage="/website-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png"
        introContent={introContent}
        serviceFeatures={serviceFeatures}
        howItWorks={howItWorks}
        faqQuestions={faqQuestions}
        serviceLocations={serviceLocations}
        relatedServices={relatedServices}
        benefitsContent={benefitsContent}
      />
    </>
  );
};

export default StorageUnitLockout;
