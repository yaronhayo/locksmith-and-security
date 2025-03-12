
import { useState, useEffect } from "react";

export const useRecaptchaScript = (
  recaptchaKey: string | undefined,
  isLoadingRecaptchaKey: boolean,
  recaptchaKeyError: Error | null
) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoadingRecaptchaKey || !recaptchaKey || recaptchaKeyError) return;
    if (recaptchaLoaded) return;

    // Check if script is already loaded
    if (window.grecaptcha) {
      console.log("reCAPTCHA already loaded");
      setRecaptchaLoaded(true);
      return;
    }

    console.log("Loading reCAPTCHA script...");
    const scriptId = 'recaptcha-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
    }

    const handleLoad = () => {
      console.log("reCAPTCHA script loaded successfully");
      setRecaptchaLoaded(true);
      setRecaptchaError(null);
      document.dispatchEvent(new Event('recaptcha-loaded'));
    };

    const handleError = () => {
      console.error("Failed to load reCAPTCHA script");
      setRecaptchaError("Failed to load reCAPTCHA");
      script.remove();
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [recaptchaKey, isLoadingRecaptchaKey, recaptchaKeyError, recaptchaLoaded]);

  return { recaptchaLoaded, recaptchaError, setRecaptchaLoaded };
};
