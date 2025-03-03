
import React, { useState, useEffect } from "react";
import Recaptcha from "@/components/ui/recaptcha";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface RecaptchaFieldProps {
  onChange: (token: string | null) => void;
  error?: string;
  className?: string;
}

const RecaptchaField = ({ onChange, error, className = "" }: RecaptchaFieldProps) => {
  const [retryCount, setRetryCount] = useState(0);
  const [internalError, setInternalError] = useState<string | null>(null);
  
  // Reset internal error when props error changes
  useEffect(() => {
    if (error) {
      setInternalError(error);
    } else {
      setInternalError(null);
    }
  }, [error]);
  
  const handleRetry = () => {
    // Force a re-render of the component by incrementing the key
    setRetryCount(prev => prev + 1);
    setInternalError(null);
  };
  
  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setInternalError(null);
    }
    onChange(token);
  };
  
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <div 
        key={`recaptcha-${retryCount}`} 
        className="relative"
        // Apply a stable minimum height to prevent layout shifts
        style={{ minHeight: '78px' }}
      >
        <Recaptcha 
          onChange={handleRecaptchaChange} 
        />
      </div>
      
      {(internalError || error) && (
        <Alert variant="destructive" className="mt-2 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between w-full">
            <span>{internalError || error}</span>
            <button 
              type="button"
              onClick={handleRetry}
              className="text-xs flex items-center hover:text-primary"
            >
              <RefreshCw className="h-3 w-3 mr-1" /> Retry CAPTCHA
            </button>
          </AlertDescription>
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
