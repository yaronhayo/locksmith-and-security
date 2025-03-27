
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FormLoadingSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-16 w-full" />
      </div>
      
      <Skeleton className="h-10 w-full" />
      
      <Skeleton className="h-32 w-full" />
      
      <Skeleton className="h-12 w-full" />
    </div>
  );
};

export default FormLoadingSkeleton;
