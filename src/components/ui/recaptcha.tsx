import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { getRecaptchaApiKey } from '@/utils/recaptcha';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange }) => {
  const siteKey = getRecaptchaApiKey() || '6LeQE6YqAAAAAPQkLboESEwCMnnKVkaGTbj63EPN'; // Fallback to default key

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
      />
    </div>
  );
};

export default Recaptcha;