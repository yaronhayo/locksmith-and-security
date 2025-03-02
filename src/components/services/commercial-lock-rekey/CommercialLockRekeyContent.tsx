
import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck, Key, Building, Clock, DollarSign, KeyRound } from 'lucide-react';

export const CommercialLockRekeyContent = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Commercial Lock Rekeying For Enhanced Business Security</h2>
        <p className="mb-4">
          Our commercial lock rekeying service provides businesses with a cost-effective solution to maintain control over who has access to their premises. Instead of replacing entire lock mechanisms, our certified technicians reconfigure your existing locks to work with new keys, rendering the old keys useless.
        </p>
        <p className="mb-4">
          Whether you've experienced employee turnover, lost keys, moved into a new property, or simply want to upgrade your security, lock rekeying offers an efficient way to secure your business without the expense of full lock replacement.
        </p>
        <div className="bg-primary-50 border-l-4 border-primary p-4 rounded-r-md mt-6">
          <p className="flex items-start">
            <span className="mr-3 mt-1 text-primary">
              <ShieldCheck size={20} />
            </span>
            <span>
              <strong>Security Tip:</strong> Consider rekeying your commercial locks at least once a year or whenever there's been a security incident, employee turnover, or lost/stolen keys.
            </span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">When To Consider Commercial Lock Rekeying</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">New Business Location</h3>
            </div>
            <p>When moving into a new commercial space, previous tenants or contractors may still have keys. Rekeying ensures only authorized personnel have access.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Key className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Lost or Stolen Keys</h3>
            </div>
            <p>If business keys have been lost or stolen, rekeying immediately prevents unauthorized access and potential security breaches.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Employee Turnover</h3>
            </div>
            <p>After staff changes, especially involving managers or security personnel who had access to keys, rekeying ensures former employees can no longer access the premises.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <KeyRound className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Master Key Implementation</h3>
            </div>
            <p>When establishing or updating a master key system, rekeying allows for hierarchical access control without replacing your existing locks.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Benefits of Professional Lock Rekeying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <DollarSign className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Cost-Effective Security</h3>
            <p>Rekeying is typically 50-70% less expensive than replacing locks while providing the same security benefits.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Quick Implementation</h3>
            <p>Our technicians can rekey most commercial locks quickly, minimizing business disruption.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Immediate Security Upgrade</h3>
            <p>Old keys immediately become ineffective, instantly improving your security posture.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Our Commercial Lock Rekeying Process</h2>
        <ol className="space-y-6">
          <li className="flex">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">1</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Assessment</h3>
              <p>Our technician evaluates your current lock system, identifying which locks need rekeying and any potential issues.</p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">2</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Lock Disassembly</h3>
              <p>The technician carefully disassembles each lock cylinder, removing the existing pins that correspond to your old keys.</p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">3</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Pin Replacement</h3>
              <p>New pins are installed in a different configuration that will only work with your new keys.</p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">4</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Reassembly & Testing</h3>
              <p>The lock is reassembled, and your new keys are tested to ensure smooth operation.</p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">5</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Key Distribution</h3>
              <p>New keys are provided based on your requirements, including making multiple copies if needed.</p>
            </div>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Commercial Locks We Can Rekey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Cylindrical Locks (Standard Commercial Door Locks)</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Mortise Locks (Common in Commercial Buildings)</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Rim Cylinders (Used with Exit Devices)</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Deadbolts (Additional Security Locks)</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Cabinet & Furniture Locks</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Padlocks (For Gates, Storage, etc.)</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>High-Security Locks (Medeco, Mul-T-Lock, etc.)</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-green-500 inline mr-2" />
            <span>Master Key Systems</span>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-md">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-orange-700">Not all locks can be rekeyed</p>
              <p className="text-orange-700">Some proprietary or specialty electronic locks may not be rekeyable. Our technicians will advise you on the best options for these cases, which might include replacement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
