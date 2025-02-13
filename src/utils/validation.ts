
export interface ValidationRule {
  test: (value: any) => boolean;
  message: string;
}

export interface FieldValidation {
  [key: string]: ValidationRule[];
}

export const validateField = (value: any, rules: ValidationRule[]): string | null => {
  for (const rule of rules) {
    if (!rule.test(value)) {
      return rule.message;
    }
  }
  return null;
};

export const bookingValidationRules: FieldValidation = {
  name: [
    {
      test: (value) => value && value.trim().length >= 2,
      message: "Please enter your full name (minimum 2 characters)"
    }
  ],
  phone: [
    {
      test: (value) => value && /^[\d\s()-]{10,}$/.test(value),
      message: "Please enter a valid phone number (minimum 10 digits)"
    }
  ],
  address: [
    {
      // Modified to accept any non-empty string as valid since it's coming from the autocomplete API
      test: (value) => Boolean(value && value.trim()),
      message: "Please enter your complete service address"
    }
  ],
  service: [
    {
      test: (value) => Boolean(value),
      message: "Please select a service"
    }
  ],
  vehicleYear: [
    {
      test: (value) => !value || /^\d{4}$/.test(value),
      message: "Please enter a valid 4-digit year"
    }
  ],
  vehicleMake: [
    {
      test: (value) => !value || value.trim().length >= 2,
      message: "Please enter the vehicle manufacturer"
    }
  ],
  vehicleModel: [
    {
      test: (value) => !value || value.trim().length >= 2,
      message: "Please enter the vehicle model"
    }
  ]
};
