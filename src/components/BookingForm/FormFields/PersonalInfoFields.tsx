
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { formatPhoneNumber } from "@/utils/inputValidation";
import { useFieldValidation } from "../hooks/useFieldValidation";
import { motion } from "framer-motion";

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
        <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-10 text-base transition-colors duration-200 ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-primary focus:ring-1 focus:ring-primary'}`}
          disabled={isSubmitting}
          autoComplete="name"
          required
          placeholder="Enter your name"
          value={values.name}
          onChange={handlers.handleNameChange}
          onBlur={() => handlers.markFieldAsDirty('name')}
        />
        {errors.name && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Alert variant="destructive" className="py-2 px-3 mt-1 bg-red-50">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs font-medium" id="name-error">{errors.name}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-10 text-base transition-colors duration-200 ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-primary focus:ring-1 focus:ring-primary'}`}
          disabled={isSubmitting}
          autoComplete="tel"
          required
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={handlePhoneChange}
          onBlur={() => handlers.markFieldAsDirty('phone')}
        />
        {errors.phone && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Alert variant="destructive" className="py-2 px-3 mt-1 bg-red-50">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs font-medium" id="phone-error">{errors.phone}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default PersonalInfoFields;
