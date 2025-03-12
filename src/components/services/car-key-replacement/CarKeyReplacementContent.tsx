
import React from 'react';
import Introduction from './sections/Introduction';
import KeyTypes from './sections/KeyTypes';
import ReplacementProcess from './sections/ReplacementProcess';
import CommonScenarios from './sections/CommonScenarios';
import ManufacturersList from './sections/ManufacturersList';

export const CarKeyReplacementContent = () => {
  return (
    <div className="space-y-8">
      <Introduction />
      <KeyTypes />
      <ReplacementProcess />
      <CommonScenarios />
      <ManufacturersList />
    </div>
  );
};

export default CarKeyReplacementContent;
