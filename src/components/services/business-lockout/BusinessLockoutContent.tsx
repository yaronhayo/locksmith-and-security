
import React from 'react';
import LockoutIntro from '../shared/LockoutIntro';
import ExpertSolutions from './sections/ExpertSolutions';
import LockoutScenarios from './sections/LockoutScenarios';
import ProfessionalAdvantages from './sections/ProfessionalAdvantages';
import LockoutSteps from './sections/LockoutSteps';
import ServiceAreas from '../shared/ServiceAreas';
import AdvancedTechniques from './sections/AdvancedTechniques';

const BusinessLockoutContent = () => {
  return (
    <>
      <LockoutIntro serviceType="business" />
      <ExpertSolutions />
      <LockoutScenarios />
      <ProfessionalAdvantages />
      <LockoutSteps />
      <AdvancedTechniques />
      <ServiceAreas serviceType="business" />
    </>
  );
};

export default BusinessLockoutContent;
