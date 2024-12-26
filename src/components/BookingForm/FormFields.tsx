import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, timeframes } from "./constants";

interface FormFieldsProps {
  errors: Record<string, string>;
  showVehicleInfo: boolean;
  selectedService: string;
  isSubmitting: boolean;
  handleServiceChange: (value: string) => void;
}

const FormFields = ({
  errors,
  showVehicleInfo,
  selectedService,
  isSubmitting,
  handleServiceChange,
}: FormFieldsProps) => {
  return (
    <>
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
    </>
  );
};

export default FormFields;