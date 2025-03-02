
import React from 'react';
import { Home, Lock, Shield, Key, Settings, Check } from 'lucide-react';

export const ResidentialServiceContent = () => {
  return (
    <>
      <p className="lead-paragraph text-lg text-gray-700 mb-6">
        Our comprehensive residential locksmith services are designed to keep your home secure and provide peace of mind for you and your family. From standard lock installations to advanced security solutions, our expert technicians deliver professional service with attention to detail.
      </p>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Complete Residential Locksmith Solutions</h2>
      <p className="mb-6">
        Your home deserves the best protection possible. Our residential locksmith services cover all aspects of home security, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Lock className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Lock Installation & Replacement</h3>
          </div>
          <p className="text-gray-700">Professional installation of new locks when moving into a new home or upgrading existing security. We work with all major brands and styles.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Key className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Lock Rekeying</h3>
          </div>
          <p className="text-gray-700">Cost-effective alternative to complete lock replacement. We reconfigure your existing locks to work with new keys, rendering old keys useless.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Settings className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Lock Repair</h3>
          </div>
          <p className="text-gray-700">Fix malfunctioning, sticking, or jammed locks without the need for complete replacement, saving you time and money.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Shield className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Home Security Assessments</h3>
          </div>
          <p className="text-gray-700">Comprehensive evaluation of your home's security vulnerabilities with personalized recommendations for improvements.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Types of Residential Locks We Service</h2>
      <p className="mb-6">
        We work with a wide variety of residential lock types and security systems:
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Deadbolts</h4>
          <p className="text-sm text-gray-600">Single-cylinder, double-cylinder, and keyless</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Knob Locks</h4>
          <p className="text-sm text-gray-600">Standard door knobs with built-in locking mechanisms</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Lever Handle Locks</h4>
          <p className="text-sm text-gray-600">ADA-compliant handles with integrated locks</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Smart Locks</h4>
          <p className="text-sm text-gray-600">Keyless and remotely controlled electronic locks</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Mortise Locks</h4>
          <p className="text-sm text-gray-600">Heavy-duty locks installed in door edge cutouts</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-medium mb-1">Keypad Locks</h4>
          <p className="text-sm text-gray-600">Combination-based digital locks without keys</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Home Security Best Practices</h2>
      <p className="mb-4">
        Enhance your home's security with these expert-recommended practices:
      </p>
      
      <ul className="space-y-4 mb-8">
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Install quality deadbolts on all exterior doors</span>
            <p className="text-gray-600 text-sm mt-1">High-quality deadbolts provide significant resistance against forced entry attempts.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Secure sliding doors and windows</span>
            <p className="text-gray-600 text-sm mt-1">Add secondary locking mechanisms to prevent these common entry points from being compromised.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Rekey locks when moving into a new home</span>
            <p className="text-gray-600 text-sm mt-1">Ensure that previous owners, tenants, or their associates can't access your home.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Consider a master key system for convenience</span>
            <p className="text-gray-600 text-sm mt-1">Access multiple locks with a single key while maintaining individual security zones.</p>
          </div>
        </li>
      </ul>
      
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-10">
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
          <Home className="mr-2 h-5 w-5 text-secondary" />
          Signs You Need a Residential Locksmith
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Difficulty turning keys in locks</li>
            <li>Recently moved into a new home</li>
            <li>Lost or stolen house keys</li>
            <li>Locks damaged from break-in attempts</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Want to upgrade to high-security locks</li>
            <li>Need to match locks to new door hardware</li>
            <li>Interested in keyless entry systems</li>
            <li>Require a single key for multiple locks</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why Choose Our Residential Locksmith Services?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Shield className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Licensed & Insured</h3>
          <p className="text-gray-600">Our technicians are fully certified and background-checked for your peace of mind.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Settings className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Expertise & Experience</h3>
          <p className="text-gray-600">Years of specialized knowledge in residential security solutions.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Home className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Comprehensive Services</h3>
          <p className="text-gray-600">All your residential lock and key needs handled by one trusted provider.</p>
        </div>
      </div>
      
      <p className="bg-gray-50 p-4 rounded-lg italic text-gray-700 my-8 border-l-4 border-secondary pl-6">
        "Home is where we should feel secure and safe. Our residential locksmith services are designed to provide that security, giving you confidence that your family and belongings are protected."
      </p>
    </>
  );
};
