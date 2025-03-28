
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  text?: string;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
}

const SubmitButton = ({ 
  isSubmitting, 
  text = "Request Service",
  loadingText = "Processing...",
  className = "",
  disabled = false
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      className={`w-full py-2.5 mt-4 bg-primary hover:bg-primary-hover text-white font-medium ${className}`}
      disabled={isSubmitting || disabled}
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
