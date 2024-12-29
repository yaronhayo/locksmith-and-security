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

export const createAssessmentRequest = (token: string, action?: string): RecaptchaAssessmentRequest => {
  const siteKey = getRecaptchaApiKey();
  if (!siteKey) {
    throw new Error('reCAPTCHA site key not found. Please configure it in the settings.');
  }
  
  return {
    event: {
      token,
      expectedAction: action,
      siteKey,
    }
  };
};

export const verifyRecaptcha = async (token: string, action?: string): Promise<boolean> => {
  const siteKey = getRecaptchaApiKey();
  
  if (!siteKey) {
    throw new Error('reCAPTCHA site key not found. Please configure it in the settings.');
  }

  try {
    const request = createAssessmentRequest(token, action);
    
    // For now, we'll return true since we're just storing the key
    // In a production environment, you would want to verify the token with Google's API
    return true;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    throw error;
  }
};