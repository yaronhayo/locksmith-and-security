
import React from 'react';
import { Check, ShieldCheck, Building2, Lock, Tool, Key } from 'lucide-react';

export const CommercialLockReplacementContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Professional Commercial Lock Replacement Services</h2>
        <p className="mb-4">
          Our commercial lock replacement service provides businesses with enhanced security solutions tailored to their specific needs. Whether you're upgrading existing locks, responding to security concerns, or outfitting a new commercial property, our certified technicians deliver expert installation of high-quality commercial-grade locks.
        </p>
        <p className="mb-4">
          We understand that business security requirements differ significantly from residential needs. Commercial properties often require locks that can withstand high traffic, provide specific access control capabilities, and meet building code requirements. Our specialized commercial locksmith team is trained to handle these unique challenges.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="text-secondary" /> Why Choose Our Commercial Lock Replacement
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Specialized knowledge of commercial security standards</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Experience with all major commercial lock brands</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Code-compliant installations for emergency exits</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Ability to integrate with existing access control</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Minimal business disruption during service</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Comprehensive warranty on parts and labor</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">When Your Business Needs Lock Replacement</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Building2 className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">New Business Location</h4>
            </div>
            <p>When moving into a new commercial space, replacing the locks ensures that previous tenants, contractors, or property managers no longer have access to your business premises.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Key className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Security Breach</h4>
            </div>
            <p>After any security incident or unauthorized access attempt, replacing locks is a critical step in restoring your business security and preventing further breaches.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Tool className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Worn or Damaged Locks</h4>
            </div>
            <p>Commercial locks undergo significant wear from high traffic. If your locks show signs of wear, sticking, or damage, replacement ensures continued security and functionality.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Lock className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Security Upgrade</h4>
            </div>
            <p>As security technology advances, upgrading to newer lock systems provides enhanced protection features, better key control, and improved integration with modern security systems.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">Our Commercial Lock Replacement Process</h3>
        <p className="mb-4">
          We follow a systematic approach to ensure your business receives the right security solution with minimal disruption:
        </p>
        
        <ol className="space-y-4 mt-6">
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold">Security Assessment</h4>
              <p>We evaluate your current locks, security needs, access control requirements, and discuss any specific concerns about your business security.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold">Customized Recommendation</h4>
              <p>Based on our assessment, we provide detailed recommendations for commercial-grade locks that best suit your security needs, budget, and compliance requirements.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold">Scheduling</h4>
              <p>We coordinate the installation timeline to minimize disruption to your business operations, often offering after-hours service when needed.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold">Professional Installation</h4>
              <p>Our certified technicians carefully remove old locks and professionally install new ones, ensuring proper alignment and function with your door hardware.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
            <div>
              <h4 className="font-bold">Testing and Key Management</h4>
              <p>We thoroughly test each lock, provide all necessary keys, and implement key control systems if requested to manage who has access to your business.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</div>
            <div>
              <h4 className="font-bold">Documentation and Training</h4>
              <p>We provide documentation for your new locks, including warranty information and maintenance recommendations, plus basic training for your staff if needed.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Commercial Lock Types We Install</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Mortise Locks</h4>
            <p>Heavy-duty locks installed in a pocket cut into the door edge, offering superior security and durability for commercial entrances.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Cylindrical Lever Locks</h4>
            <p>ADA-compliant locks with lever handles that are ideal for commercial environments with high traffic.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Exit Devices</h4>
            <p>Panic bars and exit devices for emergency exits that comply with building safety codes and fire regulations.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Electronic Access Control</h4>
            <p>Keypad, card reader, or biometric locks that provide advanced security and detailed access logs.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">High-Security Cylinders</h4>
            <p>Restricted keyway cylinders that prevent unauthorized key duplication and enhance key control.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Electric Strikes</h4>
            <p>Electrified door hardware that can integrate with access control systems for remote locking/unlocking capabilities.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">Industries We Serve</h3>
        <p className="mb-4">
          We provide specialized commercial lock replacement services for a wide range of industries, each with unique security requirements:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="font-bold">Retail Stores</h4>
            <p>From small shops to large retail chains, focusing on both customer-accessible areas and secure stockrooms.</p>
          </div>
          
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="font-bold">Office Buildings</h4>
            <p>Multi-tenant facilities requiring various access levels and master key systems for management.</p>
          </div>
          
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="font-bold">Healthcare Facilities</h4>
            <p>HIPAA-compliant security solutions for medical offices, clinics, and hospitals with specific privacy requirements.</p>
          </div>
          
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="font-bold">Educational Institutions</h4>
            <p>Schools, colleges, and universities requiring robust lockdown capabilities and master key hierarchies.</p>
          </div>
          
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="font-bold">Restaurants & Hospitality</h4>
            <p>Solutions for public access areas, staff-only sections, and secure storage for valuables or inventory.</p>
          </div>
          
          <div className="border border-gray-200 p-4 rounded">
            <h4 className="font-bold">Industrial Facilities</h4>
            <p>Heavy-duty solutions for warehouses, manufacturing plants, and industrial complexes with specific access control needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
