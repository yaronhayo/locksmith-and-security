
import React, { useEffect, useRef } from 'react';
import { useScripts } from '@/components/providers/ScriptsProvider';
import { Skeleton } from './skeleton';
import { Alert, AlertDescription } from './alert';
import { AlertCircle } from 'lucide-react';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const { recaptchaKey, recaptchaStatus, recaptchaError } = useScripts();
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Only initialize when recaptcha is loaded and we have a key
    if (recaptchaStatus !== 'loaded' || !recaptchaKey || !containerRef.current) return;
    
    // If already initialized, don't initialize again
    if (widgetIdRef.current !== null) return;

    try {
      // Wait for grecaptcha to be available
      if (!window.grecaptcha?.render) {
        console.log('Waiting for grecaptcha to be fully loaded...');
        const checkInterval = setInterval(() => {
          if (window.grecaptcha?.render) {
            clearInterval(checkInterval);
            renderCaptcha();
          }
        }, 100);
        
        return () => clearInterval(checkInterval);
      } else {
        renderCaptcha();
      }
    } catch (error) {
      console.error('Error initializing reCAPTCHA:', error);
    }
    
    function renderCaptcha() {
      try {
        console.log('Rendering reCAPTCHA');
        
        // Clear any existing reCAPTCHA if present
        if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
        
        // Render the new widget
        widgetIdRef.current = window.grecaptcha.render(containerRef.current!, {
          'sitekey': recaptchaKey,
          'callback': onChange,
          'expired-callback': () => onChange(null)
        });
      } catch (error) {
        console.error('Error rendering reCAPTCHA:', error);
      }
    }
    
    // Cleanup
    return () => {
      if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [recaptchaKey, recaptchaStatus, onChange]);

  if (recaptchaStatus === 'loading') {
    return <Skeleton className="h-[78px] w-full max-w-[304px] mx-auto" />;
  }

  if (recaptchaStatus === 'error' || recaptchaError) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {recaptchaError?.message || 'Failed to load reCAPTCHA'}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex justify-center my-4 w-full overflow-x-auto">
      <div ref={containerRef} className="g-recaptcha"></div>
    </div>
  );
};

export default Recaptcha;
