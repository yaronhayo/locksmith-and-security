
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { formatPhoneNumber } from "@/utils/inputValidation";
import { useFieldValidation } from "../hooks/useFieldValidation";

interface PersonalInfoFieldsProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const PersonalInfoFields = ({ errors: externalErrors, isSubmitting }: PersonalInfoFieldsProps) => {
  const { 
    values, 
    handlers, 
    errors 
  } = useFieldValidation({ externalErrors });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    e.target.value = formattedPhone;
    handlers.handlePhoneChange(e);
  };

  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm text-gray-800">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-9 text-sm text-gray-900 placeholder:text-gray-500 ${errors.name ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="name"
          required
          placeholder="Enter your name"
          value={values.name}
          onChange={handlers.handleNameChange}
          onBlur={() => handlers.markFieldAsDirty('name')}
        />
        {errors.name && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs" id="name-error">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm text-gray-800">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-9 text-sm text-gray-900 placeholder:text-gray-500 ${errors.phone ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="tel"
          required
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={handlePhoneChange}
          onBlur={() => handlers.markFieldAsDirty('phone')}
        />
        {errors.phone && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs" id="phone-error">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default PersonalInfoFields;
