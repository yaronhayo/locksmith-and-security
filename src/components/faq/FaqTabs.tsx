
import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Settings, Car, Building, AlertCircle, HelpCircle } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface FaqTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const FaqTabs = ({ activeTab, setActiveTab }: FaqTabsProps) => {
  const tabItems: TabItem[] = [
    { id: "all", label: "All FAQs", icon: <Home className="h-4 w-4" /> },
    { id: "general", label: "General", icon: <Settings className="h-4 w-4" /> },
    { id: "residential", label: "Residential", icon: <Home className="h-4 w-4" /> },
    { id: "automotive", label: "Automotive", icon: <Car className="h-4 w-4" /> },
    { id: "commercial", label: "Commercial", icon: <Building className="h-4 w-4" /> },
    { id: "emergency", label: "Emergency", icon: <AlertCircle className="h-4 w-4" /> },
  ];

  return (
    <div className="flex justify-center mb-8 overflow-x-auto">
      <TabsList className="bg-gray-100 p-1 rounded-full">
        {tabItems.map((tab) => (
          <TabsTrigger 
            key={tab.id} 
            value={tab.id}
            className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#F97316]"
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center gap-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default FaqTabs;
