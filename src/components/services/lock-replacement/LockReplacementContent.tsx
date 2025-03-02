import React from 'react';
import { Check, ShieldCheck, Key, Lock, Wrench } from 'lucide-react';

export const LockReplacementContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Professional Residential Lock Replacement Service</h2>
        <p className="mb-4">
          Our residential lock replacement service provides homeowners with enhanced security and peace of mind. Whether you're moving into a new home, upgrading old locks, or responding to security concerns, our certified technicians deliver expert solutions tailored to your specific needs.
        </p>
        <p className="mb-4">
          Using only high-quality locks and hardware from trusted manufacturers, we ensure your home is protected with reliable security systems. Our technicians are trained to work with all types of residential locks, from traditional deadbolts to modern smart lock systems.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="text-secondary" /> Why Choose Our Lock Replacement Service
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Certified and experienced technicians</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>High-quality locks from trusted brands</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Professional installation guaranteeing proper function</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Expert advice on the best security options</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Available 24/7 for emergency situations</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-secondary mt-1 flex-shrink-0" />
              <span>Clean, professional work with no damage</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">When to Replace Your Home's Locks</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Key className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">After Moving In</h4>
            </div>
            <p>When you move into a new home, you don't know who might have copies of the keys. Previous owners, tenants, contractors, or real estate agents may still have access.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Lock className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">After a Break-in</h4>
            </div>
            <p>If your home has been broken into, your locks may be damaged or compromised. Even if they appear functional, replacing them ensures your home security is restored.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Key className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Lost or Stolen Keys</h4>
            </div>
            <p>If you've lost your keys or they've been stolen, replacing your locks eliminates the risk of unauthorized access to your home using those missing keys.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Wrench className="text-primary h-5 w-5" />
              </div>
              <h4 className="font-bold">Old or Worn Locks</h4>
            </div>
            <p>Locks naturally wear out over time. If your locks are sticking, difficult to turn, or showing visible wear, it's time to consider replacement for improved security.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">Our Lock Replacement Process</h3>
        <p className="mb-4">
          Our professional lock replacement service follows a systematic process to ensure your home's security is optimized:
        </p>
        
        <ol className="space-y-4 mt-6">
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold">Assessment</h4>
              <p>We evaluate your current locks, security needs, and discuss any specific concerns you might have about your home's security.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold">Recommendation</h4>
              <p>Based on our assessment, we recommend the most suitable lock options for your doors, considering factors like security level, convenience, and compatibility with your existing door hardware.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold">Installation</h4>
              <p>Our technicians carefully remove the old locks and professionally install the new ones, ensuring they function properly and align correctly with your door frame.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold">Testing</h4>
              <p>We thoroughly test each new lock to verify smooth operation, proper locking mechanism function, and overall security effectiveness.</p>
            </div>
          </li>
          
          <li className="flex gap-4">
            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
            <div>
              <h4 className="font-bold">Education</h4>
              <p>We provide instructions on how to use and maintain your new locks, especially if you've upgraded to a different type of lock system.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Types of Residential Locks We Install</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Deadbolt Locks</h4>
            <p>Providing excellent security with a strong bolt that extends into the door frame. Available in single and double-cylinder options.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Knob Locks</h4>
            <p>Common residential locks with the locking mechanism in the knob itself. Often paired with deadbolts for enhanced security.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Electronic Locks</h4>
            <p>Keyless entry systems that use keypads, cards, or remote controls for access, offering convenience and advanced security features.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Smart Locks</h4>
            <p>Advanced locks that connect to your smartphone and home automation systems, allowing remote control and monitoring.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Lever Handle Locks</h4>
            <p>Easier to operate than knob locks, making them ideal for interior doors and homes with elderly or disabled residents.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold mb-2">Mortise Locks</h4>
            <p>Heavy-duty locks installed in a pocket cut into the door edge, offering superior security for main entry doors.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
