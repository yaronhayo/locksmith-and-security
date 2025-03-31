
import React from 'react';
import { SchemaData } from '@/types/schema';

interface SchemaScriptsProps {
  schemas: SchemaData[];
}

export const SchemaScripts: React.FC<SchemaScriptsProps> = ({ schemas }) => {
  return (
    <>
      {schemas.map((schema, index) => (
        <script 
          key={`schema-${schema.type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schema.data)
          }}
        />
      ))}
    </>
  );
};
