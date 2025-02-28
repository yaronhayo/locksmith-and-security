
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Phone, Mail, MessageSquare, SendIcon } from "lucide-react";
import { motion } from "framer-motion";
import Recaptcha from "@/components/ui/recaptcha";
import { formatPhoneNumber, getEmailError, getNameError, getPhoneError } from "@/utils/inputValidation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
    
    if (name === 'phone') {
      // Format the phone number as it's typed
      const formattedPhone = formatPhoneNumber(value);
      setFormState(prev => ({ ...prev, [name]: formattedPhone }));
      
      if (!isDirty.phone) {
        setIsDirty(prev => ({ ...prev, phone: true }));
      }
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
      
      // Set the corresponding field as dirty
      if (name === 'name' && !isDirty.name) {
        setIsDirty(prev => ({ ...prev, name: true }));
      } else if (name === 'email' && !isDirty.email) {
        setIsDirty(prev => ({ ...prev, email: true }));
      }
    }
  };
  
  const handleBlur = (field: 'name' | 'email' | 'phone') => {
    setIsDirty(prev => ({ ...prev, [field]: true }));
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
      alert("Please complete the reCAPTCHA verification");
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
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
          Contact Your {locationName} Locksmith
        </h2>
        <p className="text-white/90 text-sm sm:text-base">
          Fill out the form below and our team will get back to you promptly
        </p>
      </div>
      
      <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 text-green-700 p-4 sm:p-6 rounded-lg text-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Thank You!</h3>
            <p>Your message has been sent successfully. A member of our team will contact you shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-3 sm:px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary`}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <Alert variant="destructive" className="mt-1 py-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription id="name-error">{errors.name}</AlertDescription>
                  </Alert>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full px-3 sm:px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary`}
                  required
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <Alert variant="destructive" className="mt-1 py-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription id="phone-error">{errors.phone}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                className={`w-full px-3 sm:px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-secondary focus:border-secondary`}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <Alert variant="destructive" className="mt-1 py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription id="email-error">{errors.email}</AlertDescription>
                </Alert>
              )}
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                required
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Locksmith</option>
                <option value="commercial">Commercial Locksmith</option>
                <option value="automotive">Automotive Locksmith</option>
                <option value="emergency">Emergency Lockout</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                required
              />
            </div>
            
            <div className="pt-2 overflow-x-auto">
              <Recaptcha onChange={setRecaptchaToken} />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-2 sm:py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-md shadow-sm"
              disabled={isSubmitting || !isFormValid()}
            >
              {isSubmitting ? "Sending..." : (
                <span className="flex items-center gap-2">
                  <SendIcon className="h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        )}
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <Phone className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="text-lg font-medium mb-1">Call Us</h3>
            <a href="tel:2017482070" className="text-secondary hover:underline">(201) 748-2070</a>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <Mail className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="text-lg font-medium mb-1">Email Us</h3>
            <a href="mailto:info@247locksmithandsecurity.com" className="text-secondary hover:underline text-sm sm:text-base">info@247locksmithandsecurity.com</a>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <MessageSquare className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="text-lg font-medium mb-1">Emergency Service</h3>
            <p className="text-gray-700">Available 24/7 for urgent assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaForm;
