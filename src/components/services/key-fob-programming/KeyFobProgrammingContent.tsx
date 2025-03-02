
import React from 'react';
import { Car, Smartphone, Shield, Clock, CheckCircle2 } from "lucide-react";

const KeyFobProgrammingContent = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">What Is Key Fob Programming?</h2>
        <p>Key fob programming is the process of syncing a remote key fob with your vehicle's onboard computer system. This allows the key fob to communicate wirelessly with your car, enabling remote functions like locking/unlocking doors, opening trunks, and starting the engine.</p>
        
        <p className="mt-3">Modern vehicles rely on sophisticated electronic systems for security and convenience. When you need a new key fob or your existing one stops working, professional programming ensures it functions correctly with your specific vehicle.</p>
      </section>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-6">
        <div className="flex items-start">
          <div className="mr-4 bg-primary/10 p-2 rounded-full">
            <Car className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Compatible with All Vehicle Makes and Models</h3>
            <p className="text-gray-700">Our key fob programming services work with virtually all vehicle makes and models, including domestic and foreign cars, trucks, and SUVs. We have extensive experience with brands like Toyota, Honda, Ford, Chevrolet, BMW, Mercedes-Benz, and many more.</p>
          </div>
        </div>
      </div>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">When Do You Need Key Fob Programming?</h2>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Purchasing a new key fob</strong> - New key fobs need to be programmed to work with your specific vehicle</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Replacing a lost or stolen key fob</strong> - Replacement fobs require programming and may need previous fobs to be deleted for security</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Malfunctioning remote</strong> - If your key fob buttons stopped working or work inconsistently</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Battery replacement issues</strong> - Sometimes fobs need reprogramming after battery replacement</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Adding an additional key fob</strong> - When you need an extra remote for family members</span>
          </li>
        </ul>
      </section>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-secondary/20 p-2 rounded-full mr-3">
              <Smartphone className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Advanced Programming Technology</h3>
          </div>
          <p>We use the latest diagnostic equipment and software to efficiently program your key fob for optimal performance and reliability.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-secondary/20 p-2 rounded-full mr-3">
              <Shield className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Security Guaranteed</h3>
          </div>
          <p>Our programming process ensures your vehicle's security is maintained while providing you with fully functional remote access.</p>
        </div>
      </div>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Our Key Fob Programming Process</h2>
        <div className="space-y-4 mt-6">
          <div className="flex items-start">
            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span className="text-primary font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Vehicle Identification</h4>
              <p className="text-gray-700">We identify your exact vehicle make, model, and year to determine the correct programming procedure and equipment needed.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span className="text-primary font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Key Fob Verification</h4>
              <p className="text-gray-700">We verify that the key fob is compatible with your vehicle and in good working condition before programming.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span className="text-primary font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Professional Programming</h4>
              <p className="text-gray-700">Using specialized diagnostic equipment, we connect to your vehicle's onboard computer system and program the key fob according to manufacturer specifications.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span className="text-primary font-bold">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Comprehensive Testing</h4>
              <p className="text-gray-700">We thoroughly test all key fob functions to ensure everything works properly before we complete the service.</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-primary mr-3" />
          <h3 className="text-xl font-semibold text-primary">Fast, On-Site Service</h3>
        </div>
        <p className="mb-4">Our mobile automotive locksmiths come to your location to program your key fob on the spot. Most key fob programming services can be completed in 30 minutes or less, getting you back on the road quickly.</p>
        <p><strong>Available 24/7 for emergency automotive locksmith services.</strong></p>
      </div>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Our Key Fob Programming Service</h2>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Certified Technicians</strong> - Our automotive locksmiths are fully trained and certified</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Advanced Equipment</strong> - We use professional-grade programming tools for all vehicle types</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Competitive Pricing</strong> - Save up to 50% compared to dealership prices</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Mobile Service</strong> - We come to you at home, work, or roadside</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
            <span><strong>Warranty</strong> - All our key fob programming work is guaranteed</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default KeyFobProgrammingContent;
