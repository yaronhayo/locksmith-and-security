
import React from 'react';
import { CheckCircle2, Wrench, Shield, Clock, Award } from "lucide-react";

export const LockRepairContent = () => {
  return (
    <div className="service-content-wrapper">
      <p className="text-lg mb-6">
        Our professional lock repair service addresses a wide range of lock issues to restore security and functionality to your doors. 
        Whether you're dealing with a sticky lock, broken key in lock, misaligned components, or any other lock malfunction, 
        our skilled technicians can diagnose and resolve the problem efficiently.
      </p>

      <h3 className="text-xl font-semibold text-primary mt-6 mb-4">Common Lock Problems We Fix</h3>
      
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
          <span><strong>Sticky or Jammed Locks:</strong> Locks that are difficult to turn or completely stuck.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
          <span><strong>Misaligned Strike Plates:</strong> Causing the door to not close or lock properly.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
          <span><strong>Broken Keys in Locks:</strong> Extracting broken key pieces and repairing any internal damage.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
          <span><strong>Worn Internal Components:</strong> Replacing worn pins, springs, and other mechanisms.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
          <span><strong>Frozen Locks:</strong> Addressing locks that have seized due to weather conditions.</span>
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Our Lock Repair Process</h3>
      
      <p className="mb-4">We follow a systematic approach to ensure thorough and effective lock repair:</p>
      
      <div className="grid grid-cols-1 gap-4 mt-4 mb-8">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
          <h4 className="font-semibold text-primary flex items-center mb-2">
            <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
              <span className="text-primary font-bold">1</span>
            </div>
            Comprehensive Assessment
          </h4>
          <p className="text-gray-700 text-base">Our technician will examine your lock thoroughly to identify all issues, both obvious and hidden.</p>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
          <h4 className="font-semibold text-primary flex items-center mb-2">
            <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
              <span className="text-primary font-bold">2</span>
            </div>
            Detailed Explanation
          </h4>
          <p className="text-gray-700 text-base">We'll explain the problems found and recommend repair options tailored to your specific situation.</p>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
          <h4 className="font-semibold text-primary flex items-center mb-2">
            <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
              <span className="text-primary font-bold">3</span>
            </div>
            Precision Repair
          </h4>
          <p className="text-gray-700 text-base">Using specialized tools, we'll repair or replace damaged components to restore your lock's functionality.</p>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-100">
          <h4 className="font-semibold text-primary flex items-center mb-2">
            <div className="bg-secondary/20 w-6 h-6 rounded-full flex items-center justify-center mr-2">
              <span className="text-primary font-bold">4</span>
            </div>
            Quality Testing
          </h4>
          <p className="text-gray-700 text-base">We thoroughly test the repaired lock to ensure smooth operation and proper security function.</p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Types of Locks We Repair</h3>
      
      <p className="mb-4">Our technicians are experienced in repairing a wide variety of residential and commercial lock systems:</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {[
          "Deadbolts", "Knob Locks", "Lever Handles", "Mortise Locks", 
          "Rim Locks", "Euro Cylinders", "Smart Locks", "Antique Locks",
          "Cabinet Locks", "Padlocks", "Sliding Door Locks", "Window Locks"
        ].map((lockType) => (
          <div key={lockType} className="bg-white rounded-lg shadow-sm p-3 text-center border border-gray-100">
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-secondary/30 rounded-full mr-2"></div>
              <span className="font-medium text-gray-800">{lockType}</span>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Why Choose Our Lock Repair Services</h3>
      
      <ul className="space-y-4 mb-6">
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="font-semibold block text-gray-800">Certified Professionals</span>
            <span className="text-sm text-gray-600">Our technicians are fully licensed and insured</span>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
            <Wrench className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="font-semibold block text-gray-800">Specialized Equipment</span>
            <span className="text-sm text-gray-600">Professional-grade tools for precise repairs</span>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="font-semibold block text-gray-800">Fast Response</span>
            <span className="text-sm text-gray-600">Quick service when you need it most</span>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary/20 p-1.5 rounded-full mr-3 mt-0.5">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="font-semibold block text-gray-800">Quality Guarantee</span>
            <span className="text-sm text-gray-600">All our work is fully guaranteed</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LockRepairContent;
