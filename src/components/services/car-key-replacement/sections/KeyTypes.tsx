
import React from 'react';
import { Key, Wrench, Car, Smartphone } from 'lucide-react';

const KeyTypes = () => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4">Types of Car Keys We Replace</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Key className="text-primary h-5 w-5" />
            </div>
            <h4 className="font-bold">Traditional Metal Keys</h4>
          </div>
          <p>Basic mechanical keys used in older vehicles. These keys don't contain electronic components and work purely through their unique physical cuts to operate the ignition and door locks.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Wrench className="text-primary h-5 w-5" />
            </div>
            <h4 className="font-bold">Transponder Keys</h4>
          </div>
          <p>Keys with embedded microchips that communicate with your vehicle's immobilizer system. The car will only start when it detects the correct transponder signal from the key.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Car className="text-primary h-5 w-5" />
            </div>
            <h4 className="font-bold">Remote Key Fobs</h4>
          </div>
          <p>Combined keys and remote controls that allow you to lock/unlock doors and sometimes start the vehicle remotely. These require both cutting and electronic programming.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Smartphone className="text-primary h-5 w-5" />
            </div>
            <h4 className="font-bold">Smart Keys & Proximity Keys</h4>
          </div>
          <p>Advanced keyless entry systems that allow you to unlock and start your vehicle while keeping the key in your pocket or bag. These sophisticated keys require specialized programming equipment.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyTypes;
