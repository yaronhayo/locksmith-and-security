
import React from 'react';
import { Clock, Lock, Map, AlertTriangle, Car, Home, Building2, Shield } from 'lucide-react';

export const EmergencyServiceContent = () => {
  return (
    <>
      <p className="lead-paragraph text-lg text-gray-700 mb-6">
        Our 24/7 emergency locksmith services provide immediate assistance when you find yourself locked out of your vehicle, home, or business. With rapid response times and experienced technicians, we ensure that stressful lockout situations are resolved quickly and professionally.
      </p>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What Constitutes a Locksmith Emergency?</h2>
      <p className="mb-4">
        Locksmith emergencies can happen anytime and under various circumstances. Some common situations include:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Car className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Car Lockouts</h3>
          </div>
          <p className="text-gray-700">Getting locked out of your car can be especially troubling if you're in an unfamiliar or unsafe area, or when you're running late for important commitments.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Home className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Home Lockouts</h3>
          </div>
          <p className="text-gray-700">Being unable to access your home, especially during late hours or in bad weather, requires immediate professional assistance.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Building2 className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Business Lockouts</h3>
          </div>
          <p className="text-gray-700">Commercial lockouts can disrupt business operations and may require specialized expertise to handle complex security systems.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Lock className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Broken Keys</h3>
          </div>
          <p className="text-gray-700">Keys that break off in locks require professional extraction to avoid further damage to the locking mechanism.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Our Emergency Locksmith Response Process</h2>
      <p className="mb-6">
        When you contact our emergency locksmith service, we follow a streamlined process to get you back into your property as quickly as possible:
      </p>
      
      <ol className="list-decimal pl-6 space-y-4 mb-8">
        <li className="pl-2">
          <span className="font-semibold">Immediate Contact Response:</span> Our team is available 24/7 to take your call and gather essential information about your emergency.
        </li>
        <li className="pl-2">
          <span className="font-semibold">Dispatch of Nearest Technician:</span> We quickly send the closest available locksmith specialist to your location.
        </li>
        <li className="pl-2">
          <span className="font-semibold">Efficient Assessment:</span> Upon arrival, our locksmith will assess the situation and determine the most effective solution.
        </li>
        <li className="pl-2">
          <span className="font-semibold">Professional Resolution:</span> Using specialized tools and techniques, we resolve your lockout with minimal damage to your property.
        </li>
        <li className="pl-2">
          <span className="font-semibold">Security Verification:</span> We verify your identification to ensure we're providing access to the rightful owner.
        </li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-10">
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-secondary" />
          When to Call an Emergency Locksmith
        </h3>
        <p className="mb-4">
          If you find yourself in any of these situations, don't hesitate to call our emergency locksmith service:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Locked out of your vehicle, home, or business</li>
          <li>Key broken in lock</li>
          <li>Lost all copies of your keys</li>
          <li>Lock malfunction preventing entry or exit</li>
          <li>Security concerns following a break-in attempt</li>
          <li>Need for immediate lock replacement for security reasons</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why Choose Our Emergency Locksmith Services?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Clock className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">24/7 Availability</h3>
          <p className="text-gray-600">Round-the-clock emergency service, including weekends and holidays.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Map className="h-12 w-12 mx-auto text-secondary mb-4" />
          <p className="font-bold mb-2">Fast Response Times</p>
          <p className="text-gray-600">Our technicians arrive quickly to resolve your emergency situation.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Shield className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Licensed & Insured</h3>
          <p className="text-gray-600">All our locksmiths are fully licensed, bonded, and insured for your protection.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Areas We Serve</h2>
      <p className="mb-6">
        Our emergency locksmith services are available throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. No matter where you are in our service area, help is just a phone call away.
      </p>
      
      <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary my-8">
        <h3 className="font-bold text-lg mb-2">Emergency Locksmith Tips</h3>
        <p className="mb-4">While waiting for our locksmith to arrive:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stay in a safe, well-lit area if locked out at night</li>
          <li>Don't attempt to force entry, which can cause costly damage</li>
          <li>Have identification ready to prove ownership</li>
          <li>If locked out of your car with a child or pet inside during extreme weather, call emergency services immediately</li>
        </ul>
      </div>
    </>
  );
};
