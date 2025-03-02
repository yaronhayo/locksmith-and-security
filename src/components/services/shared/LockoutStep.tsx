
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { memo } from 'react';

export interface LockoutStepProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const LockoutStep = ({ 
  title, 
  description, 
  icon = <CheckCircle className="h-5 w-5" />,
  className 
}: LockoutStepProps) => {
  return (
    <div className={`flex ${className || ''}`}>
      <div className="mr-4 mt-1">
        <div className="flex items-center justify-center bg-primary/10 rounded-full p-2 text-primary">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default memo(LockoutStep);
