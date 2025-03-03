
import React, { useEffect, useRef } from 'react';
import { useRecaptchaKey } from '@/hooks/useRecaptchaKey';
import { fetchWithCors, addDocTypeToIframe } from '@/utils/corsUtils';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
  sitekey?: string;
  size?: 'normal' | 'compact' | 'invisible';
}

const Recaptcha: React.FC<RecaptchaProps> = ({
  onChange,
  sitekey,
  size = 'normal'
}) => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);
  const { recaptchaKey } = useRecaptchaKey();
  
  // Use the provided sitekey or the one from the hook
  const actualSitekey = sitekey || recaptchaKey;

  useEffect(() => {
    // Check if grecaptcha is loaded
    if (typeof window.grecaptcha === 'undefined' || typeof window.grecaptcha.render !== 'function') {
      // Create script element dynamically
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => {
        initializeRecaptcha();
      };
      
      document.head.appendChild(script);
    } else {
      initializeRecaptcha();
    }
    
    return () => {
      if (recaptchaWidgetId.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error);
        }
      }
    };
  }, [actualSitekey, size]);

  const initializeRecaptcha = () => {
    // Make sure the recaptcha ref is defined and grecaptcha is loaded
    if (!recaptchaRef.current || !window.grecaptcha || !window.grecaptcha.render) {
      setTimeout(initializeRecaptcha, 100);
      return;
    }
    
    // Check if we already have a widget ID
    if (recaptchaWidgetId.current !== null) {
      try {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      } catch (error) {
        console.error('Error resetting reCAPTCHA:', error);
        recaptchaWidgetId.current = null;
      }
    }
    
    // If we don't have a widget ID, render the recaptcha
    if (recaptchaWidgetId.current === null) {
      try {
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: actualSitekey,
          callback: (token: string) => {
            onChange(token);
          },
          'expired-callback': () => {
            onChange(null);
          },
          size: size
        });
        
        // Add DOCTYPE to reCAPTCHA iframes to resolve Quirks Mode issues
        setTimeout(() => {
          const iframes = document.querySelectorAll('iframe[src*="recaptcha"]');
          iframes.forEach(iframe => {
            addDocTypeToIframe(iframe as HTMLIFrameElement);
          });
        }, 1000);
      } catch (error) {
        console.error('Error rendering reCAPTCHA:', error);
      }
    }
  };

  return (
    <div ref={recaptchaRef} className="g-recaptcha" data-sitekey={actualSitekey} data-size={size} />
  );
};

export default Recaptcha;
