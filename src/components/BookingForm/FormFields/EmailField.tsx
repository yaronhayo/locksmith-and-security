
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface EmailFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error: string | null;
  isSubmitting: boolean;
  required?: boolean;
}

const EmailField = ({ 
  value, 
  onChange, 
  onBlur, 
  error, 
  isSubmitting, 
  required = true 
}: EmailFieldProps) => {
  const emailId = "booking-email";
  const emailErrorId = "booking-email-error";
  
  return (
    <div className="space-y-1.5">
      <Label htmlFor={emailId} className="text-sm">Email Address</Label>
      <Input
        id={emailId}
        name="email"
        type="email"
        aria-describedby={error ? emailErrorId : undefined}
        aria-invalid={!!error}
        className={`h-9 text-sm ${error ? 'border-red-500' : ''}`}
        disabled={isSubmitting}
        autoComplete="email"
        required={required}
        placeholder="Enter your email address"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && (
        <Alert variant="destructive" className="py-2 px-3">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-xs" id={emailErrorId}>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default EmailField;
