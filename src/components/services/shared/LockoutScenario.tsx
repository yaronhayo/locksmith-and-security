
import React from 'react';

export interface LockoutScenarioProps {
  title: string;
  description: string;
}

const LockoutScenario = ({ title, description }: LockoutScenarioProps) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
      <h4 className="font-bold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default LockoutScenario;
