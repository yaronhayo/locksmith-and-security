
import React from "react";
import Recaptcha from "@/components/ui/recaptcha";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface RecaptchaFieldProps {
  onChange: (token: string | null) => void;
  error?: string;
  className?: string;
  id?: string;
}

const RecaptchaField = ({ onChange, error, className = "", id = "recaptcha-field" }: RecaptchaFieldProps) => {
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;
  
  return (
    <div className={`w-full overflow-x-auto ${className}`} id={id} aria-describedby={descriptionId}>
      <Recaptcha onChange={onChange} id={`${id}-widget`} />
      
      {error && (
        <Alert variant="destructive" className="mt-2 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id={errorId}>{error}</AlertDescription>
        </Alert>
      )}
      
      <p id={descriptionId} className="text-xs text-gray-500 mt-2">
        This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy" className="text-secondary hover:underline mx-1" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        and
        <a href="https://policies.google.com/terms" className="text-secondary hover:underline mx-1" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        apply.
      </p>
    </div>
  );
};

export default RecaptchaField;
