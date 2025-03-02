
import React, { ReactNode } from 'react';

export interface ExpertSolutionProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ExpertSolution = ({ icon, title, description }: ExpertSolutionProps) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-3">
        {icon}
        <h4 className="font-bold text-lg ml-3">{title}</h4>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ExpertSolution;
