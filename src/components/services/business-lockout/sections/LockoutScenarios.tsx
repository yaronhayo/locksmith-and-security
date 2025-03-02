
import React from 'react';
import LockoutScenario from '../../shared/LockoutScenario';

const scenarios = [
  {
    title: "Lost or Stolen Keys",
    description: "If your business keys have been lost or stolen, we'll quickly unlock your door and provide key replacement services if needed."
  },
  {
    title: "Broken Key in Lock",
    description: "If your key has broken off in the door lock, we can extract it without damaging the lock mechanism."
  },
  {
    title: "Malfunctioning Locks",
    description: "If your commercial lock is malfunctioning and preventing you from entering your business, we can diagnose and repair the issue."
  },
  {
    title: "Electronic Access Control Issues",
    description: "If you're experiencing issues with your electronic access control system, we can bypass the system to regain entry and troubleshoot the problem."
  }
];

const LockoutScenarios = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Business Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless businesses with various lockout situations, including:
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
