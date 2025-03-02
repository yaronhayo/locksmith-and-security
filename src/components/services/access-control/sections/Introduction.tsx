
import React from 'react';
import { Shield, CheckCircle } from "lucide-react";

const Introduction = () => {
  return (
    <div>
      <p className="text-lg text-gray-700 mb-6">
        Our professional access control systems provide secure, customizable entry management solutions for businesses of all sizes. From basic keypad systems to advanced biometric identification, we design and install comprehensive security solutions that protect your premises while offering convenient access for authorized personnel.
      </p>
      
      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
          <Shield className="h-5 w-5 text-secondary mr-2" />
          Why You Need Professional Access Control
        </h3>
        <p className="mb-4">
          Modern businesses face complex security challenges that traditional lock-and-key systems cannot adequately address. Access control systems provide enhanced security, accountability, and convenience:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-secondary shrink-0 mr-2 mt-0.5" />
            <span>Eliminate security risks from lost or stolen keys</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-secondary shrink-0 mr-2 mt-0.5" />
            <span>Instantly grant or revoke access privileges</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-secondary shrink-0 mr-2 mt-0.5" />
            <span>Track and log all entry and exit events</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-secondary shrink-0 mr-2 mt-0.5" />
            <span>Restrict access to sensitive areas based on authorization level</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
