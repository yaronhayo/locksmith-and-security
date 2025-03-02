
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { EmergencyServiceContent } from '@/components/services/emergency-locksmith/EmergencyServiceContent';
import { Clock, AlertTriangle, Map, Shield } from 'lucide-react';
import ServicePageContent from '@/components/sections/services/service-page/ServicePageContent';
import ReviewsSection from '@/components/sections/ReviewsSection';

const EmergencyLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "24/7 Emergency Response",
      description: "Professional locksmith services available day and night, including holidays and weekends.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "All Lockout Situations",
      description: "Expert solutions for home, business, vehicle, and storage lockouts with damage-free entry methods.",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      title: "Mobile Service Units",
      description: "Fast response to your location throughout North Bergen and surrounding areas in New Jersey.",
      icon: <Map className="h-6 w-6" />
    },
    {
      title: "Licensed & Insured",
      description: "Professional service by certified technicians you can trust in emergency situations.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to an emergency lockout?",
      answer: "We typically arrive within 15-30 minutes of your call, depending on your location and current traffic conditions. We prioritize emergency lockout situations and dispatch the nearest available technician to your location."
    },
    {
      question: "Do you damage locks when responding to lockouts?",
      answer: "No, our professional locksmiths use specialized tools and non-destructive entry techniques designed to open locks without causing damage. In the vast majority of cases, we can gain entry without harming your locks or doors."
    },
    {
      question: "What types of identification do I need to show when you arrive?",
      answer: "To protect property owners, we require proof that you own or have legitimate access to the property. This typically includes a driver's license or government-issued ID matching the address for residential lockouts, vehicle registration for car lockouts, or business documentation for commercial lockouts."
    },
    {
      question: "How much does emergency locksmith service cost?",
      answer: "Emergency service costs vary depending on the specific situation, time of day, and services required. We provide upfront pricing before beginning work, with no hidden fees. Emergency calls during nights, weekends, or holidays may have additional service charges."
    },
    {
      question: "Can you handle high-security or electronic locks?",
      answer: "Yes, our technicians are trained to work with high-security locks, smart locks, electronic access systems, and vehicle transponder keys. We have the specialized equipment necessary for most advanced locking systems."
    }
  ];

  const pageTitle = "Emergency Locksmith Services | 24/7 Lockout Assistance";
  const pageDescription = "Professional 24/7 emergency locksmith services for home, business, and vehicle lockouts. Fast response, damage-free entry, and affordable rates throughout North Bergen, NJ.";

  return (
    <PageLayout 
      title={pageTitle}
      description={pageDescription}
      keywords="emergency locksmith, 24/7 locksmith, lockout service, car lockout, house lockout, business lockout, emergency key replacement, locked out of car, locked out of house"
      hideBreadcrumbs={false}
    >
      <ServicePageContent
        title="Emergency Locksmith Services"
        description="Fast, professional assistance when you're locked out of your car, home, or business."
        serviceName="Emergency Locksmith"
        serviceCategory="Emergency"
        mainContent={<EmergencyServiceContent />}
        faqs={faqs}
        categoryDescription={<EmergencyServiceContent />}
        categoryFeatures={categoryFeatures}
      />
      
      <ReviewsSection category="car" />
    </PageLayout>
  );
};

export default EmergencyLocksmithPage;
