
import React from 'react';

interface LockoutScenarioProps {
  title: string;
  description: string;
}

const LockoutScenario = ({ title, description }: LockoutScenarioProps) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default LockoutScenario;
