
import React from 'react';

const ServiceTrustBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-8 py-4 border-y border-gray-100">
      <div className="flex items-center gap-2">
        <img src="/images/badges/licensed-badge.svg" alt="Licensed" className="w-8 h-8" />
        <span className="text-sm font-medium">Licensed</span>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/badges/insured-badge.svg" alt="Insured" className="w-8 h-8" />
        <span className="text-sm font-medium">Insured</span>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/badges/satisfaction-badge.svg" alt="Satisfaction Guaranteed" className="w-8 h-8" />
        <span className="text-sm font-medium">Satisfaction Guaranteed</span>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/badges/fast-badge.svg" alt="Fast Response" className="w-8 h-8" />
        <span className="text-sm font-medium">Fast Response</span>
      </div>
    </div>
  );
};

export default ServiceTrustBadges;
