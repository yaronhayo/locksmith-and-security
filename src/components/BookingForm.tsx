import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Lock, Loader2 } from "lucide-react";
import { BasicFields } from "./BookingForm/FormFields/BasicFields";
import { ServiceField } from "./BookingForm/FormFields/ServiceField";
import { VehicleFields } from "./BookingForm/FormFields/VehicleFields";
import { TimeframeField } from "./BookingForm/FormFields/TimeframeField";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setShowVehicleInfo(value.toLowerCase().includes("car"));
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalFormData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    finalFormData.forEach((value, key) => {
      data[key] = value.toString();
    });
    const completeFormData = { ...formData, ...data };

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted Successfully",
      description: "We'll contact you shortly to confirm your booking.",
    });

    setIsSubmitting(false);
    setStep(1);
    setFormData({});
    setSelectedService("");
    setShowVehicleInfo(false);
    setErrors({});
  };

  return (
    <div className="space-y-4">
      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-3">
          <BasicFields errors={errors} defaultValues={formData} />
          <ServiceField 
            errors={errors} 
            onServiceChange={handleServiceChange}
            defaultValue={formData.service}
          />
          
          <Button
            type="submit"
            size="default"
            className="w-full text-sm font-semibold h-8"
          >
            Next Step
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {showVehicleInfo && <VehicleFields errors={errors} defaultValues={formData} />}
          <TimeframeField defaultValue={formData.timeframe} />
          
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

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Additional Notes..."
              className="h-16 text-sm resize-none"
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              size="default"
              variant="outline"
              className="w-1/2 text-sm font-semibold h-8"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button
              type="submit"
              size="default"
              className="w-1/2 text-sm font-semibold h-8"
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

      <p className="text-xs text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </div>
  );
};

export default BookingForm;
