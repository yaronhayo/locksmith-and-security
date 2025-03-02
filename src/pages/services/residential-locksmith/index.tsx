
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { ResidentialServiceContent } from '@/components/services/residential-locksmith/ResidentialServiceContent';
import { Home, Lock, Shield, Key } from 'lucide-react';
import ServicePageContent from '@/components/sections/services/service-page/ServicePageContent';
import ReviewsSection from '@/components/sections/ReviewsSection';

const ResidentialLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "Complete Home Security",
      description: "Comprehensive residential locksmith services for all your home security needs.",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Lock Installation & Replacement",
      description: "Expert installation of standard and high-security locks for your doors and windows.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Lock Rekeying",
      description: "Cost-effective alternative to changing locks while ensuring previous keys no longer work.",
      icon: <Key className="h-6 w-6" />
    },
    {
      title: "Security Assessments",
      description: "Professional evaluation of your home's security vulnerabilities with recommended solutions.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How do I know if I should rekey or replace my locks?",
      answer: "Rekeying is ideal when your locks are in good condition but you want to change who has access (like after buying a new home or losing keys). Lock replacement is better when locks are worn, damaged, outdated, or you want to upgrade to a higher security level or different style."
    },
    {
      question: "What types of residential locks do you recommend?",
      answer: "For exterior doors, we typically recommend deadbolts with a minimum 1-inch throw bolt and reinforced strike plates. For enhanced security, consider high-security locks with restricted keyways, or smart locks for convenience plus security. The best choice depends on your specific security needs and budget."
    },
    {
      question: "Can you match new locks to my existing keys?",
      answer: "Yes, in many cases we can key new locks to match your existing keys, allowing you to use the same key for multiple locks. This service, called keying alike, is particularly convenient for homeowners who want to minimize the number of keys they carry."
    },
    {
      question: "How long does a typical residential lock installation take?",
      answer: "A standard lock replacement typically takes 30-60 minutes per door. More complex installations, like smart locks or high-security systems, may take longer. When multiple doors need service, we work efficiently to minimize disruption to your home."
    },
    {
      question: "Are smart locks as secure as traditional locks?",
      answer: "Quality smart locks can be as secure as traditional locks while offering additional features like remote access and activity logs. We recommend smart locks that maintain physical key backup options and feature strong encryption. The best systems combine electronic convenience with mechanical reliability."
    }
  ];

  const pageTitle = "Residential Locksmith Services | Home Security Solutions";
  const pageDescription = "Professional residential locksmith services including lock installation, rekeying, repair, and security upgrades for your home. Serving North Bergen and surrounding areas.";

  return (
    <PageLayout 
      title={pageTitle}
      description={pageDescription}
      keywords="residential locksmith, home locksmith, house locks, door lock installation, lock rekeying, lock repair, home security, deadbolt installation"
      hideBreadcrumbs={false}
    >
      <ServicePageContent
        title="Residential Locksmith Services"
        description="Professional lock installation, repair, and security solutions for your home."
        serviceName="Residential Locksmith"
        serviceCategory="Residential"
        mainContent={<ResidentialServiceContent />}
        faqs={faqs}
        categoryDescription={<ResidentialServiceContent />}
        categoryFeatures={categoryFeatures}
      />
      
      <ReviewsSection category="residential" />
    </PageLayout>
  );
};

export default ResidentialLocksmithPage;
