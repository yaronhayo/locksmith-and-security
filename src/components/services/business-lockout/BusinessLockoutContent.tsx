
import React from 'react';
import BusinessLockoutIntro from './sections/BusinessLockoutIntro';
import ExpertSolutions from './sections/ExpertSolutions';
import AdvancedTechniques from './sections/AdvancedTechniques';
import LockoutScenarios from './sections/LockoutScenarios';
import ProfessionalAdvantages from './sections/ProfessionalAdvantages';
import LockoutSteps from './sections/LockoutSteps';
import ServiceAreas from './sections/ServiceAreas';

export const BusinessLockoutContent = () => {
  return (
    <>
      <BusinessLockoutIntro />
      <ExpertSolutions />
      <AdvancedTechniques />
      <LockoutScenarios />
      <ProfessionalAdvantages />
      <LockoutSteps />
      <ServiceAreas />
    </>
  );
};

export default BusinessLockoutContent;
