
import React from "react";

interface FormHeaderProps {
  locationName?: string;
}

const FormHeader = ({ locationName }: FormHeaderProps) => {
  return (
    <div className="bg-primary text-white px-4 sm:px-6 py-4 sm:py-5 rounded-t-xl">
      <h2 className="text-xl sm:text-2xl font-bold">
        {locationName 
          ? `Contact Our ${locationName} Locksmith Team` 
          : "Contact Our Locksmith Team"}
      </h2>
      <p className="mt-1 text-sm sm:text-base opacity-90">
        Send us a message and we'll get back to you within 1 hour
      </p>
    </div>
  );
};

export default FormHeader;
