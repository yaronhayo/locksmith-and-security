
import { Helmet } from "react-helmet";

interface SchemaScriptsProps {
  schemas: Array<{
    type: string;
    data: object;
  }>;
}

export const SchemaScripts = ({ schemas }: SchemaScriptsProps) => (
  <Helmet>
    {schemas.map((schema, index) => (
      <script key={`${schema.type}-${index}`} type="application/ld+json">
        {JSON.stringify(schema.data)}
      </script>
    ))}
  </Helmet>
);
