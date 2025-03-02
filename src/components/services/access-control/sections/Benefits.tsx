
import React from 'react';
import { Shield, Users, Lock, Smartphone } from "lucide-react";

const Benefits = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Benefits of Professional Access Control</h2>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex items-start">
          <Shield className="h-5 w-5 text-secondary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Enhanced Security</h3>
            <p className="text-sm text-gray-600">
              Prevent unauthorized access and protect sensitive areas with customizable security protocols.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Users className="h-5 w-5 text-secondary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Employee Management</h3>
            <p className="text-sm text-gray-600">
              Easily manage access privileges by department, seniority, or work schedule.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Lock className="h-5 w-5 text-secondary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Access Logs</h3>
            <p className="text-sm text-gray-600">
              Maintain detailed records of all entry and exit events for security audits.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Smartphone className="h-5 w-5 text-secondary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Remote Management</h3>
            <p className="text-sm text-gray-600">
              Control access from anywhere using cloud-based management platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
