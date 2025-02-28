
import { BasicMetaTags } from "@/components/meta/BasicMetaTags";
import { OpenGraphTags } from "@/components/meta/OpenGraphTags";
import { TwitterTags } from "@/components/meta/TwitterTags";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  schema?: object;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const MetaTags = ({
  title,
  description,
  schema,
  canonicalUrl,
  ogImage,
  keywords,
  noindex = false,
  nofollow = false,
}: MetaTagsProps) => {
  // Determine robots meta directive
  const robotsContent = [
    ...(noindex ? ["noindex"] : ["index"]),
    ...(nofollow ? ["nofollow"] : ["follow"]),
  ].join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      
      <BasicMetaTags 
        title={title}
        description={description}
        keywords={keywords}
        noindex={noindex}
        nofollow={nofollow}
        canonicalUrl={canonicalUrl || ""}
        modifiedDate={new Date().toISOString()}
      />
      
      <OpenGraphTags 
        title={title}
        description={description}
        image={ogImage}
        url={canonicalUrl}
        modifiedDate={new Date().toISOString()}
        baseUrl=""
      />
      
      <TwitterTags 
        title={title}
        description={description}
        image={ogImage}
        baseUrl=""
      />
      
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}
      
      {schema && (
        <SchemaScripts schemas={[{ type: "schema", data: schema }]} />
      )}
    </Helmet>
  );
};

export default MetaTags;
