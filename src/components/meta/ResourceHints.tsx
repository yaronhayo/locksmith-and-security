
import { Helmet } from "react-helmet";
import { memo } from "react";

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

export const ResourceHints = memo(({
  preconnect = [],
  preload = [],
  dnsPrefetch = []
}: ResourceHintsProps) => {
  // Remove duplicates
  const uniquePreconnect = Array.from(new Set([
    ...preconnect,
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://maps.googleapis.com',
    'https://www.google.com'
  ]));
  
  const uniqueDnsPrefetch = Array.from(new Set([
    ...dnsPrefetch,
    'https://fonts.googleapis.com',
    'https://maps.googleapis.com',
  ]));
  
  // Filter out preload items with same URLs
  const defaultPreload = [
    {
      href: '/fonts/inter-var-latin.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    }
  ] as const;
  
  const allPreload = [...preload, ...defaultPreload];
  
  const uniquePreload = allPreload.filter((item, index, self) => 
    index === self.findIndex((t) => t.href === item.href && t.as === item.as)
  );

  return (
    <Helmet>
      {/* Preconnect hints for third-party resources */}
      {uniquePreconnect.map((url) => (
        <link key={`preconnect-${url}`} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}

      {/* DNS prefetch for domains we'll need later */}
      {uniqueDnsPrefetch.map((url) => (
        <link key={`dns-prefetch-${url}`} rel="dns-prefetch" href={url} />
      ))}

      {/* Preload critical resources */}
      {uniquePreload.map(({ href, as, type, crossOrigin }) => (
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
});

ResourceHints.displayName = 'ResourceHints';

export default ResourceHints;
