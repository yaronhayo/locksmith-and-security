
/**
 * Verifies a reCAPTCHA token with Google's verification API
 * @param {string} token - The reCAPTCHA token from client
 * @param {string} secret - The reCAPTCHA secret key
 * @returns {Promise<boolean>} True if verification is successful
 */
export async function recaptchaVerify(token: string, secret: string): Promise<boolean> {
  if (!token || !secret) {
    console.error("reCAPTCHA verification failed: Missing token or secret");
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secret}&response=${token}`,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`reCAPTCHA verification failed: ${response.status} ${response.statusText}`, errorText);
      return false;
    }

    const data = await response.json();
    console.log("reCAPTCHA verification result:", data);
    
    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data["error-codes"]);
    }
    
    return data.success === true;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}

/**
 * Creates a response for failed reCAPTCHA verification
 * @returns {Response} A JSON response indicating the verification failure
 */
export function createRecaptchaFailureResponse(): Response {
  return new Response(
    JSON.stringify({
      status: 'error',
      message: 'reCAPTCHA verification failed. Please try again.',
    }),
    {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
