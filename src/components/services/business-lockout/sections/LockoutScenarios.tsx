
import React from 'react';

const LockoutScenarios = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Business Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless businesses with various lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost or Stolen Keys</h4>
          <p className="text-gray-700">
            If your business keys have been lost or stolen, we'll quickly unlock your door and provide key replacement services if needed.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Broken Key in Lock</h4>
          <p className="text-gray-700">
            If your key has broken off in the door lock, we can extract it without damaging the lock mechanism.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Malfunctioning Locks</h4>
          <p className="text-gray-700">
            If your commercial lock is malfunctioning and preventing you from entering your business, we can diagnose and repair the issue.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Electronic Access Control Issues</h4>
          <p className="text-gray-700">
            If you're experiencing issues with your electronic access control system, we can bypass the system to regain entry and troubleshoot the problem.
          </p>
        </div>
      </div>
    </>
  );
};

export default LockoutScenarios;
