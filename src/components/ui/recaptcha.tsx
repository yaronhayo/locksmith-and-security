import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [scriptLoading, setScriptLoading] = useState<boolean>(false);
  const { data: recaptchaKey, isLoading, isError } = useRecaptchaKey();
  
  const actualSitekey = sitekey || recaptchaKey || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Fallback to Google's test key

  const isRecaptchaAvailable = useCallback(() => {
    return typeof window !== 'undefined' && 
           typeof window.grecaptcha !== 'undefined' && 
           typeof window.grecaptcha.render === 'function';
  }, []);
  
  const resetState = useCallback(() => {
    console.log('Resetting reCAPTCHA state');
    setLoadError(false);
    
    if (recaptchaWidgetId.current !== null && isRecaptchaAvailable()) {
      try {
        window.grecaptcha.reset(recaptchaWidgetId.current);
        console.log('Reset existing reCAPTCHA widget');
      } catch (error) {
        console.error('Error resetting reCAPTCHA widget:', error);
        recaptchaWidgetId.current = null;
      }
    }
  }, [isRecaptchaAvailable]);
  
  const loadRecaptchaScript = useCallback(() => {
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      console.log('reCAPTCHA script is already loading or loaded');
      return;
    }
    
    if (scriptLoading) {
      console.log('reCAPTCHA script is already in the process of loading');
      return;
    }
    
    console.log('Loading reCAPTCHA script dynamically');
    setScriptLoading(true);
    
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.id = 'recaptcha-script';
    
    script.onload = () => {
      console.log('reCAPTCHA script loaded successfully');
      setScriptLoaded(true);
      setScriptLoading(false);
      
      setTimeout(() => {
        if (isRecaptchaAvailable() && recaptchaRef.current) {
          renderRecaptcha();
        }
      }, 500);
    };
    
    script.onerror = (error) => {
      console.error('Error loading reCAPTCHA script:', error);
      setLoadError(true);
      setScriptLoading(false);
    };
    
    document.head.appendChild(script);
  }, [isRecaptchaAvailable, scriptLoading]);
  
  const renderRecaptcha = useCallback(() => {
    if (!recaptchaRef.current || !isRecaptchaAvailable()) {
      console.warn('Cannot render reCAPTCHA: DOM element or API not available');
      return;
    }
    
    try {
      console.log('Rendering reCAPTCHA widget with sitekey:', actualSitekey.substring(0, 4) + '***');
      
      if (recaptchaWidgetId.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
          console.log('Reset existing reCAPTCHA widget');
          return;
        } catch (error) {
          console.error('Error resetting reCAPTCHA widget:', error);
          recaptchaWidgetId.current = null;
        }
      }
      
      if (recaptchaRef.current) {
        recaptchaRef.current.innerHTML = '';
        
        const dataAttributes = {};
        Array.from(recaptchaRef.current.attributes).forEach(attr => {
          if (attr.name.startsWith('data-')) {
            dataAttributes[attr.name] = attr.value;
          }
        });
        
        Object.entries(dataAttributes).forEach(([key, value]) => {
          recaptchaRef.current!.setAttribute(key, value as string);
        });
      }
      
      recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: actualSitekey,
        callback: (token: string) => {
          console.log('reCAPTCHA callback received with token');
          onChange(token);
        },
        'expired-callback': () => {
          console.log('reCAPTCHA token expired');
          onChange(null);
        },
        'error-callback': () => {
          console.log('reCAPTCHA encountered an error');
          onChange(null);
        },
        size: size
      });
      
      console.log('reCAPTCHA widget rendered with ID:', recaptchaWidgetId.current);
      
      setTimeout(() => {
        const iframes = document.querySelectorAll('iframe[src*="recaptcha"]');
        iframes.forEach(iframe => {
          addDocTypeToIframe(iframe as HTMLIFrameElement);
        });
        console.log('Added DOCTYPE to reCAPTCHA iframes');
      }, 1000);
      
    } catch (error) {
      console.error('Error rendering reCAPTCHA widget:', error);
      setLoadError(true);
    }
  }, [actualSitekey, onChange, size]);
  
  useEffect(() => {
    console.log('reCAPTCHA initialization attempt with sitekey available:', !!actualSitekey);
    
    if (isRecaptchaAvailable()) {
      console.log('reCAPTCHA API is already available, rendering widget');
      renderRecaptcha();
      return;
    }
    
    loadRecaptchaScript();
    
    const checkInterval = setInterval(() => {
      if (isRecaptchaAvailable() && recaptchaRef.current) {
        console.log('reCAPTCHA API detected during interval check');
        clearInterval(checkInterval);
        renderRecaptcha();
      }
    }, 500);
    
    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
      if (!isRecaptchaAvailable()) {
        console.error('reCAPTCHA initialization timeout after 20 seconds');
        setLoadError(true);
      }
    }, 20000);
    
    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
      
      if (recaptchaWidgetId.current !== null && isRecaptchaAvailable()) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
          console.log('Reset reCAPTCHA widget during cleanup');
        } catch (error) {
          console.error('Error resetting reCAPTCHA during cleanup:', error);
        }
      }
    };
  }, [actualSitekey, isRecaptchaAvailable, loadRecaptchaScript, renderRecaptcha]);
  
  useEffect(() => {
    if (scriptLoaded && recaptchaRef.current && isRecaptchaAvailable()) {
      console.log('Script loaded, rendering reCAPTCHA');
      renderRecaptcha();
    }
  }, [scriptLoaded, isRecaptchaAvailable, renderRecaptcha]);

  const handleRetry = () => {
    console.log('Manual retry of reCAPTCHA requested');
    resetState();
    
    const existingScript = document.getElementById('recaptcha-script');
    if (existingScript) {
      existingScript.remove();
      console.log('Removed existing reCAPTCHA script');
    }
    
    const existingIframes = document.querySelectorAll('iframe[src*="recaptcha"]');
    existingIframes.forEach(iframe => iframe.remove());
    console.log('Removed existing reCAPTCHA iframes');
    
    if (window.grecaptcha) {
      try {
        delete window.grecaptcha;
        console.log('Reset global grecaptcha object');
      } catch (e) {
        console.warn('Could not reset global grecaptcha object:', e);
      }
    }
    
    setTimeout(() => {
      loadRecaptchaScript();
    }, 500);
  };

  if (loadError || isError) {
    return (
      <div className="border border-gray-300 rounded p-4 text-center bg-gray-50">
        <p className="text-sm text-gray-700 font-medium">Unable to load CAPTCHA verification.</p>
        <p className="text-xs text-gray-600 mt-1">Please ensure cookies are enabled and try again.</p>
        <button 
          onClick={handleRetry}
          className="mt-3 text-xs bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors"
          type="button"
        >
          Retry CAPTCHA
        </button>
      </div>
    );
  }

  if (isLoading || scriptLoading) {
    return (
      <div className="g-recaptcha-loading">
        <div className="border border-gray-300 rounded p-4 bg-gray-50 flex items-center justify-center min-h-[78px]">
          <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="ml-2 text-sm text-gray-600">Loading CAPTCHA...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={recaptchaRef} 
      className="g-recaptcha" 
      data-sitekey={actualSitekey} 
      data-size={size}
    />
  );
};

export default Recaptcha;
