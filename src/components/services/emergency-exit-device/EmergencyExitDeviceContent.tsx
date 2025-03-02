
import React from 'react';
import { Check, AlertTriangle, Info, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const EmergencyExitDeviceContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Emergency Exit Devices: Essential Safety Equipment</h2>
        <p className="mb-4 text-gray-700">
          Emergency exit devices, commonly known as panic bars or push bars, are crucial safety components for commercial buildings. These devices allow for rapid egress during emergencies by providing a simple, intuitive means of opening doors—just push and exit.
        </p>
        <p className="mb-4 text-gray-700">
          As certified commercial locksmiths, we specialize in the professional installation, repair, and maintenance of all types of emergency exit devices to ensure your business meets safety standards while maintaining proper security.
        </p>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-amber-800 mb-3">Regulatory Compliance Requirements</h3>
            <p className="text-gray-700 mb-3">
              Many businesses are <strong>legally required</strong> to have functioning emergency exit devices installed on certain doors. Local fire codes, building regulations, and occupational licensing requirements mandate these safety features.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fire departments often inspect emergency exits as part of occupancy certifications</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Business licenses may require proper emergency exit documentation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Insurance policies typically require compliance with local emergency exit regulations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>ADA compliance requires specific features for accessibility</span>
              </li>
            </ul>
            <p className="text-gray-700 font-medium">
              Non-compliance can result in fines, business closure, or liability issues in case of emergencies. Our technicians understand local code requirements and ensure your installation meets all necessary regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Emergency Exit Devices */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Types of Emergency Exit Devices We Install</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">Rim Exit Devices</h3>
            <p className="text-gray-700">The most common type of panic hardware, mounted on the interior surface of the door with a latch that extends to a strike on the frame.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">Mortise Lock Devices</h3>
            <p className="text-gray-700">Integrates with mortise locks for a clean appearance and additional functionality, suitable for higher security requirements.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">Vertical Rod Devices</h3>
            <p className="text-gray-700">Secures the door at both the top and bottom, ideal for double doors and providing enhanced security while maintaining emergency egress.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">Concealed Vertical Rod</h3>
            <p className="text-gray-700">Similar to vertical rod devices but with the rods hidden within the door for improved aesthetics and protection from tampering.</p>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <div className="flex items-start mb-4">
          <Info className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
          <h3 className="text-xl font-semibold text-primary">Advanced Features Available</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 ml-9">
          <div>
            <h4 className="text-lg font-medium text-primary mb-2">Electronic Integration</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>Access control system compatibility</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>Alarm connections for unauthorized use</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>Delayed egress options (where permitted by code)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-primary mb-2">Security Enhancements</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>Key-in-lever trim for exterior access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>Dogging functionality for high-traffic periods</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>Weather-resistant options for exterior doors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance & Inspection */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Maintenance & Inspection Services</h2>
        <p className="mb-4 text-gray-700">
          Regular maintenance and inspection of emergency exit devices isn't just good practice—it's often required by law. Our comprehensive maintenance services include:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="font-medium">Functionality Testing</span>
              <p className="text-gray-600">Ensuring smooth operation and immediate release when pressure is applied</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="font-medium">Hardware Inspection</span>
              <p className="text-gray-600">Checking for wear, proper mounting, and secure fasteners</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="font-medium">Lubrication & Adjustment</span>
              <p className="text-gray-600">Maintaining smooth operation and adjusting as needed for proper latching</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="font-medium">Compliance Documentation</span>
              <p className="text-gray-600">Providing inspection certificates for your records and regulatory requirements</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
