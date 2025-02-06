
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BookingFormData, FormErrors } from "@/types/booking";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import VehicleFields from "./FormFields/VehicleFields";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import OtherServiceField from "./FormFields/OtherServiceField";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import SubmitButton from "./SubmitButton";
import { validateForm } from "./validation";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useLocation } from "react-router-dom";

const BookingForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const getVisitorInfo = () => {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString(),
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const submissionData = {
        type: 'booking',
        name: String(formData.get('name')),
        phone: String(formData.get('phone')),
        address: String(formData.get('address')),
        service: String(formData.get('service')),
        timeframe: String(formData.get('timeframe')),
        notes: formData.get('notes') ? String(formData.get('notes')) : null,
        vehicle_info: showVehicleInfo ? {
          year: String(formData.get('vehicleYear')),
          make: String(formData.get('vehicleMake')),
          model: String(formData.get('vehicleModel')),
        } : null,
        visitor_info: getVisitorInfo(),
        source_url: location.pathname,
        status: 'pending'
      };

      console.log("Submitting booking form data:", submissionData);

      // First store in database
      const { error: dbError } = await supabase
        .from('submissions')
        .insert(submissionData);

      if (dbError) throw dbError;

      // Then send email notification
      const { data, error } = await supabase.functions.invoke('send-form-email', {
        body: submissionData
      });

      if (error) throw error;

      console.log("Booking form submission response:", data);

      // Set flag for thank you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Navigate to thank you page
      navigate('/thank-you');

    } catch (error: any) {
      console.error('Booking form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" role="form" aria-label="Service booking form">
      <PersonalInfoFields errors={errors} isSubmitting={isSubmitting} />
      
      <ServiceSelection 
        error={errors.service}
        isSubmitting={isSubmitting}
        onServiceChange={handleServiceChange}
      />

      {showVehicleInfo && (
        <VehicleFields errors={errors} isSubmitting={isSubmitting} />
      )}

      <TimeframeSelection isSubmitting={isSubmitting} />

      {selectedService === "Other" && (
        <OtherServiceField isSubmitting={isSubmitting} />
      )}

      <AdditionalNotes isSubmitting={isSubmitting} />

      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default BookingForm;
