
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import ServicesProof from '@/components/sections/services/ServicesProof';
import CategoryHero from '@/components/sections/services/CategoryHero';
import CategoryFeatures from '@/components/sections/services/CategoryFeatures';
import CategorySuccessStories from '@/components/sections/services/CategorySuccessStories';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import { Button } from '@/components/ui/button';
import { Building, Lock, Key, Shield, KeyRound, CheckCircle, ChevronRight, Phone, Users, FileKey } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getReviewsByCategory } from '@/data/reviewsData';

const CommercialLocksmithPage = () => {
  const commercialReviews = getReviewsByCategory('commercial');
  const commercialStories = [{
    title: "Office Complex Master Key System",
    description: "Multi-level access solution for large office building with multiple tenants.",
    challenge: "A property management company overseeing a 10-story office building needed an organized access system for different tenants, maintenance staff, and emergency personnel. They had over 50 doors and were dealing with disorganized key management.",
    solution: "We designed and implemented a comprehensive master key system with multiple levels of access. Building management received grand master keys, while each tenant received master keys for only their suite. Maintenance received limited access master keys.",
    result: "The system dramatically simplified key management while maintaining strict security protocols. Each tenant now has appropriate access, and building management has comprehensive control over the entire property's security.",
    customerName: "Westside Properties",
    customerLocation: "Jersey City, NJ",
    date: "3 months ago"
  }, {
    title: "Retail Store Security Upgrade",
    description: "Comprehensive security solution for a chain of retail stores after a break-in attempt.",
    challenge: "A local retail chain experienced an attempted break-in at one location and needed an immediate security evaluation and upgrade for all six of their stores. They were particularly concerned about their back entrances and storage areas.",
    solution: "Our team conducted thorough security assessments at each location and installed high-security commercial-grade deadbolts, reinforced door frames, and panic bars where needed. We also implemented an access control system for employee entrance tracking.",
    result: "The upgraded security measures prevented another attempted break-in just weeks later. The access control system has also improved employee accountability and simplified opening/closing procedures.",
    customerName: "Metro Retail Group",
    customerLocation: "North Bergen, NJ",
    date: "Last month"
  }];

  return (
    <PageLayout 
      title="Commercial Locksmith Services | Business Security Solutions" 
      description="Professional commercial locksmith services for businesses of all sizes. Advanced security solutions, access control systems, and expert installations." 
      heroTitle="Commercial Locksmith Services" 
      heroDescription="Comprehensive business security solutions from industry experts. Protect your assets, employees, and operations."
    >
      <CategoryHero 
        title="Commercial Locksmith & Security Solutions" 
        description="Secure your business with our comprehensive commercial locksmith services. From basic lock systems to advanced access control, we provide reliable security solutions for businesses of all sizes." 
        category="commercial" 
        features={[{
          title: "Business Security Experts",
          description: "Industry specialists"
        }, {
          title: "Commercial-Grade Hardware",
          description: "Built for high traffic"
        }, {
          title: "Custom Solutions",
          description: "Tailored to your business"
        }, {
          title: "Regulatory Compliance",
          description: "ADA and fire code compliant"
        }]} 
      />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 p-3 rounded-full">
                <Building className="h-8 w-8 text-gray-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Business Security Systems</h2>
                <p className="text-gray-600">Comprehensive locksmith services for commercial properties</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">High-Security Locks</h3>
                </div>
                <p className="text-gray-600 text-sm">Commercial-grade locks designed to withstand tampering and forced entry attempts.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <FileKey className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Master Key Systems</h3>
                </div>
                <p className="text-gray-600 text-sm">Hierarchical access solutions allowing different levels of entry for various staff members.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Access Control</h3>
                </div>
                <p className="text-gray-600 text-sm">Electronic systems that manage and monitor entry to secured areas through credentials.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">Emergency Exit Devices</h3>
                </div>
                <p className="text-gray-600 text-sm">Panic bars and emergency exit hardware that meet building safety code requirements.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild className="bg-gray-800 hover:bg-gray-900 text-white">
                <a href="tel:2017482070" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (201) 748-2070
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CategoryFeatures 
        category="Commercial" 
        description="Our commercial locksmith services are designed to meet the unique security challenges of business environments. 
          We provide scalable solutions that protect your assets while facilitating appropriate access." 
        services={[{
          title: "Commercial Lock Installation",
          description: "Professional installation of high-grade commercial locks suitable for business environments with high traffic and security needs.",
          icon: <Lock className="h-6 w-6" />,
          link: "/services/commercial-locksmith/lock-installation"
        }, {
          title: "Commercial Lock Replacement",
          description: "Upgrade or replace existing commercial locks with modern security solutions that offer enhanced protection.",
          icon: <KeyRound className="h-6 w-6" />,
          link: "/services/commercial-locksmith/lock-replacement"
        }, {
          title: "Master Key Systems",
          description: "Design and implementation of hierarchical key systems that provide controlled access across your organization.",
          icon: <FileKey className="h-6 w-6" />,
          link: "/services/commercial-locksmith/master-key"
        }, {
          title: "Access Control Systems",
          description: "Installation of electronic access control solutions that allow keyless entry and detailed access logging capabilities.",
          icon: <Users className="h-6 w-6" />,
          link: "/services/commercial-locksmith/access-control"
        }, {
          title: "Emergency Exit Devices",
          description: "Supply and installation of code-compliant panic bars and emergency exit hardware for safe building evacuation.",
          icon: <Shield className="h-6 w-6" />,
          link: "/services/commercial-locksmith/emergency-exit-device"
        }, {
          title: "Commercial Lock Rekey",
          description: "Cost-effective security updates by changing the internal mechanisms of existing locks rather than full replacement.",
          icon: <Key className="h-6 w-6" />,
          link: "/services/commercial-locksmith/lock-rekey"
        }]} 
      />
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Commercial Locksmith Service?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique security needs of businesses and deliver reliable, professional solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-gray-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Security Specialists</h3>
              <p className="text-gray-600">
                Our technicians specialize in commercial security and understand the unique challenges businesses face regarding access control and asset protection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Code Compliance</h3>
              <p className="text-gray-600">
                We ensure all installations meet ADA requirements, fire codes, and local building regulations while maintaining optimal security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Whether you have a small retail store or a multi-location business, our solutions can be tailored to your specific needs and can grow with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CategorySuccessStories category="Commercial Locksmith" stories={commercialStories} />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 6)} category="commercial" />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Commercial Locksmith FAQ</h2>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">How do master key systems work for businesses?</h3>
                <p className="text-gray-600">Master key systems create a hierarchy of access, where certain keys (master keys) can open multiple locks, while others are limited to specific doors. This allows business owners and managers to have comprehensive access while restricting employee access to only necessary areas.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">What's the advantage of access control over traditional locks?</h3>
                <p className="text-gray-600">Access control systems offer several advantages: they eliminate the need for physical keys that can be lost or copied, provide detailed entry logs, allow for immediate permission changes without rekeying locks, and can integrate with other security systems for comprehensive protection.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Are your commercial locks ADA compliant?</h3>
                <p className="text-gray-600">Yes, we provide and install ADA-compliant hardware that meets accessibility requirements while maintaining security standards. This includes appropriate lever handles, opening force requirements, and proper installation heights.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">How often should a business rekey or change their locks?</h3>
                <p className="text-gray-600">Businesses should rekey or change locks after employee turnover involving key holders, if keys are lost or stolen, following security incidents, or during renovations. Many businesses also implement regular security updates on an annual or bi-annual schedule as best practice.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Can you work around our business hours?</h3>
                <p className="text-gray-600">Absolutely. We understand that security work needs to minimize disruption to your operations. We can schedule installations and service during off-hours, weekends, or in stages to ensure your business remains functional throughout the process.</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link to="/book-online" className="flex items-center gap-2">
                  Book Commercial Service <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ReviewsSection location="North Bergen" category="commercial" reviewData={commercialReviews} />
    </PageLayout>
  );
};

export default CommercialLocksmithPage;
