
import React from 'react';
import { Key, Lock, Fingerprint, Smartphone } from "lucide-react";

const SolutionsGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Access Control Solutions We Offer</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Keycard & Fob Systems</h3>
          </div>
          <p className="text-gray-700">
            Convenient contactless systems using cards or fobs that can be easily issued to employees and visitors. Ideal for businesses with moderate security needs and regular staff turnover.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Keypad Entry Systems</h3>
          </div>
          <p className="text-gray-700">
            Secure code-based entry systems with programmable access codes. Perfect for areas that need controlled access without requiring physical credentials.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Fingerprint className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Biometric Systems</h3>
          </div>
          <p className="text-gray-700">
            Advanced systems using fingerprint, retina scan, or facial recognition for the highest level of security. Eliminates credential sharing and provides definitive identification.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Mobile Access Systems</h3>
          </div>
          <p className="text-gray-700">
            Modern smartphone-based access using secure Bluetooth or NFC technology. Offers convenience while maintaining robust security protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsGrid;
