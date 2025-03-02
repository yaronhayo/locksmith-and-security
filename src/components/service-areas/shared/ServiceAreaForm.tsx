
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";
import FormHeader from "./form/FormHeader";
import ThankYouMessage from "./form/ThankYouMessage";
import ContactFields from "./form/ContactFields";
import EmailField from "./form/EmailField";
import ServiceField from "./form/ServiceField";
import MessageField from "./form/MessageField";
import ContactOptions from "./form/ContactOptions";
import SubmitButton from "./form/SubmitButton";
import RecaptchaField from "@/components/BookingForm/RecaptchaField";

interface ServiceAreaFormProps {
  locationName?: string;
}

const ServiceAreaForm = ({ locationName }: ServiceAreaFormProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  
  const [errors, setErrors] = useState({
    name: null as string | null,
    email: null as string | null,
    phone: null as string | null
  });
  
  const [isDirty, setIsDirty] = useState({
    name: false,
    email: false,
    phone: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
  };
  
  const handleBlur = (field: 'name' | 'email' | 'phone') => {
    setIsDirty(prev => ({ ...prev, [field]: true }));
  };
  
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(token ? null : "Please complete the reCAPTCHA verification");
  };
  
  const isFormValid = () => {
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
  };
  
  const handleSubmit = (e: React.FormEvent) => {
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you shortly."
      });
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
      });
    }, 1500);
  };
  
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden" id="contact-form">
      <FormHeader locationName={locationName} />
      
      <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        {isSubmitted ? (
          <ThankYouMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-full">
            <ContactFields 
              formState={formState}
              errors={errors}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            
            <EmailField 
              email={formState.email}
              error={errors.email}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
              handleBlur={() => handleBlur('email')}
            />
            
            <ServiceField 
              service={formState.service}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
            />
            
            <MessageField 
              message={formState.message}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
            />
            
            <RecaptchaField 
              onChange={handleRecaptchaChange} 
              error={recaptchaError || undefined}
              className="pt-2"
            />
            
            <SubmitButton 
              isSubmitting={isSubmitting}
              isDisabled={!isFormValid()}
            />
          </form>
        )}
        
        <ContactOptions />
      </div>
    </section>
  );
};

export default ServiceAreaForm;
