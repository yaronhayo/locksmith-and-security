
// Cache for successful verifications to reduce API calls (in-memory, short-lived)
const verificationCache = new Map<string, { verified: boolean, timestamp: number }>();
const CACHE_TTL = 30 * 1000; // 30 seconds cache

/**
 * Verifies a reCAPTCHA token with Google's verification API or uses cached result
 * @param {string} token - The reCAPTCHA token from client
 * @param {string} secret - The reCAPTCHA secret key
 * @returns {Promise<boolean>} True if verification is successful
 */
export async function recaptchaVerify(token: string, secret: string): Promise<boolean> {
  if (!token || !secret) {
    console.error("reCAPTCHA verification failed: Missing token or secret");
    return false;
  }

  // Check cache first
  const cachedResult = verificationCache.get(token);
  if (cachedResult && (Date.now() - cachedResult.timestamp) < CACHE_TTL) {
    console.log("Using cached reCAPTCHA verification result");
    return cachedResult.verified;
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
    
    // Cache successful results
    if (data.success) {
      verificationCache.set(token, { verified: true, timestamp: Date.now() });
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
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    }
  );
}
