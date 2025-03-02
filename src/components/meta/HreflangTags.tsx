
import { Helmet } from "react-helmet";

interface HreflangTagsProps {
  alternateLanguages?: {
    lang: string;
    href: string;
  }[];
  defaultHref: string;
  defaultLang?: string;
}

export const HreflangTags = ({ 
  alternateLanguages = [], 
  defaultHref, 
  defaultLang = "en-US" 
}: HreflangTagsProps) => {
  return (
    <Helmet>
      <link rel="alternate" hreflang={defaultLang} href={defaultHref} />
      <link rel="alternate" hreflang="x-default" href={defaultHref} />
      
      {alternateLanguages.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hreflang={lang} href={href} />
      ))}
    </Helmet>
  );
};
