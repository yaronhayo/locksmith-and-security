import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { ButtonLoadingState } from "./LoadingStates";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full text-lg font-semibold h-10"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <ButtonLoadingState />
      ) : (
        <>
          <Lock className="w-5 h-5 mr-2" />
          Request Service
        </>
      )}
    </Button>
  );
};

export default SubmitButton;