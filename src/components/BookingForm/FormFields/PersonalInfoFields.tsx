
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { formatPhoneNumber } from "@/utils/inputValidation";

interface PersonalInfoFieldsProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const PersonalInfoFields = ({
  name,
  setName,
  phone,
  setPhone,
  errors,
  isSubmitting
}: PersonalInfoFieldsProps) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-9 text-sm ${errors.name ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="name"
          required
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs" id="name-error">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-9 text-sm ${errors.phone ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="tel"
          required
          placeholder="Enter your phone number"
          value={phone}
          onChange={handlePhoneChange}
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
