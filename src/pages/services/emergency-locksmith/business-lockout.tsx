import React from 'react';
import { Helmet } from "react-helmet";
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Wrench, Clock, Shield, Building, Key, MapPin, Lock, Unlock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { createServiceSchema } from '@/utils/schema/localBusinessSchema';

const BusinessLockout = () => {
  // SEO metadata
  const title = "24/7 Commercial Lockout Service | Emergency Business Locksmith";
  const description = "Professional business lockout assistance by certified commercial locksmiths. We quickly and safely unlock your office or store with no damage. Available 24/7 for emergency service.";
  const keywords = "business lockout service, commercial lockout, office lockout, store lockout, commercial locksmith, emergency business lockout, unlock office door, commercial door unlocking";
  
  // Page schema for SEO
  const schema = createServiceSchema(
    "Commercial Lockout Service",
    "Professional business lockout service by certified technicians. Our locksmiths use specialized tools to quickly and safely unlock your commercial property with no damage.",
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
      description: "Our technicians use professional tools and techniques to unlock your commercial doors without causing any damage to your locks or door frames.",
      icon: <Unlock className="w-6 h-6 text-primary" />
    },
    {
      title: "24/7 Emergency Response",
      description: "Locked out of your business at an inconvenient time? Our emergency commercial lockout service is available 24 hours a day, 7 days a week.",
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: "Certified Commercial Specialists",
      description: "All our commercial locksmiths are fully certified, insured, and extensively trained in the latest business security systems and entry techniques.",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "All Commercial Properties",
      description: "We provide lockout service for all types of commercial properties, including offices, retail stores, restaurants, warehouses, and industrial facilities.",
      icon: <Building className="w-6 h-6 text-primary" />
    },
    {
      title: "Advanced Equipment",
      description: "Our technicians carry specialized tools designed specifically for commercial-grade locks and high-security systems.",
      icon: <Wrench className="w-6 h-6 text-primary" />
    },
    {
      title: "Local Business Support",
      description: "Our network of local locksmiths means faster response times in North Bergen and surrounding New Jersey areas, minimizing business disruption.",
      icon: <MapPin className="w-6 h-6 text-primary" />
    }
  ];
  
  // How it works steps
  const howItWorks = [
    {
      title: "Contact Our Commercial Response Team",
      description: "Call our 24/7 hotline or book online. Our dispatcher will collect information about your business property and location to send the nearest available commercial locksmith specialist."
    },
    {
      title: "Quick Arrival at Your Business",
      description: "Our mobile locksmith will arrive promptly with all the necessary equipment to handle your specific commercial lock systems."
    },
    {
      title: "Property Assessment",
      description: "The technician will evaluate your specific situation and determine the safest, most efficient method to unlock your commercial door without causing damage."
    },
    {
      title: "Professional Entry",
      description: "Using specialized tools and techniques, our locksmith will safely gain entry to your business, ensuring no damage to your commercial-grade doors or locks."
    },
    {
      title: "Solution Verification",
      description: "Once your business is unlocked, our technician will ensure the locks and security systems operate correctly and offer advice to prevent future lockouts."
    }
  ];
  
  // FAQ questions
  const faqQuestions = [
    {
      question: "How quickly can you respond to a business lockout emergency?",
      answer: "Our average response time for commercial lockout emergencies is 15-30 minutes in most service areas, depending on your location and current demand. We prioritize business lockouts to help minimize downtime and disruption to your operations."
    },
    {
      question: "Can you unlock all types of commercial doors and security systems?",
      answer: "Yes, our commercial locksmith specialists are trained and equipped to handle virtually all types of commercial doors and locks, including high-security systems, electronic access controls, panic bars, commercial-grade deadbolts, mortise locks, and keyless entry systems."
    },
    {
      question: "Will unlocking my business door cause any damage?",
      answer: "No, our professional locksmiths use specialized tools and techniques designed specifically for commercial properties. We take great care to protect your door, frame, and locking mechanisms during the unlocking process, ensuring no damage occurs."
    },
    {
      question: "What information do I need to provide when I call for a business lockout service?",
      answer: "To provide the fastest service, please have the following information ready: your business name and exact address, the type of commercial property, the type of lock system (if known), proof of ownership or authorization (which will be verified on-site), and a callback number."
    },
    {
      question: "How do you verify that I'm authorized to access the business?",
      answer: "For security reasons, our technicians will request identification and proof of business ownership or authorization before performing lockout services. This may include business licenses, property deeds, lease agreements, business cards, employee identification, or other documents that verify your authorization to access the property."
    },
    {
      question: "Can you help with file cabinet, desk, or interior office lockouts?",
      answer: "Yes, in addition to exterior door lockouts, we can assist with unlocking various interior office fixtures such as file cabinets, desks, server rooms, supply closets, and other secured areas within your business premises."
    },
    {
      question: "Do you offer service for retail stores during non-business hours?",
      answer: "Yes, our 24/7 emergency service means we can assist with retail store lockouts at any time, including after hours, weekends, and holidays when such situations can be most disruptive to your business."
    },
    {
      question: "Can you help with master key systems or restricted keyways?",
      answer: "Absolutely. Our commercial locksmiths are specially trained to work with complex master key systems and restricted keyway profiles commonly used in businesses. We can provide immediate access while maintaining the integrity of your security system."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Commercial Lock Replacement",
      description: "Need to upgrade your business security? We offer professional installation of high-security commercial-grade locks for all types of business properties.",
      link: "/services/commercial-locksmith/lock-replacement"
    },
    {
      title: "Commercial Lock Rekey",
      description: "Want to keep your existing locks but change the keys? Our commercial rekeying service is a cost-effective security solution for businesses.",
      link: "/services/commercial-locksmith/lock-rekey"
    },
    {
      title: "Master Key Systems",
      description: "Need a more efficient way to manage access to your business? Our master key system solutions provide security with convenience.",
      link: "/services/commercial-locksmith/master-key"
    }
  ];
  
  // Intro content
  const introContent = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-primary mb-4">Professional Commercial Lockout Solutions</h2>
      
      <p>A business lockout can lead to significant disruption, lost revenue, and security concerns. Whether you've lost your keys, left them inside, or are dealing with a malfunctioning commercial lock, our professional business lockout service provides fast, reliable assistance when your enterprise needs it most.</p>
      
      <p>At Locksmith & Security LLC, we understand the unique challenges that businesses face during lockout situations. That's why we offer 24/7 emergency commercial locksmith services throughout North Bergen and surrounding areas in New Jersey. Our team of certified commercial lock specialists has the expertise, tools, and experience to quickly gain access to your business property without causing any damage to your doors or security systems.</p>
      
      <p>Using advanced techniques and specialized equipment for commercial applications, we can safely unlock virtually any type of business door, including those with high-security and electronic access control systems. Our goal is to get your business back up and running with minimal delay and disruption to your operations.</p>
      
      <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
        <h3 className="font-semibold text-lg mb-2 flex items-center">
          <AlertTriangle className="h-5 w-5 text-secondary mr-2" />
          Common Business Lockout Scenarios
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Keys locked inside your business premises</li>
          <li>Lost or misplaced commercial keys</li>
          <li>Broken key in commercial lock</li>
          <li>Employee termination requiring immediate lock changes</li>
          <li>Malfunctioning electronic access systems</li>
          <li>Opening for business without access to keys</li>
          <li>After-hours emergency access requirements</li>
          <li>Frozen locks during winter months</li>
        </ul>
      </div>
    </div>
  );
  
  // Benefits content
  const benefitsContent = (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Key Benefits</Badge>
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Commercial Lockout Service</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Priority Business Response</h3>
              <p className="text-gray-600">We prioritize commercial lockout calls to help minimize business disruption and downtime. Our commercial specialists are strategically located to provide rapid response throughout our service area.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Commercial Security Expertise</h3>
              <p className="text-gray-600">Our locksmiths specialize in commercial security systems and understand the unique needs of businesses. We use specialized commercial-grade tools that protect your security investments.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Security Assessment</h3>
              <p className="text-gray-600">Following a lockout, we can provide a professional security assessment to identify vulnerabilities and recommend appropriate security upgrades for your business property.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Comprehensive Business Solutions</h3>
              <p className="text-gray-600">Beyond access solutions, we offer complete commercial locksmith services including master key systems, access control installation, high-security locks, and commercial security consulting.</p>
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
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/business-lockout" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <ServicePageTemplate
        title="Business Lockout Service"
        description="Professional locksmith services for commercial lockouts. Available 24/7 for all business security needs."
        category="commercial"
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

export default BusinessLockout;
