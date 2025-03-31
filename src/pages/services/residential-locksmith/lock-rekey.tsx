
import React from "react";
import ServicePageContent from "@/components/sections/services/service-page/ServicePageContent";
import { Key, Home, ShieldCheck, HandCoins, Clock, User, CircleDollarSign, Share2 } from "lucide-react";
import SEOManager from "@/components/meta/SEOManager";
import { useLocation } from "react-router-dom";

const LockRekeyService = () => {
  const location = useLocation();
  const canonicalUrl = location.pathname;

  // FAQs about lock rekeying
  const faqs = [
    {
      question: "What is lock rekeying?",
      answer: "Lock rekeying is the process of changing the internal pins in your lock cylinder so that your existing keys will no longer work, and a new key will be needed. This is more affordable than replacing the entire lock, and is ideal when you want to maintain the same lock hardware but need to change who has access."
    },
    {
      question: "When should I rekey my locks?",
      answer: "You should consider rekeying your locks when you move into a new home, lose a key, have a roommate move out, after a break-in attempt, when keys are stolen, or when you want to have just one key for multiple locks. It's a security measure that helps you control access to your property."
    },
    {
      question: "How long does the lock rekeying process take?",
      answer: "The lock rekeying process typically takes about 10-15 minutes per lock. If you have multiple locks that need to be rekeyed, our professional locksmith can usually complete the job efficiently. The entire service call, including assessment and rekeying, usually takes about 30-60 minutes depending on the number of locks."
    },
    {
      question: "Can all locks be rekeyed?",
      answer: "Most standard locks can be rekeyed, including deadbolts, doorknobs, lever handles, and many high-security locks. However, some very old or damaged locks may not be suitable for rekeying. Our locksmith will assess your locks and recommend the best option—whether it's rekeying or replacement."
    },
    {
      question: "Is it cheaper to rekey or replace locks?",
      answer: "Rekeying is generally more cost-effective than replacing locks, especially if your existing hardware is in good condition. When you rekey, you're only changing the internal components that match the key pattern, while keeping the existing lock hardware. Lock replacement involves installing entirely new hardware, which typically costs more."
    }
  ];

  // Related locksmith services
  const relatedServices = [
    {
      title: "Lock Replacement",
      path: "/services/residential-locksmith/lock-replacement",
      description: "Complete replacement of old or damaged locks with new modern security hardware."
    },
    {
      title: "Lock Repair",
      path: "/services/residential-locksmith/lock-repair",
      description: "Expert repair of malfunctioning locks to restore proper operation and security."
    },
    {
      title: "House Lockout Service",
      path: "/services/emergency-locksmith/house-lockout",
      description: "Emergency lockout assistance when you're locked out of your home."
    },
    {
      title: "Smart Lock Installation",
      path: "/services/residential-locksmith/smart-locks",
      description: "Professional installation of modern smart locks for keyless convenience."
    }
  ];

  // Service offerings for schema
  const serviceOfferings = [
    "Residential Lock Rekeying",
    "Emergency Lock Rekeying",
    "Master Key System Creation",
    "Lock Rekeying After Move-In",
    "Post-Break-In Lock Rekeying"
  ];

  return (
    <SEOManager
      pageType="service"
      title="Professional Lock Rekeying Services | Fast & Affordable | 247 Locksmith"
      description="Expert lock rekeying services to improve your home security. Same-day service, competitive pricing, and professional locksmiths. Call now for a quote!"
      canonicalUrl={canonicalUrl}
      keywords="lock rekeying, rekey locks, change locks, locksmith, home security, new keys, rekey service, affordable lock rekeying"
      serviceName="Lock Rekeying"
      serviceCategory="Residential Locksmith"
      serviceDescription="Professional lock rekeying service to change your lock's internal pins and create new keys, improving security while keeping your existing hardware."
      serviceOfferings={serviceOfferings}
      servicePrice="49.00"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Residential Locksmith", item: "/services/residential-locksmith" },
        { name: "Lock Rekeying", item: canonicalUrl }
      ]}
    >
      <ServicePageContent
        title="Professional Lock Rekeying Services"
        description="Enhance your home security by rekeying your locks. Our professional locksmith services offer fast, reliable lock rekeying at competitive prices."
        serviceName="Lock Rekeying"
        serviceCategory="Residential Locksmith"
        canonicalUrl={canonicalUrl}
        faqs={faqs}
        relatedServices={relatedServices}
        serviceOfferings={serviceOfferings}
        mainContent={
          <div className="content-section">
            <h2 className="text-2xl font-bold mb-4">Professional Lock Rekeying Service</h2>
            <p className="mb-4">
              Lock rekeying is an affordable and effective way to enhance your home security without replacing the entire lock. Our professional locksmiths can quickly rekey your existing locks, making old keys obsolete and providing you with new ones that work with your existing hardware.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">When Should You Rekey Your Locks?</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>When moving into a new home or apartment</li>
              <li>After losing your keys</li>
              <li>When a roommate or tenant moves out</li>
              <li>Following a break-in or attempted break-in</li>
              <li>If you want to have one key for multiple locks</li>
              <li>When keys have been stolen or compromised</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Benefits of Our Lock Rekeying Service</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Improved Security</h4>
                  <p className="text-sm">Prevent access from previous key holders and unauthorized users</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HandCoins className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Cost-Effective</h4>
                  <p className="text-sm">More affordable than replacing entire locks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Quick Service</h4>
                  <p className="text-sm">Typically takes just 10-15 minutes per lock</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Key className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Key Consolidation</h4>
                  <p className="text-sm">Can rekey multiple locks to work with a single key</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Our Lock Rekeying Process</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li>
                <span className="font-semibold">Assessment:</span> Our locksmith examines your locks to ensure they're suitable for rekeying
              </li>
              <li>
                <span className="font-semibold">Lock Disassembly:</span> We carefully remove the lock cylinder
              </li>
              <li>
                <span className="font-semibold">Pin Replacement:</span> Replace the internal pins with new ones that match your new key
              </li>
              <li>
                <span className="font-semibold">Reassembly:</span> Put the lock back together and test it thoroughly
              </li>
              <li>
                <span className="font-semibold">Key Provision:</span> Provide you with new keys that work with your rekeyed locks
              </li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Why Choose Us for Lock Rekeying</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="flex items-start space-x-3">
                <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Licensed Professionals</h4>
                  <p className="text-sm">Our locksmiths are fully licensed, bonded, and insured</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Fast Response</h4>
                  <p className="text-sm">Same-day service available for urgent needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CircleDollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Transparent Pricing</h4>
                  <p className="text-sm">Upfront quotes with no hidden fees</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">All Property Types</h4>
                  <p className="text-sm">Service for houses, apartments, condos, and more</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Ready to Rekey Your Locks?</h3>
              <p className="mb-4">
                Contact our professional locksmith team today for fast, reliable lock rekeying service. We serve the entire North Bergen area and surrounding communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/book-online" className="btn btn-primary px-6 py-2 rounded-md text-center">Book Online</a>
                <a href="tel:(201) 748-2070" className="btn btn-secondary px-6 py-2 rounded-md text-center">(201) 748-2070</a>
              </div>
            </div>
          </div>
        }
      />
    </SEOManager>
  );
};

export default LockRekeyService;
