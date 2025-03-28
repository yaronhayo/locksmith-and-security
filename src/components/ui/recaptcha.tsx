
import React, { useEffect, useRef, useState } from 'react';
import { useRecaptchaKey } from '@/hooks/useApiKeys';
import { Skeleton } from './skeleton';
import { useScripts, ScriptError, ScriptLoading } from '@/components/providers/ScriptsProvider';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
  id?: string;
  name?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ 
  onChange, 
  id = 'g-recaptcha-response', 
  name = 'g-recaptcha-response',
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy 
}) => {
  const [recaptchaId, setRecaptchaId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { recaptchaLoaded, isLoadingRecaptcha, recaptchaError } = useScripts();
  const { data: siteKey, isLoading: isLoadingKey, error: keyError } = useRecaptchaKey();

  const isLoading = isLoadingRecaptcha || isLoadingKey;
  const error = recaptchaError || (keyError ? keyError.message : null);

  // Render the reCAPTCHA widget when everything is loaded
  useEffect(() => {
    // Clean up any existing widget first
    if (recaptchaId !== null && window.grecaptcha) {
      try {
        window.grecaptcha.reset(recaptchaId);
      } catch (e) {
        console.error("Failed to reset reCAPTCHA:", e);
      }
    }

    // Only attempt to render if everything is loaded and we have a site key
    if (!recaptchaLoaded || !siteKey || !containerRef.current) return;
    
    try {
      console.log("Rendering reCAPTCHA widget...");
      const widgetId = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: onChange,
        'expired-callback': () => onChange(null),
        'id': id,
        'name': name,
        'aria-required': 'true'
      });
      setRecaptchaId(widgetId);
      console.log("reCAPTCHA widget rendered successfully with ID:", id);
    } catch (error) {
      console.error("Error rendering reCAPTCHA:", error);
    }

    // Clean up on unmount
    return () => {
      if (recaptchaId !== null && window.grecaptcha) {
        try {
          // There's no direct "destroy" method, but we can reset it
          window.grecaptcha.reset(recaptchaId);
        } catch (e) {
          console.error("Failed to reset reCAPTCHA on cleanup:", e);
        }
      }
    };
  }, [recaptchaLoaded, siteKey, onChange, id, name]);

  if (isLoading) {
    return (
      <div className="flex justify-center my-4 w-full">
        <ScriptLoading type="recaptcha" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-4 w-full">
        <ScriptError type="recaptcha" error={error} />
      </div>
    );
  }

  return (
    <div className="flex justify-center my-4 w-full overflow-x-auto">
      <div 
        className="max-w-full" 
        ref={containerRef} 
        id="recaptcha-element"
        role="group"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      ></div>
      <span id="recaptcha-instructions" className="sr-only">
        Please complete the reCAPTCHA verification to submit the form
      </span>
    </div>
  );
};

export default Recaptcha;
