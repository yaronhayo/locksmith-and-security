
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
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const { data: recaptchaKey, isLoading, isError } = useRecaptchaKey();
  
  // Use the provided sitekey or the one from the hook
  const actualSitekey = sitekey || recaptchaKey || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Fallback to Google's test key

  // Check if grecaptcha is available
  const isRecaptchaAvailable = useCallback(() => {
    return typeof window !== 'undefined' && 
           typeof window.grecaptcha !== 'undefined' && 
           typeof window.grecaptcha.render === 'function';
  }, []);
  
  // Load the reCAPTCHA script
  const loadRecaptchaScript = useCallback(() => {
    // Don't load script if it's already loaded or loading
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      console.log('reCAPTCHA script is already loading or loaded');
      return;
    }
    
    console.log('Loading reCAPTCHA script dynamically');
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.id = 'recaptcha-script';
    script.crossOrigin = 'anonymous';
    
    script.onload = () => {
      console.log('reCAPTCHA script loaded successfully');
      setScriptLoaded(true);
      
      // Set a global callback for when reCAPTCHA is ready
      window.onRecaptchaLoaded = () => {
        console.log('reCAPTCHA API is fully loaded and ready');
        
        // Initialize reCAPTCHA after it's loaded
        if (recaptchaRef.current && isRecaptchaAvailable()) {
          renderRecaptcha();
        }
      };
      
      // Check if grecaptcha is already available
      if (isRecaptchaAvailable() && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          console.log('reCAPTCHA is ready from script onload event');
          if (window.onRecaptchaLoaded) {
            window.onRecaptchaLoaded();
          }
        });
      }
    };
    
    script.onerror = (error) => {
      console.error('Error loading reCAPTCHA script:', error);
      setLoadError(true);
    };
    
    document.head.appendChild(script);
  }, [isRecaptchaAvailable]);
  
  // Render the reCAPTCHA widget
  const renderRecaptcha = useCallback(() => {
    if (!recaptchaRef.current || !isRecaptchaAvailable()) {
      console.warn('Cannot render reCAPTCHA: DOM element or API not available');
      return;
    }
    
    try {
      console.log('Rendering reCAPTCHA widget with sitekey:', actualSitekey);
      
      // Reset if we already have a widget ID
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
      
      // Render a new widget
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
        size: size
      });
      
      console.log('reCAPTCHA widget rendered with ID:', recaptchaWidgetId.current);
      
      // Fix DOCTYPE in iframes to resolve Quirks Mode issues
      setTimeout(() => {
        const iframes = document.querySelectorAll('iframe[src*="recaptcha"]');
        iframes.forEach(iframe => {
          addDocTypeToIframe(iframe as HTMLIFrameElement);
        });
        console.log('Added DOCTYPE to reCAPTCHA iframes');
      }, 1000);
      
      setIsInitialized(true);
    } catch (error) {
      console.error('Error rendering reCAPTCHA widget:', error);
      setLoadError(true);
    }
  }, [actualSitekey, onChange, size]);
  
  // Initialize reCAPTCHA
  useEffect(() => {
    // Don't try to initialize if it's already initialized
    if (isInitialized) {
      console.log('reCAPTCHA already initialized, skipping initialization');
      return;
    }
    
    // Try to initialize immediately if grecaptcha is already available
    if (isRecaptchaAvailable()) {
      console.log('reCAPTCHA API is already available, initializing immediately');
      
      if (window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          console.log('reCAPTCHA is ready from initial check');
          renderRecaptcha();
        });
      } else {
        console.log('reCAPTCHA is available but .ready() is not, rendering directly');
        renderRecaptcha();
      }
    } else {
      console.log('reCAPTCHA API not available, loading script');
      loadRecaptchaScript();
      
      // Check periodically if reCAPTCHA has loaded
      const checkInterval = setInterval(() => {
        if (isRecaptchaAvailable()) {
          console.log('reCAPTCHA API detected during interval check');
          clearInterval(checkInterval);
          
          if (window.grecaptcha.ready) {
            window.grecaptcha.ready(() => {
              console.log('reCAPTCHA is ready from interval check');
              renderRecaptcha();
            });
          } else {
            renderRecaptcha();
          }
        }
      }, 500);
      
      // Set a timeout to prevent infinite waiting
      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (!isInitialized) {
          console.error('reCAPTCHA initialization timeout');
          setLoadError(true);
        }
      }, 15000); // 15 seconds timeout
      
      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }
    
    // Cleanup function
    return () => {
      if (recaptchaWidgetId.current !== null && isRecaptchaAvailable()) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
          console.log('Reset reCAPTCHA widget during cleanup');
        } catch (error) {
          console.error('Error resetting reCAPTCHA during cleanup:', error);
        }
      }
    };
  }, [isInitialized, isRecaptchaAvailable, loadRecaptchaScript, renderRecaptcha]);
  
  // Effect to re-render reCAPTCHA when the sitekey changes
  useEffect(() => {
    if (isInitialized && isRecaptchaAvailable()) {
      console.log('Sitekey changed, re-rendering reCAPTCHA');
      renderRecaptcha();
    }
  }, [actualSitekey, isInitialized, isRecaptchaAvailable, renderRecaptcha]);

  if (loadError || isError) {
    // Fallback UI for when reCAPTCHA fails to load
    return (
      <div className="border border-gray-300 rounded p-4 text-center">
        <p className="text-sm text-gray-600">Unable to load CAPTCHA verification.</p>
        <p className="text-xs text-gray-500 mt-1">Please ensure cookies are enabled and try again later.</p>
        <button 
          onClick={() => {
            setLoadError(false);
            setIsInitialized(false);
            loadRecaptchaScript();
          }}
          className="mt-2 text-xs bg-primary text-white px-2 py-1 rounded hover:bg-primary/80"
        >
          Retry CAPTCHA
        </button>
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
    <div 
      ref={recaptchaRef} 
      className="g-recaptcha" 
      data-sitekey={actualSitekey} 
      data-size={size}
    />
  );
};

export default Recaptcha;
