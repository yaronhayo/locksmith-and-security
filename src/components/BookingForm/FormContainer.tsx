
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import FormSubmitHandler from './FormSubmitHandler';

interface FormContainerProps {
  children: React.ReactNode;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  recaptchaToken: string | null;
  address: string;
  showVehicleInfo: boolean;
  allKeysLost: boolean;
  hasUnusedKey: boolean;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  isSubmitting,
  setIsSubmitting,
  errors,
  setErrors,
  recaptchaToken,
  address,
  showVehicleInfo,
  allKeysLost,
  hasUnusedKey,
  showAllKeysLostField,
  showUnusedKeyField
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your request has been submitted. We'll contact you shortly.</p>
      </div>
    );
  }
  
  return (
    <FormSubmitHandler
      isSubmitting={isSubmitting}
      setIsSubmitting={setIsSubmitting}
      errors={errors}
      setErrors={setErrors}
      recaptchaToken={recaptchaToken}
      address={address}
      showVehicleInfo={showVehicleInfo}
      allKeysLost={allKeysLost}
      hasUnusedKey={hasUnusedKey}
      showAllKeysLostField={showAllKeysLostField}
      showUnusedKeyField={showUnusedKeyField}
    >
      {children}
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary-dark text-white"
          disabled={isSubmitting || Object.keys(errors).length > 0}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Book Now'
          )}
        </Button>
      </div>
    </FormSubmitHandler>
  );
};

export default FormContainer;
