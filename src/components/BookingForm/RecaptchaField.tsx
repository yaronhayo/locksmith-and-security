
import React from "react";
import Recaptcha from "@/components/ui/recaptcha";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface RecaptchaFieldProps {
  onChange: (token: string | null) => void;
  error?: string;
  className?: string;
}

const RecaptchaField = ({ onChange, error, className = "" }: RecaptchaFieldProps) => {
  const recaptchaId = "g-recaptcha-response";
  
  return (
    <div className={`w-full overflow-x-auto ${className}`} id="recaptcha-container">
      <div className="mb-2">
        <span id="recaptcha-label" className="sr-only">reCAPTCHA verification</span>
        <Recaptcha 
          onChange={onChange} 
          id={recaptchaId} 
          name={recaptchaId} 
          aria-labelledby="recaptcha-label"
          aria-describedby={error ? "recaptcha-error" : "recaptcha-instructions"}
        />
      </div>
      
      {error && (
        <Alert variant="destructive" className="mt-2 py-2" role="alert" aria-live="assertive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id="recaptcha-error">{error}</AlertDescription>
        </Alert>
      )}
      
      <p className="text-xs text-gray-500 mt-2" id="recaptcha-instructions">
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
