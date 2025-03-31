
/**
 * Get the phone number for the locksmith service
 * @returns The formatted phone number
 */
export const getPhoneNumber = (): string => {
  // In a real app, this might come from an environment variable or API
  return "(201) 748-2070";
};

/**
 * Format a phone number for tel: links (removing non-numeric characters)
 * @param phoneNumber The phone number to format
 * @returns Formatted phone number for tel: links
 */
export const formatPhoneForTel = (phoneNumber: string): string => {
  return phoneNumber.replace(/\D/g, '');
};

/**
 * Hook to get both formatted phone number and tel: link format
 * @returns Object containing phoneNumber (display format) and phoneHref (tel: format)
 */
export const usePhoneNumber = () => {
  const phoneNumber = getPhoneNumber();
  const phoneHref = `tel:${formatPhoneForTel(phoneNumber)}`;
  
  return {
    phoneNumber,
    phoneHref
  };
};
