/**
 * Formats a phone number input to US format: (XXX) XXX-XXXX
 * @param value The input phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  
  // Format based on the number of digits
  if (digits.length === 0) {
    return '';
  } else if (digits.length <= 3) {
    return `+1 (${digits}`;
  } else if (digits.length <= 6) {
    return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }
};

/**
 * Validates an email address format
 * @param email The email string to validate
 * @returns Boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Returns error message for email validation
 * @param email The email string to validate
 * @returns Error message or null if valid
 */
export const getEmailError = (email: string): string | null => {
  if (!email) return null;
  if (!isValidEmail(email)) {
    return "Please enter a valid email address";
  }
  return null;
};

/**
 * Returns error message for phone validation
 * @param phone The phone string to validate
 * @returns Error message or null if valid
 */
export const getPhoneError = (phone: string): string | null => {
  if (!phone) {
    return 'Phone number is required';
  }
  
  // Strip all non-digit characters for validation
  const digits = phone.replace(/\D/g, '');
  
  // Check the length (accounting for the country code)
  if (digits.length < 10) {
    return 'Please enter a valid phone number';
  }
  
  return null;
};

/**
 * Validates that a name has at least 2 characters
 * @param name The name string to validate
 * @returns Error message or null if valid
 */
export const getNameError = (name: string): string | null => {
  if (!name) return null;
  if (name.trim().length < 2) {
    return "Name should be at least 2 characters";
  }
  return null;
};
