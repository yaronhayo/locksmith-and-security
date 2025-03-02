
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { formatPhoneNumber } from "@/utils/inputValidation";

interface ContactFieldsProps {
  formState: {
    name: string;
    email: string;
    phone: string;
  };
  errors: {
    name: string | null;
    email: string | null;
    phone: string | null;
  };
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (field: 'name' | 'email' | 'phone') => void;
}

const ContactFields = ({ 
  formState, 
  errors, 
  isSubmitting, 
  handleChange, 
  handleBlur 
}: ContactFieldsProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          className={`w-full px-3 sm:px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary`}
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id="name-error">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          onBlur={() => handleBlur('phone')}
          className={`w-full px-3 sm:px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary`}
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id="phone-error">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ContactFields;
