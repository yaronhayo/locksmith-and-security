
import React from 'react';
import { Building2, Lock, Key, Shield, Users, Clock, Settings, Check } from 'lucide-react';

export const CommercialServiceContent = () => {
  return (
    <>
      <p className="lead-paragraph text-lg text-gray-700 mb-6">
        Our commercial locksmith services provide comprehensive security solutions for businesses of all sizes. From small retail shops to large corporate facilities, we deliver specialized commercial lock and security services tailored to your specific business needs and compliance requirements.
      </p>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Complete Commercial Security Solutions</h2>
      <p className="mb-6">
        Business security demands specialized expertise and solutions. Our commercial locksmith services include:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Lock className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Commercial Lock Installation & Replacement</h3>
          </div>
          <p className="text-gray-700">Professional installation of high-grade commercial locks designed for frequent use and enhanced security needs in business environments.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Key className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Master Key Systems</h3>
          </div>
          <p className="text-gray-700">Create hierarchical access control with customized master key systems that allow different levels of access for various staff members.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Settings className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Access Control Systems</h3>
          </div>
          <p className="text-gray-700">Modern keyless entry solutions including card readers, keypads, and biometric systems for advanced access management and tracking.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Shield className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Emergency Exit Devices</h3>
          </div>
          <p className="text-gray-700">Installation and maintenance of code-compliant panic bars and exit devices that ensure safe emergency evacuation while maintaining security.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Industries We Serve</h2>
      <p className="mb-6">
        We provide specialized commercial locksmith services to a wide range of business types, each with unique security requirements:
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Retail Stores</h4>
          <p className="text-sm text-gray-600">Security solutions for storefronts, display cases, and inventory areas</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Office Buildings</h4>
          <p className="text-sm text-gray-600">Comprehensive access control for multi-tenant facilities</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Healthcare Facilities</h4>
          <p className="text-sm text-gray-600">HIPAA-compliant security for sensitive areas and records</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Educational Institutions</h4>
          <p className="text-sm text-gray-600">Lockdown-capable systems for schools and campuses</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Industrial Facilities</h4>
          <p className="text-sm text-gray-600">Heavy-duty security for manufacturing and warehouse spaces</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Restaurants & Hospitality</h4>
          <p className="text-sm text-gray-600">Balanced security and accessibility for staff and customers</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Advanced Commercial Security Options</h2>
      <p className="mb-4">
        Today's businesses often require more than traditional locks. Our advanced commercial security options include:
      </p>
      
      <ul className="space-y-4 mb-8">
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">High-Security Locks</span>
            <p className="text-gray-600 text-sm mt-1">Restricted keyway systems that prevent unauthorized key duplication, protecting against security breaches.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Electronic Access Control</span>
            <p className="text-gray-600 text-sm mt-1">Keyless systems that allow for time-based access restrictions and detailed access logs for security auditing.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Interchangeable Core Systems</span>
            <p className="text-gray-600 text-sm mt-1">Quick-change lock cores that allow immediate security updates without replacing entire lock hardware.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">ADA-Compliant Hardware</span>
            <p className="text-gray-600 text-sm mt-1">Accessibility-focused door hardware that meets regulatory requirements while maintaining security.</p>
          </div>
        </li>
      </ul>
      
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-10">
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
          <Building2 className="mr-2 h-5 w-5 text-secondary" />
          Benefits of Professional Commercial Locksmith Services
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Compliance with building codes and insurance requirements</li>
            <li>Reduced liability through proper emergency exit maintenance</li>
            <li>Expert guidance on security system integration</li>
            <li>Custom security solutions that fit your business workflow</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fast response for business lockouts and security emergencies</li>
            <li>Detailed security assessments to identify vulnerabilities</li>
            <li>Professional installation that ensures proper function</li>
            <li>Ongoing maintenance plans to prevent security failures</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why Choose Our Commercial Locksmith Services?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Users className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Industry Experience</h3>
          <p className="text-gray-600">Our technicians understand the unique security challenges of different business types.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Clock className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Minimal Disruption</h3>
          <p className="text-gray-600">We work efficiently to minimize impact on your business operations.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Shield className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Compliance Expertise</h3>
          <p className="text-gray-600">Stay up-to-date with security regulations and insurance requirements.</p>
        </div>
      </div>
      
      <p className="bg-gray-50 p-4 rounded-lg italic text-gray-700 my-8 border-l-4 border-secondary pl-6">
        "Your business security is our priority. From basic lock services to advanced access control systems, our commercial locksmith services are designed to protect your assets, employees, and customers."
      </p>
    </>
  );
};
