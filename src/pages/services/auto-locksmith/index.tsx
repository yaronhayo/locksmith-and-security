
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { AutoServiceContent } from '@/components/services/auto-locksmith/AutoServiceContent';
import { Car, Key, Wrench, Shield } from 'lucide-react';
import ServicePageContent from '@/components/sections/services/service-page/ServicePageContent';
import ReviewsSection from '@/components/sections/ReviewsSection';

const AutoLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "Complete Auto Locksmith Services",
      description: "Comprehensive solutions for all vehicle makes and models, from classic cars to the latest models.",
      icon: <Car className="h-6 w-6" />
    },
    {
      title: "Car Key Replacement",
      description: "Expert creation and programming of car keys and fobs, including transponder and smart keys.",
      icon: <Key className="h-6 w-6" />
    },
    {
      title: "Ignition Repair",
      description: "Diagnosis and repair of ignition problems, including extraction of broken keys.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Mobile Service",
      description: "Our fully-equipped mobile units come to your location for convenient service.",
      icon: <Shield className="h-6 w-6" />
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
    }
  ];

  const pageTitle = "Auto Locksmith Services | Car Key Replacement & Programming";
  const pageDescription = "Professional automotive locksmith services including car key replacement, fob programming, lockout assistance, and ignition repair for all vehicle makes and models in North Bergen.";

  return (
    <PageLayout 
      title={pageTitle}
      description={pageDescription}
      keywords="auto locksmith, car locksmith, car key replacement, key fob programming, car lockout, transponder key, ignition repair, car key duplication"
      hideBreadcrumbs={false}
    >
      <ServicePageContent
        title="Auto Locksmith Services"
        description="Specialized automotive locksmith solutions for all makes and models, from classic cars to the latest vehicles."
        serviceName="Auto Locksmith"
        serviceCategory="Automotive"
        mainContent={<AutoServiceContent />}
        faqs={faqs}
        categoryDescription={<AutoServiceContent />}
        categoryFeatures={categoryFeatures}
      />
      
      <ReviewsSection category="car" />
    </PageLayout>
  );
};

export default AutoLocksmithPage;
