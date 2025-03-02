
import React from 'react';
import ProfessionalAdvantage from '../../shared/ProfessionalAdvantage';
import { Clock, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';

const advantages = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "24/7 Emergency Response",
    description: "We understand that business lockouts can happen at any time. Our locksmiths are available 24/7 to provide immediate assistance."
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Licensed and Insured Professionals",
    description: "All our locksmiths are fully licensed, insured, and certified to work on commercial properties."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Damage-Free Entry Methods",
    description: "We use non-destructive entry techniques whenever possible to avoid causing damage to your business doors and locks."
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Specialized Commercial Equipment",
    description: "Our mobile units are equipped with specialized tools and technology for all types of commercial locks and security systems."
  }
];

const ProfessionalAdvantages = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Our Professional Business Lockout Service</h3>
      
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
