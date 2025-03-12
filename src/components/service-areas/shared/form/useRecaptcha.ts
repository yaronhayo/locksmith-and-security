
import { useState, useCallback } from "react";

export const useRecaptcha = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  
  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  }, []);

  return {
    recaptchaToken,
    recaptchaError,
    handleRecaptchaChange
  };
};
