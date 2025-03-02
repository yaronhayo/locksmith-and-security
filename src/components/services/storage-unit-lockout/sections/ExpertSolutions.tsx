
import React from 'react';
import { ShieldCheck, Key, Wrench, Clock } from 'lucide-react';
import ExpertSolution, { ExpertSolutionProps } from '../../shared/ExpertSolution';

const ExpertSolutions = () => {
  const solutions: ExpertSolutionProps[] = [
    {
      icon: <Key className="h-8 w-8 text-primary" />,
      title: "Lock Picking",
      description: "Our skilled locksmiths use specialized tools to manipulate the lock pins, allowing us to open many types of storage unit locks without damage."
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Lock Drilling",
      description: "For high-security locks that can't be picked, we can perform precision drilling that targets only the lock's critical components, minimizing damage."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Broken Key Extraction",
      description: "If your key has broken off in the lock, we have specialized tools to remove the broken piece without damaging the lock mechanism."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Lock Replacement",
      description: "When necessary, we can completely replace your storage unit lock with a new, secure option that meets the facility's requirements."
    }
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Expert Storage Unit Lockout Solutions</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <ExpertSolution 
            key={index}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertSolutions;
