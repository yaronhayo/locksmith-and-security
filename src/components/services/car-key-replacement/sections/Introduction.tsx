
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const Introduction = () => {
  return (
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
  );
};

export default Introduction;
