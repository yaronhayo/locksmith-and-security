
import React from "react";

interface FormHeaderProps {
  locationName?: string;
}

const FormHeader = ({ locationName }: FormHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
        Contact Your {locationName} Locksmith
      </h2>
      <p className="text-white/90 text-sm sm:text-base">
        Fill out the form below and our team will get back to you promptly
      </p>
    </div>
  );
};

export default FormHeader;
