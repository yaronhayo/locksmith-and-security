interface RecaptchaAssessmentEvent {
  token: string;
  expectedAction?: string;
  siteKey: string;
}

interface RecaptchaAssessmentRequest {
  event: RecaptchaAssessmentEvent;
}

const RECAPTCHA_API_KEY_STORAGE_KEY = 'recaptcha_api_key';

export const getRecaptchaApiKey = (): string | null => {
  return localStorage.getItem(RECAPTCHA_API_KEY_STORAGE_KEY);
};

export const setRecaptchaApiKey = (apiKey: string): void => {
  localStorage.setItem(RECAPTCHA_API_KEY_STORAGE_KEY, apiKey);
};

export const executeRecaptcha = async (action: string): Promise<string> => {
  const siteKey = getRecaptchaApiKey();
  if (!siteKey) {
    throw new Error('reCAPTCHA site key not found');
  }

  try {
    // @ts-ignore - grecaptcha.enterprise is added by the script
    await grecaptcha.enterprise.ready();
    // @ts-ignore
    const token = await grecaptcha.enterprise.execute(siteKey, { action });
    return token;
  } catch (error) {
    console.error('reCAPTCHA execution failed:', error);
    throw error;
  }
};

export const verifyRecaptcha = async (token: string, action?: string): Promise<boolean> => {
  const siteKey = getRecaptchaApiKey();
  
  if (!siteKey) {
    throw new Error('reCAPTCHA site key not found');
  }

  try {
    // Here you would typically make an API call to your backend to verify the token
    // For now, we'll return true since we're just implementing the frontend part
    return true;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    throw error;
  }
};