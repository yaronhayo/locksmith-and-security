
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface EmailFieldProps {
  email: string;
  error: string | null;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
}

const EmailField = ({ email, error, isSubmitting, handleChange, handleBlur }: EmailFieldProps) => {
  return (
    <div>
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        aria-invalid={!!error}
        aria-describedby={error ? "email-error" : undefined}
        placeholder="you@example.com"
        className={error ? "border-red-500" : ""}
        autoComplete="email"
      />
      {error && (
        <Alert variant="destructive" className="mt-1 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id="email-error">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default EmailField;
