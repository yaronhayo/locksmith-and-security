
import React, { lazy, Suspense } from 'react';
import LockoutIntro from '../shared/LockoutIntro';
import ServiceAreas from '../shared/ServiceAreas';
import LoadingSpinner from '@/components/LoadingSpinner';
import CaseStudies from '../shared/CaseStudies';

// Lazy-loaded components
const ExpertSolutions = lazy(() => import('./sections/ExpertSolutions'));
const LockoutScenarios = lazy(() => import('./sections/LockoutScenarios'));
const ProfessionalAdvantages = lazy(() => import('./sections/ProfessionalAdvantages'));
const LockoutSteps = lazy(() => import('./sections/LockoutSteps'));

// Loading fallback component
const SectionLoading = () => (
  <div className="py-8 flex justify-center">
    <LoadingSpinner size="lg" text="Loading section..." />
  </div>
);

// Sample case studies for storage unit lockout
const storageUnitCaseStudies = [
  {
    title: "After-Hours Storage Facility Access",
    description: "Helping a customer regain access to their storage unit outside of facility hours.",
    challenge: "A customer needed urgent access to documents in their storage unit at 9 PM, but the facility was closed. They had lost their unit key and needed immediate assistance.",
    solution: "Our emergency locksmith arrived quickly with specialized tools for storage unit locks. We verified the customer's identity and unit ownership before providing access.",
    result: "The customer retrieved their important documents without damaging the storage unit lock. We also provided a replacement key on the spot.",
    customerName: "Robert L.",
    customerLocation: "North Bergen",
    date: "2023-09-22"
  },
  {
    title: "Broken Key in Storage Unit Lock",
    description: "Extracting a broken key and restoring access to a customer's storage unit.",
    challenge: "A customer's key broke off inside their storage unit lock, leaving them unable to access their belongings. The storage facility couldn't provide immediate assistance.",
    solution: "Our technician used specialized key extraction tools to safely remove the broken key fragment without damaging the lock mechanism.",
    result: "We successfully extracted the broken key piece, repaired the lock, and provided new keys to the customer, all in under 45 minutes.",
    customerName: "Jennifer K.",
    customerLocation: "Secaucus",
    date: "2023-12-05"
  }
];

const StorageUnitLockoutContent = () => {
  return (
    <>
      <LockoutIntro serviceType="storage-unit" />
      
      <Suspense fallback={<SectionLoading />}>
        <ExpertSolutions />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <LockoutScenarios />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ProfessionalAdvantages />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <LockoutSteps />
      </Suspense>
      
      <CaseStudies 
        serviceType="Storage Unit Lockout" 
        caseStudies={storageUnitCaseStudies} 
      />
      
      <ServiceAreas serviceType="storage-unit" />
    </>
  );
};

export default StorageUnitLockoutContent;
