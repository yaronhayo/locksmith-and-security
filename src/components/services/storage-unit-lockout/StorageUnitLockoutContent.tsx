
import React from 'react';
import LockoutIntro from '../shared/LockoutIntro';
import ExpertSolutions from './sections/ExpertSolutions';
import LockoutScenarios from './sections/LockoutScenarios';
import ProfessionalAdvantages from './sections/ProfessionalAdvantages';
import LockoutSteps from './sections/LockoutSteps';
import ServiceAreas from '../shared/ServiceAreas';

const StorageUnitLockoutContent = () => {
  return (
    <>
      <LockoutIntro serviceType="storage-unit" />
      <ExpertSolutions />
      <LockoutScenarios />
      <ProfessionalAdvantages />
      <LockoutSteps />
      <ServiceAreas serviceType="storage-unit" />
    </>
  );
};

export default StorageUnitLockoutContent;
