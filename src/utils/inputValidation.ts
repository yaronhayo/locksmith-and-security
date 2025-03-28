
/**
 * Formats a phone number input to US format: (XXX) XXX-XXXX
 * @param value The input phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  let cleaned = value.replace(/\D/g, '');
  
  // Handle country code: if it starts with 1 and has more than 10 digits, remove the 1
  if (cleaned.length > 10 && cleaned.startsWith('1')) {
    cleaned = cleaned.substring(1);
  }
  
  // Limit to 10 digits
  const trimmed = cleaned.substring(0, 10);
  
  // Format as (XXX) XXX-XXXX
  if (trimmed.length === 0) return '';
  if (trimmed.length <= 3) return `(${trimmed}`;
  if (trimmed.length <= 6) return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
  return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
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
  if (!phone) return null;
  const cleaned = phone.replace(/\D/g, '');
  
  // Handle country code: if it starts with 1 and has more than 10 digits, remove the 1
  const digits = cleaned.startsWith('1') && cleaned.length > 10 
    ? cleaned.substring(1) 
    : cleaned;
    
  if (digits.length < 10) {
    return "Please enter a complete phone number";
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
