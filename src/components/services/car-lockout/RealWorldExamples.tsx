const RealWorldExamples = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Common Car Lockout Scenarios</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Keys Locked Inside</h3>
          <p className="text-gray-600">
            Left your keys in the ignition or on the seat? Our locksmiths use specialized tools 
            to safely unlock your car without causing any damage to the vehicle.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Broken Key in Lock</h3>
          <p className="text-gray-600">
            Key broke off in the door or ignition? We can extract the broken piece and 
            create a new key on the spot to get you back on the road.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Lost Car Keys</h3>
          <p className="text-gray-600">
            Lost your only set of car keys? We can create and program new keys for 
            most vehicle makes and models, including transponder keys.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Smart Key Malfunction</h3>
          <p className="text-gray-600">
            Smart key not working? We can diagnose and resolve electronic key issues, 
            including reprogramming and battery replacement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealWorldExamples;