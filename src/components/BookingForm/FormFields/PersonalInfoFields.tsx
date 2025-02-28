
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { formatPhoneNumber, getNameError, getPhoneError } from "@/utils/inputValidation";

interface PersonalInfoFieldsProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const PersonalInfoFields = ({ errors: externalErrors, isSubmitting }: PersonalInfoFieldsProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [internalErrors, setInternalErrors] = useState({
    name: null as string | null,
    phone: null as string | null
  });
  const [isDirty, setIsDirty] = useState({
    name: false,
    phone: false
  });

  // Show validation feedback as user types
  useEffect(() => {
    if (isDirty.name) {
      setInternalErrors(prev => ({ ...prev, name: getNameError(name) }));
    }
  }, [name, isDirty.name]);

  useEffect(() => {
    if (isDirty.phone) {
      setInternalErrors(prev => ({ ...prev, phone: getPhoneError(phone) }));
    }
  }, [phone, isDirty.phone]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!isDirty.name) setIsDirty(prev => ({ ...prev, name: true }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
    if (!isDirty.phone) setIsDirty(prev => ({ ...prev, phone: true }));
  };

  // Show the external error (from form submission) or the internal error (from validation)
  const nameError = externalErrors.name || (isDirty.name ? internalErrors.name : null);
  const phoneError = externalErrors.phone || (isDirty.phone ? internalErrors.phone : null);

  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-9 text-sm ${nameError ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="name"
          required
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          onBlur={() => setIsDirty(prev => ({ ...prev, name: true }))}
        />
        {nameError && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs" id="name-error">{nameError}</AlertDescription>
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
          className={`h-9 text-sm ${phoneError ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="tel"
          required
          placeholder="Enter your phone number"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={() => setIsDirty(prev => ({ ...prev, phone: true }))}
        />
        {phoneError && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs" id="phone-error">{phoneError}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default PersonalInfoFields;
