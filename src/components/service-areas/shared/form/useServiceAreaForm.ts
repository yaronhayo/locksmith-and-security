
import { useState, useEffect, useCallback, useMemo } from "react";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";

export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  address?: string;
}

export interface FormErrors {
  name: string | null;
  email: string | null;
  phone: string | null;
  address?: string | null;
}

interface IsDirty {
  name: boolean;
  email: boolean;
  phone: boolean;
  address?: boolean;
}

export const useServiceAreaForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    address: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    phone: null,
    address: null
  });
  
  const [isDirty, setIsDirty] = useState<IsDirty>({
    name: false,
    email: false,
    phone: false,
    address: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  
  // Validate fields when they change and are dirty
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
    if (isDirty.address && formState.address !== undefined) {
      setErrors(prev => ({ 
        ...prev, 
        address: formState.address.trim() === '' ? 'Address is required' : null 
      }));
    }
  }, [formState.address, isDirty.address]);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (!isDirty[name as keyof IsDirty]) {
      setIsDirty(prev => ({ ...prev, [name]: true }));
    }
  }, [isDirty]);
  
  const handleBlur = useCallback((field: keyof IsDirty) => {
    setIsDirty(prev => ({ ...prev, [field]: true }));
  }, []);
  
  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  }, []);
  
  const isFormValid = useMemo(() => {
    return (
      !errors.name && 
      !errors.email && 
      !errors.phone && 
      !errors.address &&
      formState.name.trim() !== '' && 
      formState.email.trim() !== '' && 
      formState.phone.trim() !== '' && 
      formState.service !== '' && 
      !!recaptchaToken
    );
  }, [errors, formState, recaptchaToken]);
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as dirty for validation
    setIsDirty({
      name: true,
      email: true,
      phone: true,
      address: true
    });
    
    // Validate all fields
    const newErrors = {
      name: getNameError(formState.name) || (formState.name.trim() === '' ? 'Name is required' : null),
      email: getEmailError(formState.email) || (formState.email.trim() === '' ? 'Email is required' : null),
      phone: getPhoneError(formState.phone) || (formState.phone.trim() === '' ? 'Phone number is required' : null),
      address: formState.address && formState.address.trim() === '' ? 'Address is required' : null
    };
    
    setErrors(newErrors);
    
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification");
      return;
    }
    
    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.address || formState.service === '') {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form state
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        address: ""
      });
    }, 1500);
  }, [formState, recaptchaToken]);

  return {
    formState,
    errors,
    isSubmitting,
    isSubmitted,
    recaptchaToken,
    recaptchaError,
    handleChange,
    handleBlur,
    handleRecaptchaChange,
    isFormValid,
    handleSubmit
  };
};
