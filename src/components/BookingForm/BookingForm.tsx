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
    <form onSubmit={handleSubmit} className="space-y-3 relative">
      {isSubmitting && <FormLoadingOverlay />}
      
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={errors.name ? 'border-red-500' : ''}
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
        />
        {errors.address && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Needed</Label>
        <Select 
          onValueChange={handleServiceChange} 
          name="service"
          disabled={isSubmitting}
        >
          <SelectTrigger 
            id="service"
            className={errors.service ? 'border-red-500' : ''}
          >
            <SelectValue placeholder="Select Service Needed" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.service}</AlertDescription>
          </Alert>
        )}
      </div>

      {showVehicleInfo && (
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="vehicleYear">Vehicle Year</Label>
            <Input
              id="vehicleYear"
              name="vehicleYear"
              type="text"
              aria-describedby="vehicleYear-error"
              className={`h-10 text-base ${errors.vehicleYear ? 'border-red-500' : ''}`}
            />
            {errors.vehicleYear && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.vehicleYear}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicleMake">Vehicle Make</Label>
            <Input
              id="vehicleMake"
              name="vehicleMake"
              type="text"
              aria-describedby="vehicleMake-error"
              className={`h-10 text-base ${errors.vehicleMake ? 'border-red-500' : ''}`}
            />
            {errors.vehicleMake && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.vehicleMake}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicleModel">Vehicle Model</Label>
            <Input
              id="vehicleModel"
              name="vehicleModel"
              type="text"
              aria-describedby="vehicleModel-error"
              className={`h-10 text-base ${errors.vehicleModel ? 'border-red-500' : ''}`}
            />
            {errors.vehicleModel && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.vehicleModel}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="timeframe">When do you need service?</Label>
        <Select name="timeframe">
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
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg font-semibold h-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ButtonLoadingState />
        ) : (
          <>
            <Lock className="w-5 h-5 mr-2" />
            Request Service
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Fast Response • Professional Service • 24/7 Available
      </p>
    </form>
  );
};

export default BookingForm;
