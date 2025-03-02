
import React, { lazy, Suspense } from 'react';
import LockoutIntro from '../shared/LockoutIntro';
import ServiceAreas from '../shared/ServiceAreas';
import LoadingSpinner from '@/components/LoadingSpinner';

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
      
      <ServiceAreas serviceType="storage-unit" />
    </>
  );
};

export default StorageUnitLockoutContent;
