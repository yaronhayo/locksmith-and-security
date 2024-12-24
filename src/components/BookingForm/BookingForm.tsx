import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { BasicFields } from "./FormFields/BasicFields";
import { ServiceField } from "./FormFields/ServiceField";
import { VehicleFields } from "./FormFields/VehicleFields";
import { TimeframeField } from "./FormFields/TimeframeField";
import { validateForm, validateVehicleInfo } from "./BookingFormValidation";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { isValid, errors: formErrors } = validateForm(formData);
    
    if (showVehicleInfo) {
      const { isValid: vehicleValid, errors: vehicleErrors } = validateVehicleInfo(formData);
      if (!vehicleValid) {
        setErrors({ ...formErrors, ...vehicleErrors });
        toast({
          title: "Validation Error",
          description: "Please check the vehicle information",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (!isValid) {
      setErrors(formErrors);
      toast({
        title: "Validation Error",
        description: "Please check all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you shortly to confirm your booking.",
      });

      (e.target as HTMLFormElement).reset();
      setSelectedService("");
      setShowVehicleInfo(false);
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

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <BasicFields errors={errors} />
      <ServiceField errors={errors} onServiceChange={handleServiceChange} />
      
      {showVehicleInfo && <VehicleFields errors={errors} />}
      
      <TimeframeField />

      {selectedService === "Other" && (
        <div className="space-y-1.5">
          <Label htmlFor="otherService" className="text-sm">Please specify the service needed</Label>
          <Input
            id="otherService"
            name="otherService"
            type="text"
            required
            className="h-8 text-sm"
          />
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="notes" className="text-sm">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Additional Notes..."
          className="h-16 text-sm resize-none"
        />
      </div>

      <Button
        type="submit"
        size="default"
        className="w-full text-sm font-semibold h-8"
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
            Request Service
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;