import React, { useEffect, useCallback } from 'react';
import { getRecaptchaApiKey, executeRecaptcha } from '@/utils/recaptcha';

interface RecaptchaProps {
  onChange: (token: string | null) => void;
  action?: string;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onChange, action = 'submit' }) => {
  const executeAction = useCallback(async () => {
    try {
      const token = await executeRecaptcha(action);
      onChange(token);
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      onChange(null);
    }
  }, [action, onChange]);

  useEffect(() => {
    executeAction();
  }, [executeAction]);

  return null; // Enterprise reCAPTCHA doesn't need a visible component
};

export default Recaptcha;