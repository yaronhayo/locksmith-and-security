
import React from 'react';
import { Check, ShieldCheck, Car, Key, Smartphone, Tool } from 'lucide-react';

export const CarKeyReplacementContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Professional Car Key Replacement Service</h2>
        <p className="mb-4">
          Our professional car key replacement service provides a reliable solution when you've lost your vehicle keys, they've been damaged, or you simply need a spare set. Using specialized equipment and extensive expertise, our automotive locksmiths can create replacement keys for virtually any vehicle make and model.
        </p>
        <p className="mb-4">
          Modern vehicle keys have evolved significantly beyond basic metal keys, now incorporating sophisticated technology like transponder chips, remotes, and smart keys. Our technicians are trained and equipped to handle these advanced key systems, providing you with a fully functional replacement that works seamlessly with your vehicle's ignition and security systems.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="text-secondary" /> Why Choose Our Car Key Replacement Service
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Certified automotive locksmiths with specialized training</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Advanced equipment for all key types</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Mobile service that comes to your location</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Significantly faster than dealership service</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Comprehensive solution including programming</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Available 24/7 for emergency situations</span>
            </li>
          </ul>
        </div>
      </section>

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
                <Tool className="text-primary h-5 w-5" />
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

      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Common Scenarios for Car Key Replacement</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Lost Keys</h4>
            <p>When you've lost all keys to your vehicle and need a complete replacement solution, including new keys and reprogramming the vehicle if necessary.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Broken Keys</h4>
            <p>Keys can break in locks or ignitions, or remote buttons may stop working. We can extract broken keys and provide replacements.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Spare Keys</h4>
            <p>Having a spare key is important for emergencies. We can create duplicates of your existing key at a fraction of dealership costs.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Worn Keys</h4>
            <p>Keys naturally wear down over time, potentially causing intermittent issues with starting your vehicle or operating locks.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Upgraded Security</h4>
            <p>Some vehicle owners choose to upgrade from basic keys to programmable remotes for added convenience and security.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Damaged Fobs</h4>
            <p>Remote key fobs can be damaged by water, impact, or battery leakage, requiring replacement of the electronic components.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">Manufacturers We Service</h3>
        <p className="mb-4">
          Our automotive locksmiths are equipped to replace keys for virtually all vehicle makes and models, including but not limited to:
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
          <div className="border border-gray-200 py-3 px-2 rounded">Acura</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Audi</div>
          <div className="border border-gray-200 py-3 px-2 rounded">BMW</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Buick</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Cadillac</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Chevrolet</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Chrysler</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Dodge</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Ford</div>
          <div className="border border-gray-200 py-3 px-2 rounded">GMC</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Honda</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Hyundai</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Infiniti</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Jeep</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Kia</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Lexus</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Mazda</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Mercedes</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Nissan</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Subaru</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Toyota</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Volkswagen</div>
          <div className="border border-gray-200 py-3 px-2 rounded">Volvo</div>
          <div className="border border-gray-200 py-3 px-2 rounded">And many more</div>
        </div>
      </section>
    </div>
  );
};
