
import React from 'react';
import ServiceCategoryLayout from '@/components/services/common/ServiceCategoryLayout';
import { AutoServiceContent } from '@/components/services/auto-locksmith/AutoServiceContent';
import { Car, Key, Wrench, Shield } from 'lucide-react';
import { autoCaseStudies } from '@/components/services/auto-locksmith/AutoCaseStudies';

const AutoLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "Complete Auto Locksmith Services",
      description: "Comprehensive solutions for all vehicle makes and models, from classic cars to the latest models.",
      icon: <Car className="h-8 w-8" />
    },
    {
      title: "Car Key Replacement",
      description: "Expert creation and programming of car keys and fobs, including transponder and smart keys.",
      icon: <Key className="h-8 w-8" />
    },
    {
      title: "Ignition Repair",
      description: "Diagnosis and repair of ignition problems, including extraction of broken keys.",
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: "Mobile Service",
      description: "Our fully-equipped mobile units come to your location for convenient service.",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to replace a car key?",
      answer: "Car key replacement costs vary based on the vehicle make, model, year, and key type. Basic mechanical keys are less expensive than transponder keys or advanced key fobs. We provide transparent pricing after assessing your specific key requirements and can usually offer significant savings compared to dealership prices."
    },
    {
      question: "Can you make a car key without the original?",
      answer: "Yes, we can create new keys even when you have no original key. This process may involve accessing your vehicle's key code from the VIN number, decoding the lock cylinders, or programming a new transponder chip. You'll need to provide proof of ownership such as vehicle registration and photo identification."
    },
    {
      question: "How long does it take to replace a car key?",
      answer: "Most standard car keys can be cut and programmed in 15-30 minutes. More complex keys or remotes for newer vehicles might take 30-60 minutes. Some high-security or exotic vehicle keys may require special ordering of components, which could extend the timeline."
    },
    {
      question: "Can you program any type of car key fob?",
      answer: "We have advanced programming equipment to handle most modern vehicle key fobs, including proximity keys and push-to-start systems. While we can program the majority of key fobs on the market, certain very recent or exotic models might have manufacturer restrictions that require dealer programming."
    },
    {
      question: "What should I do if my key is stuck in the ignition?",
      answer: "Don't force the key as this can cause it to break off in the ignition. Contact us for emergency assistance, and we'll extract the key without damaging the ignition cylinder. This situation often indicates an ignition cylinder problem that we can diagnose and repair on the spot in most cases."
    },
    {
      question: "Can you repair a damaged car key or fob?",
      answer: "Yes, in many cases we can repair damaged car keys and fobs. This includes fixing broken key shells, replacing worn buttons, resoldering internal components, and replacing batteries. If repair isn't possible, we can provide a complete replacement."
    },
    {
      question: "Do I need to tow my car to you if I've lost all keys?",
      answer: "No, our mobile service brings everything needed to your vehicle's location. We can create and program new keys on-site for most vehicles, even if you've lost all keys. This saves you the expense and hassle of towing."
    },
    {
      question: "Why is my transponder key not starting my car?",
      answer: "Several issues could cause a transponder key failure: depleted battery in the key, damaged transponder chip, issues with the vehicle's immobilizer system, or a key that was improperly programmed. We can diagnose the specific cause and provide appropriate solutions."
    },
    {
      question: "Can you help with motorcycle or RV keys?",
      answer: "Yes, we service keys and locks for motorcycles, RVs, boats, ATVs, and other specialty vehicles. Our technicians have the tools and knowledge to handle various transportation types beyond standard passenger vehicles."
    },
    {
      question: "What information do I need to provide for car key replacement?",
      answer: "You'll need to provide your vehicle's make, model, and year, plus proof of ownership such as vehicle registration, insurance card, or title. Photo identification matching the registration information is also required for security purposes."
    },
    {
      question: "Is it worth repairing an ignition cylinder or should I replace it?",
      answer: "This depends on the extent of damage and vehicle type. Minor issues like stuck pins or worn tumblers can often be repaired cost-effectively. Significant damage, especially with signs of tampering or in older vehicles, may warrant complete replacement. We provide honest assessments of both options."
    },
    {
      question: "Why does my key turn but the car won't start?",
      answer: "This could indicate several issues beyond the key itself: an immobilizer system problem, ignition switch electrical failure, starter motor problems, or other electrical/mechanical issues. Our diagnostics can identify whether it's a locksmith issue or requires referral to a mechanic."
    }
  ];

  const keyPoints = [
    "Car key replacement for all makes and models, including transponder keys",
    "Mobile key cutting and programming services at your location",
    "Vehicle lockout assistance with non-destructive entry methods",
    "Ignition repair and replacement services"
  ];

  return (
    <ServiceCategoryLayout
      title="Auto Locksmith Services"
      description="Specialized automotive locksmith solutions for all makes and models, from classic cars to the latest vehicles with advanced electronic systems."
      heroSubtitle="Professional car key replacement, programming, and lockout services delivered by certified automotive locksmith specialists."
      categoryName="Auto"
      keyPoints={keyPoints}
      features={categoryFeatures}
      faqs={faqs}
      reviewCategory="car"
      caseStudies={autoCaseStudies}
      keywords="auto locksmith, car locksmith, car key replacement, key fob programming, car lockout, transponder key, ignition repair, car key duplication"
    >
      <AutoServiceContent />
    </ServiceCategoryLayout>
  );
};

export default AutoLocksmithPage;
