
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AddressAutocomplete from "@/components/ui/address-autocomplete";

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
        <AddressAutocomplete
          value={address}
          onChange={onChange}
          placeholder="Enter your service address"
          disabled={isSubmitting}
          required
        />
        {errors.address && (
          <p className="text-xs text-red-500 mt-1">{errors.address}</p>
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
