
import React from 'react';
import ServiceCategoryLayout from '@/components/services/common/ServiceCategoryLayout';
import { ResidentialServiceContent } from '@/components/services/residential-locksmith/ResidentialServiceContent';
import { Home, Lock, Shield, Key } from 'lucide-react';
import { residentialCaseStudies } from '@/components/services/residential-locksmith/ResidentialCaseStudies';

const ResidentialLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "Complete Home Security",
      description: "Comprehensive residential locksmith services for all your home security needs.",
      icon: <Home className="h-8 w-8" />
    },
    {
      title: "Lock Installation & Replacement",
      description: "Expert installation of standard and high-security locks for your doors and windows.",
      icon: <Lock className="h-8 w-8" />
    },
    {
      title: "Lock Rekeying",
      description: "Cost-effective alternative to changing locks while ensuring previous keys no longer work.",
      icon: <Key className="h-8 w-8" />
    },
    {
      title: "Security Assessments",
      description: "Professional evaluation of your home's security vulnerabilities with recommended solutions.",
      icon: <Shield className="h-8 w-8" />
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
    },
    {
      question: "What should I do after moving into a new home?",
      answer: "We recommend rekeying all exterior door locks when moving into a new home. This ensures that previous owners, tenants, or unknown key holders can no longer access your property. It's a cost-effective way to secure your new home without replacing the hardware."
    },
    {
      question: "Can you help with broken or stuck keys?",
      answer: "Yes, we can extract broken keys from locks and repair or replace damaged locks. If your key is sticking or difficult to turn, this often indicates wear in the lock that should be addressed before the key breaks off inside."
    },
    {
      question: "Do you offer security consultations for homes?",
      answer: "Yes, we provide comprehensive home security assessments that evaluate all entry points, existing locks, and potential vulnerabilities. We then recommend appropriate security upgrades based on your needs, concerns, and budget."
    },
    {
      question: "Can you install locks on windows?",
      answer: "Yes, we install and upgrade various types of window locks and security devices. Window security is an important part of a complete home security system, as windows are common entry points for intruders."
    },
    {
      question: "What's the difference between standard locks and high-security locks?",
      answer: "High-security locks offer superior resistance to picking, bumping, and drilling through advanced internal mechanisms and hardened materials. They often use patented, restricted keyways that prevent unauthorized key duplication. While more expensive initially, they provide significantly better protection."
    },
    {
      question: "Can you create a master key system for my home?",
      answer: "Yes, we can design and implement residential master key systems that allow certain keys to open multiple locks while others are limited to specific doors. This is useful for giving limited access to service providers or for controlling access to specific areas of larger homes."
    },
    {
      question: "What should I do if I lose my house keys?",
      answer: "If you lose your house keys, we recommend rekeying your locks as soon as possible, especially if the keys were lost with identifying information. This prevents anyone who finds your keys from accessing your home."
    }
  ];

  const keyPoints = [
    "Complete residential lock installation, repair, and replacement",
    "Professional lock rekeying for new homes and after lost keys",
    "High-security and smart lock options for enhanced protection",
    "Comprehensive home security evaluations and solutions"
  ];

  return (
    <ServiceCategoryLayout
      title="Residential Locksmith Services"
      description="Professional lock installation, repair, and security solutions for your home, from standard deadbolts to advanced smart lock systems."
      heroSubtitle="Enhance your home security with professional residential locksmith services tailored to your specific needs."
      categoryName="Residential"
      keyPoints={keyPoints}
      features={categoryFeatures}
      faqs={faqs}
      reviewCategory="residential"
      caseStudies={residentialCaseStudies}
      keywords="residential locksmith, home locksmith, house locks, door lock installation, lock rekeying, lock repair, home security, deadbolt installation"
    >
      <ResidentialServiceContent />
    </ServiceCategoryLayout>
  );
};

export default ResidentialLocksmithPage;
