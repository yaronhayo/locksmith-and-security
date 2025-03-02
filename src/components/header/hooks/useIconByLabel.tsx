
import React from "react";
import { Home, Settings, MapPin, Info, Star, MessageSquare, HelpCircle, ChevronRight } from 'lucide-react';

/**
 * Hook to get the appropriate icon for a navigation label
 * Centralizes icon management for navigation items
 */
export const useIconByLabel = () => {
  return React.useCallback((label: string) => {
    switch (label) {
      case "Home":
        return <Home className="w-5 h-5" />;
      case "Services":
        return <Settings className="w-5 h-5" />;
      case "Service Areas":
        return <MapPin className="w-5 h-5" />;
      case "About":
        return <Info className="w-5 h-5" />;
      case "Reviews":
        return <Star className="w-5 h-5" />;
      case "Contact":
        return <MessageSquare className="w-5 h-5" />;
      case "FAQ":
        return <HelpCircle className="w-5 h-5" />;
      default:
        return <ChevronRight className="w-5 h-5" />;
    }
  }, []);
};
