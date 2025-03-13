
/**
 * Formats a phone number input to US format: (XXX) XXX-XXXX or +1 (XXX) XXX-XXXX
 * @param value The input phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (value: string): string => {
  // Strip all non-numeric characters
  const cleaned = value.replace(/\D/g, '');
  
  // Handle +1 country code (11 digits)
  if (cleaned.length > 10) {
    // Format as +1 (XXX) XXX-XXXX
    const countryCode = cleaned.substring(0, 1);
    const areaCode = cleaned.substring(1, 4);
    const middle = cleaned.substring(4, 7);
    const last = cleaned.substring(7, 11);
    
    if (countryCode === '1') {
      return `+1 (${areaCode}) ${middle}${last ? `-${last}` : ''}`;
    }
  }
  
  // Format as (XXX) XXX-XXXX (10 digits)
  const trimmed = cleaned.substring(0, 10);
  
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
  
  // Allow 10 digits or 11 digits starting with 1 (US country code)
  if (cleaned.length === 10 || (cleaned.length === 11 && cleaned.charAt(0) === '1')) {
    return null;
  }
  
  return "Please enter a complete phone number";
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
