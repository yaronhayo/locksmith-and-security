
import React from 'react';
import { CheckCircle2, Key, Clock, Shield, Wrench, Car } from "lucide-react";

export const CarKeyDuplicateContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Professional Car Key Duplication Service</h2>
        <p className="mb-4">
          Our car key duplication service provides reliable, high-quality duplicate keys for all vehicle makes and models. Whether you need a spare key for emergencies or want to replace a worn-out key, our expert locksmiths use advanced equipment to create precise duplicates that work flawlessly with your vehicle.
        </p>
        <p className="mb-4">
          Having a spare key is not just convenient—it's a smart precaution that can save you time, money, and stress in case you lose your primary key. Our professional duplicate keys are cut with precision and programmed (when necessary) to ensure they function exactly like your original key.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-primary mb-4">Types of Car Keys We Duplicate</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Standard Mechanical Keys</h4>
              <p className="text-gray-600 text-sm">Basic metal keys for older vehicles that don't require programming</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Transponder Keys</h4>
              <p className="text-gray-600 text-sm">Keys with embedded chips that communicate with your vehicle's immobilizer</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Remote Key Fobs</h4>
              <p className="text-gray-600 text-sm">Combined keys with buttons for locking, unlocking and other functions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Smart Keys</h4>
              <p className="text-gray-600 text-sm">Proximity keys that allow keyless entry and push-button start</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-primary mb-4">Our Professional Key Duplication Process</h3>
        <p className="mb-4">
          We follow a meticulous process to ensure your duplicate car keys work perfectly every time:
        </p>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Key Assessment</span>
              <p className="text-gray-600 text-sm">We examine your original key to determine its type and specific requirements</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Precision Cutting</span>
              <p className="text-gray-600 text-sm">Using state-of-the-art key cutting machines for accurate duplication</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Transponder Programming</span>
              <p className="text-gray-600 text-sm">For keys with chips, we program them to sync with your vehicle's system</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Remote Function Programming</span>
              <p className="text-gray-600 text-sm">Setting up lock/unlock buttons and other remote functions</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Testing</span>
              <p className="text-gray-600 text-sm">We verify the duplicate key works flawlessly with your vehicle</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/5 to-white p-6 rounded-lg border border-primary/10">
        <h3 className="text-xl font-semibold text-primary mb-4">Benefits of Professional Car Key Duplication</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <Wrench className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Precision & Reliability</h4>
              <p className="text-gray-600 text-sm">Professional equipment creates keys that work consistently every time</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Quick Service</h4>
              <p className="text-gray-600 text-sm">Most duplicate keys can be made in under 30 minutes</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">Cost-Effective</h4>
              <p className="text-gray-600 text-sm">Save money compared to dealership prices for duplicate keys</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Car className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900">All Makes & Models</h4>
              <p className="text-gray-600 text-sm">We can duplicate keys for virtually any vehicle on the road</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-primary mb-4">When You Might Need Car Key Duplication</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>As a precaution to have spare keys for emergencies</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When sharing a vehicle with family members or partners</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>When your existing key shows signs of wear and tear</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>After purchasing a used vehicle with only one key</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>For businesses with fleet vehicles that need multiple keys</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
