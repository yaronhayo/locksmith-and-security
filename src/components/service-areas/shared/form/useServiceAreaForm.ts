
import { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "sonner";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";
import { submitFormData } from "@/utils/formSubmission";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface FormErrors {
  name: string | null;
  email: string | null;
  phone: string | null;
}

interface IsDirty {
  name: boolean;
  email: boolean;
  phone: boolean;
}

export const useServiceAreaForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    phone: null
  });
  
  const [isDirty, setIsDirty] = useState<IsDirty>({
    name: false,
    email: false,
    phone: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  
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
  
  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  }, []);
  
  const isFormValid = useMemo(() => {
    return (
      !errors.name && 
      !errors.email && 
      !errors.phone && 
      formState.name.trim() !== '' && 
      formState.email.trim() !== '' && 
      formState.phone.trim() !== '' && 
      formState.service !== '' && 
      !!recaptchaToken
    );
  }, [errors, formState, recaptchaToken]);
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as dirty to show validation errors
    setIsDirty({
      name: true,
      email: true,
      phone: true
    });
    
    // Update all errors
    const newErrors = {
      name: getNameError(formState.name) || (formState.name.trim() === '' ? 'Name is required' : null),
      email: getEmailError(formState.email) || (formState.email.trim() === '' ? 'Email is required' : null),
      phone: getPhoneError(formState.phone) || (formState.phone.trim() === '' ? 'Phone number is required' : null)
    };
    
    setErrors(newErrors);
    
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification");
      return;
    }
    
    if (newErrors.name || newErrors.email || newErrors.phone || formState.service === '') {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare submission data
      const submissionData = {
        type: "contact" as const, // Using "as const" to ensure it's treated as a literal
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        address: window.location.pathname.split('/').pop() || '',
        message: formState.message,
        service: formState.service,
        status: "pending" as const,
        recaptcha_token: recaptchaToken,
        visitor_info: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          windowSize: `${window.innerWidth}x${window.innerHeight}`,
          timestamp: new Date().toISOString()
        },
        source_url: window.location.pathname
      };
      
      // Submit to Supabase and send email
      await submitFormData(submissionData);
      
      setIsSubmitted(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you shortly."
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
      });
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description: error.message || "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
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
