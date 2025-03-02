
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accessibility } from "lucide-react";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50">
      <motion.button
        className="flex items-center justify-center w-12 h-12 text-white rounded-lg shadow-lg bg-primary/75"
        onClick={toggleWidget}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Accessibility options"
        title="Accessibility options"
      >
        <Accessibility className="h-6 w-6" strokeWidth={2} />
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute top-0 right-16 bg-white shadow-lg rounded-lg p-4 w-64"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Accessibility Options</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="increase-text" className="text-sm text-gray-700">
                Larger Text
              </label>
              <button
                id="increase-text"
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                onClick={() => {
                  document.documentElement.style.fontSize = "larger";
                }}
              >
                A+
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="reset-text" className="text-sm text-gray-700">
                Reset Text Size
              </label>
              <button
                id="reset-text"
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                onClick={() => {
                  document.documentElement.style.fontSize = "";
                }}
              >
                Reset
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm text-gray-700">
                High Contrast
              </label>
              <button
                id="high-contrast"
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                onClick={() => {
                  document.body.classList.toggle("high-contrast");
                }}
              >
                Toggle
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
