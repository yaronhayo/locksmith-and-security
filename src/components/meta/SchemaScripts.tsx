
import { Helmet } from "react-helmet";
import React from "react";

interface Schema {
  type: string;
  data: object;
}

interface SchemaScriptsProps {
  schemas: Schema[];
}

export const SchemaScripts = ({ schemas }: SchemaScriptsProps) => {
  // Deduplicate schemas by type to prevent duplicate schema markup
  const uniqueSchemas = schemas.reduce((acc: Schema[], schema) => {
    const existingSchemaIndex = acc.findIndex(s => s.type === schema.type);
    if (existingSchemaIndex === -1) {
      acc.push(schema);
    }
    return acc;
  }, []);

  return (
    <Helmet>
      {uniqueSchemas.map((schema, index) => (
        <script key={`${schema.type}-${index}`} type="application/ld+json">
          {JSON.stringify(schema.data)}
        </script>
      ))}
    </Helmet>
  );
};
