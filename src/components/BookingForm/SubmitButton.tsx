
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-5 text-base font-medium bg-secondary hover:bg-secondary/90 shadow-md transition-all duration-300 hover:shadow-lg"
    >
      {isSubmitting ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Submitting...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          <span>Submit Booking Request</span>
          <ArrowRight className="h-5 w-5 ml-1" />
        </div>
      )}
    </Button>
  );
};

export default SubmitButton;
