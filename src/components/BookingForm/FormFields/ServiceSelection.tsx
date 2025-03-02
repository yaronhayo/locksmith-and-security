
import React, { useMemo } from 'react';
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
import { services } from "../constants";

interface ServiceSelectionProps {
  error?: string;
  isSubmitting: boolean;
  onServiceChange: (value: string) => void;
}

const ServiceSelection = ({ error, isSubmitting, onServiceChange }: ServiceSelectionProps) => {
  // Group services by category - memoized to prevent re-computation on every render
  const groupedServices = useMemo(() => {
    return {
      emergency: services.filter(service => 
        ["Car Lockout", "House Lockout", "Business Lockout", "Storage Unit Lockout"].includes(service)
      ),
      
      residential: services.filter(service => 
        ["Lock Replacement", "Lock Rekey", "Lock Repair", "Gate Locks"].includes(service)
      ),
      
      commercial: services.filter(service => 
        ["Commercial Lock Replacement", "Commercial Lock Rekey", "Master Key System", "Access Control", "Emergency Exit Device"].includes(service)
      ),
      
      automotive: services.filter(service => 
        ["Car Key Replacement", "Key Fob Programming", "Car Key Duplicate", "Car Key Cutting", "Ignition Lock Cylinder Repair"].includes(service)
      ),
      
      other: services.filter(service => 
        service === "Other"
      )
    };
  }, []);

  return (
    <div className="space-y-2">
      <Label htmlFor="service">Service Needed</Label>
      <Select onValueChange={onServiceChange} name="service" disabled={isSubmitting}>
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
            {groupedServices.emergency.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>Residential Services</SelectLabel>
            {groupedServices.residential.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>Commercial Services</SelectLabel>
            {groupedServices.commercial.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectGroup>
          
          <SelectGroup>
            <SelectLabel>Automotive Services</SelectLabel>
            {groupedServices.automotive.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectGroup>
          
          {groupedServices.other.map((service) => (
            <SelectItem key={service} value={service}>
              {service}
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
