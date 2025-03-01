
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface AddressFieldsProps {
  address: string;
  onChange: (address: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const AddressFields = ({ address, onChange, errors, isSubmitting }: AddressFieldsProps) => {
  return (
    <>
      <div className="form-group">
        <Label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Service Address
        </Label>
        <GoogleMapsProvider>
          <AddressAutocomplete
            value={address}
            onChange={onChange}
            placeholder="Enter your service address"
            disabled={isSubmitting}
            required
            id="address"
            name="address"
          />
        </GoogleMapsProvider>
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
            <Label htmlFor="unit_number" className="block text-sm font-medium text-gray-700 mb-1">
              Unit Number (Optional)
            </Label>
            <Input
              id="unit_number"
              name="unit_number"
              type="text"
              className="h-9 text-sm"
              disabled={isSubmitting}
              placeholder="Apartment, suite, unit number"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="gate_code" className="block text-sm font-medium text-gray-700 mb-1">
              Gate Code (Optional)
            </Label>
            <Input
              id="gate_code"
              name="gate_code"
              type="text"
              className="h-9 text-sm"
              disabled={isSubmitting}
              placeholder="Enter gate code if applicable"
            />
          </div>
        </>
      )}
    </>
  );
};

export default AddressFields;
