
import { useState, useCallback, useEffect } from "react";

export interface RecaptchaState {
  recaptchaToken: string | null;
  recaptchaError: string | null;
  isRecaptchaValid: boolean;
  setRecaptchaError: (error: string | null) => void;
  resetRecaptcha: () => void;
  handleRecaptchaChange: (token: string | null) => void;
}

export const useRecaptcha = (): RecaptchaState => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [isRecaptchaValid, setIsRecaptchaValid] = useState<boolean>(false);
  
  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setIsRecaptchaValid(Boolean(token));
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  }, []);
  
  const resetRecaptcha = useCallback(() => {
    setRecaptchaToken(null);
    setIsRecaptchaValid(false);
    setRecaptchaError(null);
    
    // Reset the reCAPTCHA widget if it exists
    if (typeof window !== 'undefined' && window.grecaptcha) {
      try {
        window.grecaptcha.reset();
      } catch (e) {
        console.warn("Failed to reset reCAPTCHA:", e);
      }
    }
  }, []);
  
  // Set error state when token expires
  useEffect(() => {
    if (!recaptchaToken) return;
    
    // reCAPTCHA tokens expire after 2 minutes
    const tokenTimeout = setTimeout(() => {
      setRecaptchaError("reCAPTCHA verification expired. Please verify again.");
      setIsRecaptchaValid(false);
    }, 2 * 60 * 1000);
    
    return () => clearTimeout(tokenTimeout);
  }, [recaptchaToken]);

  return {
    recaptchaToken,
    recaptchaError,
    isRecaptchaValid,
    setRecaptchaError,
    resetRecaptcha,
    handleRecaptchaChange
  };
};

export default useRecaptcha;
