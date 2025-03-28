
import React, { useState, useCallback } from "react";
import { useBookingSubmission } from "./hooks/useBookingSubmission";
import { useFormValidation } from "./hooks/useFormValidation";
import { useAddressAutocompletion } from "./hooks/useAddressAutocompletion";
import { Recaptcha } from "@/components/Recaptcha";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import BookingFormSkeleton from "./BookingFormSkeleton";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";

const BookingForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [address, setAddress] = useState("");
  const [allKeysLost, setAllKeysLost] = useState("no");
  const [hasUnusedKey, setHasUnusedKey] = useState("no");
  const [showAllKeysLostField, setShowAllKeysLostField] = useState(false);
  const [showUnusedKeyField, setShowUnusedKeyField] = useState(false);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const { validateForm } = useFormValidation();
  const { isSubmitting, handleSubmit } = useBookingSubmission({
    validateForm,
    setErrors,
    showVehicleInfo,
    recaptchaToken,
    address,
    allKeysLost,
    hasUnusedKey,
    showAllKeysLostField,
    showUnusedKeyField
  });
  const { suggestions, handleInputChange } = useAddressAutocompletion(setAddress, setIsAddressLoading);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleAddressSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
  };

  const toggleVehicleInfo = () => {
    setShowVehicleInfo(!showVehicleInfo);
  };

  const handleAllKeysLostChange = (value: string) => {
    setAllKeysLost(value);
  };

  const handleHasUnusedKeyChange = (value: string) => {
    setHasUnusedKey(value);
  };

  const toggleAllKeysLostField = () => {
    setShowAllKeysLostField(!showAllKeysLostField);
  };

  const toggleUnusedKeyField = () => {
    setShowUnusedKeyField(!showUnusedKeyField);
  };

  return (
    <FormContainer
      errors={errors}
      setErrors={setErrors}
      onSubmit={handleSubmit}
      showVehicleInfo={showVehicleInfo}
      recaptchaToken={recaptchaToken}
      address={address}
      allKeysLost={allKeysLost}
      hasUnusedKey={hasUnusedKey}
      showAllKeysLostField={showAllKeysLostField}
      showUnusedKeyField={showUnusedKeyField}
      isSubmitting={isSubmitting}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input type="text" id="name" name="name" placeholder="John Doe" aria-invalid={!!errors.name} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="tel" id="phone" name="phone" placeholder="201-748-2070" aria-invalid={!!errors.phone} />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="address">Service Address</Label>
        <Input
          type="text"
          id="address"
          name="address"
          placeholder="7116 Bergenline Ave, North Bergen, NJ"
          autoComplete="street-address"
          onChange={(e) => handleInputChange(e.target.value)}
          value={address}
          aria-invalid={!!errors.address}
          className={isAddressLoading ? "animate-pulse" : ""}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        {suggestions.length > 0 && (
          <ul className="border rounded-md shadow-sm mt-1">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                className="px-4 py-2 hover:bg-accent cursor-pointer"
                onClick={() => handleAddressSelect(suggestion.description)}
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="unit_number">Unit, Apt, or Suite (optional)</Label>
        <Input type="text" id="unit_number" name="unit_number" placeholder="Apt 2" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gate_code">Gate Code (optional)</Label>
        <Input type="text" id="gate_code" name="gate_code" placeholder="1234" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="service">Select a Service</Label>
        <Select name="service" aria-invalid={!!errors.service}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Emergency Lockout">Emergency Lockout</SelectItem>
            <SelectItem value="Lock Repair">Lock Repair</SelectItem>
            <SelectItem value="Lock Installation">Lock Installation</SelectItem>
            <SelectItem value="Key Replacement">Key Replacement</SelectItem>
            <SelectItem value="Rekeying">Rekeying</SelectItem>
            <SelectItem value="Master Key Systems">Master Key Systems</SelectItem>
            <SelectItem value="Access Control Systems">Access Control Systems</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="other_service">If 'Other', please specify</Label>
        <Input type="text" id="other_service" name="other_service" placeholder="Briefly describe the service needed" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="timeframe">Preferred Timeframe</Label>
        <Select name="timeframe" aria-invalid={!!errors.timeframe}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Emergency - ASAP">Emergency - ASAP</SelectItem>
            <SelectItem value="Within 2 Hours">Within 2 Hours</SelectItem>
            <SelectItem value="Later Today">Later Today</SelectItem>
            <SelectItem value="Tomorrow">Tomorrow</SelectItem>
            <SelectItem value="Specific Date">Specific Date</SelectItem>
          </SelectContent>
        </Select>
        {errors.timeframe && <p className="text-red-500 text-sm">{errors.timeframe}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="notes">Additional Notes (optional)</Label>
        <Textarea id="notes" name="notes" placeholder="Any additional details?" />
      </div>

      <div>
        <Checkbox id="vehicle-info" name="vehicle-info" checked={showVehicleInfo} onCheckedChange={toggleVehicleInfo} />
        <Label htmlFor="vehicle-info" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
          I need a car key / car lockout service
        </Label>
      </div>

      {showVehicleInfo && (
        <div className="space-y-4 border p-4 rounded">
          <div className="grid gap-2">
            <Label htmlFor="vehicle_year">Vehicle Year</Label>
            <Input type="text" id="vehicle_year" name="vehicle_year" placeholder="2018" aria-invalid={!!errors.vehicle_year} />
            {errors.vehicle_year && <p className="text-red-500 text-sm">{errors.vehicle_year}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="vehicle_make">Vehicle Make</Label>
            <Input type="text" id="vehicle_make" name="vehicle_make" placeholder="Honda" aria-invalid={!!errors.vehicle_make} />
            {errors.vehicle_make && <p className="text-red-500 text-sm">{errors.vehicle_make}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="vehicle_model">Vehicle Model</Label>
            <Input type="text" id="vehicle_model" name="vehicle_model" placeholder="Civic" aria-invalid={!!errors.vehicle_model} />
            {errors.vehicle_model && <p className="text-red-500 text-sm">{errors.vehicle_model}</p>}
          </div>

          <div>
            <Checkbox id="all-keys-lost" name="all-keys-lost" checked={showAllKeysLostField} onCheckedChange={toggleAllKeysLostField} />
            <Label htmlFor="all-keys-lost" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
              All Keys Lost?
            </Label>
          </div>

          {showAllKeysLostField && (
            <div className="grid gap-2">
              <Label htmlFor="all_keys_lost">All Keys Lost?</Label>
              <Select onValueChange={handleAllKeysLostChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Checkbox id="has-unused-key" name="has-unused-key" checked={showUnusedKeyField} onCheckedChange={toggleUnusedKeyField} />
            <Label htmlFor="has-unused-key" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
              Do you have an Unused Key?
            </Label>
          </div>

          {showUnusedKeyField && (
            <div className="grid gap-2">
              <Label htmlFor="has_unused_key">Do you have an Unused Key?</Label>
              <Select onValueChange={handleHasUnusedKeyChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      )}

      <SubmitButton isSubmitting={isSubmitting} />
    </FormContainer>
  );
};

export default BookingForm;
