export const validatePhoneNumber = (phone: string): boolean => {
  // Matches formats: (123) 456-7890, 123-456-7890, 1234567890
  const phoneRegex = /^(\+?1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
  return phoneRegex.test(phone);
};

export const validateZipCode = (zipCode: string): boolean => {
  // Matches 5-digit and 5+4 ZIP code formats
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateAddress = (address: string): boolean => {
  return address.length >= 5 && address.includes(' ');
};

export const getValidationError = (field: string, value: string): string | null => {
  switch (field) {
    case 'phone':
      return validatePhoneNumber(value) ? null : 'Please enter a valid phone number';
    case 'zipCode':
      return validateZipCode(value) ? null : 'Please enter a valid ZIP code';
    case 'email':
      return validateEmail(value) ? null : 'Please enter a valid email address';
    case 'address':
      return validateAddress(value) ? null : 'Please enter a complete address';
    default:
      return null;
  }
};