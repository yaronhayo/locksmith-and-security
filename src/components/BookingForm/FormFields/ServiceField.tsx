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
import { services } from "../constants";

interface ServiceFieldProps {
  errors: Record<string, string>;
  onServiceChange: (value: string) => void;
  defaultValue?: string;
}

export const ServiceField = ({ errors, onServiceChange, defaultValue }: ServiceFieldProps) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="service" className="text-sm">Service Needed</Label>
      <Select onValueChange={onServiceChange} name="service" defaultValue={defaultValue}>
        <SelectTrigger 
          id="service"
          className={`h-8 text-sm ${errors.service ? 'border-red-500' : ''}`}
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
        <Alert variant="destructive" className="py-1.5">
          <AlertCircle className="h-3 w-3" />
          <AlertDescription className="text-xs">{errors.service}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};