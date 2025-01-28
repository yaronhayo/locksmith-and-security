import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Loader2, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormHeader from "./BookingForm/FormHeader";
import FormFooter from "./BookingForm/FormFooter";
import VehicleInfoFields from "./BookingForm/VehicleInfoFields";
import ServiceSelection from "./BookingForm/ServiceSelection";

const timeframes = [
  "ASAP",
  "Same Day",
  "Within Couple of Days",
  "Within Couple of Weeks",
  "Just Curious"
];

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

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    
    if (!name || name.trim().length < 2) {
      newErrors.name = "Please enter a valid name (minimum 2 characters)";
    }
    
    if (!phone || !/^[\d\s()-]{10,}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!address || address.trim().length < 5) {
      newErrors.address = "Please enter a valid address";
    }
    
    if (!selectedService) {
      newErrors.service = "Please select a service";
    }

    if (showVehicleInfo) {
      const vehicleYear = formData.get("vehicleYear") as string;
      const vehicleMake = formData.get("vehicleMake") as string;
      const vehicleModel = formData.get("vehicleModel") as string;

      if (!vehicleYear || !/^\d{4}$/.test(vehicleYear)) {
        newErrors.vehicleYear = "Please enter a valid year (YYYY)";
      }
      if (!vehicleMake || vehicleMake.trim().length < 2) {
        newErrors.vehicleMake = "Please enter vehicle make";
      }
      if (!vehicleModel || vehicleModel.trim().length < 2) {
        newErrors.vehicleModel = "Please enter vehicle model";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted Successfully",
      description: "We'll contact you shortly to confirm your booking.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedService("");
    setShowVehicleInfo(false);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <FormHeader />

      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-10 text-base ${errors.name ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.name && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-10 text-base ${errors.phone ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          type="text"
          aria-describedby="address-error"
          className={`h-10 text-base ${errors.address ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
        />
        {errors.address && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>

      <ServiceSelection 
        error={errors.service}
        isSubmitting={isSubmitting}
        onServiceChange={handleServiceChange}
      />

      {showVehicleInfo && (
        <VehicleInfoFields errors={errors} isSubmitting={isSubmitting} />
      )}

      <div className="space-y-2">
        <Label htmlFor="timeframe">When do you need service?</Label>
        <Select name="timeframe" disabled={isSubmitting}>
          <SelectTrigger id="timeframe" className="h-10 text-base">
            <SelectValue placeholder="When do you need service?" />
          </SelectTrigger>
          <SelectContent>
            {timeframes.map((timeframe) => (
              <SelectItem key={timeframe} value={timeframe}>
                {timeframe}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedService === "Other" && (
        <div className="space-y-2">
          <Label htmlFor="otherService">Please specify the service needed</Label>
          <Input
            id="otherService"
            name="otherService"
            type="text"
            required
            className="h-10 text-base"
            disabled={isSubmitting}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Additional Notes..."
          className="h-20 text-base resize-none"
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg font-semibold h-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Lock className="w-5 h-5 mr-2" />
            Request Service
          </>
        )}
      </Button>

      <FormFooter />
    </form>
  );
};

export default BookingForm;