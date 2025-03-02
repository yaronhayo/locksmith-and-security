
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, User, Phone } from "lucide-react";
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
  // Custom phone input handler to format as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Create a synthetic event with the formatted value
    const formattedEvent = {
      ...e,
      target: {
        ...e.target,
        name: 'phone',
        value: formatPhoneNumber(e.target.value)
      }
    };
    
    handleChange(formattedEvent);
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            className={`w-full pl-10 pr-3 py-2 sm:py-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base`}
            placeholder="John Smith"
            required
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </div>
        {errors.name && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id="name-error">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handlePhoneChange}
            onBlur={() => handleBlur('phone')}
            className={`w-full pl-10 pr-3 py-2 sm:py-2.5 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base`}
            placeholder="(555) 123-4567"
            required
            disabled={isSubmitting}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </div>
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
