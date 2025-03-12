
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled: boolean;
  text?: string;
  loadingText?: string;
}

const SubmitButton = ({ 
  isSubmitting, 
  isDisabled, 
  text = "Send Message",
  loadingText = "Sending..."
}: SubmitButtonProps) => {
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
          {loadingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
