
import React from 'react';
import { cn } from '@/lib/utils';

interface LockoutIntroProps {
  serviceType: 'business' | 'storage-unit' | 'house' | 'car';
  className?: string;
}

const introText = {
  'business': 'Being locked out of your business can disrupt operations, delay employees, and potentially cost you money. Our professional business lockout service provides quick and reliable assistance to get you back inside your commercial property with minimal downtime.',
  'storage-unit': 'Being locked out of your storage unit can be a major inconvenience, especially when you need to access your stored belongings urgently. Our professional storage unit lockout service provides quick and reliable assistance to regain access to your unit without causing damage.',
  'house': 'Being locked out of your home can be stressful and inconvenient. Our professional residential lockout service provides quick and reliable assistance to get you back inside your house with minimal hassle.',
  'car': 'Being locked out of your vehicle can disrupt your day and leave you stranded. Our professional car lockout service provides quick and reliable assistance to get you back inside your vehicle without causing damage.'
};

const LockoutIntro = ({ serviceType, className }: LockoutIntroProps) => {
  return (
    <p className={cn("mb-4", className)}>
      {introText[serviceType]}
    </p>
  );
};

export default LockoutIntro;
