
import React from 'react';
import Introduction from './sections/Introduction';
import SolutionsGrid from './sections/SolutionsGrid';
import Benefits from './sections/Benefits';
import InstallationProcess from './sections/InstallationProcess';
import CallToAction from './sections/CallToAction';

const AccessControlContent = () => {
  return (
    <div className="space-y-8">
      <Introduction />
      <SolutionsGrid />
      <Benefits />
      <InstallationProcess />
      <CallToAction />
    </div>
  );
};

export default AccessControlContent;
