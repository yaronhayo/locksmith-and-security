import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LoadMoreButtonProps {
  loading: boolean;
  hasMore: boolean;
  onClick: () => void;
}

const LoadMoreButton = ({ loading, hasMore, onClick }: LoadMoreButtonProps) => {
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
      onClick={onClick} 
      disabled={loading}
      className="group"
    >
      {loading ? 'Loading...' : 'Load More'}
      <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
};

export default LoadMoreButton;