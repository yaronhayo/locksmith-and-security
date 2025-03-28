
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Mail } from "lucide-react";

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
      <label htmlFor="email-field" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="email"
          id="email-field"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full pl-10 pr-3 py-2 sm:py-2.5 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base`}
          placeholder="your@email.com"
          required
          disabled={isSubmitting}
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
        />
      </div>
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
