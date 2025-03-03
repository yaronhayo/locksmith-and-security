
import React from 'react';
import { toast } from 'sonner';

interface FormErrors {
  [key: string]: string;
}

interface FormSubmitHandlerProps {
  children: React.ReactNode;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  recaptchaToken: string | null;
  address: string;
  showVehicleInfo: boolean;
  allKeysLost: boolean;
  hasUnusedKey: boolean;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
}

const FormSubmitHandler: React.FC<FormSubmitHandlerProps> = ({
  children,
  isSubmitting,
  setIsSubmitting,
  errors,
  setErrors,
  recaptchaToken,
  address,
  showVehicleInfo,
  allKeysLost,
  hasUnusedKey,
  showAllKeysLostField,
  showUnusedKeyField
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    const formData = new FormData(e.currentTarget);
    const newErrors: FormErrors = {};
    
    // Validate form fields
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!phone || !/^[0-9]{10,15}$/.test(phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!service) {
      newErrors.service = 'Please select a service';
    }
    
    if (showVehicleInfo) {
      const make = formData.get('make') as string;
      const model = formData.get('model') as string;
      const year = formData.get('year') as string;
      
      if (!make) {
        newErrors.make = 'Please enter vehicle make';
      }
      
      if (!model) {
        newErrors.model = 'Please enter vehicle model';
      }
      
      if (!year) {
        newErrors.year = 'Please enter vehicle year';
      }
    }
    
    if (!address) {
      newErrors.address = 'Please enter your address';
    }
    
    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please complete the reCAPTCHA verification';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Mock API call for form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully with data:', {
        name,
        phone,
        service,
        address,
        allKeysLost: showAllKeysLostField ? allKeysLost : undefined,
        hasUnusedKey: showUnusedKeyField ? hasUnusedKey : undefined,
        // Additional fields would be processed here
      });
      
      toast.success('Your booking request has been submitted! We will contact you shortly.');
      
      // Reset form
      e.currentTarget.reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {children}
    </form>
  );
};

export default FormSubmitHandler;
