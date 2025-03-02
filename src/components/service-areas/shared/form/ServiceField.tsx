
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ServiceFieldProps {
  service: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string | null;
}

const ServiceField = ({ service, isSubmitting, handleChange, error }: ServiceFieldProps) => {
  return (
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
      <select
        id="service"
        name="service"
        value={service}
        onChange={handleChange}
        className={`w-full px-3 sm:px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base`}
        required
        disabled={isSubmitting}
        aria-invalid={!!error}
        aria-describedby={error ? "service-error" : undefined}
      >
        <option value="">Select a service</option>
        <optgroup label="Emergency Services">
          <option value="residential">Residential Lockout</option>
          <option value="commercial">Commercial Lockout</option>
          <option value="automotive">Car Lockout</option>
          <option value="storage">Storage Unit Lockout</option>
        </optgroup>
        <optgroup label="Residential Services">
          <option value="residential-lock-replacement">Lock Replacement</option>
          <option value="residential-lock-rekey">Lock Rekey</option>
          <option value="residential-lock-repair">Lock Repair</option>
          <option value="gate-locks">Gate Locks</option>
        </optgroup>
        <optgroup label="Commercial Services">
          <option value="commercial-lock-replacement">Commercial Lock Replacement</option>
          <option value="commercial-lock-rekey">Commercial Lock Rekey</option>
          <option value="master-key">Master Key System</option>
          <option value="access-control">Access Control</option>
          <option value="emergency-exit">Emergency Exit Device</option>
        </optgroup>
        <optgroup label="Automotive Services">
          <option value="car-key-replacement">Car Key Replacement</option>
          <option value="key-fob-programming">Key Fob Programming</option>
          <option value="car-key-duplicate">Car Key Duplicate</option>
          <option value="car-key-cutting">Car Key Cutting</option>
          <option value="ignition-repair">Ignition Repair</option>
        </optgroup>
        <option value="other">Other</option>
      </select>
      
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
