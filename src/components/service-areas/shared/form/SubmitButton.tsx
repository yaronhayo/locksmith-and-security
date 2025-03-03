
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled: boolean;
}

const SubmitButton = ({ isSubmitting, isDisabled }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit"
      className="w-full bg-primary hover:bg-primary-dark text-white"
      disabled={isDisabled || isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Submit Request'
      )}
    </Button>
  );
};

export default SubmitButton;
