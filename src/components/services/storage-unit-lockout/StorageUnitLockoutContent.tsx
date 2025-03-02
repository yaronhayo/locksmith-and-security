
import React, { lazy, Suspense } from 'react';
import LockoutIntro from '../shared/LockoutIntro';
import ServiceAreas from '../shared/ServiceAreas';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy-loaded components with better dynamic import naming
const ExpertSolutions = lazy(() => import(/* webpackChunkName: "storage-expert-solutions" */ './sections/ExpertSolutions'));
const LockoutScenarios = lazy(() => import(/* webpackChunkName: "storage-lockout-scenarios" */ './sections/LockoutScenarios'));
const ProfessionalAdvantages = lazy(() => import(/* webpackChunkName: "storage-professional-advantages" */ './sections/ProfessionalAdvantages'));
const LockoutSteps = lazy(() => import(/* webpackChunkName: "storage-lockout-steps" */ './sections/LockoutSteps'));

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
