
import React from 'react';

const LockoutSteps = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When Locked Out of Your Storage Unit</h3>
      <p className="mb-4">
        If you find yourself locked out of your storage unit, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>Verify that you have the correct unit number and that your account is in good standing with the storage facility</li>
        <li>Contact our 24/7 emergency locksmith service</li>
        <li>Provide your exact location and storage unit details</li>
        <li>Have identification and your storage unit rental agreement ready to prove ownership</li>
      </ol>
      
      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary my-8">
        <h4 className="text-xl font-bold mb-2">Professional Tip</h4>
        <p>
          Consider purchasing a high-quality padlock for your storage unit to deter theft and ensure the security of your belongings. Our locksmiths can recommend and install a variety of secure padlocks.
        </p>
      </div>
    </>
  );
};

export default LockoutSteps;
