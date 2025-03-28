
import React, { useEffect, useRef, useState } from 'react';
import { useRecaptchaKey } from '@/hooks/useApiKeys';
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
    // Only attempt to render if everything is loaded and we have a site key
    if (!recaptchaLoaded || !siteKey || !containerRef.current) return;
    
    // Wait a brief moment to ensure grecaptcha is fully initialized
    const renderTimer = setTimeout(() => {
      try {
        console.log("Attempting to render reCAPTCHA widget...");
        
        if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
          console.error("reCAPTCHA not fully loaded yet. grecaptcha:", window.grecaptcha);
          return;
        }
        
        // Clean up any existing widget first
        if (recaptchaId !== null) {
          try {
            window.grecaptcha.reset(recaptchaId);
          } catch (e) {
            console.error("Failed to reset reCAPTCHA:", e);
          }
        }
        
        const widgetId = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: onChange,
          'expired-callback': () => onChange(null),
          'error-callback': () => onChange(null)
        });
        setRecaptchaId(widgetId);
        console.log("reCAPTCHA widget rendered successfully with ID:", widgetId);
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error);
      }
    }, 300); // Short delay to ensure script is fully initialized
    
    return () => {
      clearTimeout(renderTimer);
      if (recaptchaId !== null && window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
        try {
          window.grecaptcha.reset(recaptchaId);
        } catch (e) {
          console.error("Failed to reset reCAPTCHA on cleanup:", e);
        }
      }
    };
  }, [recaptchaLoaded, siteKey, onChange]);

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
