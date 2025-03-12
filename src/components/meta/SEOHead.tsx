
import React from 'react';
import MetaTags from '@/components/layouts/MetaTags';

// Re-export MetaTags with the same interface for backward compatibility
const SEOHead = (props: React.ComponentProps<typeof MetaTags>) => {
  return <MetaTags {...props} />;
};

export default SEOHead;
