import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadMoreButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

const LoadMoreButton = ({ isLoading, onClick }: LoadMoreButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className="mt-8 mx-auto block"
      variant="outline"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        'Load More Reviews'
      )}
    </Button>
  );
};

export default LoadMoreButton;