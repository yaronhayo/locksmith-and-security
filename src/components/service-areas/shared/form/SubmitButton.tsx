
import React from "react";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled: boolean;
}

const SubmitButton = ({ isSubmitting, isDisabled }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full py-2 sm:py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-md shadow-sm"
      disabled={isSubmitting || isDisabled}
    >
      {isSubmitting ? "Sending..." : (
        <span className="flex items-center gap-2">
          <SendIcon className="h-4 w-4" />
          Send Message
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
