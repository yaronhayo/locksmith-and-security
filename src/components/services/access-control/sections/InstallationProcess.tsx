
import React from 'react';

const InstallationProcess = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Our Installation Process</h2>
      
      <ol className="space-y-4 mb-8">
        <li className="flex">
          <div className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">1</div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Security Assessment</h3>
            <p className="text-gray-700">We evaluate your facility to understand your security requirements, traffic patterns, and access points.</p>
          </div>
        </li>
        
        <li className="flex">
          <div className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">2</div>
          <div>
            <h3 className="font-semibold text-lg mb-1">System Design</h3>
            <p className="text-gray-700">Our experts design a customized access control solution that addresses your specific security needs and budget.</p>
          </div>
        </li>
        
        <li className="flex">
          <div className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">3</div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Professional Installation</h3>
            <p className="text-gray-700">Our certified technicians install all hardware and software components with minimal disruption to your operations.</p>
          </div>
        </li>
        
        <li className="flex">
          <div className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">4</div>
          <div>
            <h3 className="font-semibold text-lg mb-1">System Configuration</h3>
            <p className="text-gray-700">We configure the system according to your access policies and provide thorough testing to ensure everything works properly.</p>
          </div>
        </li>
        
        <li className="flex">
          <div className="bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">5</div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Training & Support</h3>
            <p className="text-gray-700">We provide comprehensive training for your staff and ongoing technical support for your access control system.</p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default InstallationProcess;
