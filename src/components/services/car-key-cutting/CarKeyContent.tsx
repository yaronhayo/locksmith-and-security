
import React from 'react';
import { CheckCircle2, Key, Clock, Shield, Tool } from "lucide-react";

export const CarKeyContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Professional Car Key Cutting Service</h2>
        <p className="mb-4">
          Our car key cutting service provides precise, high-quality keys for all vehicle makes and models. Whether you need a replacement for a lost key or simply want a spare for convenience, our experienced locksmiths have the advanced equipment and expertise to deliver accurate results.
        </p>
        <p className="mb-4">
          Using state-of-the-art key cutting machines and quality key blanks, we ensure your new keys fit and function perfectly with your vehicle's locks. Our process is fast, reliable, and competitively priced.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-primary mb-4">Types of Car Keys We Cut</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Standard Mechanical Keys</h4>
              <p className="text-gray-600 text-sm">Basic metal keys for older vehicles without electronic components</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Laser-Cut/Sidewinder Keys</h4>
              <p className="text-gray-600 text-sm">Precision-cut keys with distinctive patterns, offering enhanced security</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">High-Security Keys</h4>
              <p className="text-gray-600 text-sm">Sophisticated key designs with complex patterns for maximum security</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Transponder Key Blanks</h4>
              <p className="text-gray-600 text-sm">Keys with space for embedded chips that require programming after cutting</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-primary mb-4">Our Professional Key Cutting Process</h3>
        <p className="mb-4">
          We follow a meticulous process to ensure your new car keys work perfectly every time:
        </p>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Vehicle Identification</span>
              <p className="text-gray-600 text-sm">We identify your exact vehicle make, model, and year to determine the correct key type</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Key Code Lookup</span>
              <p className="text-gray-600 text-sm">Using your VIN or existing key, we identify the exact key code for your vehicle</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Precision Cutting</span>
              <p className="text-gray-600 text-sm">Using computerized cutting machines for precise, accurate results</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Quality Inspection</span>
              <p className="text-gray-600 text-sm">Each key is inspected for perfect edges and proper dimensions</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Testing</span>
              <p className="text-gray-600 text-sm">We verify the key works smoothly in your vehicle's locks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/5 to-white p-6 rounded-lg border border-primary/10">
        <h3 className="text-xl font-semibold text-primary mb-4">Benefits of Professional Car Key Cutting</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <Tool className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Precision & Accuracy</h4>
              <p className="text-gray-600 text-sm">Professional equipment produces keys with exact measurements for perfect operation</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Fast Service</h4>
              <p className="text-gray-600 text-sm">Quick turnaround times, often providing new keys in under 30 minutes</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Quality Materials</h4>
              <p className="text-gray-600 text-sm">High-quality key blanks ensure durability and long-lasting performance</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Tool className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Expertise</h4>
              <p className="text-gray-600 text-sm">Professional locksmiths with extensive experience cutting keys for all vehicle types</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-primary mb-4">When You Might Need Car Key Cutting</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When you need spare keys for convenience or emergencies</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When your existing key is worn down and no longer works reliably</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When you've purchased a used vehicle with only one key</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When you need a new key blank before programming for modern vehicles</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When you've lost all your keys and need a complete replacement</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
