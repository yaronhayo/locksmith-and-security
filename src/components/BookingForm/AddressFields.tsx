
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface AddressFieldsProps {
  address: string;
  onChange: (address: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const AddressFields = ({ address, onChange, errors, isSubmitting }: AddressFieldsProps) => {
  // Handle normal input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Event address received in BookingForm:", e.target.value);
    onChange(e.target.value);
  };

  // Dedicated handler for address selection from autocomplete
  const handleAddressSelect = (selectedAddress: string) => {
    console.log("Address selected in BookingForm:", selectedAddress);
    onChange(selectedAddress);
  };

  return (
    <>
      <div className="form-group">
        <Label htmlFor="address" className="block text-sm font-medium text-gray-800 mb-1">
          Service Address
        </Label>
        <div className="relative">
          <GoogleMapsProvider>
            <AddressAutocomplete
              value={address}
              onChange={handleInputChange}
              onAddressSelect={handleAddressSelect}
              placeholder="Enter your service address"
              disabled={isSubmitting}
              required
              id="address"
              name="address"
              className="text-gray-900 placeholder:text-gray-500"
              error={!!errors.address}
              autoComplete="street-address"
            />
          </GoogleMapsProvider>
        </div>
        {errors.address && (
          <Alert variant="destructive" className="mt-1 py-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errors.address}</AlertDescription>
          </Alert>
        )}
      </div>

      {address && (
        <>
          <div className="form-group">
            <Label htmlFor="unit_number" className="block text-sm font-medium text-gray-800 mb-1">
              Unit Number (Optional)
            </Label>
            <Input
              id="unit_number"
              name="unit_number"
              type="text"
              className="h-9 text-sm text-gray-900 placeholder:text-gray-500"
              disabled={isSubmitting}
              placeholder="Apartment, suite, unit number"
              autoComplete="address-line2"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="gate_code" className="block text-sm font-medium text-gray-800 mb-1">
              Gate Code (Optional)
            </Label>
            <Input
              id="gate_code"
              name="gate_code"
              type="text"
              className="h-9 text-sm text-gray-900 placeholder:text-gray-500"
              disabled={isSubmitting}
              placeholder="Enter gate code if applicable"
              autoComplete="off"
            />
          </div>
        </>
      )}
    </>
  );
};

export default AddressFields;
