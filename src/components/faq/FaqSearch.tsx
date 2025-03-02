
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface FaqSearchProps {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FaqSearch = ({ searchQuery, handleSearch }: FaqSearchProps) => {
  return (
    <div className="container mx-auto px-4 -mt-12 mb-10">
      <div className="relative max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-2 flex items-center border-l-4 border-[#F97316]"
        >
          <Search className="ml-3 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for questions or keywords..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-2 py-6 text-lg border-none focus:ring-[#F97316] focus:ring-offset-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FaqSearch;
