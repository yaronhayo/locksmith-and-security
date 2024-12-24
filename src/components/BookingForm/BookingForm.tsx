import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lock, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BasicFields } from "./FormFields/BasicFields";
import { ServiceField } from "./FormFields/ServiceField";
import { VehicleFields } from "./FormFields/VehicleFields";
import { TimeframeField } from "./FormFields/TimeframeField";
import { FormProgress } from "./FormProgress";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { submitBookingForm } from "@/services/bookingService";
import type { BookingFormData, FormErrors } from "@/types/booking";

const initialFormData: BookingFormData = {
  name: "",
  phone: "",
  address: "",
  service: "",
};

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const { formData, setFormData, clearPersistedData } = useFormPersistence(initialFormData);

  // Analytics tracking
  useEffect(() => {
    const startTime = Date.now();
    return () => {
      const endTime = Date.now();
      console.log('Form interaction time:', endTime - startTime);
    };
  }, []);

  const handleFieldChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.address?.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      // Track step completion
      console.log('Step 1 completed:', Date.now());
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitBookingForm(formData);
      
      if (response.success) {
        toast({
          title: "Request Submitted Successfully",
          description: response.message,
        });
        
        // Clear form after successful submission
        clearPersistedData();
        setStep(1);
        setErrors({});
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showVehicleInfo = formData.service.toLowerCase().includes("car");

  return (
    <div className="w-full max-w-md mx-auto">
      <FormProgress currentStep={step} totalSteps={2} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-4">
              <BasicFields
                errors={errors}
                defaultValues={formData}
                onChange={handleFieldChange}
              />
              <ServiceField
                errors={errors}
                onServiceChange={(value) => handleFieldChange('service', value)}
                defaultValue={formData.service}
              />
              
              <Button
                type="submit"
                className="w-full h-10 text-sm font-semibold"
              >
                Next Step
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {showVehicleInfo && (
                <VehicleFields
                  errors={errors}
                  defaultValues={formData}
                  onChange={handleFieldChange}
                />
              )}
              
              <TimeframeField
                defaultValue={formData.timeframe}
                onChange={(value) => handleFieldChange('timeframe', value)}
              />

              {formData.service === "Other" && (
                <div className="space-y-2">
                  <Label htmlFor="otherService">Please specify the service needed</Label>
                  <Input
                    id="otherService"
                    value={formData.otherService}
                    onChange={(e) => handleFieldChange('otherService', e.target.value)}
                    className="h-10"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleFieldChange('notes', e.target.value)}
                  placeholder="Any specific details or requirements..."
                  className="h-20 resize-none"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-1/2 h-10"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-1/2 h-10"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-gray-500 text-center mt-4">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </div>
  );
};

export default BookingForm;