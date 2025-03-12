
import React from "react";
import { Wrench } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ServiceFieldProps {
  service: string;
  error: string | null;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ServiceField = ({ service, error, isSubmitting, handleChange }: ServiceFieldProps) => {
  return (
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Wrench className="h-4 w-4 text-gray-400" />
        </div>
        <select
          id="service"
          name="service"
          value={service}
          onChange={handleChange}
          className={`w-full pl-10 pr-3 py-2 sm:py-2.5 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base appearance-none`}
          required
          disabled={isSubmitting}
          aria-invalid={!!error}
          aria-describedby={error ? "service-error" : undefined}
        >
          <option value="">Select a service</option>
          <option value="Emergency Lockout">Emergency Lockout</option>
          <option value="Lock Replacement">Lock Replacement</option>
          <option value="Lock Rekey">Lock Rekey</option>
          <option value="Key Duplication">Key Duplication</option>
          <option value="Broken Key Extraction">Broken Key Extraction</option>
          <option value="Car Key Replacement">Car Key Replacement</option>
          <option value="Car Lockout">Car Lockout</option>
          <option value="Safe Unlocking">Safe Unlocking</option>
          <option value="Security Assessment">Security Assessment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {error && (
        <Alert variant="destructive" className="mt-1 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id="service-error">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ServiceField;
