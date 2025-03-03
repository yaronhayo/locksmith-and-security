
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRecaptchaKey } from '@/hooks/useRecaptchaKey';
import { Skeleton } from './skeleton';
import { Alert, AlertDescription } from './alert';
import { Info } from 'lucide-react';
import { Button } from './button';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const { data: siteKey, isLoading, error } = useRecaptchaKey();
  const [showInfo, setShowInfo] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    // Check if reCAPTCHA script is already loaded
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    if (!existingScript && siteKey) {
      // Add preconnect for faster loading
      const addPreconnect = (domain: string) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      };
      
      addPreconnect('https://www.google.com');
      addPreconnect('https://www.gstatic.com');
      
      // Ensure proper DOCTYPE for iframe content
      const corsMetaTag = document.createElement('meta');
      corsMetaTag.httpEquiv = 'Access-Control-Allow-Origin';
      corsMetaTag.content = '*';
      document.head.appendChild(corsMetaTag);
      
      // Load reCAPTCHA script with proper attributes
      const recaptchaScript = document.createElement('script');
      recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
      recaptchaScript.async = true;
      recaptchaScript.defer = true;
      recaptchaScript.onload = () => {
        console.log('reCAPTCHA script loaded successfully');
        setRecaptchaLoaded(true);
      };
      recaptchaScript.onerror = (e) => {
        console.error('Failed to load reCAPTCHA script:', e);
      };
      document.head.appendChild(recaptchaScript);
      
      return () => {
        // Cleanup
        if (document.head.contains(corsMetaTag)) {
          document.head.removeChild(corsMetaTag);
        }
      };
    } else if (existingScript) {
      setRecaptchaLoaded(true);
    }
  }, [siteKey]);

  // Apply fix for stylesheets that fail to load
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeName === 'IFRAME') {
              const iframe = node as HTMLIFrameElement;
              
              if (iframe.src && iframe.src.includes('recaptcha')) {
                iframe.onload = () => {
                  try {
                    // Fix Quirks Mode if we can access the iframe
                    if (iframe.contentDocument && 
                        iframe.contentDocument.compatMode === 'BackCompat') {
                      
                      // Add DOCTYPE to fix Quirks Mode
                      const doc = iframe.contentDocument;
                      if (doc.open) {
                        const html = doc.documentElement.outerHTML;
                        doc.open();
                        doc.write(`<!DOCTYPE html>${html}`);
                        doc.close();
                      }
                    }
                  } catch (e) {
                    // Expected for cross-origin iframes
                  }
                };
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  if (isLoading) {
    return <Skeleton className="h-[78px] w-full max-w-[304px] mx-auto" />;
  }

  if (error || !siteKey) {
    console.error('Failed to load reCAPTCHA key:', error);
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex justify-center my-4 w-full overflow-x-auto">
        <div className="max-w-full">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={onChange}
          />
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-2 flex items-start gap-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-4 w-4 p-0 mt-0.5" 
          onClick={() => setShowInfo(!showInfo)}
          aria-label={showInfo ? "Hide reCAPTCHA info" : "Show reCAPTCHA info"}
        >
          <Info className="h-4 w-4" />
        </Button>
        <span>
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" className="text-secondary hover:underline mx-1" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          and
          <a href="https://policies.google.com/terms" className="text-secondary hover:underline mx-1" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          apply.
        </span>
      </div>
      
      {showInfo && (
        <Alert variant="info" className="mt-2 text-xs">
          <AlertDescription>
            <p className="mb-1"><strong>Cookie Notice:</strong> reCAPTCHA uses third-party cookies from Google to function properly.</p>
            <p>As browsers phase out third-party cookies, some reCAPTCHA features might be affected. Your data remains secure, and we're working to ensure compatibility with new browser privacy features.</p>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Recaptcha;
