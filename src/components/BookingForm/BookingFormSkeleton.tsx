
import React from "react";
import FormLoadingSkeleton from "./FormLoadingSkeleton";

interface BookingFormSkeletonProps {
  message?: string;
}

const BookingFormSkeleton = ({ message = "Loading form..." }: BookingFormSkeletonProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600">{message}</p>
      </div>
      <FormLoadingSkeleton />
    </div>
  );
};

export default BookingFormSkeleton;
