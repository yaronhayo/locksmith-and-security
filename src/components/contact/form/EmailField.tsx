
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { getEmailError } from "@/utils/inputValidation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface EmailFieldProps {
  isSubmitting: boolean;
}

const EmailField = ({ isSubmitting }: EmailFieldProps) => {
  const emailId = "contact-email";
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (isDirty) {
      setError(getEmailError(value));
    }
  }, [value, isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isDirty) setIsDirty(true);
  };

  return (
    <div>
      <Label htmlFor={emailId} className="block text-sm font-medium mb-2">
        Email Address
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Mail className="h-4 w-4 text-gray-400" />
        </div>
        <Input 
          id={emailId}
          name="user_email" 
          type="email" 
          required 
          placeholder="john@example.com"
          disabled={isSubmitting}
          className={`pl-10 ${error ? 'border-red-500' : ''}`}
          value={value}
          onChange={handleChange}
          onBlur={() => setIsDirty(true)}
          aria-invalid={!!error}
          aria-describedby={error ? `${emailId}-error` : undefined}
          autoComplete="email"
        />
      </div>
      {error && (
        <Alert variant="destructive" className="mt-1 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id={`${emailId}-error`}>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default EmailField;
