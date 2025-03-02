
import React from 'react';
import ProfessionalAdvantage from './ProfessionalAdvantage';
import { LucideIcon } from 'lucide-react';

export interface AdvantageItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProfessionalAdvantagesSectionProps {
  title: string;
  advantages: AdvantageItem[];
}

const ProfessionalAdvantagesSection = ({ title, advantages }: ProfessionalAdvantagesSectionProps) => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">{title}</h3>
      
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

export default ProfessionalAdvantagesSection;
