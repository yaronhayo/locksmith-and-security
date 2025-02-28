
import React from 'react';
import { Helmet } from "react-helmet";
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Wrench, Clock, Shield, Search, Key, MapPin, Car, Brush, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { createServiceSchema } from '@/utils/schema/localBusinessSchema';

const CarLockout = () => {
  // SEO metadata
  const title = "24/7 Car Lockout Service | Emergency Auto Locksmith";
  const description = "Professional car lockout assistance by certified locksmiths. We quickly and safely unlock your vehicle with no damage. Available 24/7 for emergency service.";
  const keywords = "car lockout service, locked keys in car, auto locksmith, vehicle lockout, emergency car lockout, unlock car door, car door unlocking, automotive locksmith";
  
  // Page schema for SEO
  const schema = createServiceSchema(
    "Car Lockout Service",
    "Professional car lockout service by certified technicians. Our locksmiths use specialized tools to quickly and safely unlock your vehicle with no damage to the car.",
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
      description: "Our technicians use professional tools and techniques to unlock your vehicle without causing any damage to your car's door or locking mechanism.",
      icon: <Car className="w-6 h-6 text-primary" />
    },
    {
      title: "24/7 Emergency Response",
      description: "Locked out of your car at an inconvenient time? Our emergency car lockout service is available 24 hours a day, 7 days a week.",
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: "Certified Technicians",
      description: "All our automotive locksmiths are fully certified, insured, and extensively trained in the latest vehicle entry techniques.",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "All Vehicle Types",
      description: "We provide car lockout service for all makes and models, including cars, SUVs, trucks, and commercial vehicles.",
      icon: <Car className="w-6 h-6 text-primary" />
    },
    {
      title: "Advanced Equipment",
      description: "Our technicians carry specialized tools designed specifically for modern vehicles with advanced security systems.",
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
      description: "Call our 24/7 hotline or book online. Our dispatcher will collect information about your vehicle and location to send the nearest available technician."
    },
    {
      title: "Quick Arrival at Your Location",
      description: "Our mobile locksmith will arrive promptly with all the necessary equipment to handle your specific vehicle make and model."
    },
    {
      title: "Vehicle Assessment",
      description: "The technician will evaluate your specific situation and determine the safest, most efficient method to unlock your vehicle without causing damage."
    },
    {
      title: "Professional Vehicle Entry",
      description: "Using specialized tools and techniques, our locksmith will safely gain entry to your vehicle, ensuring no damage to your car's door or locking mechanism."
    },
    {
      title: "Solution Verification",
      description: "Once your car is unlocked, our technician will ensure the locks and handles operate correctly and offer advice to prevent future lockouts."
    }
  ];
  
  // FAQ questions
  const faqQuestions = [
    {
      question: "How quickly can you respond to a car lockout emergency?",
      answer: "Our average response time for car lockout emergencies is 15-30 minutes in most service areas, depending on your location and current demand. We prioritize emergency situations and dispatch the nearest available technician to your location as quickly as possible."
    },
    {
      question: "Can you unlock any type of vehicle?",
      answer: "Yes, our technicians are trained and equipped to handle virtually all vehicle makes and models, including cars, SUVs, trucks, vans, and motorcycles. We regularly update our training and equipment to stay current with the latest vehicle security systems."
    },
    {
      question: "Will unlocking my car cause any damage?",
      answer: "No, our professional locksmiths use specialized tools and techniques designed to access your vehicle without causing any damage. We take great care to protect your vehicle's finish, door components, and locking mechanisms during the unlocking process."
    },
    {
      question: "What information do I need to provide when I call for a car lockout service?",
      answer: "To provide the fastest service, please have the following information ready: your exact location, vehicle make and model, year of manufacture, and a callback number. This helps us dispatch the appropriate technician with the right equipment for your specific vehicle."
    },
    {
      question: "Are your locksmiths certified and insured?",
      answer: "Yes, all our automotive locksmiths are fully certified, licensed, and insured professionals. They undergo rigorous training and stay up-to-date with the latest vehicle entry techniques and security systems."
    },
    {
      question: "What should I do while waiting for the locksmith to arrive?",
      answer: "While waiting for our locksmith to arrive, please ensure you're in a safe location, especially if you're stranded at night or in an unfamiliar area. If possible, wait in a well-lit area or inside a nearby business. Keep your phone accessible for any follow-up calls from our dispatcher or technician."
    },
    {
      question: "Can you help if my key is broken in the lock or ignition?",
      answer: "Yes, we can help with broken key extraction from door locks or ignitions. Our technicians have specialized tools to safely remove broken key fragments without damaging the lock cylinder or ignition switch."
    },
    {
      question: "Do you offer any additional services beyond unlocking the car?",
      answer: "Yes, in addition to car lockout services, we offer key cutting, key programming, transponder key services, ignition repair/replacement, and lock rekeying. Our technician can discuss these options with you on-site if you need additional assistance."
    }
  ];
  
  // Related services
  const relatedServices = [
    {
      title: "Car Key Replacement",
      description: "Lost or damaged your car keys? We provide complete replacement services for all types of car keys, including transponder keys and key fobs.",
      link: "/services/auto-locksmith/car-key-replacement"
    },
    {
      title: "Key Fob Programming",
      description: "Need your key fob programmed? Our technicians can program new or existing key fobs for virtually any vehicle make and model.",
      link: "/services/auto-locksmith/key-fob-programming"
    },
    {
      title: "Ignition Lock Cylinder Replacement",
      description: "Having issues with your ignition? We offer professional ignition lock cylinder repair and replacement services.",
      link: "/services/auto-locksmith/ignition-lock-cylinder"
    }
  ];
  
  // Intro content
  const introContent = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-primary mb-4">Professional Car Lockout Solutions</h2>
      
      <p>Being locked out of your vehicle can happen to anyone at any time. Whether you've accidentally locked your keys inside the car, lost your keys, or are dealing with a malfunctioning lock, our professional car lockout service provides fast, reliable assistance when you need it most.</p>
      
      <p>At Locksmith & Security LLC, we understand the frustration and stress that comes with being stranded due to a car lockout situation. That's why we offer 24/7 emergency automotive locksmith services throughout North Bergen and surrounding areas in New Jersey. Our team of certified technicians has the expertise, tools, and experience to quickly gain access to your vehicle without causing any damage.</p>
      
      <p>Using advanced techniques and specialized equipment, we can safely unlock virtually any make and model of vehicle, including those with sophisticated security systems. Our goal is to get you back on the road with minimal delay and complete peace of mind.</p>
      
      <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
        <h3 className="font-semibold text-lg mb-2 flex items-center">
          <AlertTriangle className="h-5 w-5 text-secondary mr-2" />
          Common Car Lockout Scenarios
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Keys locked inside your vehicle</li>
          <li>Lost or misplaced car keys</li>
          <li>Broken key in lock or ignition</li>
          <li>Malfunctioning door locks</li>
          <li>Frozen locks during winter months</li>
          <li>Key fob battery failure</li>
        </ul>
      </div>
    </div>
  );
  
  // Benefits content
  const benefitsContent = (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary">Key Benefits</Badge>
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Car Lockout Service</h2>
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
              <p className="text-gray-600">Our mobile locksmiths are strategically located throughout the service area to provide the quickest possible response to your emergency. We understand that when you're locked out, every minute counts.</p>
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
              <p className="text-gray-600">Our technicians are trained in the latest non-destructive entry techniques. We use specialized tools and methods that ensure your vehicle remains undamaged during the unlocking process.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Tool className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Comprehensive Service</h3>
              <p className="text-gray-600">Beyond simply unlocking your car, we can address related issues like extracting broken keys, repairing damaged locks, or creating new keys on the spot if yours are lost or damaged.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">All Vehicle Types</h3>
              <p className="text-gray-600">From sedans and SUVs to trucks and luxury vehicles, our technicians have the expertise and equipment to handle any type of automobile, regardless of make, model, or year.</p>
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
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/emergency-locksmith/car-lockout" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <ServicePageTemplate
        title="Car Lockout Service"
        description="Professional automotive locksmith services. Available 24/7 for all vehicle lockout situations."
        category="car"
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

export default CarLockout;
