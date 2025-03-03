
import React, { useEffect, useRef, useState } from 'react';
import { useRecaptchaKey } from '@/hooks/useRecaptchaKey';
import { addDocTypeToIframe } from '@/utils/corsUtils';

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
  const [loadError, setLoadError] = useState<boolean>(false);
  const { data: recaptchaKey, isLoading, isError } = useRecaptchaKey();
  
  // Use the provided sitekey or the one from the hook
  const actualSitekey = sitekey || recaptchaKey || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Fallback to Google's test key

  useEffect(() => {
    // Check if grecaptcha is loaded
    if (typeof window.grecaptcha === 'undefined' || typeof window.grecaptcha.render !== 'function') {
      // Set a timeout to detect if reCAPTCHA fails to load
      const timeoutId = setTimeout(() => {
        if (typeof window.grecaptcha === 'undefined' || typeof window.grecaptcha.render !== 'function') {
          console.error('reCAPTCHA failed to load');
          setLoadError(true);
        }
      }, 5000); // 5 seconds timeout
      
      // Create script element dynamically if it doesn't exist
      const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
          clearTimeout(timeoutId);
          initializeRecaptcha();
        };
        
        script.onerror = () => {
          clearTimeout(timeoutId);
          console.error('Error loading reCAPTCHA script');
          setLoadError(true);
        };
        
        document.head.appendChild(script);
      } else {
        // Script already exists, check if it's loaded with intervals
        const checkInterval = setInterval(() => {
          if (typeof window.grecaptcha !== 'undefined' && typeof window.grecaptcha.render === 'function') {
            clearTimeout(timeoutId);
            clearInterval(checkInterval);
            initializeRecaptcha();
          }
        }, 100);
        
        // Clear the interval after 5 seconds to prevent memory leaks
        setTimeout(() => clearInterval(checkInterval), 5000);
      }
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
        setLoadError(true);
      }
    }
  };

  if (loadError || isError) {
    // Fallback UI for when reCAPTCHA fails to load
    return (
      <div className="border border-gray-300 rounded p-4 text-center">
        <p className="text-sm text-gray-600">Unable to load CAPTCHA verification.</p>
        <p className="text-xs text-gray-500 mt-1">Please ensure cookies are enabled and try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="g-recaptcha-loading">
        <div className="border border-gray-300 rounded p-4 bg-gray-50 flex items-center justify-center min-h-[78px]">
          <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div ref={recaptchaRef} className="g-recaptcha" data-sitekey={actualSitekey} data-size={size} />
  );
};

export default Recaptcha;
