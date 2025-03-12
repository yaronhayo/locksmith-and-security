
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled: boolean;
}

const SubmitButton = ({ isSubmitting, isDisabled }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      className="w-full py-2.5"
      disabled={isDisabled || isSubmitting}
      size="lg"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
};

export default SubmitButton;
