import React, { useEffect, useRef, useState } from 'react';
import { useRecaptchaKey } from '@/hooks/useApiKeys';
import { ScriptError, ScriptLoading, useScripts } from '@/components/providers/ScriptsProvider';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

// Keep track of existing reCAPTCHA instances to prevent duplicate initialization
const recaptchaInstances = new Map<string, number>();

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const [recaptchaId, setRecaptchaId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceIdRef = useRef<string>(`recaptcha-${Math.random().toString(36).substring(2, 9)}`);
  const { recaptchaLoaded, isLoadingRecaptcha, recaptchaError } = useScripts();
  const { data: siteKey, isLoading: isLoadingKey, error: keyError } = useRecaptchaKey();

  const isLoading = isLoadingRecaptcha || isLoadingKey;
  const error = recaptchaError || (keyError ? keyError.message : null);

  // Render the reCAPTCHA widget when everything is loaded
  useEffect(() => {
    if (!recaptchaLoaded || !siteKey || !containerRef.current) return;
    
    // Don't re-initialize if we already have an ID for this instance
    if (recaptchaId !== null) return;
    
    // Check if this container already has a reCAPTCHA
    const existingId = recaptchaInstances.get(instanceIdRef.current);
    if (existingId !== undefined) {
      setRecaptchaId(existingId);
      return;
    }
    
    try {
      console.log("Rendering new reCAPTCHA widget...");
      const id = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: onChange,
        'expired-callback': () => onChange(null),
      });
      
      // Store the ID for this instance
      recaptchaInstances.set(instanceIdRef.current, id);
      setRecaptchaId(id);
      console.log("reCAPTCHA widget rendered successfully");
    } catch (error) {
      console.error("Error rendering reCAPTCHA:", error);
    }

    // Clean up on unmount
    return () => {
      if (recaptchaId !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(recaptchaId);
          recaptchaInstances.delete(instanceIdRef.current);
        } catch (e) {
          console.error("Failed to reset reCAPTCHA on cleanup:", e);
        }
      }
    };
  }, [recaptchaLoaded, siteKey, onChange, recaptchaId]);

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
