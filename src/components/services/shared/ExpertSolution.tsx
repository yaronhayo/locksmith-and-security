
import React, { ReactNode, useEffect } from 'react';
import { memo } from 'react';
import { trackComponentRender } from '@/utils/performanceMonitoring';
import { motion } from 'framer-motion';

export interface ExpertSolutionProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const ExpertSolution = ({
  icon,
  title,
  description,
  className,
  delay = 0
}: ExpertSolutionProps) => {
  const finishRenderTracking = trackComponentRender('ExpertSolution');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 
        transition-all duration-200 hover:shadow-md hover:border-gray-200 ${className || ''}`}
    >
      <div className="flex items-center mb-3">
        <div className="text-primary">
          {icon}
        </div>
        <h4 className="font-bold text-lg ml-3">{title}</h4>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(ExpertSolution);
