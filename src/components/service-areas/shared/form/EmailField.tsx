
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full px-3 sm:px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary`}
        required
        disabled={isSubmitting}
        aria-invalid={!!error}
        aria-describedby={error ? "email-error" : undefined}
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
