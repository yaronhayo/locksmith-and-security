
import React from 'react';
import LockoutStep, { LockoutStepProps } from '../../shared/LockoutStep';

const LockoutSteps = () => {
  const steps: LockoutStepProps[] = [
    {
      title: "Call Our Emergency Line",
      description: "Contact our 24/7 hotline to speak with a professional locksmith. Explain your storage unit lockout situation and provide your location."
    },
    {
      title: "Verification Process",
      description: "We'll ask for proof of ownership or authorization to access the storage unit, which may include ID, a lease agreement, or contacting the facility management."
    },
    {
      title: "Professional Locksmith Arrival",
      description: "Our licensed locksmith will arrive promptly with specialized tools to open your storage unit lock without causing damage when possible."
    },
    {
      title: "Non-Destructive Entry",
      description: "Using advanced techniques, we'll open your storage unit with minimal or no damage to the lock or door, preserving your security."
    },
    {
      title: "Lock Repair or Replacement",
      description: "After gaining access, we can repair your existing lock or install a new one to ensure your belongings remain secure."
    }
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Our Storage Unit Lockout Process</h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <LockoutStep 
            key={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LockoutSteps;
