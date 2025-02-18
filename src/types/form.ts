
export interface FormField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}
