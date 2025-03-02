
import React from "react";
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  lastUpdated?: Date;
  children: React.ReactNode;
}

const LegalPageLayout = ({ 
  title, 
  description, 
  lastUpdated = new Date(), 
  children 
}: LegalPageLayoutProps) => {
  return (
    <PageLayout
      title={title}
      description={description}
    >
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 sm:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title.split('|')[0].trim()}</h1>
                <p className="text-sm text-gray-500 mb-8">
                  Last updated: {lastUpdated.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                
                <div className="prose prose-slate prose-lg max-w-none">
                  {children}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LegalPageLayout;
