
import React from 'react';
import { FormState, FormErrors } from './useServiceAreaForm';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { formatPhoneNumber } from "@/utils/inputValidation";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import AddressAutocomplete from "@/components/ui/address-autocomplete";

interface ContactFieldsProps {
  formState: FormState;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (field: string) => void;
}

const ContactFields = ({ 
  formState, 
  errors, 
  isSubmitting, 
  handleChange, 
  handleBlur 
}: ContactFieldsProps) => {
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    e.target.value = formattedPhone;
    handleChange(e);
  };

  const handleAddressChange = (value: string) => {
    const event = {
      target: {
        name: 'address',
        value
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    handleChange(event);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Your full name"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id="name-error">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formState.phone}
          onChange={handlePhoneChange}
          onBlur={() => handleBlur('phone')}
          disabled={isSubmitting}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          placeholder="(555) 555-5555"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id="phone-error">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <div>
        <Label htmlFor="address">Address</Label>
        <GoogleMapsProvider>
          <AddressAutocomplete
            id="address"
            name="address"
            value={formState.address}
            onChange={handleAddressChange}
            onBlur={() => handleBlur('address')}
            disabled={isSubmitting}
            placeholder="Enter your address"
            className={errors.address ? "border-red-500" : ""}
          />
        </GoogleMapsProvider>
        {errors.address && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id="address-error">{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ContactFields;
