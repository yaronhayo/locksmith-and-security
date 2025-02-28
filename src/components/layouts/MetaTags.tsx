
import BasicMetaTags from "@/components/meta/BasicMetaTags";
import OpenGraphTags from "@/components/meta/OpenGraphTags";
import TwitterTags from "@/components/meta/TwitterTags";
import SchemaScripts from "@/components/meta/SchemaScripts";
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
        description={description}
        keywords={keywords}
        robotsContent={robotsContent}
      />
      
      <OpenGraphTags 
        title={title}
        description={description}
        ogImage={ogImage}
        canonicalUrl={canonicalUrl}
      />
      
      <TwitterTags 
        title={title}
        description={description}
        twitterImage={ogImage}
      />
      
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}
      
      {schema && (
        <SchemaScripts schema={schema} />
      )}
    </Helmet>
  );
};

export default MetaTags;
