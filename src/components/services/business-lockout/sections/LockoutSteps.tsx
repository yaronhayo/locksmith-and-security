
import React from 'react';

const LockoutSteps = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your Business</h3>
      <p className="mb-4">
        If you find yourself locked out of your business, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Ensure you're in a safe location and assess the surroundings</li>
        <li>Check all doors and windows to make sure they're actually locked</li>
        <li>Call our 24/7 emergency locksmith service</li>
        <li>Provide your exact location and business details</li>
        <li>Have identification and business documentation ready to prove authorization</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Professional Tip</h4>
        <p>
          Consider implementing a master key system for your business. This allows you to control access to different areas of your commercial property while minimizing the number of keys needed.
        </p>
      </div>
    </>
  );
};

export default LockoutSteps;
