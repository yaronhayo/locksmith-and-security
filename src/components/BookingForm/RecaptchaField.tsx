
import React from "react";
import RecaptchaWrapper from "@/components/Recaptcha"; // Fixed import here too
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
      <RecaptchaWrapper onChange={onChange} error={error} />
      
      <p className="text-xs text-gray-500 mt-2">
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
