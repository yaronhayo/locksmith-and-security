
import { useState, useCallback, useMemo } from "react";
import { FormState, IsDirty } from "./types";
import { useFormValidation } from "./useFormValidation";
import { useFormSubmission } from "./useFormSubmission";
import useRecaptcha from "./useRecaptcha";

export const useServiceAreaForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  
  const [isDirty, setIsDirty] = useState<IsDirty>({
    name: false,
    email: false,
    phone: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Use the validation hook
  const { errors, validateAllFields } = useFormValidation(formState, isDirty);
  
  // Use the recaptcha hook
  const recaptcha = useRecaptcha();
  
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
    }
  }, [isDirty]);
  
  const handleBlur = useCallback((field: 'name' | 'email' | 'phone') => {
    setIsDirty(prev => ({ ...prev, [field]: true }));
  }, []);
  
  // Use the submission hook
  const { handleSubmit } = useFormSubmission({
    formState,
    recaptchaToken: recaptcha.recaptchaToken,
    setErrors: setIsDirty,
    setIsSubmitting,
    setIsSubmitted,
    validateAllFields
  });
  
  const isFormValid = useMemo(() => {
    return (
      !errors.name && 
      !errors.email && 
      !errors.phone && 
      formState.name.trim() !== '' && 
      formState.email.trim() !== '' && 
      formState.phone.trim() !== '' && 
      formState.service !== '' && 
      !!recaptcha.recaptchaToken
    );
  }, [errors, formState, recaptcha.recaptchaToken]);

  return {
    formState,
    errors,
    isSubmitting,
    isSubmitted,
    recaptcha,
    handleChange,
    handleBlur,
    isFormValid,
    handleSubmit
  };
};

export default useServiceAreaForm;
