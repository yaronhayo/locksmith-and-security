
import React from 'react';
import LockoutScenario, { LockoutScenarioProps } from './LockoutScenario';

interface LockoutScenariosSectionProps {
  title: string;
  scenarios: LockoutScenarioProps[];
}

const LockoutScenariosSection = ({ title, scenarios }: LockoutScenariosSectionProps) => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">{title}</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless customers with various lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        {scenarios.map((scenario, index) => (
          <LockoutScenario 
            key={index}
            title={scenario.title}
            description={scenario.description}
          />
        ))}
      </div>
    </>
  );
};

export default LockoutScenariosSection;
