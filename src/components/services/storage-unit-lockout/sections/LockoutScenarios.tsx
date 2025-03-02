
import React from 'react';
import LockoutScenario from '../../shared/LockoutScenario';

const scenarios = [
  {
    title: "Lost or Misplaced Keys",
    description: "If you've lost or misplaced your storage unit keys, our locksmith can quickly gain access and provide replacement keys."
  },
  {
    title: "Broken Key in Lock",
    description: "If your key has broken off inside the lock, we can carefully extract it and repair or replace the lock if necessary."
  },
  {
    title: "Lock Malfunction",
    description: "Storage unit locks can become jammed or malfunction over time. Our locksmiths can diagnose and fix the issue promptly."
  },
  {
    title: "Padlock Cutting",
    description: "If you've lost the key to your padlock, we can safely cut it off without damaging your storage unit door or frame."
  }
];

const LockoutScenarios = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Storage Unit Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless customers with various storage unit lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        {scenarios.map((scenario, index) => (
          <LockoutScenario 
            key={index}
            title={scenario.title}
            description={scenario.description}
          />
        ))}
      </div>
    </>
  );
};

export default LockoutScenarios;
