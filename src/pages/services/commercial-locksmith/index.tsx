
import React from 'react';
import ServiceCategoryLayout from '@/components/services/common/ServiceCategoryLayout';
import { CommercialServiceContent } from '@/components/services/commercial-locksmith/CommercialServiceContent';
import { Building2, Lock, Key, Shield } from 'lucide-react';
import { commercialCaseStudies } from '@/components/services/commercial-locksmith/CommercialCaseStudies';

const CommercialLocksmithPage = () => {
  const categoryFeatures = [
    {
      title: "Business Security Solutions",
      description: "Comprehensive security systems designed specifically for commercial properties.",
      icon: <Building2 className="h-8 w-8" />
    },
    {
      title: "Master Key Systems",
      description: "Customized access control with hierarchical key systems for different authorization levels.",
      icon: <Key className="h-8 w-8" />
    },
    {
      title: "Commercial Lock Services",
      description: "Installation, repair, and maintenance of high-grade commercial locks and hardware.",
      icon: <Lock className="h-8 w-8" />
    },
    {
      title: "Code Compliance",
      description: "Expert knowledge of fire codes and ADA requirements for commercial door hardware.",
      icon: <Shield className="h-8 w-8" />
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
    },
    {
      question: "What are panic bars and do I need them for my business?",
      answer: "Panic bars (also called crash bars or exit devices) allow quick egress in emergency situations by pushing against a horizontal bar to unlock the door. They are typically required by fire code for commercial buildings with high occupancy. We can help determine if your business needs them and install code-compliant devices."
    },
    {
      question: "Can you install a restricted key system for my business?",
      answer: "Yes, we can implement restricted key systems that prevent unauthorized duplication of keys. These systems use patented keyways and require proper authorization for key duplication, adding an important layer of security for businesses concerned about key control."
    },
    {
      question: "How do electronic access control systems compare to traditional locks?",
      answer: "Electronic access control systems offer advantages like customizable access permissions, activity logs, remote management, and the ability to quickly deactivate lost credentials. Traditional locks provide reliability without dependence on power or networks. Many businesses benefit from a hybrid approach using both systems strategically."
    },
    {
      question: "What options do I have for securing file cabinets and internal storage?",
      answer: "We offer a range of solutions for internal security, including high-security file cabinet locks, rekeying existing cabinet locks, custom storage security solutions, and options for creating keyed-alike systems so authorized personnel can use a single key for multiple cabinets."
    },
    {
      question: "How often should commercial locks be maintained?",
      answer: "High-use commercial locks should be professionally inspected and maintained annually. Regular maintenance includes cleaning, lubricating, and checking for wear on key components. Properly maintained locks last longer and provide more consistent security."
    },
    {
      question: "Can you match new locks to existing keys in a commercial setting?",
      answer: "Yes, in many cases we can key new locks to match existing systems, allowing for gradual security upgrades without requiring a complete system replacement. This is particularly useful for businesses expanding into new spaces or replacing only certain locks."
    },
    {
      question: "What are the best lock options for external commercial doors?",
      answer: "Commercial exterior doors should use high-security mortise locks or heavy-duty commercial-grade cylindrical locks with deadbolts. For enhanced security, consider adding features like hardened steel plates, reinforced strike plates, and anti-drill protection."
    }
  ];

  const keyPoints = [
    "Custom master key systems and access control solutions",
    "High-security lock installation for all types of businesses",
    "Fire code compliant exit devices and ADA hardware",
    "Commercial safe services including unlocking and repairs"
  ];

  return (
    <ServiceCategoryLayout
      title="Commercial Locksmith Services"
      description="Specialized security solutions for businesses of all sizes, from small retail shops to large office complexes and industrial facilities."
      heroSubtitle="Protect your business with professional commercial locksmith services designed for your specific industry and security requirements."
      categoryName="Commercial"
      keyPoints={keyPoints}
      features={categoryFeatures}
      faqs={faqs}
      reviewCategory="commercial"
      caseStudies={commercialCaseStudies}
      keywords="commercial locksmith, business locksmith, commercial locks, master key systems, access control, office security, store security, business security"
    >
      <CommercialServiceContent />
    </ServiceCategoryLayout>
  );
};

export default CommercialLocksmithPage;
