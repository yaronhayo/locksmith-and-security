
export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

export interface FormErrors {
  name: string | null;
  email: string | null;
  phone: string | null;
}

export interface IsDirty {
  name: boolean;
  email: boolean;
  phone: boolean;
}
