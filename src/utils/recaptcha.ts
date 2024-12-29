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
  return {
    event: {
      token,
      expectedAction: action,
      siteKey: "6LeQE6YqAAAAAPQkLboESEwCMnnKVkaGTbj63EPN",
    }
  };
};

export const verifyRecaptcha = async (token: string, action?: string): Promise<boolean> => {
  const apiKey = getRecaptchaApiKey();
  
  if (!apiKey) {
    throw new Error('reCAPTCHA API key not found. Please configure it in the settings.');
  }

  const request = createAssessmentRequest(token, action);
  
  try {
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/my-project-2641-1735184766966/assessments?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to verify reCAPTCHA');
    }

    const assessment = await response.json();
    return assessment.tokenProperties?.valid && assessment.riskAnalysis?.score > 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    throw error;
  }
};