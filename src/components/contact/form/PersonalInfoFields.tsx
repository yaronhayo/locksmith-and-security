
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { formatPhoneNumber, getNameError, getPhoneError } from "@/utils/inputValidation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface PersonalInfoFieldsProps {
  isSubmitting: boolean;
}

const PersonalInfoFields = ({ isSubmitting }: PersonalInfoFieldsProps) => {
  const nameId = "contact-name";
  const phoneId = "contact-phone";
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isPhoneDirty, setIsPhoneDirty] = useState(false);

  useEffect(() => {
    if (isNameDirty) {
      setNameError(getNameError(name));
    }
  }, [name, isNameDirty]);

  useEffect(() => {
    if (isPhoneDirty) {
      setPhoneError(getPhoneError(phone));
    }
  }, [phone, isPhoneDirty]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!isNameDirty) setIsNameDirty(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format the phone number as it's typed
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
    if (!isPhoneDirty) setIsPhoneDirty(true);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor={nameId} className="block text-sm font-medium mb-2">
          Full Name
        </Label>
        <Input 
          id={nameId}
          name="user_name" 
          required 
          placeholder="John Doe"
          disabled={isSubmitting}
          value={name}
          onChange={handleNameChange}
          onBlur={() => setIsNameDirty(true)}
          className={nameError ? 'border-red-500' : ''}
          aria-invalid={!!nameError}
          aria-describedby={nameError ? `${nameId}-error` : undefined}
          autoComplete="name"
        />
        {nameError && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id={`${nameId}-error`}>{nameError}</AlertDescription>
          </Alert>
        )}
      </div>
      <div>
        <Label htmlFor={phoneId} className="block text-sm font-medium mb-2">
          Phone Number
        </Label>
        <Input 
          id={phoneId}
          name="user_phone" 
          type="tel" 
          required 
          placeholder="(555) 555-5555"
          disabled={isSubmitting}
          value={phone}
          onChange={handlePhoneChange}
          onBlur={() => setIsPhoneDirty(true)}
          className={phoneError ? 'border-red-500' : ''}
          aria-invalid={!!phoneError}
          aria-describedby={phoneError ? `${phoneId}-error` : undefined}
          autoComplete="tel"
        />
        {phoneError && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription id={`${phoneId}-error`}>{phoneError}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoFields;
