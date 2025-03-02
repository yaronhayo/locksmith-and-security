
import React from 'react';
import StorageUnitLockoutIntro from './sections/StorageUnitLockoutIntro';
import ExpertSolutions from './sections/ExpertSolutions';
import LockoutScenarios from './sections/LockoutScenarios';
import ProfessionalAdvantages from './sections/ProfessionalAdvantages';
import LockoutSteps from './sections/LockoutSteps';
import ServiceAreas from './sections/ServiceAreas';

export const StorageUnitLockoutContent = () => {
  return (
    <>
      <StorageUnitLockoutIntro />
      <ExpertSolutions />
      <LockoutScenarios />
      <ProfessionalAdvantages />
      <LockoutSteps />
      <ServiceAreas />
    </>
  );
};

export default StorageUnitLockoutContent;
