
import React, { useEffect, useRef, useState } from 'react';
import { useRecaptchaKey } from '@/hooks/useApiKeys';
import { ScriptError, ScriptLoading, useScripts } from '@/components/providers/ScriptsProvider';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const [recaptchaId, setRecaptchaId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const renderAttempted = useRef<boolean>(false);
  const { recaptchaLoaded, isLoadingRecaptcha, recaptchaError } = useScripts();
  const { data: siteKey, isLoading: isLoadingKey, error: keyError } = useRecaptchaKey();

  const isLoading = isLoadingRecaptcha || isLoadingKey;
  const error = recaptchaError || (keyError ? keyError.message : null);

  // Render the reCAPTCHA widget when everything is loaded
  useEffect(() => {
    // Only attempt to render if everything is loaded and we have a site key
    if (!recaptchaLoaded || !siteKey || !containerRef.current) return;
    
    // Prevent duplicate rendering attempts
    if (renderAttempted.current) return;
    renderAttempted.current = true;
    
    try {
      console.log("Rendering reCAPTCHA widget...");
      
      // Check if reCAPTCHA is already rendered in this container
      if (containerRef.current.firstChild) {
        console.log("reCAPTCHA already rendered in this container, skipping");
        return;
      }
      
      const id = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: onChange,
        'expired-callback': () => onChange(null),
      });
      setRecaptchaId(id);
      console.log("reCAPTCHA widget rendered successfully");
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
      <div className="max-w-full" ref={containerRef}></div>
    </div>
  );
};

export default Recaptcha;
