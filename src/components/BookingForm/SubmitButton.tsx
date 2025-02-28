
import { Button } from "@/components/ui/button";
import { Lock, Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <>
      <Button
        type="submit"
        size="lg"
        className="w-full text-lg font-semibold h-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Lock className="w-5 h-5 mr-2" />
            Request Service
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Professional Service • Licensed & Insured • 24/7 Available
      </p>
    </>
  );
};

export default SubmitButton;
