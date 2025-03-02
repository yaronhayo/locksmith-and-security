
import React, { ReactNode } from 'react';

interface ProfessionalAdvantageProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const ProfessionalAdvantage = ({ icon, title, description }: ProfessionalAdvantageProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-start">
        {icon && <div className="mr-3 text-primary">{icon}</div>}
        <div>
          <h4 className="font-bold mb-2">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalAdvantage;
