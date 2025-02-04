import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LoadMoreButtonProps {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

const LoadMoreButton = ({ loading, hasMore, onLoadMore }: LoadMoreButtonProps) => {
  if (!hasMore) {
    return (
      <Button asChild variant="default" className="group">
        <Link to="/faq" className="inline-flex items-center">
          See All FAQs 
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
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