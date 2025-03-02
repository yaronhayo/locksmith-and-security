
import React, { ReactNode } from 'react';
import { memo } from 'react';

export interface ExpertSolutionProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ExpertSolution = ({ icon, title, description, className }: ExpertSolutionProps) => {
  return (
    <div className={`bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-gray-200 ${className || ''}`}>
      <div className="flex items-center mb-3">
        <div className="text-primary">
          {icon}
        </div>
        <h4 className="font-bold text-lg ml-3">{title}</h4>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default memo(ExpertSolution);
