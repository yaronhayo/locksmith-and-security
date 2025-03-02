
import React from 'react';
import ProfessionalAdvantage from '../../shared/ProfessionalAdvantage';
import { Clock, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';

const advantages = [
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
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Our Professional Storage Unit Lockout Service</h3>
      
      <div className="my-6">
        {advantages.map((advantage, index) => (
          <ProfessionalAdvantage 
            key={index}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </>
  );
};

export default ProfessionalAdvantages;
