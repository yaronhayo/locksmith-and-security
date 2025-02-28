
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRecaptchaKey } from '@/hooks/useRecaptchaKey';
import { Skeleton } from './skeleton';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const { data: siteKey, isLoading, error } = useRecaptchaKey();

  if (isLoading) {
    return <Skeleton className="h-[78px] w-full max-w-[304px] mx-auto" />;
  }

  if (error || !siteKey) {
    console.error('Failed to load reCAPTCHA key:', error);
    return null;
  }

  return (
    <div className="flex justify-center my-4 w-full overflow-x-auto">
      <div className="max-w-full">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Recaptcha;
