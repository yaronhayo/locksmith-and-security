
import React from "react";

interface ServiceFieldProps {
  service: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ServiceField = ({ service, isSubmitting, handleChange }: ServiceFieldProps) => {
  return (
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
      <select
        id="service"
        name="service"
        value={service}
        onChange={handleChange}
        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
        required
        disabled={isSubmitting}
      >
        <option value="">Select a service</option>
        <option value="residential">Residential Locksmith</option>
        <option value="commercial">Commercial Locksmith</option>
        <option value="automotive">Automotive Locksmith</option>
        <option value="emergency">Emergency Lockout</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default ServiceField;
