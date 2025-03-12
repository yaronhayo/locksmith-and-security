
import { useState, useCallback } from "react";

export const useRecaptcha = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  
  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  }, []);

  const handleRecaptchaLoad = useCallback(() => {
    setIsRecaptchaLoaded(true);
  }, []);

  return {
    recaptchaToken,
    recaptchaError,
    setRecaptchaError,
    handleRecaptchaChange,
    isRecaptchaLoaded,
    handleRecaptchaLoad
  };
};
