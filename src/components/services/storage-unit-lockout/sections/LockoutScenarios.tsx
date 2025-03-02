
import React, { Suspense, lazy } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load the LockoutScenario component
const LockoutScenario = lazy(() => import('../../shared/LockoutScenario'));

// Loading placeholder for lazy-loaded LockoutScenario
const ScenarioSkeleton = () => (
  <div className="border rounded-lg p-4 space-y-3">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-24" />
  </div>
);

const LockoutScenarios = () => {
  const scenarios = [
    {
      title: "Forgotten Lock Combination",
      description: "You remember setting a combination for your storage unit lock, but now you can't recall the correct sequence of numbers. Our locksmith can help you gain access without damaging the lock."
    },
    {
      title: "Lost Storage Unit Key",
      description: "If you've lost your storage unit key, our locksmiths can create a new key or replace the lock entirely, depending on your preference and the storage facility's policies."
    },
    {
      title: "Broken Key in Lock",
      description: "If your key breaks off inside the lock, our skilled technicians can extract the broken piece and either repair the lock or replace it if necessary."
    },
    {
      title: "Damaged or Malfunctioning Lock",
      description: "Weather exposure or wear and tear can cause storage unit locks to malfunction. We can repair or replace damaged locks to restore secure access to your unit."
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-4">Common Storage Unit Lockout Scenarios</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {scenarios.map((scenario, index) => (
          <Suspense key={index} fallback={<ScenarioSkeleton />}>
            <LockoutScenario 
              title={scenario.title}
              description={scenario.description}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default LockoutScenarios;
