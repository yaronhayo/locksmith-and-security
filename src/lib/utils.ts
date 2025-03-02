
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Handles API errors with standardized error logging and optional toast notifications
 */
export function handleApiError(error: any, showToast = true, prefix = 'API Error:') {
  const errorMessage = error?.message || 'An unexpected error occurred';
  console.error(`${prefix} ${errorMessage}`, error);
  
  if (showToast) {
    toast.error(errorMessage, {
      id: errorMessage, // Prevents duplicate toasts
      duration: 5000
    });
  }
  
  return errorMessage;
}

/**
 * Formats a phone number to (XXX) XXX-XXXX format
 */
export function formatPhoneNumber(input: string): string {
  // Remove all non-numeric characters
  const cleaned = input.replace(/\D/g, '');
  
  // Format the phone number
  if (cleaned.length <= 3) {
    return cleaned;
  } else if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  } else {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  }
}

/**
 * Convert snake_case to Title Case
 */
export function snakeToTitleCase(str: string): string {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
