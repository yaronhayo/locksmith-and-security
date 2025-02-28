
import { useNavigate, useLocation } from "react-router-dom";
import { validateForm } from "./validation";
import { useBookingFormState } from "./hooks/useBookingFormState";
import { submitBookingForm } from "./utils/submitForm";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import VehicleFields from "./FormFields/VehicleFields";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import OtherServiceField from "./FormFields/OtherServiceField";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import AllKeysLostField from "./FormFields/AllKeysLostField";
import UnusedKeyField from "./FormFields/UnusedKeyField";
import SubmitButton from "./SubmitButton";
import Recaptcha from "@/components/ui/recaptcha";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { LockKeyhole, MapPin, Building2, Shield } from "lucide-react";

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const {
    isSubmitting,
    setIsSubmitting,
    selectedService,
    allKeysLost,
    hasUnusedKey,
    showVehicleInfo,
    showAllKeysLostField,
    showUnusedKeyField,
    errors,
    setErrors,
    handleServiceChange,
    handleAllKeysLostChange,
    handleUnusedKeyChange,
  } = useBookingFormState();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set('address', address);
    
    if (showAllKeysLostField) {
      formData.set('all_keys_lost', allKeysLost);
    }
    
    if (showUnusedKeyField) {
      formData.set('has_unused_key', hasUnusedKey);
    }
    
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitBookingForm(formData, showVehicleInfo, location.pathname, recaptchaToken, address);
      window.sessionStorage.setItem('fromFormSubmission', 'true');
      
      toast({
        title: "Booking Received!",
        description: "We'll contact you shortly to confirm your appointment.",
        variant: "default",
      });

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'event_category': 'form',
          'event_label': 'booking_submission',
          'value': 1
        });
      }

      navigate('/thank-you');
    } catch (error: any) {
      console.error('Booking form submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-primary/10 overflow-visible">
      <CardContent className="p-0 overflow-visible">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-t-lg border-b border-primary/10 flex items-center space-x-3">
          <LockKeyhole className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold text-primary">Book Your Locksmith Service</h3>
        </div>
        <div className="p-5">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-full overflow-visible" role="form" aria-label="Service booking form">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-5 w-5 text-secondary" />
                  <h4 className="font-medium text-gray-700">Your Information</h4>
                </div>
                <PersonalInfoFields errors={errors} isSubmitting={isSubmitting} />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <h4 className="font-medium text-gray-700">Service Location</h4>
                </div>
                <div className="form-group">
                  <Label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Address
                  </Label>
                  <GoogleMapsProvider>
                    <AddressAutocomplete
                      value={address}
                      onChange={setAddress}
                      placeholder="Enter your service address"
                      disabled={isSubmitting}
                      required
                    />
                  </GoogleMapsProvider>
                  {errors.address && (
                    <p className="text-xs text-red-500 mt-1">{errors.address}</p>
                  )}
                </div>

                {address && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div className="form-group">
                      <Label htmlFor="unit_number" className="block text-sm font-medium text-gray-700 mb-1">
                        Unit Number (Optional)
                      </Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="unit_number"
                          name="unit_number"
                          type="text"
                          className="h-9 text-sm pl-10"
                          disabled={isSubmitting}
                          placeholder="Apt, suite, unit"
                        />
                      </div>
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
                  </div>
                )}
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <LockKeyhole className="h-5 w-5 text-secondary" />
                  <h4 className="font-medium text-gray-700">Service Details</h4>
                </div>
                <ServiceSelection 
                  error={errors.service}
                  isSubmitting={isSubmitting}
                  onServiceChange={handleServiceChange}
                />

                {showAllKeysLostField && (
                  <div className="mt-3">
                    <AllKeysLostField
                      isSubmitting={isSubmitting}
                      onChange={handleAllKeysLostChange}
                      value={allKeysLost}
                    />
                  </div>
                )}

                {showUnusedKeyField && (
                  <div className="mt-3">
                    <UnusedKeyField
                      isSubmitting={isSubmitting}
                      onChange={handleUnusedKeyChange}
                      value={hasUnusedKey}
                    />
                  </div>
                )}

                {showVehicleInfo && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <VehicleFields errors={errors} isSubmitting={isSubmitting} />
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <TimeframeSelection isSubmitting={isSubmitting} />
                </div>

                {selectedService === "Other" && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <OtherServiceField isSubmitting={isSubmitting} />
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <AdditionalNotes isSubmitting={isSubmitting} />
                </div>
              </div>
            </div>

            <div className="pt-2 w-full overflow-x-auto">
              <Recaptcha onChange={setRecaptchaToken} />
            </div>

            <SubmitButton isSubmitting={isSubmitting} />
            
            <div className="text-xs text-gray-500 text-center mt-3">
              By submitting this form, you agree to our <a href="/terms-conditions" className="text-secondary">Terms & Conditions</a> and <a href="/privacy-policy" className="text-secondary">Privacy Policy</a>.
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
