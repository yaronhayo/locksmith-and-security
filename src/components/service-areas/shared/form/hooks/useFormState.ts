
import { useState, useCallback } from "react";

export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

export interface IsDirty {
  name: boolean;
  email: boolean;
  phone: boolean;
  service: boolean;
}

export const useFormState = (initialState: Partial<FormState> = {}) => {
  const [formState, setFormState] = useState<FormState>({
    name: initialState.name || "",
    email: initialState.email || "",
    phone: initialState.phone || "",
    message: initialState.message || "",
    service: initialState.service || ""
  });
  
  const [isDirty, setIsDirty] = useState<IsDirty>({
    name: false,
    email: false,
    phone: false,
    service: false
  });
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Set the corresponding field as dirty
    if (name === 'name' && !isDirty.name) {
      setIsDirty(prev => ({ ...prev, name: true }));
    } else if (name === 'email' && !isDirty.email) {
      setIsDirty(prev => ({ ...prev, email: true }));
    } else if (name === 'phone' && !isDirty.phone) {
      setIsDirty(prev => ({ ...prev, phone: true }));
    } else if (name === 'service' && !isDirty.service) {
      setIsDirty(prev => ({ ...prev, service: true }));
    }
  }, [isDirty]);
  
  const handleBlur = useCallback((field: keyof IsDirty) => {
    setIsDirty(prev => ({ ...prev, [field]: true }));
  }, []);
  
  const resetForm = useCallback(() => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: ""
    });
    setIsDirty({
      name: false,
      email: false,
      phone: false,
      service: false
    });
  }, []);

  return {
    formState,
    isDirty,
    setFormState,
    setIsDirty,
    handleChange,
    handleBlur,
    resetForm
  };
};
