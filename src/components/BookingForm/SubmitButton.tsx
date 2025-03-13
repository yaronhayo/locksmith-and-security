
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  text?: string;
  loadingText?: string;
}

const SubmitButton = ({ 
  isSubmitting, 
  text = "Request Service",
  loadingText = "Processing..."
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      className="w-full py-2.5 mt-4 bg-primary hover:bg-primary-hover text-white font-medium"
      disabled={isSubmitting}
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
