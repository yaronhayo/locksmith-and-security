import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, timeframes } from "./constants";

interface ServiceFieldsProps {
  errors: Record<string, string>;
  handleServiceChange: (value: string) => void;
  isSubmitting: boolean;
}

const ServiceFields = ({ errors, handleServiceChange, isSubmitting }: ServiceFieldsProps) => {
  return (
    <>
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
            aria-invalid={errors.service ? "true" : "false"}
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
    </>
  );
};

export default ServiceFields;