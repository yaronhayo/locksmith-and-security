
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
  const scriptLoadAttemptRef = useRef(0);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [scriptLoading, setScriptLoading] = useState<boolean>(false);
  const [renderAttempts, setRenderAttempts] = useState(0);
  const { data: recaptchaKey, isLoading, isError } = useRecaptchaKey();
  
  const actualSitekey = sitekey || recaptchaKey || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Fallback to Google's test key

  const isRecaptchaAvailable = useCallback(() => {
    try {
      return typeof window !== 'undefined' && 
             typeof window.grecaptcha !== 'undefined' && 
             typeof window.grecaptcha.render === 'function';
    } catch (error) {
      console.error('Error checking reCAPTCHA availability:', error);
      return false;
    }
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
    // Hard limit on script load attempts to prevent infinite loops
    if (scriptLoadAttemptRef.current > 2) {
      console.error('Maximum reCAPTCHA script load attempts reached');
      setLoadError(true);
      setScriptLoading(false);
      return;
    }
    
    // Don't reload if script is already in the DOM
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      console.log('reCAPTCHA script is already loading or loaded');
      return;
    }
    
    if (scriptLoading) {
      console.log('reCAPTCHA script is already in the process of loading');
      return;
    }
    
    scriptLoadAttemptRef.current += 1;
    console.log(`Loading reCAPTCHA script dynamically (attempt ${scriptLoadAttemptRef.current})`);
    setScriptLoading(true);
    
    // Remove any existing reCAPTCHA iframes to prevent conflicts
    document.querySelectorAll('iframe[src*="recaptcha"]').forEach(iframe => iframe.remove());
    
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.id = 'recaptcha-script';
    
    // Create a promise that resolves when the script loads or fails
    const scriptPromise = new Promise<void>((resolve, reject) => {
      script.onload = () => {
        console.log('reCAPTCHA script loaded successfully');
        setScriptLoaded(true);
        setScriptLoading(false);
        resolve();
      };
      
      script.onerror = (error) => {
        console.error('Error loading reCAPTCHA script:', error);
        setScriptLoading(false);
        reject(new Error('Failed to load reCAPTCHA script'));
      };
    });
    
    document.head.appendChild(script);
    
    // Set a timeout in case the script hangs
    const timeoutPromise = new Promise<void>((_, reject) => {
      setTimeout(() => {
        reject(new Error('reCAPTCHA script loading timed out'));
      }, 10000); // 10 second timeout
    });
    
    // Race the script load against the timeout
    Promise.race([scriptPromise, timeoutPromise])
      .then(() => {
        // Add a delay to ensure grecaptcha is fully initialized
        setTimeout(() => {
          try {
            if (isRecaptchaAvailable() && recaptchaRef.current) {
              renderRecaptcha();
            } else {
              console.warn('reCAPTCHA API available but render conditions not met');
            }
          } catch (error) {
            console.error('Error during delayed reCAPTCHA rendering:', error);
          }
        }, 500);
      })
      .catch((error) => {
        console.error('reCAPTCHA script loading failed:', error);
        setLoadError(true);
        setScriptLoading(false);
      });
  }, [isRecaptchaAvailable]);
  
  const renderRecaptcha = useCallback(() => {
    if (!recaptchaRef.current) {
      console.warn('Cannot render reCAPTCHA: DOM element not available');
      return;
    }
    
    if (!isRecaptchaAvailable()) {
      console.warn('Cannot render reCAPTCHA: API not available');
      return;
    }
    
    // Prevent too many render attempts
    if (renderAttempts > 2) {
      console.error('Maximum reCAPTCHA render attempts reached');
      setLoadError(true);
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
      
      // Clear any existing content to prevent ghosting/flashing
      if (recaptchaRef.current) {
        recaptchaRef.current.innerHTML = '';
      }
      
      // Add a small delay before rendering to ensure DOM stability
      setTimeout(() => {
        try {
          if (!recaptchaRef.current || !isRecaptchaAvailable()) {
            console.warn('reCAPTCHA render conditions not met during delayed render');
            return;
          }
          
          setRenderAttempts(prev => prev + 1);
          
          // Create an error handler for the callback
          const safeCallback = (token: string) => {
            try {
              console.log('reCAPTCHA callback received with token');
              onChange(token);
            } catch (error) {
              console.error('Error in reCAPTCHA callback:', error);
            }
          };
          
          // Create safe error handlers
          const safeExpiredCallback = () => {
            try {
              console.log('reCAPTCHA token expired');
              onChange(null);
            } catch (error) {
              console.error('Error in reCAPTCHA expired callback:', error);
            }
          };
          
          const safeErrorCallback = () => {
            try {
              console.log('reCAPTCHA encountered an error');
              onChange(null);
            } catch (error) {
              console.error('Error in reCAPTCHA error callback:', error);
            }
          };
          
          recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: actualSitekey,
            callback: safeCallback,
            'expired-callback': safeExpiredCallback,
            'error-callback': safeErrorCallback,
            size: size
          });
          
          console.log('reCAPTCHA widget rendered with ID:', recaptchaWidgetId.current);
          
          // Add timeout for iframe manipulation to ensure DOM is ready
          setTimeout(() => {
            try {
              const iframes = document.querySelectorAll('iframe[src*="recaptcha"]');
              iframes.forEach(iframe => {
                addDocTypeToIframe(iframe as HTMLIFrameElement);
              });
              console.log('Added DOCTYPE to reCAPTCHA iframes');
            } catch (error) {
              console.error('Error adding DOCTYPE to reCAPTCHA iframes:', error);
            }
          }, 1000);
        } catch (error) {
          console.error('Error during delayed reCAPTCHA rendering:', error);
          setLoadError(true);
        }
      }, 200);
      
    } catch (error) {
      console.error('Error rendering reCAPTCHA widget:', error);
      setLoadError(true);
    }
  }, [actualSitekey, onChange, size, renderAttempts, isRecaptchaAvailable]);
  
  useEffect(() => {
    // Cleanup function to handle component unmount
    return () => {
      console.log('Cleaning up reCAPTCHA resources');
      try {
        if (recaptchaWidgetId.current !== null && isRecaptchaAvailable()) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
      } catch (error) {
        console.error('Error during reCAPTCHA cleanup:', error);
      }
    };
  }, [isRecaptchaAvailable]);
  
  useEffect(() => {
    console.log('reCAPTCHA initialization attempt with sitekey available:', !!actualSitekey);
    
    // Clear any stale widget ID to prevent flashing on remounts
    recaptchaWidgetId.current = null;
    
    // Enforce a minimum delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      try {
        if (isRecaptchaAvailable()) {
          console.log('reCAPTCHA API is already available, rendering widget');
          renderRecaptcha();
        } else {
          console.log('reCAPTCHA API not available, loading script');
          loadRecaptchaScript();
        }
      } catch (error) {
        console.error('Error during reCAPTCHA initialization:', error);
        setLoadError(true);
      }
    }, 100);
    
    const checkInterval = setInterval(() => {
      try {
        if (isRecaptchaAvailable() && recaptchaRef.current && !recaptchaWidgetId.current) {
          console.log('reCAPTCHA API detected during interval check');
          renderRecaptcha();
        }
      } catch (error) {
        console.error('Error during reCAPTCHA interval check:', error);
      }
    }, 2000); // Increased interval to reduce frequency
    
    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
      if (!isRecaptchaAvailable()) {
        console.error('reCAPTCHA initialization timeout after 15 seconds');
        setLoadError(true);
      }
    }, 15000);
    
    // Use window.onload to ensure everything is loaded
    if (typeof window !== 'undefined') {
      window.onload = () => {
        try {
          if (isRecaptchaAvailable() && recaptchaRef.current && !recaptchaWidgetId.current) {
            console.log('reCAPTCHA API detected on window.onload');
            renderRecaptcha();
          }
        } catch (error) {
          console.error('Error during window.onload reCAPTCHA check:', error);
        }
      };
    }
    
    return () => {
      clearTimeout(initTimeout);
      clearInterval(checkInterval);
      clearTimeout(timeout);
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
    setRenderAttempts(0);
    scriptLoadAttemptRef.current = 0;
    
    // Clean up the existing script and reCAPTCHA state
    const existingScript = document.getElementById('recaptcha-script');
    if (existingScript) {
      existingScript.remove();
      console.log('Removed existing reCAPTCHA script');
    }
    
    // Clean up any existing reCAPTCHA iframes
    const existingIframes = document.querySelectorAll('iframe[src*="recaptcha"]');
    existingIframes.forEach(iframe => iframe.remove());
    console.log('Removed existing reCAPTCHA iframes');
    
    // Reset the grecaptcha object to force a clean reload
    if (window.grecaptcha) {
      try {
        // @ts-ignore - We're intentionally deleting this to force a reload
        window.grecaptcha = undefined;
        console.log('Reset global grecaptcha object');
      } catch (e) {
        console.warn('Could not reset global grecaptcha object:', e);
      }
    }
    
    // Wait a bit before trying again
    setTimeout(() => {
      loadRecaptchaScript();
    }, 500);
  };

  if (loadError || isError) {
    return (
      <div className="border border-gray-300 rounded p-4 text-center bg-gray-50" style={{ minHeight: '78px' }}>
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
        <div className="border border-gray-300 rounded p-4 bg-gray-50 flex items-center justify-center" style={{ minHeight: '78px' }}>
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
      style={{ minHeight: '78px' }}
    />
  );
};

export default Recaptcha;
