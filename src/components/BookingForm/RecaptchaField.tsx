
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
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <Recaptcha 
        onChange={onChange} 
      />
      
      {error && (
        <Alert variant="destructive" className="mt-2 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <p className="text-xs text-gray-500 mt-2">
        This site is protected by reCAPTCHA. By continuing, you accept Google's 
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary"> Privacy Policy </a> 
        and 
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary"> Terms of Service</a>.
      </p>
      
      {/* Hidden field to provide proper autocomplete attribute */}
      <input 
        type="hidden" 
        name="recaptcha-response"
        id="recaptcha-response"
        autoComplete="off"
      />
    </div>
  );
};

export default RecaptchaField;
