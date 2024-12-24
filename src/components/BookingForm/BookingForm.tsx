import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lock, Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BasicFields } from "./FormFields/BasicFields";
import { ServiceField } from "./FormFields/ServiceField";
import { VehicleFields } from "./FormFields/VehicleFields";
import { TimeframeField } from "./FormFields/TimeframeField";
import type { BookingFormData, FormErrors, FormStep } from "@/types/booking";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    address: "",
    service: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

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

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        service: "",
      });
      setStep(1);
      setErrors({});
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showVehicleInfo = formData.service.toLowerCase().includes("car");

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Request Service</h2>
        <p className="text-sm text-gray-600 mt-1">
          {step === 1 ? "Tell us about yourself" : "Additional details"}
        </p>
      </div>

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
                onChange={(field, value) => 
                  setFormData(prev => ({ ...prev, [field]: value }))
                }
              />
              <ServiceField
                errors={errors}
                onServiceChange={handleServiceChange}
                defaultValue={formData.service}
              />
              
              <Button
                type="submit"
                className="w-full h-10 text-sm font-semibold"
              >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {showVehicleInfo && (
                <VehicleFields
                  errors={errors}
                  defaultValues={formData}
                  onChange={(field, value) =>
                    setFormData(prev => ({ ...prev, [field]: value }))
                  }
                />
              )}
              
              <TimeframeField
                defaultValue={formData.timeframe}
                onChange={value =>
                  setFormData(prev => ({ ...prev, timeframe: value }))
                }
              />

              {formData.service === "Other" && (
                <div className="space-y-2">
                  <Label htmlFor="otherService">Please specify the service needed</Label>
                  <Input
                    id="otherService"
                    name="otherService"
                    value={formData.otherService}
                    onChange={e =>
                      setFormData(prev => ({
                        ...prev,
                        otherService: e.target.value
                      }))
                    }
                    className="h-10"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, notes: e.target.value }))
                  }
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
                  <ArrowLeft className="w-4 h-4 mr-2" />
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