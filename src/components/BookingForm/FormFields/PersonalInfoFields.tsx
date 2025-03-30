
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

  const nameErrorId = "name-error-field";
  const phoneErrorId = "phone-error-field";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    e.target.value = formattedPhone;
    handlers.handlePhoneChange(e);
  };

  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby={errors.name ? nameErrorId : undefined}
          aria-invalid={!!errors.name}
          className={`h-9 text-sm ${errors.name ? 'border-red-500' : ''}`}
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
            <AlertDescription className="text-xs" id={nameErrorId}>{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby={errors.phone ? phoneErrorId : undefined}
          aria-invalid={!!errors.phone}
          className={`h-9 text-sm ${errors.phone ? 'border-red-500' : ''}`}
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
            <AlertDescription className="text-xs" id={phoneErrorId}>{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default PersonalInfoFields;
