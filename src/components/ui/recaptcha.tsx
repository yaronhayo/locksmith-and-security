
import React, { useState } from 'react';
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
