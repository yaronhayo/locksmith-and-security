
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Service {
  name: string;
  path: string;
  description: string;
}

interface RelatedServicesProps {
  services: Service[];
  currentServicePath: string;
  title?: string;
  className?: string;
}

const RelatedServices = ({
  services,
  currentServicePath,
  title = "Related Services",
  className = ""
}: RelatedServicesProps) => {
  // Filter out the current service
  const filteredServices = services.filter(
    service => service.path !== currentServicePath
  );
  
  if (filteredServices.length === 0) return null;
  
  return (
    <div className={`p-6 bg-gray-50 rounded-lg shadow-sm ${className}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4">
        {filteredServices.map((service, index) => (
          <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <Link 
              to={service.path} 
              className="group flex justify-between items-start hover:text-primary transition-colors"
            >
              <div>
                <h4 className="font-medium group-hover:text-primary transition-colors">{service.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedServices;
