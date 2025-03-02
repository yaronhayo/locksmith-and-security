
import { useState, useEffect, useCallback } from 'react';
import { validateEmail } from '@/utils/inputValidation';
import { toast } from 'sonner';
import { submitContactForm } from '@/lib/utils';

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  address: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  address: '',
};

export const useServiceAreaForm = (preselectedService?: string) => {
  const [formState, setFormState] = useState<FormState>({
    ...initialFormState,
    service: preselectedService || ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  
  // Update service if preselectedService changes
  useEffect(() => {
    if (preselectedService && !formState.service) {
      setFormState(prev => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService, formState.service]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormState]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormState];
        return newErrors;
      });
    }
  }, [errors]);
  
  const handleBlur = useCallback((field: keyof FormState) => {
    let fieldError = '';
    
    if (field === 'email' && formState.email) {
      if (!validateEmail(formState.email)) {
        fieldError = 'Please enter a valid email address';
      }
    }
    
    if (fieldError) {
      setErrors(prev => ({
        ...prev,
        [field]: fieldError
      }));
    }
  }, [formState]);
  
  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : 'Please complete the reCAPTCHA');
  }, []);
  
  const validateForm = useCallback(() => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    let isValid = true;
    
    // Required fields
    if (!formState.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    
    if (!formState.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formState.service) {
      newErrors.service = 'Please select a service';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  }, [formState]);
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (!recaptchaToken) {
      setRecaptchaError('Please complete the reCAPTCHA');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitContactForm({
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        phone: formState.phone,
        service: formState.service,
        message: formState.message,
        address: formState.address,
        recaptchaToken
      });
      
      setIsSubmitted(true);
      setFormState(initialFormState);
      toast.success('Your message has been sent. We will contact you shortly!');
    } catch (error) {
      toast.error('There was an error sending your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, recaptchaToken, validateForm]);
  
  const isFormValid = Object.keys(errors).length === 0 && 
    formState.firstName.trim() !== '' && 
    formState.lastName.trim() !== '' && 
    formState.email.trim() !== '' && 
    validateEmail(formState.email) && 
    formState.service !== '';
  
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
    handleSubmit,
    setFormState
  };
};
