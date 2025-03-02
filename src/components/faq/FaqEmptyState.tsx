
import React from "react";
import { Button } from "@/components/ui/button";

interface FaqEmptyStateProps {
  searchQuery: string;
  clearSearch: () => void;
}

const FaqEmptyState = ({ searchQuery, clearSearch }: FaqEmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg mb-4">No results found for "{searchQuery}"</p>
      <Button 
        variant="outline" 
        onClick={clearSearch}
        className="border-[#F97316] text-[#F97316] hover:bg-[#FEC6A1]/10"
      >
        Clear search
      </Button>
    </div>
  );
};

export default FaqEmptyState;
