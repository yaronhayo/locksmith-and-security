
import React from 'react';
import { Shield, Lock, Fingerprint, Smartphone, Users, Key, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AccessControlContent = () => {
  return (
    <div className="space-y-8">
      {/* Main introduction */}
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
      
      {/* Services section */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Access Control Solutions We Offer</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Keycard & Fob Systems</h3>
            </div>
            <p className="text-gray-700">
              Convenient contactless systems using cards or fobs that can be easily issued to employees and visitors. Ideal for businesses with moderate security needs and regular staff turnover.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Keypad Entry Systems</h3>
            </div>
            <p className="text-gray-700">
              Secure code-based entry systems with programmable access codes. Perfect for areas that need controlled access without requiring physical credentials.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Fingerprint className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Biometric Systems</h3>
            </div>
            <p className="text-gray-700">
              Advanced systems using fingerprint, retina scan, or facial recognition for the highest level of security. Eliminates credential sharing and provides definitive identification.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mobile Access Systems</h3>
            </div>
            <p className="text-gray-700">
              Modern smartphone-based access using secure Bluetooth or NFC technology. Offers convenience while maintaining robust security protocols.
            </p>
          </div>
        </div>
      </div>
      
      {/* Benefits section */}
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
      
      {/* Installation process */}
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
      
      {/* Call to action */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-3">Ready to Enhance Your Business Security?</h3>
        <p className="mb-4">
          Contact our commercial security experts today to schedule a consultation and discover how our access control solutions can protect your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-secondary hover:bg-secondary/90" asChild>
            <a href="tel:2017482070">Call (201) 748-2070</a>
          </Button>
          <Button variant="outline" className="border-primary text-primary" asChild>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessControlContent;
