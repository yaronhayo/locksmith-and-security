
import React from 'react';

const CommonScenarios = () => {
  return (
    <section className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Common Scenarios for Car Key Replacement</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-bold mb-2">Lost Keys</h4>
          <p>When you've lost all keys to your vehicle and need a complete replacement solution, including new keys and reprogramming the vehicle if necessary.</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-bold mb-2">Broken Keys</h4>
          <p>Keys can break in locks or ignitions, or remote buttons may stop working. We can extract broken keys and provide replacements.</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-bold mb-2">Spare Keys</h4>
          <p>Having a spare key is important for emergencies. We can create duplicates of your existing key at a fraction of dealership costs.</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-bold mb-2">Worn Keys</h4>
          <p>Keys naturally wear down over time, potentially causing intermittent issues with starting your vehicle or operating locks.</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-bold mb-2">Upgraded Security</h4>
          <p>Some vehicle owners choose to upgrade from basic keys to programmable remotes for added convenience and security.</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-bold mb-2">Damaged Fobs</h4>
          <p>Remote key fobs can be damaged by water, impact, or battery leakage, requiring replacement of the electronic components.</p>
        </div>
      </div>
    </section>
  );
};

export default CommonScenarios;
