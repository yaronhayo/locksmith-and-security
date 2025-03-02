
import React from "react";

interface FormHeaderProps {
  locationName?: string;
}

const FormHeader = ({ locationName }: FormHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6 md:p-8 rounded-t-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
        Contact Your {locationName} Locksmith
      </h2>
      <p className="text-white/90 text-sm sm:text-base">
        Fill out the form below and our team will get back to you promptly
      </p>
      <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm text-white/80">
        <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
        <span>Quick Response</span>
        <span className="inline-block w-2 h-2 bg-green-400 rounded-full ml-3"></span>
        <span>24/7 Available</span>
      </div>
    </div>
  );
};

export default FormHeader;
