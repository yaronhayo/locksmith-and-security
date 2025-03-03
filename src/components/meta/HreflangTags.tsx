
import { Helmet } from "react-helmet";

interface HreflangTagsProps {
  baseUrl: string;
  languages?: Array<{
    lang: string;
    path?: string;
  }>;
  defaultLang?: string;
}

export const HreflangTags = ({
  baseUrl,
  languages = [{ lang: "en-US", path: "" }],
  defaultLang = "en-US"
}: HreflangTagsProps) => {
  // Ensure baseUrl doesn't end with a slash
  const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  return (
    <Helmet>
      {/* Default language version */}
      <link rel="alternate" hrefLang="x-default" href={cleanBaseUrl} />
      
      {/* Language-specific versions */}
      {languages.map(({ lang, path = "" }) => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={`${cleanBaseUrl}${path ? `/${path}` : ''}`} 
        />
      ))}
    </Helmet>
  );
};
