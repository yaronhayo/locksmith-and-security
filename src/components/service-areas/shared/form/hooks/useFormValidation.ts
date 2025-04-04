
import { useState, useEffect } from "react";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";
import { FormState, IsDirty } from "./useFormState";

export interface FormErrors {
  name: string | null;
  email: string | null;
  phone: string | null;
  service: string | null;
}

export const useFormValidation = (formState: FormState, isDirty: IsDirty) => {
  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    phone: null,
    service: null
  });
  
  // Validation effects
  useEffect(() => {
    if (isDirty.name) {
      setErrors(prev => ({ ...prev, name: getNameError(formState.name) }));
    }
  }, [formState.name, isDirty.name]);
  
  useEffect(() => {
    if (isDirty.email) {
      setErrors(prev => ({ ...prev, email: getEmailError(formState.email) }));
    }
  }, [formState.email, isDirty.email]);
  
  useEffect(() => {
    if (isDirty.phone) {
      setErrors(prev => ({ ...prev, phone: getPhoneError(formState.phone) }));
    }
  }, [formState.phone, isDirty.phone]);
  
  useEffect(() => {
    if (isDirty.service && formState.service === '') {
      setErrors(prev => ({ ...prev, service: 'Please select a service' }));
    } else if (isDirty.service) {
      setErrors(prev => ({ ...prev, service: null }));
    }
  }, [formState.service, isDirty.service]);
  
  const validateForm = () => {
    const newErrors = {
      name: getNameError(formState.name) || (formState.name.trim() === '' ? 'Name is required' : null),
      email: getEmailError(formState.email) || (formState.email.trim() === '' ? 'Email is required' : null),
      phone: getPhoneError(formState.phone) || (formState.phone.trim() === '' ? 'Phone number is required' : null),
      service: formState.service === '' ? 'Please select a service' : null
    };
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.phone && !newErrors.service;
  };
  
  const isFormValid = (recaptchaToken: string | null): boolean => {
    return (
      !errors.name && 
      !errors.email && 
      !errors.phone && 
      !errors.service &&
      formState.name.trim() !== '' && 
      formState.email.trim() !== '' && 
      formState.phone.trim() !== '' && 
      formState.service !== '' && 
      !!recaptchaToken
    );
  };

  return {
    errors,
    setErrors,
    validateForm,
    isFormValid
  };
};
