import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LoadMoreButtonProps {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

const LoadMoreButton = ({ loading, hasMore, onLoadMore }: LoadMoreButtonProps) => {
  if (!hasMore) {
    return (
      <Button asChild variant="default">
        <a href="/faq" className="flex items-center">
          See All FAQs <ArrowRight className="ml-2" />
        </a>
      </Button>
    );
  }

  return (
    <Button 
      variant="outline" 
      onClick={onLoadMore}
      disabled={loading}
    >
      {loading ? "Loading..." : "Show More"}
    </Button>
  );
};

export default LoadMoreButton;