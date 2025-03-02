
import { Helmet } from "react-helmet";

interface Schema {
  type: string;
  data: object;
}

interface SchemaScriptsProps {
  schemas: Schema[];
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
