
import { useState, useEffect } from "react";
import { FormState, FormErrors, IsDirty } from "./types";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";

export const useFormValidation = (formState: FormState, isDirty: IsDirty) => {
  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    phone: null
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

  const validateAllFields = () => {
    const newErrors = {
      name: getNameError(formState.name) || (formState.name.trim() === '' ? 'Name is required' : null),
      email: getEmailError(formState.email) || (formState.email.trim() === '' ? 'Email is required' : null),
      phone: getPhoneError(formState.phone) || (formState.phone.trim() === '' ? 'Phone number is required' : null)
    };
    
    setErrors(newErrors);
    return newErrors;
  };
  
  return {
    errors,
    validateAllFields
  };
};
