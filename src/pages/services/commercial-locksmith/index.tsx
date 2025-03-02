
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { CommercialServiceContent } from '@/components/services/commercial-locksmith/CommercialServiceContent';
import { Building2, Lock, Key, Shield } from 'lucide-react';
import ServicePageContent from '@/components/sections/services/service-page/ServicePageContent';
import ReviewsSection from '@/components/sections/ReviewsSection';

const CommercialLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "Business Security Solutions",
      description: "Comprehensive security systems designed specifically for commercial properties.",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Master Key Systems",
      description: "Customized access control with hierarchical key systems for different authorization levels.",
      icon: <Key className="h-6 w-6" />
    },
    {
      title: "Commercial Lock Services",
      description: "Installation, repair, and maintenance of high-grade commercial locks and hardware.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Code Compliance",
      description: "Expert knowledge of fire codes and ADA requirements for commercial door hardware.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "What is a master key system and how can it benefit my business?",
      answer: "A master key system creates a hierarchy of access where different keys can open different combinations of locks. This allows you to control which employees have access to specific areas while management can hold master keys that open all locks. The benefit is streamlined access management with fewer keys while maintaining security zones."
    },
    {
      question: "How do I ensure my business locks comply with fire safety regulations?",
      answer: "Commercial properties must have appropriate emergency exit devices that allow for quick egress in emergency situations. Our locksmiths are familiar with local fire codes and can install code-compliant panic bars, emergency exit devices, and related hardware that balances security needs with safety requirements."
    },
    {
      question: "Can you service electronic access control systems?",
      answer: "Yes, we install, program, and service a variety of electronic access control systems including keypad locks, card readers, and biometric systems. We can integrate these systems with your existing security infrastructure and provide training on system management and user administration."
    },
    {
      question: "What should I do if an employee leaves with company keys?",
      answer: "When employees depart with keys, especially those with access to sensitive areas, you should consider rekeying the affected locks. For businesses with frequent staff changes, consider electronic access control systems that allow you to simply deactivate credentials rather than changing physical locks."
    },
    {
      question: "How can I improve the physical security of my retail store?",
      answer: "Retail security can be enhanced with high-security deadbolts on all exterior doors, display case locks, reinforced strike plates, security film on windows, and proper lighting. We can provide a comprehensive security assessment to identify vulnerabilities specific to your store layout and recommend appropriate solutions."
    }
  ];

  const pageTitle = "Commercial Locksmith Services | Business Security Solutions";
  const pageDescription = "Professional commercial locksmith services including master key systems, access control, and high-security locks for businesses throughout North Bergen and surrounding areas.";

  return (
    <PageLayout 
      title={pageTitle}
      description={pageDescription}
      keywords="commercial locksmith, business locksmith, commercial locks, master key systems, access control, office security, store security, business security"
      hideBreadcrumbs={false}
    >
      <ServicePageContent
        title="Commercial Locksmith Services"
        description="Specialized security solutions for businesses of all sizes, from small retail to large corporate facilities."
        serviceName="Commercial Locksmith"
        serviceCategory="Commercial"
        mainContent={<CommercialServiceContent />}
        faqs={faqs}
        categoryDescription={<CommercialServiceContent />}
        categoryFeatures={categoryFeatures}
      />
      
      <ReviewsSection category="commercial" />
    </PageLayout>
  );
};

export default CommercialLocksmithPage;
