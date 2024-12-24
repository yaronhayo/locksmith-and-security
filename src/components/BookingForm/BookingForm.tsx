import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { validateForm, validateVehicleInfo } from "./BookingFormValidation";
import { FormLoadingOverlay, ButtonLoadingState } from "./LoadingStates";
import { services, timeframes } from "./constants";

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
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-9 text-sm ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-9 text-sm ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address" className="text-sm">Address</Label>
        <Input
          id="address"
          name="address"
          type="text"
          aria-describedby="address-error"
          className={`h-9 text-sm ${errors.address ? 'border-red-500' : ''}`}
        />
        {errors.address && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <div className="space-y-1.5">
        <Label htmlFor="service" className="text-sm">Service Needed</Label>
        <Select onValueChange={handleServiceChange} name="service">
          <SelectTrigger 
            id="service"
            className={`h-9 text-sm ${errors.service ? 'border-red-500' : ''}`}
          >
            <SelectValue placeholder="Select Service Needed" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service} className="text-sm">
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <Alert variant="destructive" className="py-2">
            <AlertCircle className="h-3 w-3" />
            <AlertDescription className="text-xs">{errors.service}</AlertDescription>
          </Alert>
        )}
      </div>

      {showVehicleInfo && (
        <div className="space-y-2">
          <div className="space-y-1.5">
            <Label htmlFor="vehicleYear" className="text-sm">Vehicle Year</Label>
            <Input
              id="vehicleYear"
              name="vehicleYear"
              type="text"
              aria-describedby="vehicleYear-error"
              className={`h-9 text-sm ${errors.vehicleYear ? 'border-red-500' : ''}`}
            />
            {errors.vehicleYear && (
              <Alert variant="destructive" className="py-2">
                <AlertCircle className="h-3 w-3" />
                <AlertDescription className="text-xs">{errors.vehicleYear}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="vehicleMake" className="text-sm">Vehicle Make</Label>
            <Input
              id="vehicleMake"
              name="vehicleMake"
              type="text"
              aria-describedby="vehicleMake-error"
              className={`h-9 text-sm ${errors.vehicleMake ? 'border-red-500' : ''}`}
            />
            {errors.vehicleMake && (
              <Alert variant="destructive" className="py-2">
                <AlertCircle className="h-3 w-3" />
                <AlertDescription className="text-xs">{errors.vehicleMake}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="vehicleModel" className="text-sm">Vehicle Model</Label>
            <Input
              id="vehicleModel"
              name="vehicleModel"
              type="text"
              aria-describedby="vehicleModel-error"
              className={`h-9 text-sm ${errors.vehicleModel ? 'border-red-500' : ''}`}
            />
            {errors.vehicleModel && (
              <Alert variant="destructive" className="py-2">
                <AlertCircle className="h-3 w-3" />
                <AlertDescription className="text-xs">{errors.vehicleModel}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="timeframe" className="text-sm">When do you need service?</Label>
        <Select name="timeframe">
          <SelectTrigger id="timeframe" className="h-9 text-sm">
            <SelectValue placeholder="When do you need service?" />
          </SelectTrigger>
          <SelectContent>
            {timeframes.map((timeframe) => (
              <SelectItem key={timeframe} value={timeframe} className="text-sm">
                {timeframe}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedService === "Other" && (
        <div className="space-y-1.5">
          <Label htmlFor="otherService" className="text-sm">Please specify the service needed</Label>
          <Input
            id="otherService"
            name="otherService"
            type="text"
            required
            className="h-9 text-sm"
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
        className="w-full text-sm font-semibold h-9"
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
