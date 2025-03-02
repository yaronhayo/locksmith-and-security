
import React from 'react';
import { Car, Key, Wrench, Lock, Shield, Clock, Settings, Check } from 'lucide-react';

export const AutoServiceContent = () => {
  return (
    <>
      <p className="lead-paragraph text-lg text-gray-700 mb-6">
        Our automotive locksmith services provide specialized solutions for all your vehicle key and lock needs. Whether you're locked out of your car, need a replacement key, or require programming for a sophisticated key fob, our skilled technicians deliver prompt, professional service for virtually all makes and models.
      </p>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Comprehensive Automotive Locksmith Solutions</h2>
      <p className="mb-6">
        Modern vehicles require specialized knowledge and equipment. Our auto locksmith services include:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Car className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Car Lockout Services</h3>
          </div>
          <p className="text-gray-700">Fast, damage-free entry when you're locked out of your vehicle, using specialized tools and techniques that protect your car's finish and lock mechanisms.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Key className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Car Key Replacement</h3>
          </div>
          <p className="text-gray-700">On-site creation of replacement keys for virtually all vehicle makes and models, including older vehicles and those with worn or damaged keys.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Settings className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Key Fob Programming</h3>
          </div>
          <p className="text-gray-700">Expert programming of transponder keys and advanced key fobs, including proximity keys and push-to-start systems.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
          <div className="flex items-start mb-3">
            <Wrench className="h-5 w-5 text-secondary mr-3 mt-1" />
            <h3 className="font-bold">Ignition Repair & Replacement</h3>
          </div>
          <p className="text-gray-700">Diagnosis and repair of ignition switch problems, extraction of broken keys, and complete ignition cylinder replacement when necessary.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Vehicle Types We Service</h2>
      <p className="mb-6">
        Our automotive locksmith expertise extends to virtually all vehicle types:
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">Passenger Cars</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">SUVs</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">Trucks</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">Vans</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">Luxury Vehicles</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">Classic Cars</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">Motorcycles</h4>
        </div>
        
        <div className="p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <h4 className="font-medium">RVs</h4>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Modern Vehicle Key Technologies</h2>
      <p className="mb-4">
        Today's vehicle keys are sophisticated devices with integrated electronics. We're equipped to handle:
      </p>
      
      <ul className="space-y-4 mb-8">
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Transponder Keys</span>
            <p className="text-gray-600 text-sm mt-1">Keys with embedded microchips that communicate with your vehicle's immobilizer system for enhanced security.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Remote Head Keys</span>
            <p className="text-gray-600 text-sm mt-1">Integrated key and remote combinations that control door locks, trunk release, and alarm functions.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">Smart Keys & Proximity Fobs</span>
            <p className="text-gray-600 text-sm mt-1">Advanced keyless entry systems that allow door unlocking and engine starting without removing the key from your pocket.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1 rounded mr-3 mt-1">
            <Check className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="font-medium">High-Security Laser-Cut Keys</span>
            <p className="text-gray-600 text-sm mt-1">Precision-cut keys with complex patterns that are difficult to duplicate without specialized equipment.</p>
          </div>
        </li>
      </ul>
      
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-10">
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
          <Car className="mr-2 h-5 w-5 text-secondary" />
          When to Call an Automotive Locksmith
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Locked keys inside your vehicle</li>
            <li>Lost or stolen car keys</li>
            <li>Broken key in ignition or door lock</li>
            <li>Key that no longer turns in ignition</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Need for spare or replacement keys</li>
            <li>Key fob not working after battery replacement</li>
            <li>Transponder key programming issues</li>
            <li>Ignition cylinder wear or damage</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why Choose Our Automotive Locksmith Services?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Clock className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Mobile Service</h3>
          <p className="text-gray-600">We come to your location, whether you're at home, work, or stranded roadside.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Wrench className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Specialized Equipment</h3>
          <p className="text-gray-600">Advanced tools and technology for all makes and models, including the latest vehicles.</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Shield className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-bold mb-2">Cost-Effective</h3>
          <p className="text-gray-600">Significantly more affordable than dealership services with comparable quality.</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Automotive Locksmith Tips</h2>
      <p className="mb-4">
        Keep these helpful tips in mind to prevent lockouts and key issues:
      </p>
      
      <ol className="list-decimal pl-6 space-y-3 mb-8">
        <li>Always have a spare key made and keep it in a secure location</li>
        <li>Consider a magnetic hide-a-key box for emergency situations</li>
        <li>Replace key fob batteries at the first sign of reduced range</li>
        <li>Address ignition stiffness early to prevent key breakage</li>
        <li>Keep our contact information saved in your phone for emergency situations</li>
      </ol>
      
      <p className="bg-gray-50 p-4 rounded-lg italic text-gray-700 my-8 border-l-4 border-secondary pl-6">
        "Whether you need emergency lockout assistance or replacement keys for your vehicle, our automotive locksmith technicians have the expertise and equipment to get you back on the road quickly."
      </p>
    </>
  );
};
