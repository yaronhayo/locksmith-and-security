import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, carKeyServices } from "../constants";

interface ServiceSelectionProps {
  service: string;
  setService: (value: string) => void;
  error?: string;
  isSubmitting: boolean;
  setShowVehicleInfo: (show: boolean) => void;
  setShowAllKeysLostField: (show: boolean) => void;
  setShowUnusedKeyField: (show: boolean) => void;
}

const ServiceSelection = ({
  service,
  setService,
  error,
  isSubmitting,
  setShowVehicleInfo,
  setShowAllKeysLostField,
  setShowUnusedKeyField
}: ServiceSelectionProps) => {
  // Handle service change and set vehicle info visibility
  const onServiceChange = (value: string) => {
    setService(value);
    
    // Check if vehicle-related service is selected
    const isCarService = [
      "Car Lockout",
      "Car Key Replacement",
      "Key Fob Programming",
      "Car Key Duplicate",
      "Car Key Cutting",
      "Ignition Lock Cylinder Repair"
    ].includes(value);
    
    setShowVehicleInfo(isCarService);
    
    // Only show these fields when specific services are selected and keep them close to vehicle info
    const showAllKeysLost = ["Car Key Replacement", "Key Fob Programming"].includes(value);
    const showUnusedKey = value === "Key Fob Programming";
    
    setShowAllKeysLostField(showAllKeysLost);
    setShowUnusedKeyField(showUnusedKey);
  };

  // Group services by category
  const emergencyServices = services.filter(service => 
    ["Car Lockout", "House Lockout", "Business Lockout", "Storage Unit Lockout"].includes(service)
  );
  
  const residentialServices = services.filter(service => 
    ["Lock Replacement", "Lock Rekey", "Lock Repair", "Gate Locks"].includes(service)
  );
  
  const commercialServices = services.filter(service => 
    ["Commercial Lock Replacement", "Commercial Lock Rekey", "Master Key System", "Access Control", "Emergency Exit Device"].includes(service)
  );
  
  const automotiveServices = services.filter(service => 
    ["Car Key Replacement", "Key Fob Programming", "Car Key Duplicate", "Car Key Cutting", "Ignition Lock Cylinder Repair"].includes(service)
  );
  
  const otherServices = services.filter(service => 
    service === "Other"
  );

  return (
    <div className="space-y-2">
      <Label htmlFor="service">Service Needed</Label>
      <Select 
        onValueChange={onServiceChange} 
        name="service" 
        disabled={isSubmitting}
        value={service}
      >
        <SelectTrigger 
          id="service"
          className={`h-10 text-base ${error ? 'border-red-500' : ''}`}
          aria-label="Select the service you need"
        >
          <SelectValue placeholder="Select Service Needed" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Emergency Services</SelectLabel>
            {emergencyServices.map((serviceOption) => (
              <SelectItem key={serviceOption} value={serviceOption}>
                {serviceOption}
              </SelectItem>
            ))}
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>Residential Services</SelectLabel>
            {residentialServices.map((serviceOption) => (
              <SelectItem key={serviceOption} value={serviceOption}>
                {serviceOption}
              </SelectItem>
            ))}
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>Commercial Services</SelectLabel>
            {commercialServices.map((serviceOption) => (
              <SelectItem key={serviceOption} value={serviceOption}>
                {serviceOption}
              </SelectItem>
            ))}
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>Automotive Services</SelectLabel>
            {automotiveServices.map((serviceOption) => (
              <SelectItem key={serviceOption} value={serviceOption}>
                {serviceOption}
              </SelectItem>
            ))}
          </SelectGroup>
          
          {otherServices.map((serviceOption) => (
            <SelectItem key={serviceOption} value={serviceOption}>
              {serviceOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ServiceSelection;
