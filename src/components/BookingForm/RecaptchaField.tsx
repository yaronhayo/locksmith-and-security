
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
      <Recaptcha onChange={onChange} />
      
      {error && (
        <Alert variant="destructive" className="mt-2 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
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
