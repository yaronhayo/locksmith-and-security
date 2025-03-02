
import React from 'react';

const LockoutScenarios = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 mt-8">Common Storage Unit Lockout Scenarios We Solve</h3>
      <p className="mb-4">
        Our experienced locksmiths have helped countless customers with various storage unit lockout situations, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Lost Keys</h4>
          <p className="text-gray-700">
            If you've lost the keys to your storage unit, we can help you regain access quickly and efficiently.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Forgotten Combination</h4>
          <p className="text-gray-700">
            If you've forgotten the combination to your storage unit lock, we can assist you in resetting or bypassing the lock.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Faulty Locks</h4>
          <p className="text-gray-700">
            If your storage unit lock is malfunctioning or damaged, we can repair or replace it to ensure the security of your belongings.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-bold mb-2">Eviction Lockouts</h4>
          <p className="text-gray-700">
            In the event of an eviction, we can provide lockout services to ensure that the storage unit is secured and the contents are protected.
          </p>
        </div>
      </div>
    </>
  );
};

export default LockoutScenarios;
