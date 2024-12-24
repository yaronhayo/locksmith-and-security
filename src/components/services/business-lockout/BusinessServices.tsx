import React from "react";
import { Building2, Lock, Key } from "lucide-react";

const BusinessServices = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Professional Commercial Locksmith Services in North Bergen</h2>
      <p className="text-lg mb-6">
        A business lockout can disrupt operations and impact your bottom line. At Locksmith & Security LLC, 
        we understand the urgency of commercial lockout situations and provide rapid, professional service 
        to get your business back up and running quickly.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Commercial Services Include:</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Building2 className="text-primary mr-2" />
              Emergency business lockout assistance
            </li>
            <li className="flex items-center">
              <Lock className="text-primary mr-2" />
              Master key system installation
            </li>
            <li className="flex items-center">
              <Lock className="text-primary mr-2" />
              Access control systems
            </li>
            <li className="flex items-center">
              <Key className="text-primary mr-2" />
              High-security locks
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Business Benefits:</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Building2 className="text-primary mr-2" />
              24/7 emergency response
            </li>
            <li className="flex items-center">
              <Lock className="text-primary mr-2" />
              Licensed and insured service
            </li>
            <li className="flex items-center">
              <Key className="text-primary mr-2" />
              Competitive rates
            </li>
            <li className="flex items-center">
              <Building2 className="text-primary mr-2" />
              All business types served
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;