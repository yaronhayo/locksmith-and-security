
import React from 'react';
import ProfessionalAdvantagesSection, { AdvantageItem } from '../../shared/ProfessionalAdvantagesSection';
import { Clock, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';

const storageUnitAdvantages: AdvantageItem[] = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Response Time",
    description: "We understand the urgency of storage unit lockouts and arrive quickly to help you regain access to your belongings."
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Licensed and Insured",
    description: "All our locksmiths are fully licensed, insured, and background-checked for your peace of mind."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Non-Destructive Methods",
    description: "We use specialized techniques to open locks without causing damage to your storage unit whenever possible."
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Comprehensive Solutions",
    description: "Beyond just unlocking, we can replace locks, provide new keys, and offer security recommendations for your storage unit."
  }
];

const ProfessionalAdvantages = () => {
  return (
    <ProfessionalAdvantagesSection 
      title="Why Choose Our Professional Storage Unit Lockout Service"
      advantages={storageUnitAdvantages}
    />
  );
};

export default ProfessionalAdvantages;
