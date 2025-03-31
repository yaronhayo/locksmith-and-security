
import React from 'react';
import { Helmet } from 'react-helmet';

interface LanguageLink {
  locale: string;
  url: string;
}

interface AlternateLanguageLinksProps {
  links: LanguageLink[];
  baseUrl?: string;
  defaultLanguage?: string;
}

const AlternateLanguageLinks: React.FC<AlternateLanguageLinksProps> = ({
  links,
  baseUrl = "https://247locksmithandsecurity.com",
  defaultLanguage = "en-US"
}) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <Helmet>
      {/* Default language */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={links.find(link => link.locale === defaultLanguage)?.url || links[0].url} 
      />
      
      {/* Language alternatives */}
      {links.map((link) => (
        <link 
          key={link.locale} 
          rel="alternate" 
          hrefLang={link.locale} 
          href={link.url.startsWith('http') ? link.url : `${baseUrl}${link.url.startsWith('/') ? link.url : `/${link.url}`}`}
        />
      ))}
    </Helmet>
  );
};

export default AlternateLanguageLinks;
