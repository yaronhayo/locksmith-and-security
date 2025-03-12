
import { Helmet } from "react-helmet";
import React, { useMemo, memo } from "react";

interface Schema {
  type: string;
  data: object;
}

interface SchemaScriptsProps {
  schemas: Schema[];
}

export const SchemaScripts = memo(({ schemas }: SchemaScriptsProps) => {
  // Deduplicate schemas by type and data hash to prevent duplicate schema markup
  const uniqueSchemas = useMemo(() => {
    const seen = new Map<string, boolean>();
    
    return schemas.filter(schema => {
      // Create a unique key for this schema using type and serialized data
      const dataStr = JSON.stringify(schema.data);
      const key = `${schema.type}-${dataStr}`;
      
      if (seen.has(key)) {
        return false;
      }
      
      seen.set(key, true);
      return true;
    });
  }, [schemas]);

  return (
    <Helmet>
      {uniqueSchemas.map((schema, index) => (
        <script key={`${schema.type}-${index}`} type="application/ld+json">
          {JSON.stringify(schema.data)}
        </script>
      ))}
    </Helmet>
  );
});

SchemaScripts.displayName = 'SchemaScripts';

export default SchemaScripts;
