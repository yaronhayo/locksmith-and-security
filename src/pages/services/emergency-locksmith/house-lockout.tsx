import React from 'react';
import { Helmet } from "react-helmet";
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Wrench, Clock, Shield, Home, Key, MapPin, Lock, Unlock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { createServiceSchema } from '@/utils/schema/localBusinessSchema';

const HouseLockout = () => {
  // SEO metadata
  const title = "24/7 Residential Lockout Service | Emergency Home Locksmith";
  const description = "Professional house lockout assistance by certified locksmiths. We quickly and safely unlock your door with no damage. Available 24/7 for emergency residential lockout service.";
  const keywords = "house lockout service, locked out of house, home lockout, residential locksmith, emergency house lockout, unlock house door, door unlocking, residential lockout service";
  
  // Page schema for SEO
  const schema = createServiceSchema(
    "Residential Lockout Service",
    "Professional home lockout service by certified technicians. Our locksmiths use specialized tools to quickly and safely unlock your door with no damage to your property.",
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
      description: "Our technicians use professional tools and techniques to unlock your door without causing any damage to your lock or door frame.",
      icon: <Unlock className="w-6 h-6 text-primary" />
    },
    {
      title: "24/7 Emergency Response",
      description: "Locked out of your home at an inconvenient time? Our emergency residential lockout service is available 24 hours a day, 7 days a week.",
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: "Certified Technicians",
      description: "All our residential locksmiths are fully certified, insured, and extensively trained in the latest home security and entry techniques.",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "All Door Types",
      description: "We provide lockout service for all types of residential doors, including front doors, back doors, patio doors, garage doors, and interior doors.",
      icon: <Home className="w-6 h-6 text-primary" />
    },
    {
      title: "Advanced Equipment",
      description: "Our technicians carry specialized tools designed specifically for modern residential locks and high-security systems.",
      icon: <Wrench className="w-6 h-6 text-primary" />
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
      description: "Call our 24/7 hotline or book online. Our dispatcher will collect information about your situation and location to send the nearest available technician."
    },
    {
      title: "Quick Arrival at Your Location",
      description: "Our mobile locksmith will arrive promptly with all the necessary equipment to handle your specific lock type and door."
    },
    {
      title: "Property Assessment",
      description: "The technician will evaluate your specific situation and determine the safest, most efficient method to unlock your door without causing damage."
    },
    {
      title: "Professional Entry",
      description: "Using specialized tools and techniques, our locksmith will safely gain entry to your home, ensuring no damage to your door or lock."
    },
    {
      title: "Solution Verification",
      description: "Once your door is unlocked, our technician will ensure the locks and handles operate correctly and offer advice to prevent future lockouts."
    }
  ];
  
  // FAQ questions
  const faqQuestions = [
    {
      question: "How quickly can you respond to a house lockout emergency?",
      answer: "Our average response time for residential lockout emergencies is 15-30 minutes in most service areas, depending on your location and current demand. We prioritize emergency situations and dispatch the nearest available technician to your location as quickly as possible."
    },
    {
      question: "Can you unlock any type of residential door?",
      answer: "Yes, our technicians are trained and equipped to handle virtually all types of residential doors and locks, including deadbolts, knob locks, mortise locks, smart locks, high-security locks, and keyless entry systems. We can also help with interior doors, patio doors, and garage door lockouts."
    },
    {
      question: "Will unlocking my door cause any damage?",
      answer: "No, our professional locksmiths use specialized tools and techniques designed to access your home without causing any damage. We take great care to protect your door, frame, and locking mechanisms during the unlocking process."
    },
    {
      question: "What information do I need to provide when I call for a house lockout service?",
      answer: "To provide the fastest service, please have the following information ready: your exact address with any specific entry instructions, the type of lock you have (if known), proof of residence (which will be verified on-site), and a callback number. This helps us dispatch the appropriate technician with the right equipment."
    },
    {
      question: "How do you verify that I'm the homeowner or authorized resident?",
      answer: "For your protection, our technicians will request identification and proof of residence before performing lockout services. This may include a driver's license showing your address, utility bills, lease agreements, or other documents that verify you live at or own the property."
    },
    {
      question: "What should I do while waiting for the locksmith to arrive?",
      answer: "While waiting for our locksmith to arrive, check if there are any unlocked doors or windows that might provide safe entry. Look for any spare keys that friends or family members might have. If it's dark, try to wait in a well-lit area, and keep your phone accessible for any follow-up calls from our dispatcher or technician."
    },
    {
      question: "Can you help if my key is broken in the lock?",
      answer: "Yes, we can help with broken key extraction from any type of lock. Our technicians have specialized tools to safely remove broken key fragments without damaging the lock cylinder."
    },
    {
      question: "Do you offer any additional services beyond unlocking the door?",
      answer: "Yes, in addition to lockout services, we offer lock repair, lock replacement, rekeying, key duplication, and security assessments. Our technician can discuss these options with you on-site if you need additional assistance with your home security."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Lock Replacement",
      description: "Need to upgrade your home security? We offer professional installation of high-security locks for all types of residential doors.",
      link: "/services/residential-locksmith/lock-replacement"
    },
    {
      title: "Lock Rekey",
      description: "Want to keep your existing locks but change the keys? Our rekeying service is a cost-effective security solution.",
      link: "/services/residential-locksmith/lock-rekey"
    },
    {
      title: "Lock Repair",
      description: "Having issues with your locks? Our technicians can diagnose and repair virtually any type of residential lock problem.",
      link: "/services/residential-locksmith/lock-repair"
    }
  ];
  
  // Intro content
  const introContent = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-primary mb-4">Professional Residential Lockout Solutions</h2>
      
      <p>Being locked out of your home can be a stressful and frustrating experience. Whether you've lost your keys, left them inside, or are dealing with a malfunctioning lock, our professional residential lockout service provides fast, reliable assistance when you need it most.</p>
      
      <p>At Locksmith & Security LLC, we understand the urgency of home lockout situations. That's why we offer 24/7 emergency residential locksmith services throughout North Bergen and surrounding areas in New Jersey. Our team of certified technicians has the expertise, tools, and experience to quickly gain access to your home without causing any damage to your doors or locks.</p>
      
      <p>Using advanced techniques and specialized equipment, we can safely unlock virtually any type of residential door, including those with high-security locks. Our goal is to get you back inside your home with minimal delay and complete peace of mind.</p>
      
      <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
        <h3 className="font-semibold text-lg mb-2 flex items-center">
          <AlertTriangle className="h-5 w-5 text-secondary mr-2" />
          Common Home Lockout Scenarios
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Keys locked inside your home</li>
          <li>Lost or misplaced house keys</li>
          <li>Broken key in lock</li>
          <li>Malfunctioning door locks</li>
          <li>Frozen locks during winter months</li>
          <li>Locked out after moving into a new home</li>
          <li>Children accidentally locking parents out</li>
        </ul>
      </div>
    </div>
  );
  
  // Benefits content
  const benefitsContent = (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Key Benefits</Badge>
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Residential Lockout Service</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Fast Response Time</h3>
              <p className="text-gray-600">Our mobile locksmiths are strategically located throughout the service area to provide the quickest possible response to your emergency. We understand that when you're locked out of your home, every minute counts.</p>
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
              <p className="text-gray-600">Our technicians are trained in the latest non-destructive entry techniques. We use specialized tools and methods that ensure your door and lock remain undamaged during the unlocking process.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Security Consultation</h3>
              <p className="text-gray-600">Beyond simply unlocking your door, our technicians can provide valuable advice on improving your home's security and preventing future lockouts.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">On-the-Spot Solutions</h3>
              <p className="text-gray-600">If your lockout is due to lost keys or damaged locks, we can provide immediate solutions such as key cutting, lock repair, or lock replacement right on the spot.</p>
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
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/house-lockout" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <ServicePageTemplate
        title="Residential Lockout Service"
        description="Professional locksmith services for home lockouts. Available 24/7 for all residential security needs."
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

export default HouseLockout;
