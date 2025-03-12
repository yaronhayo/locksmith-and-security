
export async function recaptchaVerify(token: string, secret: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification result:", data);
    
    return data.success === true;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    throw error;
  }
}
