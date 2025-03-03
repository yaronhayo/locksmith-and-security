
import React from 'react';
import { Link } from 'react-router-dom';

interface SubService {
  name: string;
  link: string;
}

interface ServiceSubservicesListProps {
  subServices: SubService[];
  subIcons: Record<string, React.ElementType>;
}

const ServiceSubservicesList: React.FC<ServiceSubservicesListProps> = ({ 
  subServices, 
  subIcons 
}) => {
  return (
    <div className="space-y-2 mb-6 w-full">
      {subServices.map((subService, subIndex) => {
        const SubIcon = subIcons[subService.name as keyof typeof subIcons];
        return (
          <div key={subIndex} className="flex items-center justify-center">
            <Link to={subService.link} className="flex items-center text-sm text-gray-600 py-1.5 hover:text-primary relative">
              {SubIcon && <SubIcon className="w-4 h-4 mr-2 text-primary/70" />}
              <span className="relative inline-block">
                {subService.name}
                <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-primary transition-all duration-300 hover:w-full"></span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSubservicesList;
