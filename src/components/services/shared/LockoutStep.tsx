
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { memo } from 'react';
import { trackComponentRender } from '@/utils/performanceMonitoring';
import { motion } from 'framer-motion';

export interface LockoutStepProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const LockoutStep = ({ 
  title, 
  description, 
  icon = <CheckCircle className="h-5 w-5" />,
  className,
  delay = 0
}: LockoutStepProps) => {
  const finishRenderTracking = trackComponentRender('LockoutStep');
  
  useEffect(() => {
    finishRenderTracking();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex ${className || ''}`}
    >
      <div className="mr-4 mt-1">
        <div className="flex items-center justify-center bg-primary/10 rounded-full p-2 text-primary">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(LockoutStep);
