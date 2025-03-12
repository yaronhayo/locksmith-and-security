
import React from 'react';
import { motion } from 'framer-motion';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onCenterMap: () => void;
  onFitBounds?: () => void;
}

const MapControls: React.FC<MapControlsProps> = ({ 
  onZoomIn, 
  onZoomOut, 
  onCenterMap, 
  onFitBounds 
}) => {
  return (
    <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
      <motion.button
        aria-label="Zoom in"
        className="bg-white p-1 rounded-md shadow-md hover:bg-gray-100 transition-colors"
        whileTap={{ scale: 0.95 }}
        onClick={onZoomIn}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </motion.button>
      
      <motion.button
        aria-label="Zoom out"
        className="bg-white p-1 rounded-md shadow-md hover:bg-gray-100 transition-colors"
        whileTap={{ scale: 0.95 }}
        onClick={onZoomOut}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </motion.button>
      
      <motion.button
        aria-label="Center map"
        className="bg-white p-1 rounded-md shadow-md hover:bg-gray-100 transition-colors"
        whileTap={{ scale: 0.95 }}
        onClick={onCenterMap}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </motion.button>

      {onFitBounds && (
        <motion.button
          aria-label="Fit all markers"
          className="bg-white p-1 rounded-md shadow-md hover:bg-gray-100 transition-colors"
          whileTap={{ scale: 0.95 }}
          onClick={onFitBounds}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"></path>
            <path d="M7 7h.01"></path>
            <path d="M17 7h.01"></path>
            <path d="M7 17h.01"></path>
            <path d="M17 17h.01"></path>
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default MapControls;
