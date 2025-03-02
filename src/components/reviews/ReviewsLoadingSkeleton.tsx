
import { Skeleton } from "@/components/ui/skeleton";
import { memo } from "react";

interface ReviewsLoadingSkeletonProps {
  count?: number;
}

const ReviewsLoadingSkeleton = ({ count = 6 }: ReviewsLoadingSkeletonProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="space-y-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-8 w-2/3 mx-auto mb-2" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {Array(count).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-24" />
              <div className="flex items-center pt-2">
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewsLoadingSkeleton);
