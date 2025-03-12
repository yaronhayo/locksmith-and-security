
import React from 'react';

const ReplacementProcess = () => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4">Our Car Key Replacement Process</h3>
      <p className="mb-4">
        Our professional car key replacement service follows a systematic process to ensure you receive a fully functional replacement key:
      </p>
      
      <ol className="space-y-4 mt-6">
        <li className="flex gap-4">
          <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <h4 className="font-bold">Vehicle Identification</h4>
            <p>We verify your vehicle make, model, and year to determine the exact type of key required. We'll also need proof of ownership to ensure security compliance.</p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <h4 className="font-bold">Key Cutting</h4>
            <p>Using precision cutting equipment, we create a new key that exactly matches your vehicle's lock patterns. For vehicles without an existing key, we can extract the key code from the vehicle's locks or ECU.</p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <h4 className="font-bold">Transponder Programming</h4>
            <p>For keys with transponder chips, we program the chip to communicate correctly with your vehicle's immobilizer system, ensuring the engine will start properly.</p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
          <div>
            <h4 className="font-bold">Remote/FOB Programming</h4>
            <p>For keys with remote functions, we program all buttons to work with your specific vehicle, including lock, unlock, trunk release, and alarm features.</p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
          <div>
            <h4 className="font-bold">Testing</h4>
            <p>We thoroughly test the new key on your vehicle, ensuring it properly operates door locks, the ignition, and all remote functions before completing the service.</p>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default ReplacementProcess;
