
import React from 'react';
import { Check, ShieldCheck, Key, Lock, Fingerprint } from 'lucide-react';

export const LockRekeyContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Professional Lock Rekeying Service</h2>
        <p className="mb-4">
          Lock rekeying is a cost-effective security solution that allows you to change who has access to your home without replacing the entire lock hardware. Our professional lock rekeying service modifies the internal pins of your existing locks so they operate with new keys, rendering any previous keys unusable.
        </p>
        <p className="mb-4">
          This is an ideal solution when you need to restrict access after key loss, moving into a new property, or when you want to streamline your security by having multiple locks work with the same key.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="text-secondary" /> Benefits of Professional Lock Rekeying
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Cost-effective alternative to full lock replacement</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Instantly invalidates all previous keys</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Maintains your existing hardware aesthetics</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Can create master key systems for convenience</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Quick service with minimal disruption</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Professional service by certified locksmiths</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">When to Rekey Your Locks</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Key className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Moving Into a New Home</h4>
            </div>
            <p>When purchasing a new home, you don't know who might have copies of the keys. Rekeying is more economical than replacing all the locks while ensuring previous owners or their associates can't access your home.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Key className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Lost or Stolen Keys</h4>
            </div>
            <p>If your keys have been lost or stolen, rekeying your locks is a quick security measure to prevent unauthorized access to your home using those missing keys.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Lock className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">After Tenant Turnover</h4>
            </div>
            <p>Landlords and property managers should rekey locks between tenants to ensure previous tenants cannot access the property after their lease has ended.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Fingerprint className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Creating Key Uniformity</h4>
            </div>
            <p>Tired of carrying multiple keys? Rekeying can allow multiple locks in your home to work with a single key, simplifying your daily routine and key organization.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">The Lock Rekeying Process</h3>
        <p className="mb-4">
          Our professional lock rekeying service follows a systematic process to ensure your home's security is optimized:
        </p>
        
        <ol className="space-y-4 mt-6">
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold">Lock Disassembly</h4>
              <p>Our technician carefully removes the lock cylinder from the door or disassembles it in place, depending on the lock type.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold">Pin Replacement</h4>
              <p>We remove the old pin tumblers from inside the lock cylinder and replace them with new ones that match the cut pattern of your new keys.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold">Lock Reassembly</h4>
              <p>The lock is carefully reassembled and reinstalled on your door, ensuring proper alignment and function.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold">Testing</h4>
              <p>We thoroughly test the newly rekeyed lock with your new keys to verify smooth operation and proper security function.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
            <div>
              <h4 className="font-bold">Key Provision</h4>
              <p>You'll receive your new set of keys, typically with multiple copies as requested, and confirmation that old keys will no longer work.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Advanced Rekeying Options</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold mb-3">Keying Alike</h4>
            <p>We can rekey multiple locks in your home to operate with the same key, allowing you to carry just one key for multiple doors. This is convenient for entry doors, side doors, and even detached structures like garages or sheds.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold mb-3">Master Key Systems</h4>
            <p>For homeowners with specific access control needs, we can create master key systems where certain keys open specific doors while a master key opens all locks in the system. This is ideal for homes with in-law suites or rental units.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">Types of Locks We Can Rekey</h3>
        <p className="mb-4">
          Our expert locksmiths can rekey virtually any type of residential lock, including:
        </p>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Deadbolts</h4>
            <p>Single-cylinder and double-cylinder deadbolts from all major manufacturers.</p>
          </li>
          
          <li className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Knob Locks</h4>
            <p>Standard doorknob locks used on interior and exterior doors.</p>
          </li>
          
          <li className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Lever Handles</h4>
            <p>Lever-style door handles with built-in locking mechanisms.</p>
          </li>
          
          <li className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Mortise Locks</h4>
            <p>Sophisticated locks that fit into a pocket cut into the door edge.</p>
          </li>
          
          <li className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Rim Locks</h4>
            <p>Surface-mounted locks often used as secondary security measures.</p>
          </li>
          
          <li className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Euro Cylinders</h4>
            <p>Profile cylinders commonly used in uPVC and composite doors.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};
