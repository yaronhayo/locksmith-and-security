
export const validateRecaptcha = (recaptchaToken: string | null) => {
  if (!recaptchaToken) {
    return {
      isValid: false,
      errorMessage: "Please complete the reCAPTCHA verification"
    };
  }
  return { isValid: true, errorMessage: null };
};

export const validateAddress = (address: string) => {
  if (!address || address.trim() === '') {
    return {
      isValid: false, 
      errorMessage: "Please enter a valid service address"
    };
  }
  return { isValid: true, errorMessage: null };
};
