
import React from "react";
import { Button } from "@/components/ui/button";
import { SendIcon, Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled: boolean;
}

const SubmitButton = ({ isSubmitting, isDisabled }: SubmitButtonProps) => {
  return (
    <div className="space-y-3">
      <Button 
        type="submit" 
        className="w-full py-2 sm:py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-md shadow-sm"
        disabled={isSubmitting || isDisabled}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <SendIcon className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
      
      <div className="text-xs text-center text-gray-500 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
        Your information is secure and will never be shared
      </div>
    </div>
  );
};

export default SubmitButton;
