
import React from 'react';

interface FormHeaderProps {
  locationName?: string;
}

const FormHeader = ({ locationName }: FormHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
      <h2 className="text-xl sm:text-2xl font-bold">
        {locationName 
          ? `Contact Us in ${locationName}`
          : 'Contact Us Today'
        }
      </h2>
      <p className="mt-2 text-white/90">
        {locationName
          ? `Fast, reliable locksmith service in ${locationName}`
          : 'Fast, reliable locksmith service in your area'
        }
      </p>
    </div>
  );
};

export default FormHeader;
