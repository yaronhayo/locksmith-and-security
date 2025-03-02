
import React from 'react';
import ServiceCategoryLayout from '@/components/services/common/ServiceCategoryLayout';
import { EmergencyServiceContent } from '@/components/services/emergency-locksmith/EmergencyServiceContent';
import { Clock, AlertTriangle, Map, Shield } from 'lucide-react';
import { emergencyCaseStudies } from '@/components/services/emergency-locksmith/EmergencyCaseStudies';

const EmergencyLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "24/7 Emergency Response",
      description: "Professional locksmith services available day and night, including holidays and weekends.",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "All Lockout Situations",
      description: "Expert solutions for home, business, vehicle, and storage lockouts with damage-free entry methods.",
      icon: <AlertTriangle className="h-8 w-8" />
    },
    {
      title: "Mobile Service Units",
      description: "Fast response to your location throughout North Bergen and surrounding areas in New Jersey.",
      icon: <Map className="h-8 w-8" />
    },
    {
      title: "Licensed & Insured",
      description: "Professional service by certified technicians you can trust in emergency situations.",
      icon: <Shield className="h-8 w-8" />
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
    },
    {
      question: "What should I do while waiting for an emergency locksmith?",
      answer: "Stay in a safe, well-lit area while waiting. If you're locked out of your vehicle, move away from traffic. For home lockouts, wait with a neighbor if possible. Keep your phone charged and on to communicate with our technician. We'll provide an estimated arrival time and keep you updated."
    },
    {
      question: "Can you make new keys on-site during an emergency call?",
      answer: "Yes, our mobile service vehicles are equipped with key-cutting machines and programming equipment. We can create most standard keys, transponder keys, and fobs on-site during the same visit. For specialized keys, we may need to order specific blanks."
    },
    {
      question: "Is emergency locksmith service available on holidays?",
      answer: "Yes, we provide 24/7 emergency locksmith services 365 days a year, including all holidays. We understand that lockouts don't follow a schedule, so our emergency response team is always available."
    },
    {
      question: "Can you help if my key broke off in the lock?",
      answer: "Yes, we can extract broken keys from locks using specialized tools that prevent further damage to the lock. After removing the broken piece, we can create a new key and verify the lock functions properly."
    },
    {
      question: "Do you service all types of vehicles for car lockouts?",
      answer: "Yes, our technicians are trained to handle lockouts for virtually all vehicle makes and models, including cars, trucks, SUVs, motorcycles, and even some specialty vehicles. We have the tools and expertise to safely gain access without damage."
    },
    {
      question: "What areas do you serve for emergency locksmith calls?",
      answer: "We provide emergency locksmith services throughout North Bergen, Jersey City, Hoboken, Secaucus, Union City, Weehawken, West New York, and surrounding areas in New Jersey. Our mobile service units are strategically positioned to provide quick response times."
    },
    {
      question: "Can you rekey my locks after a break-in or attempted break-in?",
      answer: "Yes, we highly recommend rekeying or replacing locks after a break-in or attempted break-in. Our emergency locksmiths can rekey or replace your locks on the spot to ensure your property is secure again as quickly as possible."
    }
  ];

  const keyPoints = [
    "24/7 emergency lockout assistance for homes, businesses, and vehicles",
    "Average response time of 15-30 minutes in North Bergen",
    "Non-destructive entry methods by certified technicians",
    "Complete lock repair and replacement services on the spot"
  ];

  return (
    <ServiceCategoryLayout
      title="Emergency Locksmith Services"
      description="Fast, professional assistance when you're locked out of your car, home, or business, available 24/7 including holidays and weekends."
      heroSubtitle="Professional 24/7 lockout solutions with rapid response times throughout North Bergen and surrounding areas."
      categoryName="Emergency"
      keyPoints={keyPoints}
      features={categoryFeatures}
      faqs={faqs}
      reviewCategory="car"
      caseStudies={emergencyCaseStudies}
      keywords="emergency locksmith, 24/7 locksmith, lockout service, car lockout, house lockout, business lockout, emergency key replacement, locked out of car, locked out of house"
    >
      <EmergencyServiceContent />
    </ServiceCategoryLayout>
  );
};

export default EmergencyLocksmithPage;
