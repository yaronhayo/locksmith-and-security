
import React from 'react';
import { Clock, ShieldCheck, Award } from "lucide-react";

const ServiceTrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 flex flex-col items-center text-center">
        <Clock className="h-8 w-8 text-secondary mb-2" />
        <h3 className="text-base font-semibold text-gray-800 mb-1">Fast Response</h3>
        <p className="text-sm text-gray-600">Available 24/7 for emergency assistance</p>
      </div>
      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 flex flex-col items-center text-center">
        <ShieldCheck className="h-8 w-8 text-secondary mb-2" />
        <h3 className="text-base font-semibold text-gray-800 mb-1">Licensed Experts</h3>
        <p className="text-sm text-gray-600">Fully insured professional technicians</p>
      </div>
      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 flex flex-col items-center text-center">
        <Award className="h-8 w-8 text-secondary mb-2" />
        <h3 className="text-base font-semibold text-gray-800 mb-1">Satisfaction Guaranteed</h3>
        <p className="text-sm text-gray-600">Quality workmanship you can trust</p>
      </div>
    </div>
  );
};

export default ServiceTrustBadges;
