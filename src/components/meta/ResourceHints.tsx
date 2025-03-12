
import { Helmet } from "react-helmet";

interface ResourceHintsProps {
  preconnect?: string[];
  preload?: Array<{
    href: string;
    as: "script" | "style" | "image" | "font" | "fetch";
    type?: string;
    crossOrigin?: "anonymous" | "use-credentials";
  }>;
  dnsPrefetch?: string[];
}

export const ResourceHints = ({
  preconnect = [],
  preload = [],
  dnsPrefetch = []
}: ResourceHintsProps) => {
  return (
    <Helmet>
      {/* Preconnect hints for third-party resources */}
      {preconnect.map((url) => (
        <link key={`preconnect-${url}`} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}

      {/* DNS prefetch for domains we'll need later */}
      {dnsPrefetch.map((url) => (
        <link key={`dns-prefetch-${url}`} rel="dns-prefetch" href={url} />
      ))}

      {/* Preload critical resources */}
      {preload.map(({ href, as, type, crossOrigin }) => (
        <link 
          key={`preload-${href}`} 
          rel="preload" 
          href={href} 
          as={as} 
          type={type} 
          crossOrigin={crossOrigin || "anonymous"} 
        />
      ))}
    </Helmet>
  );
};

export default ResourceHints;
